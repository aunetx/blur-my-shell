'use strict';

const { Shell, Gio, Meta } = imports.gi;
const Main = imports.ui.main;
const WorkspaceAnimationController = imports.ui.workspaceAnimation.WorkspaceAnimationController;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;


var OverviewBlur = class OverviewBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.effects = [];
        this.prefs = prefs;
        this._workspace_switch_bg_actors = [];
    }

    enable() {
        this._log("blurring overview");

        // connect to every background change (even without changing image)
        this.connections.connect(Main.layoutManager._backgroundGroup, 'notify', () => {
            this._log("updated background");
            this.update_backgrounds();
        });

        // connect to monitors change
        this.connections.connect(Main.layoutManager, 'monitors-changed', () => {
            if (Main.screenShield && !Main.screenShield.locked) {
                this._log("changed monitors");
                this.update_backgrounds();
            }
        });

        // add css class names, to change folders and workspace-switch background
        Main.uiGroup.add_style_class_name("blurred-overview");

        // update background on extension activation
        // the try/catch behaviour is used to prevent bugs like #136 and #137
        try {
            this.update_backgrounds();
        } catch (error) { this._log(`could not blur overview: ${error}`); }

        // store original methods for restoring them on disable()
        this._origPrepareSwitch = WorkspaceAnimationController.prototype._prepareWorkspaceSwitch;
        this._origFinishSwitch = WorkspaceAnimationController.prototype._finishWorkspaceSwitch;

        const outerThis = this;

        // create blurred background actors for each monitor during a workspace switch
        WorkspaceAnimationController.prototype._prepareWorkspaceSwitch = function (...params) {
            outerThis._log("prepare workspace switch");
            outerThis._origPrepareSwitch.apply(this, params);

            Main.layoutManager.monitors.forEach(monitor => {
                if (!(Meta.prefs_get_workspaces_only_on_primary() && (monitor != Main.layoutManager.primaryMonitor))) {
                    const bg_actor = outerThis.create_background_actor(monitor);
                    Main.uiGroup.insert_child_above(bg_actor, global.window_group);

                    // store the actors so that we can delete them later
                    outerThis._workspace_switch_bg_actors.push(bg_actor);
                }
            });
        };

        // remove the workspace-switch actors when the switch is done
        WorkspaceAnimationController.prototype._finishWorkspaceSwitch = function (...params) {
            outerThis._log("finish workspace switch");
            outerThis._origFinishSwitch.apply(this, params);

            outerThis._workspace_switch_bg_actors.forEach(actor => {
                actor.destroy();
            });
            outerThis._workspace_switch_bg_actors = [];
        };
    }

    update_backgrounds() {
        // remove every old background
        Main.layoutManager.overviewGroup.get_children().forEach(actor => {
            if (actor.constructor.name == 'Meta_BackgroundActor') {
                Main.layoutManager.overviewGroup.remove_child(actor);
                actor.destroy();
            }
        });
        this.effects = [];

        // add new backgrounds
        Main.layoutManager.monitors.forEach(monitor => {
            const bg_actor = this.create_background_actor(monitor);
            Main.layoutManager.overviewGroup.insert_child_at_index(bg_actor, monitor.index);
        });
    }

    create_background_actor(monitor) {
        let bg_actor = new Meta.BackgroundActor;

        let background = Main.layoutManager._backgroundGroup.get_child_at_index(Main.layoutManager.monitors.length - monitor.index - 1);

        if (!background) {
            this._log("could not get background for overview");
            return bg_actor;
        }

        bg_actor.set_content(background.get_content());

        let effect = new Shell.BlurEffect({
            brightness: this.prefs.BRIGHTNESS.get(),
            sigma: this.prefs.SIGMA.get(),
            mode: 0
        });
        bg_actor.add_effect(effect);
        this.effects.push(effect);

        bg_actor.set_x(monitor.x);
        bg_actor.set_y(monitor.y);

        return bg_actor;
    }

    set_sigma(s) {
        this.effects.forEach(effect => {
            effect.sigma = s;
        });
    }

    set_brightness(b) {
        this.effects.forEach(effect => {
            effect.brightness = b;
        });
    }

    disable() {
        this._log("removing blur from overview");
        Main.layoutManager.overviewGroup.get_children().forEach(actor => {
            if (actor.constructor.name == 'Meta_BackgroundActor') {
                Main.layoutManager.overviewGroup.remove_child(actor);
            }
        });
        Main.uiGroup.remove_style_class_name("blurred-overview");

        this.effects = [];
        this.connections.disconnect_all();

        // restore original behavior
        if (this._origPrepareSwitch) {
            WorkspaceAnimationController.prototype._prepareWorkspaceSwitch = this._origPrepareSwitch;
        }
        
        if (this._origFinishSwitch) {
            WorkspaceAnimationController.prototype._finishWorkspaceSwitch = this._origFinishSwitch;
        }
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`);
    }
};
