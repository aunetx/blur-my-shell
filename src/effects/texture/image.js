import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import GObject from 'gi://GObject';

import * as utils from '../../conveniences/utils.js';
import * as uniforms from '../../render/shader/uniforms.js';

const Shell = await utils.import_in_shell_only('gi://Shell');
const Cogl = await utils.import_in_shell_only('gi://Cogl');
const GdkPixbuf = await utils.import_in_shell_only('gi://GdkPixbuf');
const Main = utils.IS_IN_PREFERENCES
    ? null
    : await import('resource:///org/gnome/shell/ui/main.js');
const MAX_IMAGE_TEXTURE_SIZE = 512;
const IMAGE_UPLOAD_ROWS = 32;

if (!utils.IS_IN_PREFERENCES) {
    Gio._promisify(Gio.File.prototype, 'read_async', 'read_finish');
    Gio._promisify(Gio.InputStream.prototype, 'close_async', 'close_finish');
    Gio._promisify(GdkPixbuf.Pixbuf, 'get_file_info_async', 'get_file_info_finish');
    Gio._promisify(
        GdkPixbuf.Pixbuf,
        'new_from_stream_at_scale_async',
        'new_from_stream_finish'
    );
}

const SHADER_FILENAME = 'image.glsl';
const SHADER_SOURCE = utils.get_shader_source(Shell, SHADER_FILENAME, import.meta.url);
const DEFAULT_PARAMS = {
    image_path: '',
    blend: 1,
    blend_mode: 0,
    image_mode: 0,
    opacity_factor: 1,
};

const IMAGE_EFFECT_META = {
    GTypeName: 'ImageEffect',
    Properties: {
        'image_path': GObject.ParamSpec.string(
            'image_path',
            'Image path',
            'Path to the image file',
            GObject.ParamFlags.READWRITE,
            ''
        ),
        'blend': GObject.ParamSpec.double(
            'blend',
            'Blend',
            'Amount of blending with the image',
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            1.0
        ),
        'blend_mode': GObject.ParamSpec.int(
            'blend_mode',
            'Blend mode',
            'How the image is blended',
            GObject.ParamFlags.READWRITE,
            0, 17,
            0
        ),
        'image_mode': GObject.ParamSpec.int(
            'image_mode',
            'Image mode',
            'How the image is mapped to the monitor',
            GObject.ParamFlags.READWRITE,
            0, 2,
            0
        ),
        'opacity_factor': GObject.ParamSpec.double(
            'opacity_factor',
            'Opacity factor',
            'Opacity factor',
            GObject.ParamFlags.READWRITE,
            0.0, 1.0,
            1.0
        ),
    },
};

async function load_image(path) {
    const info = await GdkPixbuf.Pixbuf.get_file_info_async(path, null);
    const imageWidth = info[1];
    const imageHeight = info[2];
    const scale = Math.min(
        1,
        MAX_IMAGE_TEXTURE_SIZE / imageWidth,
        MAX_IMAGE_TEXTURE_SIZE / imageHeight
    );
    const decodeWidth = Math.max(1, Math.round(imageWidth * scale));
    const decodeHeight = Math.max(1, Math.round(imageHeight * scale));
    const stream = await Gio.File.new_for_path(path).read_async(GLib.PRIORITY_DEFAULT_IDLE, null);

    const pixbuf = await GdkPixbuf.Pixbuf.new_from_stream_at_scale_async(
        stream, decodeWidth, decodeHeight, true, null
    ).finally(() => stream.close_async(GLib.PRIORITY_DEFAULT_IDLE, null));

    return { pixbuf, imageWidth, imageHeight };
}

