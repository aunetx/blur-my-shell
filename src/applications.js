const {Shell, Clutter} = imports.gi;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
let prefs = new Settings.Prefs;

var ApplicationsBlur = class ApplicationsBlur {
    constructor(connections) {
        this.connections = connections;
    }

    enable() {
        this._log("blurring applications...");
    }

    disable() {
        this._log("removing blur from applications...");
    }


    _log(str) {
        log(`[Blur my Shell] ${str}`)
    }
}