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
    unscaled_radius: 30, brightness: 0.6, corner_radius: 14
};


export const NativeDynamicBlurEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "NativeDynamicBlurEffect"
    }, class NativeDynamicBlurEffect extends BlurOrShell.BlurEffect {
        constructor(params) {
            const { unscaled_radius, brightness, corner_radius, ...parent_params } = params;
            if (IS_BLUR_MODULE)
                super({ ...parent_params, mode: BlurOrShell.BlurMode.BACKGROUND, ...{ 'corner_radius': corner_radius } });
            else
                super({ ...parent_params, mode: BlurOrShell.BlurMode.BACKGROUND });

            this._theme_context = St.ThemeContext.get_for_stage(global.stage);
            this._theme_context.connectObject(
                'notify::scale-factor',
                _ => {
                    this.radius = this.unscaled_radius * this._theme_context.scale_factor;
                    this.corner_radius = this.unscaled_corner_radius * this._theme_context.scale_factor;
                },
                this
            );

            utils.setup_params(this, params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get unscaled_radius() {
            return this._unscaled_radius;
        }

        set unscaled_radius(value) {
            this._unscaled_radius = value;
            this.radius = value * this._theme_context.scale_factor;
        }

        get unscaled_corner_radius() {
            return this._unscaled_corner_radius;
        }

        set unscaled_corner_radius(value) {
            this._unscaled_corner_radius = value;
            this.corner_radius = value * this._theme_context.scale_factor;
        }
    });