const ImageEffectClass = utils.IS_IN_PREFERENCES ? null : class ImageEffect extends utils.ShaderEffect {
    constructor(params = {}) {
        super();

        utils.initialize_shader_effect(this, SHADER_SOURCE);

        this._image_path = null;
        this._image_load_generation = 0;
        this._pixbuf = null;
        this._image_texture = null;
        this._image_texture_context = null;
        this._image_upload_id = 0;
        this._blend = null;
        this._blend_mode = null;
        this._image_mode = null;
        this._opacity_factor = null;

        this.image_path = params.image_path ?? DEFAULT_PARAMS.image_path;
        this.blend = params.blend ?? DEFAULT_PARAMS.blend;
        this.blend_mode = params.blend_mode ?? DEFAULT_PARAMS.blend_mode;
        this.image_mode = params.image_mode ?? DEFAULT_PARAMS.image_mode;
        this.opacity_factor = params.opacity_factor ?? DEFAULT_PARAMS.opacity_factor;
    }

    static get default_params() {
        return DEFAULT_PARAMS;
    }

    get image_path() {
        return this._image_path;
    }

    set image_path(path) {
        path ??= '';
        if (path === this._image_path)
            return;

        this._image_path = path;
        const loadGeneration = ++this._image_load_generation;
        this.cancel_image_upload();
        this._pixbuf = null;
        this._image_texture = null;
        this._image_texture_context = null;

        uniforms.set_uniform(this, 'image_width', 1);
        uniforms.set_uniform(this, 'image_height', 1);
        this.update_enabled();
        this.queue_repaint();

        if (!path)
            return;

        load_image(path).then(({ pixbuf, imageWidth, imageHeight }) => {
            if (loadGeneration !== this._image_load_generation)
                return;

            this._pixbuf = pixbuf;
            uniforms.set_uniform(this, 'image_width', imageWidth);
            uniforms.set_uniform(this, 'image_height', imageHeight);

            const context = this.target?.context;
            if (context)
                this.bind_image_texture(context);

            this.update_enabled();
            this.queue_repaint();
        }).catch(logError);
    }

    createTarget(context, textureWidth, textureHeight) {
        super.createTarget(context, textureWidth, textureHeight);

        if (this._pixbuf)
            this.bind_image_texture(context);
    }

    bind_image_texture(context) {
        if (!this._pixbuf)
            return;

        if (this._image_texture && this._image_texture_context === context) {
            this.attach_image_texture(context);
            return;
        }

        if (this._image_upload_id && this._image_upload_context === context)
            return;

        this.cancel_image_upload();

        const pixbuf = this._pixbuf;
        const texture = Cogl.Texture2D.new_with_size(
            context, pixbuf.get_width(), pixbuf.get_height()
        );
        texture.set_components(pixbuf.get_has_alpha()
            ? Cogl.TextureComponents.RGBA
            : Cogl.TextureComponents.RGB);
        texture.allocate();

        const format = pixbuf.get_has_alpha()
            ? Cogl.PixelFormat.RGBA_8888
            : Cogl.PixelFormat.RGB_888;
        const pixels = pixbuf.get_pixels();
        const rowstride = pixbuf.get_rowstride();
        const height = pixbuf.get_height();
        let y = 0;

        this._image_upload_context = context;
        this._image_upload_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            const rows = Math.min(IMAGE_UPLOAD_ROWS, height - y);
            texture.set_region(
                0, y, 0, y,
                pixbuf.get_width(), rows,
                pixbuf.get_width(), rows,
                format, rowstride, pixels
            );
            y += rows;

            if (y < height)
                return GLib.SOURCE_CONTINUE;

            this._image_upload_id = 0;
            this._image_upload_context = null;
            this._image_texture = texture;
            this._image_texture_context = context;
            this.attach_image_texture(context);
            this.update_enabled();
            this.queue_repaint();
            return GLib.SOURCE_REMOVE;
        });
    }

    cancel_image_upload() {
        if (this._image_upload_id)
            GLib.source_remove(this._image_upload_id);
        this._image_upload_id = 0;
        this._image_upload_context = null;
    }

    attach_image_texture(context) {
        if (this.target?.context !== context)
            return;

        const pipeline = this.get_pipeline();
        pipeline.set_layer_texture(1, this._image_texture);
        pipeline.set_layer_filters(
            1,
            Cogl.PipelineFilter.LINEAR,
            Cogl.PipelineFilter.LINEAR
        );
        pipeline.set_layer_wrap_mode(1, Cogl.PipelineWrapMode.REPEAT);
        this.update_enabled();
    }

    update_enabled() {
        this.set_enabled(
            Boolean(this._pixbuf) && this.blend > 0 && this.opacity_factor > 0
        );
    }

    get blend() {
        return this._blend;
    }

    set blend(value) {
        const blend = utils.clamp(value, 0, 1, DEFAULT_PARAMS.blend);
        if (this._blend === blend)
            return;

        this._blend = blend;
        uniforms.set_uniform(this, 'blend', this._blend);
        this.update_enabled();
    }

    get blend_mode() {
        return this._blend_mode;
    }

    set blend_mode(value) {
        const blendMode = utils.clamp_integer(value, 0, 17, DEFAULT_PARAMS.blend_mode);
        if (this._blend_mode === blendMode)
            return;

        this._blend_mode = blendMode;
        uniforms.set_uniform(this, 'mode', this._blend_mode);
    }

    get image_mode() {
        return this._image_mode;
    }

    set image_mode(value) {
        const imageMode = utils.clamp_integer(value, 0, 2, DEFAULT_PARAMS.image_mode);
        if (this._image_mode === imageMode)
            return;

        this._image_mode = imageMode;
        uniforms.set_uniform(this, 'image_mode', this._image_mode);
    }

    get opacity_factor() {
        return this._opacity_factor;
    }

    set opacity_factor(value) {
        const opacityFactor = utils.clamp(value, 0, 1, DEFAULT_PARAMS.opacity_factor);
        if (this._opacity_factor === opacityFactor)
            return;

        this._opacity_factor = opacityFactor;
        uniforms.set_uniform(this, 'opacity_factor', this._opacity_factor);
        this.update_enabled();
    }

    set(params) {
        params ??= {};
        this.image_path = params.image_path ?? DEFAULT_PARAMS.image_path;
        this.blend = params.blend ?? DEFAULT_PARAMS.blend;
        this.blend_mode = params.blend_mode ?? DEFAULT_PARAMS.blend_mode;
        this.image_mode = params.image_mode ?? DEFAULT_PARAMS.image_mode;
        this.opacity_factor = params.opacity_factor ?? DEFAULT_PARAMS.opacity_factor;
    }

    vfunc_paint_target(paint_node, paint_context) {
        const actor = this.get_actor();
        const [originX, originY] = actor.get_transformed_position();
        const [width, height] = actor.get_transformed_size();
        const monitor = Main.layoutManager.findMonitorForActor(actor);
        uniforms.set_uniform(this, 'actor_origin_x', originX);
        uniforms.set_uniform(this, 'actor_origin_y', originY);
        uniforms.set_uniform(this, 'actor_width', width);
        uniforms.set_uniform(this, 'actor_height', height);
        uniforms.set_uniform(this, 'monitor_origin_x', monitor?.x ?? originX);
        uniforms.set_uniform(this, 'monitor_origin_y', monitor?.y ?? originY);
        uniforms.set_uniform(this, 'monitor_width', monitor?.width ?? width);
        uniforms.set_uniform(this, 'monitor_height', monitor?.height ?? height);
        uniforms.upload_uniforms(this);
        super.vfunc_paint_target(paint_node, paint_context);
    }
};

export const ImageEffect = utils.IS_IN_PREFERENCES
    ? { default_params: DEFAULT_PARAMS }
    : GObject.registerClass(IMAGE_EFFECT_META, ImageEffectClass);
