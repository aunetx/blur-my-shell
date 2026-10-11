import GLib from 'gi://GLib';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const DASH_TO_PANEL_UUID = 'dash-to-panel@jderose9.github.com';

/// Finds the panels to blur: the stock panel, the panels of Dash to Panel, and the panels added to
/// other monitors by extensions like Multi Monitor Bar.
export class PanelDiscovery {
    constructor(connections, settings, on_panel_found) {
        this.connections = connections;
        this.settings = settings;
        this.on_panel_found = on_panel_found;
        this.dash_to_panel = null;
        this.main_panel = null;
        this.dtp_blur_idle_id = 0;
        this.panel_rescan_idle_id = 0;
    }

    enable() {
        this.main_panel = Main.panel;
        this.connections.connect(Main.panel, 'destroy', () => {
            this.main_panel = null;
        });

        this.connections.connect(
            Main.extensionManager,
            'extension-state-changed',
            (_, extension) => {
                if (extension.uuid !== DASH_TO_PANEL_UUID)
                    return;

                if (extension.state === 1) {
                    this.connect_to_dash_to_panel();
                    this.blur_existing_panels();
                } else if (this.dash_to_panel) {
                    this.connections.disconnect_all_for(this.dash_to_panel);
                    this.dash_to_panel = null;
                    this.queue_stock_panel_rescan();
                }
            }
        );

        this.connect_to_dash_to_panel();
        this.blur_existing_panels();
    }

    connect_to_dash_to_panel() {
        const dash_to_panel = global.dashToPanel ?? null;
        if (dash_to_panel === this.dash_to_panel)
            return;

        if (this.dash_to_panel)
            this.connections.disconnect_all_for(this.dash_to_panel);
        this.dash_to_panel = dash_to_panel;
        if (!dash_to_panel)
            return;

        this.connections.connect(
            dash_to_panel,
            'panels-created',
            () => this.blur_dtp_panels()
        );
    }

    blur_existing_panels() {
        if (global.dashToPanel)
            this.blur_dtp_panels();
        else
            this.blur_stock_panels();
    }

    blur_stock_panels() {
        if (this.main_panel)
            this.on_panel_found(this.main_panel);

        Main.uiGroup.get_children().forEach(actor => {
            if (actor.get_name() !== "panelBox" || actor.get_n_children() !== 1)
                return;

            const panel = actor.get_child_at_index(0);
            if (this.main_panel && panel !== this.main_panel)
                this.on_panel_found(panel);
        });
    }

    /// Multi Monitor Bar names its panel boxes only after adding them, so they can't be found when
    /// they are added to the stage.
    blur_extra_panel_boxes() {
        Main.uiGroup.get_children().forEach(child => {
            if (child.get_name() === "panelBox" &&
                child != Main.layoutManager.panelBox &&
                child.get_n_children() == 1
            ) {
                this.on_panel_found(child.get_child_at_index(0));
            }
        });
    }

    queue_stock_panel_rescan() {
        if (this.panel_rescan_idle_id)
            return;

        this.panel_rescan_idle_id = GLib.idle_add(
            GLib.PRIORITY_DEFAULT_IDLE,
            () => {
                this.panel_rescan_idle_id = 0;
                this.blur_stock_panels();
                return GLib.SOURCE_REMOVE;
            }
        );
    }

    blur_dtp_panels() {
        if (this.dtp_blur_idle_id)
            return;

        this.dtp_blur_idle_id = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
            this.dtp_blur_idle_id = 0;
            if (!global.dashToPanel?.panels)
                return GLib.SOURCE_REMOVE;

            global.dashToPanel.panels.forEach(p => {
                if (
                    p.panel != Main.panel ||
                    this.settings.dash_to_panel.BLUR_ORIGINAL_PANEL
                )
                    this.on_panel_found(p.panel);
            });

            if (
                !global.dashToPanel.panels
                    .map(p => p.panel)
                    .includes(Main.panel)
                &&
                this.settings.dash_to_panel.BLUR_ORIGINAL_PANEL
                &&
                this.main_panel
            )
                this.on_panel_found(this.main_panel);

            return GLib.SOURCE_REMOVE;
        });
    }

    disable() {
        if (this.dtp_blur_idle_id) {
            GLib.Source.remove(this.dtp_blur_idle_id);
            this.dtp_blur_idle_id = 0;
        }
        if (this.panel_rescan_idle_id) {
            GLib.Source.remove(this.panel_rescan_idle_id);
            this.panel_rescan_idle_id = 0;
        }
        this.dash_to_panel = null;
        this.main_panel = null;
    }
}
