import GObject from 'gi://GObject';

import * as utils from '../conveniences/utils.js';
const Shell = await utils.import_in_shell_only('gi://Shell');

// in preferences (no Shell), simply return the `default_params` object
export const NativeBlurEffect = Shell ?
    new GObject.registerClass({
        GTypeName: "NativeBlurEffect"
    }, class NativeBlurEffect extends Shell.BlurEffect {
        constructor(params) {
            super({ ...params, mode: Shell.BlurMode.ACTOR });
        }

        static get default_params() {
            return { radius: 30, brightness: 0.6 };
        }
    }) :
    { default_params: { radius: 30, brightness: 0.6 } };