import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');

let BlurOrShell = await utils.import_in_shell_only('gi://Blur');
let IS_BLUR_MODULE = true;
if (BlurOrShell === null) {
    BlurOrShell = await utils.import_in_shell_only('gi://Shell');
    IS_BLUR_MODULE = false;
}


const DEFAULT_PARAMS = {
    unscaled_radius: 30, brightness: 0.6
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

            const { unscaled_radius, brightness, corner_radius, ...parent_params } = normalized_params;
            delete normalized_params.corner_radius;
            const unscaled_corner_radius = corner_radius ?? 0;
            normalized_params.unscaled_corner_radius = unscaled_corner_radius;
            if (IS_BLUR_MODULE)
                super({ ...parent_params, mode: BlurOrShell.BlurMode.BACKGROUND, ...{ 'corner_radius': unscaled_corner_radius } });
            else
                super({ ...parent_params, mode: BlurOrShell.BlurMode.BACKGROUND });

            this._theme_context = St.ThemeContext.get_for_stage(global.stage);
            this._theme_context.connectObject(
                'notify::scale-factor',
                _ => {
                    this.radius = Math.max(0, this.unscaled_radius * this._theme_context.scale_factor);
                    if (IS_BLUR_MODULE)
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
            return IS_BLUR_MODULE;
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
            if (IS_BLUR_MODULE)
                this.corner_radius = value * this._theme_context.scale_factor;
        }
    });
