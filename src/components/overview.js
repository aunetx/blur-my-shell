import Shell from 'gi://Shell';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { WorkspaceAnimationController } from 'resource:///org/gnome/shell/ui/workspaceAnimation.js';
const wac_proto = WorkspaceAnimationController.prototype;

const OVERVIEW_COMPONENTS_STYLE = [
    "overview-components-light",
    "overview-components-dark",
    "overview-components-transparent"
];


export const OverviewBlur = class OverviewBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.effects = [];
        this.settings = settings;
        this.effects_manager = effects_manager;
        this._workspace_switch_bg_actors = [];
        this.enabled = false;
    }

    enable() {
        this._log("blurring overview");

        // connect to every background change (even without changing image)
        // FIXME this signal is fired very often, so we should find another one
        //       fired only when necessary (but that still catches all cases)
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


        // part for the workspace animation switch

        // make sure not to do this part if the extension was enabled prior, as
        // the functions would call themselves and cause infinite recursion
        if (!this.enabled) {
            // store original workspace switching methods for restoring them on
            // disable()
            this._original_PrepareSwitch = wac_proto._prepareWorkspaceSwitch;
            this._original_FinishSwitch = wac_proto._finishWorkspaceSwitch;

            const w_m = global.workspace_manager;
            const outer_this = this;

            // create a blurred background actor for each monitor during a
            // workspace switch
            wac_proto._prepareWorkspaceSwitch = function (...params) {
                outer_this._log("prepare workspace switch");
                outer_this._original_PrepareSwitch.apply(this, params);

                // this permits to show the blur behind windows that are on
                // workspaces on the left and right
                if (
                    outer_this.settings.applications.BLUR
                ) {
                    let ws_index = w_m.get_active_workspace_index();
                    [ws_index - 1, ws_index + 1].forEach(
                        i => w_m.get_workspace_by_index(i)?.list_windows().forEach(
                            window => window.get_compositor_private().show()
                        )
                    );
                }

                Main.layoutManager.monitors.forEach(monitor => {
                    if (
                        !(
                            Meta.prefs_get_workspaces_only_on_primary() &&
                            (monitor !== Main.layoutManager.primaryMonitor)
                        )
                    ) {
                        const bg_actor = outer_this.create_background_actor(
                            monitor, true
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

                // this hides windows that are not on the current workspace
                if (
                    outer_this.settings.applications.BLUR
                )
                    for (let i = 0; i < w_m.get_n_workspaces(); i++) {
                        if (i != w_m.get_active_workspace_index())
                            w_m.get_workspace_by_index(i)?.list_windows().forEach(
                                window => window.get_compositor_private().hide()
                            );
                    }

                outer_this.effects = outer_this.effects.filter(
                    effects_group => !effects_group.is_transition
                );

                outer_this._workspace_switch_bg_actors.forEach(actor => {
                    actor.destroy();
                });
                outer_this._workspace_switch_bg_actors = [];
            };
        }

        this.enabled = true;
    }

    update_backgrounds() {
        // remove every old background
        this.remove_background_actors();

        // add new backgrounds
        Main.layoutManager.monitors.forEach(monitor => {
            const bg_actor = this.create_background_actor(monitor, false);

            Main.layoutManager.overviewGroup.insert_child_at_index(
                bg_actor,
                monitor.index
            );
        });
    }

    create_background_actor(monitor, is_transition) {
        let bg_actor = new Meta.BackgroundActor({
            meta_display: global.display,
            monitor: monitor.index
        });
        let background_group = Main.layoutManager._backgroundGroup
            .get_children()
            .filter((child) => child instanceof Meta.BackgroundActor);
        let background =
            background_group[
            Main.layoutManager.monitors.length - monitor.index - 1
            ];

        if (!background) {
            this._warn("could not get background for overview");
            return bg_actor;
        }

        bg_actor.content.set({
            background: background.get_content().background
        });

        let blur_effect = new Shell.BlurEffect({
            brightness: this.settings.overview.CUSTOMIZE
                ? this.settings.overview.BRIGHTNESS
                : this.settings.BRIGHTNESS,
            sigma: this.settings.overview.CUSTOMIZE
                ? this.settings.overview.SIGMA
                : this.settings.SIGMA
                * monitor.geometry_scale,
            mode: Shell.BlurMode.ACTOR
        });

        // store the scale in the effect in order to retrieve it in set_sigma
        blur_effect.scale = monitor.geometry_scale;

        let color_effect = this.effects_manager.new_color_effect({
            color: this.settings.overview.CUSTOMIZE
                ? this.settings.overview.COLOR
                : this.settings.COLOR
        }, this.settings);

        let noise_effect = this.effects_manager.new_noise_effect({
            noise: this.settings.overview.CUSTOMIZE
                ? this.settings.overview.NOISE_AMOUNT
                : this.settings.NOISE_AMOUNT,
            lightness: this.settings.overview.CUSTOMIZE
                ? this.settings.overview.NOISE_LIGHTNESS
                : this.settings.NOISE_LIGHTNESS
        }, this.settings);

        bg_actor.add_effect(color_effect);
        bg_actor.add_effect(noise_effect);
        bg_actor.add_effect(blur_effect);
        this.effects.push({ blur_effect, color_effect, noise_effect, is_transition });

        bg_actor.set_x(monitor.x);
        bg_actor.set_y(monitor.y);

        return bg_actor;
    }

    /// Updates the classname to style overview components with semi-transparent
    /// backgrounds.
    update_components_classname() {
        OVERVIEW_COMPONENTS_STYLE.forEach(
            style => Main.uiGroup.remove_style_class_name(style)
        );

        if (this.settings.overview.STYLE_COMPONENTS > 0)
            Main.uiGroup.add_style_class_name(
                OVERVIEW_COMPONENTS_STYLE[this.settings.overview.STYLE_COMPONENTS - 1]
            );
    }

    set_sigma(s) {
        this.effects.forEach(effect => {
            effect.blur_effect.sigma = s * effect.blur_effect.scale;
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

    remove_background_actors() {
        Main.layoutManager.overviewGroup.get_children().forEach(actor => {
            if (actor.constructor.name === 'Meta_BackgroundActor') {
                actor.get_effects().forEach(effect => {
                    this.effects_manager.remove(effect);
                });
                Main.layoutManager.overviewGroup.remove_child(actor);
                actor.destroy();
            }
        });
        this.effects = [];
    }

    disable() {
        this._log("removing blur from overview");
        this.remove_background_actors();
        Main.uiGroup.remove_style_class_name("blurred-overview");
        OVERVIEW_COMPONENTS_STYLE.forEach(
            style => Main.uiGroup.remove_style_class_name(style)
        );

        // make sure to absolutely not do this if the component was not enabled
        // prior, as this would cause infinite recursion
        if (this.enabled) {
            // restore original behavior
            if (this._original_PrepareSwitch)
                wac_proto._prepareWorkspaceSwitch = this._original_PrepareSwitch;
            if (this._original_FinishSwitch)
                wac_proto._finishWorkspaceSwitch = this._original_FinishSwitch;
        }

        this.connections.disconnect_all();
        this.enabled = false;
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > overview]     ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > overview]     ${str}`);
    }
};
