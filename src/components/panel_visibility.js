import St from 'gi://St';
import Meta from 'gi://Meta';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const PANEL_STYLES = [
    "transparent-panel",
    "light-panel",
    "dark-panel",
    "contrasted-panel"
];

export const PanelVisibility = class PanelVisibility {
    constructor(panel_blur) {
        this.panel_blur = panel_blur;
        this.connections = panel_blur.connections;
        this.settings = panel_blur.settings;
        this.blur_settings = panel_blur.blur_settings;
        this.window_signal_ids = new Map();
    }

    connect_to_overview() {
        if (
            this.settings.panel.BLUR &&
            this.settings.panel.UNBLUR_IN_OVERVIEW
        ) {
            if (!this.settings.hidetopbar.COMPATIBILITY) {
                this.connections.connect(
                    Main.overview, 'showing', _ => this.panel_blur.hide()
                );
                this.connections.connect(
                    Main.overview, 'hidden', _ => {
                        this.panel_blur.panel_hide_blur_dynamically();
                        this.visibility.update_visibility();
                    }
                );
            } else {
                let appDisplay = this.get_app_display();
                if (!appDisplay)
                    return;

                this.connections.connect(
                    appDisplay, 'show', _ => this.panel_blur.hide()
                );
                this.connections.connect(
                    appDisplay, 'hide', _ => this.visibility.update_visibility()
                );
                this.connections.connect(
                    Main.overview, 'hidden', _ => this.visibility.update_visibility()
                );
            }

        }
    }

    connect_to_windows() {
        if (this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY) {
            this.connections.connect(Main.overview, ['showing', 'hiding'],
                _ => this.update_visibility()
            );
            this.connections.connect(Main.sessionMode, 'updated',
                _ => this.update_visibility()
            );

            for (const meta_window_actor of global.get_window_actors())
                this.on_window_actor_added(
                    meta_window_actor.get_parent(), meta_window_actor
                );

            this.connections.connect(global.window_group, 'child-added',
                this.on_window_actor_added.bind(this)
            );
            this.connections.connect(global.window_group, 'child-removed',
                this.on_window_actor_removed.bind(this)
            );
            this.connections.connect(global.window_manager, 'switch-workspace',
                _ => this.update_visibility()
            );
            this.update_visibility();
        } else {
            this.panel_blur.actors_list.forEach(
                actors => this.set_should_override_panel(actors, true)
            );
        }
    }

    connect_to_windows_and_overview() {
        this.disconnect_from_windows_and_overview();
        this.connect_to_overview();
        this.connect_to_windows();
    }

    disconnect_from_windows_and_overview() {
        for (const actor of [
            Main.overview, Main.sessionMode,
            global.window_group, global.window_manager,
            this.get_app_display()
        ].filter(actor => actor))
            this.connections.disconnect_all_for(actor);

        for (const [actor, ids] of this.window_signal_ids) {
            for (const id of ids)
                try {
                    actor.disconnect(id);
                } catch (e) { }
        }

        this.window_signal_ids = new Map();
    }

    update_light_text_classname(disable = false) {
        if (!this.panel_blur.is_main_panel_alive())
            return;

        if (this.settings.panel.FORCE_LIGHT_TEXT && !disable)
            Main.uiGroup.add_style_class_name("panel-light-text");
        else
            Main.uiGroup.remove_style_class_name("panel-light-text");
    }

    on_window_actor_added(container, meta_window_actor) {
        if (!meta_window_actor || this.window_signal_ids.has(meta_window_actor))
            return;

        this.window_signal_ids.set(meta_window_actor, [
            meta_window_actor.connect('notify::allocation',
                _ => this.update_visibility()
            ),
            meta_window_actor.connect('notify::visible',
                _ => this.update_visibility()
            )
        ]);
        this.update_visibility();
    }

    on_window_actor_removed(container, meta_window_actor) {
        const signal_ids = this.window_signal_ids.get(meta_window_actor) ?? [];
        for (const signalId of signal_ids)
            try {
                meta_window_actor.disconnect(signalId);
            } catch (e) { }

        this.window_signal_ids.delete(meta_window_actor);
        this.update_visibility();
    }

    get_app_display() {
        return Main.overview?._overview?._controls?._appDisplay ?? null;
    }

    update_visibility() {
        if (
            this.panel_blur.is_main_panel_alive() && Main.panel.has_style_pseudo_class('overview')
            || !Main.sessionMode.hasWindows
        ) {
            this.panel_blur.actors_list.forEach(
                actors => this.set_should_override_panel(actors, true)
            );
            return;
        }

        if (!Main.layoutManager.primaryMonitor)
            return;

        const workspace = global.workspace_manager.get_active_workspace();
        const windows = workspace.list_windows().filter(meta_window =>
            meta_window.showing_on_its_workspace()
            && !meta_window.is_hidden()
            && meta_window.get_window_type() !== Meta.WindowType.DESKTOP
            && meta_window.get_gtk_application_id() !== "com.rastersoft.ding"
            && meta_window.get_gtk_application_id() !== "com.desktop.ding"
        );

        const scale = St.ThemeContext.get_for_stage(global.stage).scale_factor;
        this.panel_blur.actors_list
            .filter(actors => !actors.is_dtp_panel)
            .forEach(actors => {
                let panel = actors.widgets.panel;
                let panel_top = panel.get_transformed_position()[1];
                let panel_bottom = panel_top + panel.get_height();

                let window_overlap_panel = false;
                windows.forEach(meta_window => {
                    let window_monitor_i = meta_window.get_monitor();
                    let same_monitor = actors.monitor.index == window_monitor_i;

                    let window_vertical_pos = meta_window.get_frame_rect().y;
                    let window_vertical_bottom = window_vertical_pos + meta_window.get_frame_rect().height;

                    if (same_monitor
                        &&
                        ((panel_top === 0 && window_vertical_pos < panel_bottom + 5 * scale) ||
                        (panel_top > 0 && window_vertical_bottom > panel_top - 5 * scale))
                    )
                        window_overlap_panel = true;
                });

                this.set_should_override_panel(actors, !window_overlap_panel);
            });
    }

    set_should_override_panel(actors, should_override) {
        let panel = actors.widgets.panel;
        const blur_actor = actors.blur_surface?.actor;

        PANEL_STYLES.forEach(style => panel.remove_style_class_name(style));

        if (this.blur_settings.OVERRIDE_BACKGROUND) {
            if (this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY) {
                if (this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY_MODE == 0) {
                    panel.add_style_class_name(
                        PANEL_STYLES[this.get_panel_style()]
                    );
                    if (blur_actor) {
                        if (!should_override)
                            blur_actor.show();
                        else
                            blur_actor.hide();
                    }
                }
                if (this.settings.panel.OVERRIDE_BACKGROUND_DYNAMICALLY_MODE == 1) {
                    if (should_override) {
                        panel.add_style_class_name(
                            PANEL_STYLES[this.get_panel_style()]
                        );
                    }
                }
            }
            else if (should_override) {
                panel.add_style_class_name(
                    PANEL_STYLES[this.get_panel_style()]
                );
            }
        }

        this.update_light_text_classname(!should_override);
    }

    get_panel_style() {
        const style = this.blur_settings.USE_GLOBAL ?
            this.blur_settings.BACKGROUND_STYLE :
            this.settings.panel.STYLE_PANEL;

        if (this.blur_settings.USE_GLOBAL && style === 3)
            return this.get_automatic_style();
        if (style >= 0 && style < PANEL_STYLES.length)
            return style;
        return 0;
    }

    get_automatic_style() {
        const shell_style = Main.getStyleVariant?.();
        if (shell_style === 'light')
            return 1;
        if (shell_style === 'dark')
            return 2;
        return St.Settings.get?.()?.color_scheme === St.SystemColorScheme?.PREFER_DARK ? 2 : 1;
    }
};
