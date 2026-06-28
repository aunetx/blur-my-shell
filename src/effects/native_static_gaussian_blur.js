import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const St = await utils.import_in_shell_only('gi://St');
const Shell = await utils.import_in_shell_only('gi://Shell');

const DEFAULT_PARAMS = {
    unscaled_radius: 30, brightness: 0.6
};


export const NativeStaticBlurEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "NativeStaticBlurEffect"
    }, class NativeStaticBlurEffect extends Shell.BlurEffect {
        constructor(params) {
            const normalized_params = { ...params };
            if (!('unscaled_radius' in normalized_params) && 'radius' in normalized_params)
                normalized_params.unscaled_radius = normalized_params.radius;
            delete normalized_params.radius;

            const { unscaled_radius, brightness, ...parent_params } = normalized_params;
            super({ ...parent_params, mode: Shell.BlurMode.ACTOR });

            this._theme_context = St.ThemeContext.get_for_stage(global.stage);
            this._theme_context.connectObject(
                'notify::scale-factor',
                _ => this.radius = Math.max(0.5, this.unscaled_radius * this._theme_context.scale_factor),
                this
            );

            utils.setup_params(this, normalized_params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get unscaled_radius() {
            return this._unscaled_radius;
        }

        set unscaled_radius(value) {
            this._unscaled_radius = value;
            this.radius = Math.max(0.5, value * this._theme_context.scale_factor);
        }

        invalidate_cache() {
            const radius = this.radius;
            this.radius = radius > 1 ? radius - 1 : radius + 1;
            this.radius = radius;
            this.queue_repaint?.();
        }
    });
