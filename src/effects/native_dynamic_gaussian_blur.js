import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');

// in preferences (no Shell), simply return the `default_params` object
export const NativeDynamicBlurEffect = Shell ?
    new GObject.registerClass({
        GTypeName: "NativeDynamicBlurEffect"
    }, class NativeDynamicBlurEffect extends Shell.BlurEffect {
        constructor(params) {
            const { unscaled_radius, ...parent_params } = params;
            super({ ...parent_params, mode: Shell.BlurMode.BACKGROUND });

            this._theme_context = St.ThemeContext.get_for_stage(global.stage);

            this.unscaled_radius = 'unscaled_radius' in params ? unscaled_radius : this.constructor.default_params.unscaled_radius;

            this._theme_context.connectObject(
                'notify::scale-factor',
                _ => this.radius = this.unscaled_radius * this._theme_context.scale_factor,
                this
            );
        }

        get unscaled_radius() {
            return this._unscaled_radius;
        }

        set unscaled_radius(value) {
            this._unscaled_radius = value;
            this.radius = value * this._theme_context.scale_factor;
        }

        static get default_params() {
            return { unscaled_radius: 30, brightness: 0.6 };
        }
    }) :
    { default_params: { unscaled_radius: 30, brightness: 0.6 } };