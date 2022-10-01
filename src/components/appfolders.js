'use strict';

const { Shell, GLib, Clutter } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const { PaintSignals } = Me.imports.effects.paint_signals;
const Tweener = imports.tweener.tweener;

const transparent = Clutter.Color.from_pixel(0x00000000);
const FOLDER_DIALOG_ANIMATION_TIME = 200;
const FRAME_UPDATE_PERIOD = 16;

const DIALOGS_STYLES = [
    "",
    "appfolder-dialogs-transparent",
    "appfolder-dialogs-light",
    "appfolder-dialogs-dark"
];

let original_zoomAndFadeIn = null;
let original_zoomAndFadeOut = null;
let sigma;
let brightness;

let _zoomAndFadeIn = function () {
    let [sourceX, sourceY] =
        this._source.get_transformed_position();
    let [dialogX, dialogY] =
        this.child.get_transformed_position();

    this.child.set({
        translation_x: sourceX - dialogX,
        translation_y: sourceY - dialogY,
        scale_x: this._source.width / this.child.width,
        scale_y: this._source.height / this.child.height,
        opacity: 0,
    });

    this.set_background_color(transparent);

    let blur_effect = this.get_effect("appfolder-blur");

    blur_effect.sigma = 0;
    blur_effect.brightness = 1.0;
    Tweener.addTween(blur_effect,
        {
            sigma: sigma,
            brightness: brightness,
            time: FOLDER_DIALOG_ANIMATION_TIME / 1000,
            transition: 'easeOutQuad'
        }
    );

    this.child.ease({
        translation_x: 0,
        translation_y: 0,
        scale_x: 1,
        scale_y: 1,
        opacity: 255,
        duration: FOLDER_DIALOG_ANIMATION_TIME,
        mode: Clutter.AnimationMode.EASE_OUT_QUAD,
    });

    this._needsZoomAndFade = false;

    if (this._sourceMappedId === 0) {
        this._sourceMappedId = this._source.connect(
            'notify::mapped', this._zoomAndFadeOut.bind(this));
    }
};

let _zoomAndFadeOut = function () {
    if (!this._isOpen)
        return;

    if (!this._source.mapped) {
        this.hide();
        return;
    }

    let [sourceX, sourceY] =
        this._source.get_transformed_position();
    let [dialogX, dialogY] =
        this.child.get_transformed_position();

    this.set_background_color(transparent);

    let blur_effect = this.get_effect("appfolder-blur");
    Tweener.addTween(blur_effect,
        {
            sigma: 0,
            brightness: 1.0,
            time: FOLDER_DIALOG_ANIMATION_TIME / 1000,
            transition: 'easeInQuad'
        }
    );

    this.child.ease({
        translation_x: sourceX - dialogX,
        translation_y: sourceY - dialogY,
        scale_x: this._source.width / this.child.width,
        scale_y: this._source.height / this.child.height,
        opacity: 0,
        duration: FOLDER_DIALOG_ANIMATION_TIME,
        mode: Clutter.AnimationMode.EASE_OUT_QUAD,
        onComplete: () => {
            this.child.set({
                translation_x: 0,
                translation_y: 0,
                scale_x: 1,
                scale_y: 1,
                opacity: 255,
            });
            this.hide();

            this._popdownCallbacks.forEach(func => func());
            this._popdownCallbacks = [];
        },
    });

    this._needsZoomAndFade = false;
};


var AppFoldersBlur = class AppFoldersBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.paint_signals = new PaintSignals(connections);
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring appfolders");

        brightness = this.prefs.appfolder.CUSTOMIZE
            ? this.prefs.appfolder.BRIGHTNESS
            : this.prefs.BRIGHTNESS;
        sigma = this.prefs.appfolder.CUSTOMIZE
            ? this.prefs.appfolder.SIGMA
            : this.prefs.SIGMA;

        let appDisplay = Main.overview._overview.controls._appDisplay;

        if (appDisplay._folderIcons.length > 0) {
            this.blur_appfolders();
        }

        this.connections.connect(
            appDisplay, 'view-loaded', this.blur_appfolders.bind(this)
        );
    }

    blur_appfolders() {
        let appDisplay = Main.overview._overview.controls._appDisplay;

        if (this.prefs.HACKS_LEVEL === 1 || this.prefs.HACKS_LEVEL === 2)
            this._log(`appfolders hack level ${this.prefs.HACKS_LEVEL}`);

        appDisplay._folderIcons.forEach(icon => {
            icon._ensureFolderDialog();

            if (original_zoomAndFadeIn == null) {
                original_zoomAndFadeIn = icon._dialog._zoomAndFadeIn;
            }
            if (original_zoomAndFadeOut == null) {
                original_zoomAndFadeOut = icon._dialog._zoomAndFadeOut;
            }

            let blur_effect = new Shell.BlurEffect({
                name: "appfolder-blur",
                sigma: sigma,
                brightness: brightness,
                mode: Shell.BlurMode.BACKGROUND
            });

            icon._dialog.remove_effect_by_name("appfolder-blur");
            icon._dialog.add_effect(blur_effect);

            DIALOGS_STYLES.forEach(
                style => icon._dialog._viewBox.remove_style_class_name(style)
            );

            icon._dialog._viewBox.add_style_class_name(
                DIALOGS_STYLES[this.prefs.appfolder.STYLE_DIALOGS]
            );

            // finally override the builtin functions

            icon._dialog._zoomAndFadeIn = _zoomAndFadeIn;
            icon._dialog._zoomAndFadeOut = _zoomAndFadeOut;


            // HACK
            //
            //`Shell.BlurEffect` does not repaint when shadows are under it. [1]
            //
            // This does not entirely fix this bug (shadows caused by windows
            // still cause artifacts), but it prevents the shadows of the panel
            // buttons to cause artifacts on the panel itself
            //
            // [1]: https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (this.prefs.HACKS_LEVEL === 1 || this.prefs.HACKS_LEVEL === 2) {
                this.paint_signals.disconnect_all_for_actor(icon._dialog);
                this.paint_signals.connect(icon._dialog, blur_effect);
            } else {
                this.paint_signals.disconnect_all();
            }
        });
    };

    set_sigma(s) {
        sigma = s;
        if (this.prefs.appfolder.BLUR)
            this.blur_appfolders();
    }

    set_brightness(b) {
        brightness = b;
        if (this.prefs.appfolder.BLUR)
            this.blur_appfolders();
    }

    // not implemented for dynamic blur
    set_color(c) { }
    set_noise_amount(n) { }
    set_noise_lightness(l) { }

    disable() {
        this._log("removing blur from appfolders");

        let appDisplay = Main.overview._overview.controls._appDisplay;

        if (original_zoomAndFadeIn != null) {
            appDisplay._folderIcons.forEach(icon => {
                if (icon._dialog)
                    icon._dialog._zoomAndFadeIn = original_zoomAndFadeIn;
            });
        }

        if (original_zoomAndFadeOut != null) {
            appDisplay._folderIcons.forEach(icon => {
                if (icon._dialog)
                    icon._dialog._zoomAndFadeOut = original_zoomAndFadeOut;
            });
        }

        appDisplay._folderIcons.forEach(icon => {
            if (icon._dialog) {
                icon._dialog.remove_effect_by_name("appfolder-blur");
                DIALOGS_STYLES.forEach(
                    s => icon._dialog._viewBox.remove_style_class_name(s)
                );
            }
        });

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell > appfolders]   ${str}`);
    }
};
