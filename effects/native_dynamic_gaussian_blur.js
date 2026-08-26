import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');

const BlurModule = await utils.import_in_shell_only('gi://Blur');
const Shell = await utils.import_in_shell_only('gi://Shell');
const BlurOrShell = utils.is_usable_blur_module(BlurModule) ? BlurModule : Shell;
const SUPPORTS_CORNER_RADIUS = Boolean(
    BlurOrShell?.BlurEffect?.list_properties?.()
        .some(property => property.name === 'corner-radius')
);


const DEFAULT_PARAMS = {
    unscaled_radius: 30,
    brightness: 0.6,
    unscaled_corner_radius: 0,
};


export const NativeDynamicBlurEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS, supports_corner_radius: false } :
    new GObject.registerClass({
        GTypeName: "NativeDynamicBlurEffect"
    }, class NativeDynamicBlurEffect extends BlurOrShell.BlurEffect {
        constructor(params) {
            const normalized_params = { ...params };
            if (!('unscaled_radius' in normalized_params) && 'radius' in normalized_params)
                normalized_params.unscaled_radius = normalized_params.radius;
            delete normalized_params.radius;

            if (!('unscaled_corner_radius' in normalized_params) && 'corner_radius' in normalized_params)
                normalized_params.unscaled_corner_radius = normalized_params.corner_radius;
            delete normalized_params.corner_radius;

            const parent_params = { ...normalized_params };
            delete parent_params.unscaled_radius;
            delete parent_params.brightness;
            delete parent_params.unscaled_corner_radius;
            super({ ...parent_params, mode: BlurOrShell.BlurMode.BACKGROUND });

            this._theme_context = St.ThemeContext.get_for_stage(global.stage);
            this._theme_context.connectObject(
                'notify::scale-factor',
                _ => {
                    this.radius = Math.max(0, this.unscaled_radius * this._theme_context.scale_factor);
                    if (SUPPORTS_CORNER_RADIUS)
                        this.corner_radius = this.unscaled_corner_radius * this._theme_context.scale_factor;
                },
                this
            );

            utils.setup_params(this, normalized_params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        static get supports_corner_radius() {
            return SUPPORTS_CORNER_RADIUS;
        }

        get unscaled_radius() {
            return this._unscaled_radius;
        }

        set unscaled_radius(value) {
            this._unscaled_radius = value;
            this.radius = Math.max(0, value * this._theme_context.scale_factor);
        }

        get unscaled_corner_radius() {
            return this._unscaled_corner_radius;
        }

        set unscaled_corner_radius(value) {
            this._unscaled_corner_radius = value;
            if (SUPPORTS_CORNER_RADIUS)
                this.corner_radius = value * this._theme_context.scale_factor;
        }
    });
