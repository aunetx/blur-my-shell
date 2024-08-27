import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const Clutter = await utils.import_in_shell_only('gi://Clutter');

import { UpscaleEffect } from './upscale.js';
import { DownscaleEffect } from './downscale.js';

const DEFAULT_PARAMS = {
    factor: 8, downsampling_mode: 0
};


export const PixelizeEffect = utils.IS_IN_PREFERENCES ?
    { default_params: DEFAULT_PARAMS } :
    new GObject.registerClass({
        GTypeName: "PixelizeEffect",
        Properties: {
            'factor': GObject.ParamSpec.int(
                `factor`,
                `Factor`,
                `Factor`,
                GObject.ParamFlags.READWRITE,
                0, 64,
                8,
            ),
            'downsampling_mode': GObject.ParamSpec.int(
                `downsampling_mode`,
                `Downsampling mode`,
                `Downsampling mode`,
                GObject.ParamFlags.READWRITE,
                0, 2,
                0,
            )
        }
    }, class PixelizeEffect extends Clutter.Effect {
        constructor(params) {
            super();

            this.upscale_effect = new UpscaleEffect({});
            this.downscale_effect = new DownscaleEffect({});

            utils.setup_params(this, params);
        }

        static get default_params() {
            return DEFAULT_PARAMS;
        }

        get factor() {
            // should be the same as `this.downscale_effect.divider`
            return this.upscale_effect.factor;
        }

        set factor(value) {
            this.upscale_effect.factor = value;
            this.downscale_effect.divider = value;
        }

        get downsampling_mode() {
            return this.downscale_effect.downsampling_mode;
        }

        set downsampling_mode(value) {
            this.downscale_effect.downsampling_mode = value;
        }

        vfunc_set_actor(actor) {
            // deattach effects from old actor
            this.upscale_effect?.actor?.remove_effect(this.upscale_effect);
            this.downscale_effect?.actor?.remove_effect(this.downscale_effect);
            // attach effects to new actor
            if (actor) {
                if (this.upscale_effect)
                    actor.add_effect(this.upscale_effect);
                if (this.downscale_effect)
                    actor.add_effect(this.downscale_effect);
            }

            super.vfunc_set_actor(actor);
        }

        vfunc_set_enabled(is_enabled) {
            this.upscale_effect?.set_enabled(is_enabled);
            this.downscale_effect?.set_enabled(is_enabled);
            super.vfunc_set_enabled(is_enabled);
        }
    });