'use strict';

const { Shell, Gio, Meta } = imports.gi;
const Main = imports.ui.main;

const { WorkspaceAnimationController } = imports.ui.workspaceAnimation;
const wac_proto = WorkspaceAnimationController.prototype;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const ColorEffect = Me.imports.effects.color_effect.ColorEffect;
const NoiseEffect = Me.imports.effects.noise_effect.NoiseEffect;

var OverviewBlur = class OverviewBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.effects = [];
        this.prefs = prefs;
        this._workspace_switch_bg_actors = [];
        this.enabled = false;
    }

    enable() {
        this._log("blurring overview");

        // connect to every background change (even without changing image)
        this.connections.connect(
            Main.layoutManager._backgroundGroup,
            'notify',
            _ => {
                this._log("updated background");
                this.update_backgrounds();
            }
        );

        // connect to monitors change
        this.connections.connect(
            Main.layoutManager,
            'monitors-changed',
            _ => {
                if (Main.screenShield && !Main.screenShield.locked) {
                    this._log("changed monitors");
                    this.update_backgrounds();
                }
            }
        );

        // add css class name for workspace-switch background
        Main.uiGroup.add_style_class_name("blurred-overview");

        // add css class name to make components semi-transparent if wanted
        this.update_components_classname();

        // update backgrounds when the component is enabled
        this.update_backgrounds();

        this.enabled = true;

        // part for the workspace animation switch

        // store original workspace switching methods for restoring them on
        // disable()
        this._original_PrepareSwitch = wac_proto._prepareWorkspaceSwitch;
        this._original_FinishSwitch = wac_proto._finishWorkspaceSwitch;

        const outer_this = this;

        // create a blurred background actor for each monitor during a workspace
        // switch
        wac_proto._prepareWorkspaceSwitch = function (...params) {
            outer_this._log("prepare workspace switch");
            outer_this._original_PrepareSwitch.apply(this, params);

            Main.layoutManager.monitors.forEach(monitor => {
                if (
                    !(
                        Meta.prefs_get_workspaces_only_on_primary() &&
                        (monitor != Main.layoutManager.primaryMonitor)
                    )
                ) {
                    const bg_actor = outer_this.create_background_actor(
                        monitor
                    );

                    Main.uiGroup.insert_child_above(
                        bg_actor,
                        global.window_group
                    );

                    // store the actors so that we can delete them later
                    outer_this._workspace_switch_bg_actors.push(bg_actor);
                }
            });
        };

        // remove the workspace-switch actors when the switch is done
        wac_proto._finishWorkspaceSwitch = function (...params) {
            outer_this._log("finish workspace switch");
            outer_this._original_FinishSwitch.apply(this, params);

            outer_this._workspace_switch_bg_actors.forEach(actor => {
                actor.destroy();
            });
            outer_this._workspace_switch_bg_actors = [];
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

            Main.layoutManager.overviewGroup.insert_child_at_index(
                bg_actor,
                monitor.index
            );
        });
    }

    create_background_actor(monitor) {
        let bg_actor = new Meta.BackgroundActor;
        let background = Main.layoutManager._backgroundGroup.get_child_at_index(
            Main.layoutManager.monitors.length - monitor.index - 1
        );

        if (!background) {
            this._log("could not get background for overview");
            return bg_actor;
        }

        bg_actor.set_content(background.get_content());

        let blur_effect = new Shell.BlurEffect({
            brightness: this.prefs.overview.CUSTOMIZE
                ? this.prefs.overview.BRIGHTNESS
                : this.prefs.BRIGHTNESS,
            sigma: this.prefs.overview.CUSTOMIZE
                ? this.prefs.overview.SIGMA
                : this.prefs.SIGMA,
            mode: Shell.BlurMode.ACTOR
        });

        let color_effect = new ColorEffect({
            color: this.prefs.overview.CUSTOMIZE
                ? this.prefs.overview.COLOR
                : this.prefs.COLOR
        });

        let noise_effect = new NoiseEffect({
            noise: this.prefs.overview.CUSTOMIZE
                ? this.prefs.overview.NOISE_AMOUNT
                : this.prefs.NOISE_AMOUNT,
            lightness: this.prefs.overview.CUSTOMIZE
                ? this.prefs.overview.NOISE_LIGHTNESS
                : this.prefs.NOISE_LIGHTNESS
        });

        bg_actor.add_effect(color_effect);
        bg_actor.add_effect(noise_effect);
        bg_actor.add_effect(blur_effect);
        this.effects.push({ blur_effect, color_effect, noise_effect });

        bg_actor.set_x(monitor.x);
        bg_actor.set_y(monitor.y);

        return bg_actor;
    }

    /// Updates the classname to style overview components with semi-transparent
    /// backgrounds.
    update_components_classname() {
        let group = Main.uiGroup;
        switch (this.prefs.overview.STYLE_COMPONENTS) {
            case 1:
                this._log("set overview components light classname");
                group.remove_style_class_name("bms-overview-components-dark");
                group.add_style_class_name("bms-overview-components-light");
                break;

            case 2:
                this._log("set overview components dark classname");
                group.remove_style_class_name("bms-overview-components-light");
                group.add_style_class_name("bms-overview-components-dark");
                break;

            default:
                this._log("remove overview components classname");
                group.remove_style_class_name("bms-overview-components-light");
                group.remove_style_class_name("bms-overview-components-dark");
                break;
        }
    }

    set_sigma(s) {
        this.effects.forEach(effect => {
            effect.blur_effect.sigma = s;
        });
    }

    set_brightness(b) {
        this.effects.forEach(effect => {
            effect.blur_effect.brightness = b;
        });
    }

    set_color(c) {
        this.effects.forEach(effect => {
            effect.color_effect.color = c;
        });
    }

    set_noise_amount(n) {
        this.effects.forEach(effect => {
            effect.noise_effect.noise = n;
        });
    }

    set_noise_lightness(l) {
        this.effects.forEach(effect => {
            effect.noise_effect.lightness = l;
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
        Main.uiGroup.remove_style_class_name("bms-overview-components-light");
        Main.uiGroup.remove_style_class_name("bms-overview-components-dark");

        this.effects = [];
        this.connections.disconnect_all();
        this.enabled = false;

        // restore original behavior
        if (this._original_PrepareSwitch && this._original_FinishSwitch) {
            wac_proto._prepareWorkspaceSwitch = this._original_PrepareSwitch;
            wac_proto._finishWorkspaceSwitch = this._original_FinishSwitch;
        }
    }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell] ${str}`);
    }
};
