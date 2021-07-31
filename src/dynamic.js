'use strict';

const { St, Meta } = imports.gi;
const Main = imports.ui.main;
const Signals = imports.signals;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;


var Dynamic = class Dynamic {
    constructor(connections, prefs) {
        this.connections = connections;
        this.prefs = prefs;
    }

    enable() {
        this._log("init dynamic");

        this.connections.connect(Main.overview, 'showing', () => this.dynamic_update())
        this.connections.connect(Main.overview, 'hiding', () => this.dynamic_update())
        this.connections.connect(Main.sessionMode, 'updated', () => this.dynamic_update())

        for (const actor of global.get_window_actors()) {
            this.window_actor_added(actor);
        }

        this.connections.connect(global.window_group, 'actor-added', (actor) => this.window_actor_added(actor));
        this.connections.connect(global.window_group, 'actor-removed', (actor) => this.window_actor_removed(actor));

        this.connections.connect(global.window_manager, 'switch-workspace', () => this.dynamic_update());

        this.dynamic_update();
    }

    window_actor_added(actor) {
        this.connections.connect(actor, 'notify::allocation', () => this.dynamic_update());
        this.connections.connect(actor, 'notify::visible', () => this.dynamic_update());
    }

    window_actor_removed(actor) {
        this.connections.disconnect_all_for(actor);
        this.dynamic_update();
    }

    dynamic_update() {
        if (Main.panel.has_style_pseudo_class('overview') || !Main.sessionMode.hasWindows) {
            this.emit('set-solid', false);
            return;
        }

        if (!Main.layoutManager.primaryMonitor) {
            return;
        }

        const windows = global.workspace_manager.get_active_workspace().list_windows().filter(window => {
            return window.is_on_primary_monitor() &&
                window.showing_on_its_workspace() &&
                !window.is_hidden() &&
                window.get_window_type() !== Meta.WindowType.DESKTOP;
        });

        const panel_top = Main.panel.get_transformed_position()[1];
        const panel_bottom = panel_top + Main.panel.get_height();
        const scale = St.ThemeContext.get_for_stage(global.stage).scale_factor;
        const is_near_enough = windows.some(metaWindow => {
            const vertical_pos = metaWindow.get_frame_rect().y;
            let distance = 10;
            return vertical_pos < panel_bottom + distance * scale;
        });

        this.emit('set-solid', is_near_enough);
    }

    disable() {
        this._log("disable dynamic");

        this.connections.disconnect_all();

        this.emit('set-solid', true);
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
};

Signals.addSignalMethods(Dynamic.prototype);
