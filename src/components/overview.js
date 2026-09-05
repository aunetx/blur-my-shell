import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { WorkspaceAnimationController } from 'resource:///org/gnome/shell/ui/workspaceAnimation.js';
const wac_proto = WorkspaceAnimationController.prototype;

import { Pipeline } from '../conveniences/pipeline.js';

const OVERVIEW_COMPONENTS_STYLE = [
    "overview-components-light",
    "overview-components-dark",
    "overview-components-transparent"
];


export const OverviewBlur = class OverviewBlur {
    constructor(connections, settings, effects_manager) {
        this.connections = connections;
        this.settings = settings;
        this.effects_manager = effects_manager;
        this.overview_background_managers = [];
        this.overview_background_group = new Meta.BackgroundGroup(
            { name: 'bms-overview-backgroundgroup' }
        );
        this.animation_background_managers = [];
        this.animation_background_group = new Meta.BackgroundGroup(
            { name: 'bms-animation-backgroundgroup' }
        );
        this.enabled = false;
        this.proto_patched = false;
        this.patch_generation = 0;
        this.active_patch_generation = null;
    }

    enable() {
        if (this.enabled)
            return;

        this._log("blurring overview");
        this.enabled = true;

        // add css class name for workspace-switch background
        Main.uiGroup.add_style_class_name("blurred-overview");

        // add css class name to make components semi-transparent if wanted
        this.update_components_classname();

        // update backgrounds when the component is enabled
        this.update_backgrounds();

        // connect to monitors change
        this.connections.connect(Main.layoutManager, 'monitors-changed',
            _ => this.update_backgrounds()
        );

        this.patch_workspace_switch();
    }

    patch_workspace_switch() {
        if (this.proto_patched)
            return;

        this._original_PrepareSwitch = wac_proto._prepareWorkspaceSwitch;
        this._original_FinishSwitch = wac_proto._finishWorkspaceSwitch;
        const generation = ++this.patch_generation;
        this.active_patch_generation = generation;

        const overview_blur = this;
        this._patched_PrepareSwitch = function (...params) {
            const had_switch = !!this._switchData;
            const result = overview_blur._original_PrepareSwitch.apply(this, params);
            if (
                overview_blur.enabled
                && overview_blur.active_patch_generation === generation
                && !had_switch
            )
                overview_blur.prepare_workspace_switch();
            return result;
        };
        this._patched_FinishSwitch = function (...params) {
            try {
                return overview_blur._original_FinishSwitch.apply(this, params);
            } finally {
                if (
                    overview_blur.enabled
                    && overview_blur.active_patch_generation === generation
                )
                    overview_blur.finish_workspace_switch();
            }
        };

        wac_proto._prepareWorkspaceSwitch = this._patched_PrepareSwitch;
        wac_proto._finishWorkspaceSwitch = this._patched_FinishSwitch;
        this.proto_patched = true;
    }

    prepare_workspace_switch() {
        this._log("prepare workspace switch");
        this.finish_workspace_switch();

        Main.uiGroup.insert_child_above(
            this.animation_background_group,
            global.window_group
        );

        const primary_index = Main.layoutManager.primaryMonitor?.index;
        this.animation_background_managers.forEach(bg_manager => {
            const actor = bg_manager._bms_pipeline?.actor;
            if (!actor)
                return;
            actor.visible = !Meta.prefs_get_workspaces_only_on_primary()
                || primary_index === undefined
                || bg_manager._monitorIndex === primary_index;
        });
    }

    finish_workspace_switch() {
        if (this.animation_background_group.get_parent() === Main.uiGroup)
            Main.uiGroup.remove_child(this.animation_background_group);
    }

    update_backgrounds() {
        // remove every old background
        this.remove_background_actors();
        // create new backgrounds for the overview and the animation
        for (let i = 0; i < Main.layoutManager.monitors.length; i++) {
            let overview_manager = null;
            let animation_manager = null;
            try {
                overview_manager = this.create_background(
                    i,
                    this.overview_background_group,
                    'bms-overview-blurred-widget'
                );
                animation_manager = this.create_background(
                    i,
                    this.animation_background_group,
                    'bms-animation-blurred-widget'
                );

                this.overview_background_managers.push(overview_manager);
                this.animation_background_managers.push(animation_manager);
            } catch (error) {
                if (overview_manager)
                    this.destroy_background(overview_manager);
                if (animation_manager)
                    this.destroy_background(animation_manager);
                logError(error, `[Blur my Shell > overview] failed to create monitor ${i} background`);
            }
        }
        // add the container widget for the overview only to the overview group
        Main.layoutManager.overviewGroup.insert_child_at_index(this.overview_background_group, 0);
        // make sure it stays below
        this.connections.connect(Main.layoutManager.overviewGroup, "child-added", (_, child) => {
            if (child !== this.overview_background_group) {
                if (this.overview_background_group.get_parent())
                    Main.layoutManager.overviewGroup.remove_child(this.overview_background_group);
                Main.layoutManager.overviewGroup.insert_child_at_index(this.overview_background_group, 0);
            }
        });
    }

    create_background(monitor_index, background_group, widget_name) {
        const background_managers = [];
        let pipeline = null;

        try {
            pipeline = new Pipeline(
                this.effects_manager,
                global.blur_my_shell._pipelines_manager,
                this.settings.overview.PIPELINE
            );
            pipeline.create_background_with_effects(
                monitor_index,
                background_managers,
                background_group,
                widget_name
            );

            if (background_managers.length !== 1)
                throw new Error('overview pipeline did not create one background manager');

            return background_managers[0];
        } catch (error) {
            if (background_managers.length > 0) {
                background_managers.forEach(background_manager =>
                    this.destroy_background(background_manager)
                );
            } else {
                const actor = pipeline?.actor;
                this.destroy_resource('partial pipeline', () => pipeline?.destroy());
                this.destroy_resource('partial background actor', () => actor?.destroy());
            }
            throw error;
        }
    }

    /// Updates the classname to style overview components with semi-transparent
    /// backgrounds.
    update_components_classname() {
        OVERVIEW_COMPONENTS_STYLE.forEach(
            style => Main.uiGroup.remove_style_class_name(style)
        );

        if (this.settings.overview.STYLE_COMPONENTS > 0) {
            const style = OVERVIEW_COMPONENTS_STYLE[
                this.settings.overview.STYLE_COMPONENTS - 1
            ];
            if (style)
                Main.uiGroup.add_style_class_name(style);
        }
    }

    remove_background_actors() {
        this.connections.disconnect_all_for(Main.layoutManager.overviewGroup);
        if (this.overview_background_group.get_parent())
            Main.layoutManager.overviewGroup.remove_child(this.overview_background_group);

        this.overview_background_managers.forEach(background_manager =>
            this.destroy_background(background_manager)
        );
        this.animation_background_managers.forEach(background_manager =>
            this.destroy_background(background_manager)
        );
        this.overview_background_group.destroy_all_children();
        this.animation_background_group.destroy_all_children();
        this.overview_background_managers = [];
        this.animation_background_managers = [];
    }

    destroy_background(background_manager) {
        const actor = background_manager._bms_pipeline?.actor;
        this.destroy_resource(
            'background pipeline',
            () => background_manager._bms_pipeline?.destroy()
        );
        this.destroy_resource(
            'background manager',
            () => background_manager.destroy()
        );
        this.destroy_resource('background actor', () => actor?.destroy());
    }

    destroy_resource(name, callback) {
        try {
            callback();
        } catch (error) {
            this._log(`${name} was already destroyed: ${error}`);
        }
    }

    disable() {
        if (!this.enabled) {
            this.restore_patched_proto();
            return;
        }

        this._log("removing blur from overview");
        this.enabled = false;
        this.finish_workspace_switch();
        this.restore_patched_proto();

        this.remove_background_actors();
        Main.uiGroup.remove_style_class_name("blurred-overview");
        OVERVIEW_COMPONENTS_STYLE.forEach(
            style => Main.uiGroup.remove_style_class_name(style)
        );

        this.connections.disconnect_all();
    }

    restore_patched_proto() {
        if (this.proto_patched) {
            if (wac_proto._prepareWorkspaceSwitch === this._patched_PrepareSwitch)
                wac_proto._prepareWorkspaceSwitch = this._original_PrepareSwitch;
            if (wac_proto._finishWorkspaceSwitch === this._patched_FinishSwitch)
                wac_proto._finishWorkspaceSwitch = this._original_FinishSwitch;
            this.proto_patched = false;
            this.active_patch_generation = null;
            this._patched_PrepareSwitch = null;
            this._patched_FinishSwitch = null;
        }
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > overview]     ${str}`);
    }

    _warn(str) {
        console.warn(`[Blur my Shell > overview]     ${str}`);
    }
};
