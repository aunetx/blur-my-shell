import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');
const Blur = await utils.import_in_shell_only('gi://Blur');

const DEFAULT_PARAMS = {
    unscaled_radius: 30, brightness: 0.6, corner_radius: 14
};


export const NativeDynamicBlurEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "NativeDynamicBlurEffect"
    }, class NativeDynamicBlurEffect extends Blur.BlurEffect {
        constructor(params) {
            const { unscaled_radius, brightness, corner_radius, ...parent_params } = params;
            super({ ...parent_params, mode: Blur.BlurMode.BACKGROUND, ...{ 'corner_radius': corner_radius } });

            this._theme_context = St.ThemeContext.get_for_stage(global.stage);
            this._theme_context.connectObject(
                'notify::scale-factor',
                _ => this.radius = this.unscaled_radius * this._theme_context.scale_factor,
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

        get corner_radius() {
            return this.get_property?.('corner_radius');
        }

        set corner_radius(value) {
            this.set_property?.('corner_radius', value);
        }
    });
