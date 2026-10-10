import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { WorkspaceAnimationController } from 'resource:///org/gnome/shell/ui/workspaceAnimation.js';
const wac_proto = WorkspaceAnimationController.prototype;

import { Pipeline } from '../conveniences/pipeline.js';
import { get_component_style, connect_system_style_changes } from '../conveniences/style.js';

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
        this.overview_background_group = null;
        this.animation_background_managers = [];
        this.animation_background_group = null;
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

        this.overview_background_group = new Meta.BackgroundGroup(
            { name: 'bms-overview-backgroundgroup' }
        );
        this.animation_background_group = new Meta.BackgroundGroup(
            { name: 'bms-animation-backgroundgroup' }
        );

        Main.uiGroup.add_style_class_name("blurred-overview");

        this.update_components_classname();

        this.update_backgrounds();

        this.connections.connect(Main.layoutManager, 'monitors-changed',
            _ => this.update_backgrounds()
        );

        connect_system_style_changes(this.connections, () => {
            this.update_components_classname();
        });

        this.patch_workspace_switch();
    }

    patch_workspace_switch() {
        if (this.proto_patched)
            return;

        this._original_PrepareSwitch = wac_proto._prepareWorkspaceSwitch;
        this._original_FinishSwitch = wac_proto._finishWorkspaceSwitch;
        const originalPrepareSwitch = this._original_PrepareSwitch;
        const originalFinishSwitch = this._original_FinishSwitch;
        const generation = ++this.patch_generation;
        this.active_patch_generation = generation;

        const overview_blur = this;
        this._patched_PrepareSwitch = function (...params) {
            const had_switch = !!this._switchData;
            const result = originalPrepareSwitch.apply(this, params);
            if (
                overview_blur.enabled
                && overview_blur.active_patch_generation === generation
                && !had_switch
            )
                overview_blur.prepare_workspace_switch();
            return result;
        };
        this._patched_FinishSwitch = function (...params) {
            const result = originalFinishSwitch.apply(this, params);
            if (
                overview_blur.enabled
                && overview_blur.active_patch_generation === generation
            )
                overview_blur.finish_workspace_switch();
            return result;
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
            bg_manager._bms_pipeline.actor.visible = !Meta.prefs_get_workspaces_only_on_primary()
                || primary_index === undefined
                || bg_manager._monitorIndex === primary_index;
        });
    }

    finish_workspace_switch() {
        if (this.animation_background_group.get_parent() === Main.uiGroup)
            Main.uiGroup.remove_child(this.animation_background_group);
    }

    update_backgrounds() {
        this.remove_background_actors();
        for (let i = 0; i < Main.layoutManager.monitors.length; i++) {
            this.overview_background_managers.push(this.create_background(
                i,
                this.overview_background_group,
                'bms-overview-blurred-widget'
            ));
            this.animation_background_managers.push(this.create_background(
                i,
                this.animation_background_group,
                'bms-animation-blurred-widget'
            ));
        }
        Main.layoutManager.overviewGroup.insert_child_at_index(this.overview_background_group, 0);
        this.connections.connect(Main.layoutManager.overviewGroup, "child-added", (_, child) => {
            if (child !== this.overview_background_group)
                Main.layoutManager.overviewGroup.set_child_at_index(this.overview_background_group, 0);
        });
    }

    create_background(monitor_index, background_group, widget_name) {
        const background_managers = [];
        const pipeline = new Pipeline(
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
        return background_managers[0];
    }

    get_overview_style() {
        return get_component_style(
            this.settings.overview.STYLE_COMPONENTS,
            4
        );
    }

    /// Updates the classname to style overview components with semi-transparent
    /// backgrounds.
    update_components_classname() {
        OVERVIEW_COMPONENTS_STYLE.forEach(
            style => Main.uiGroup.remove_style_class_name(style)
        );

        const OVERVIEW_STYLE = this.get_overview_style();

        if (OVERVIEW_STYLE > 0)
            Main.uiGroup.add_style_class_name(
                OVERVIEW_COMPONENTS_STYLE[OVERVIEW_STYLE - 1]
            );
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
        this.overview_background_managers = [];
        this.animation_background_managers = [];
    }

    destroy_background(background_manager) {
        const pipeline = background_manager._bms_pipeline;
        const actor = pipeline.actor;
        pipeline.destroy();
        background_manager.destroy();
        actor.destroy();
    }

    disable() {
        if (!this.enabled)
            return;

        this._log("removing blur from overview");
        this.enabled = false;
        this.finish_workspace_switch();
        this.restore_patched_proto();

        this.remove_background_actors();
        this.overview_background_group.destroy();
        this.overview_background_group = null;
        this.animation_background_group.destroy();
        this.animation_background_group = null;

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
};
