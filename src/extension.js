'use strict';

const St = imports.gi.St;
const Shell = imports.gi.Shell;
const Main = imports.ui.main;

var Extension = class Extension {
    constructor() { }

    // Called when extension is enabled
    enable() {
        let monitor = Main.layoutManager.primaryMonitor;
        let topbar_blurred_background_parent = new St.Widget({
            style_class: 'topbar-blurred-background-parent',
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: 0,
        });
        let topbar_blurred_background = new St.Widget({
            style_class: 'topbar-blurred-background',
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: Main.panel.height,
        });

        let effect = new Shell.BlurEffect({
            brightness: 0.6,
            sigma: 30,
            mode: 1
        });

        topbar_blurred_background.add_effect(effect);

        topbar_blurred_background_parent.add_child(topbar_blurred_background);

        Main.panel.get_parent().insert_child_at_index(topbar_blurred_background_parent, 0);
    }

    // Called when extension is disabled
    disable() { }
};

// Called on gnome-shell loading, even if extension is deactivated
function init() {
    return new Extension();
}
