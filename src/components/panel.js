'use strict';

const { St, Shell, Meta, Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const backgroundSettings = new Gio.Settings({
    schema: 'org.gnome.desktop.background'
});

const Me = imports.misc.extensionUtils.getCurrentExtension();
const PaintSignals = Me.imports.effects.paint_signals;
const ColorEffect = Me.imports.effects.color_effect.ColorEffect;
const NoiseEffect = Me.imports.effects.noise_effect.NoiseEffect;

var PanelBlur = class PanelBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.paint_signals = new PaintSignals.PaintSignals(connections);
        this.prefs = prefs;
        this.blur_effect = new Shell.BlurEffect({
            brightness: prefs.panel.CUSTOMIZE
                ? prefs.panel.BRIGHTNESS
                : prefs.BRIGHTNESS,
            sigma: prefs.panel.CUSTOMIZE
                ? prefs.panel.SIGMA
                : prefs.SIGMA,
            mode: prefs.panel.STATIC_BLUR
                ? Shell.BlurMode.ACTOR
                : Shell.BlurMode.BACKGROUND
        });
        this.color_effect = new ColorEffect({
            color: prefs.panel.CUSTOMIZE
                ? prefs.panel.COLOR
                : prefs.COLOR
        });
        this.noise_effect = new NoiseEffect({
            noise: prefs.panel.CUSTOMIZE
                ? prefs.panel.NOISE_AMOUNT
                : prefs.NOISE_AMOUNT,
            lightness: prefs.panel.CUSTOMIZE
                ? prefs.panel.NOISE_LIGHTNESS
                : prefs.NOISE_LIGHTNESS
        });
        this.background_parent = new St.Widget({
            name: 'topbar-blurred-background-parent',
            style_class: 'topbar-blurred-background-parent',
            x: this.monitor.x,
            y: this.monitor.y,
            width: this.monitor.width,
            height: 0,
        });
        this.background = prefs.panel.STATIC_BLUR
            ? new Meta.BackgroundActor
            : new St.Widget({
                style_class: 'topbar-blurred-background',
                x: 0,
                y: 0,
                width: this.monitor.width,
                height: Main.panel.height,
            });
        this.background_parent.add_child(this.background);
        this.enabled = false;
    }

    enable() {
        this._log("blurring top panel");

        let panel_box = Main.layoutManager.panelBox;

        // remove old background parents
        panel_box.get_children().forEach(child => {
            if (child.name == 'topbar-blurred-background-parent')
                panel_box.remove_child(child);
        });

        // insert background parent
        panel_box.insert_child_at_index(this.background_parent, 0);

        // remove panel background colour
        Main.panel.add_style_class_name('transparent-panel');

        // perform updates
        this.change_blur_type();

        // connect to panel size change
        this.connections.connect(
            Main.panel,
            'notify::height',
            this.update_size.bind(this)
        );

        // connect to every background change (even without changing image)
        this.connections.connect(
            Main.layoutManager._backgroundGroup,
            'notify',
            this.update_wallpaper.bind(this)
        );

        // connect to monitors change
        this.connections.connect(
            Main.layoutManager,
            'monitors-changed',
            _ => {
                if (Main.screenShield && !Main.screenShield.locked) {
                    this.update_wallpaper();
                    this.update_size();
                }
            }
        );

        this.connect_to_overview();
        this.enabled = true;
    }

    change_blur_type() {
        let is_static = this.prefs.panel.STATIC_BLUR;

        // reset widgets to right state
        this.background_parent.remove_child(this.background);
        this.background.remove_effect(this.blur_effect);
        this.background.remove_effect(this.color_effect);
        this.background.remove_effect(this.noise_effect);

        // create new background actor
        this.background = is_static
            ? new Meta.BackgroundActor
            : new St.Widget({
                style_class: 'topbar-blurred-background',
                x: 0,
                y: 0,
                width: this.monitor.width,
                height: Main.panel.height,
            });

        // change blur mode
        this.blur_effect.set_mode(is_static ? 0 : 1);

        // disable other effects if the blur is dynamic, as they makes it opaque
        this.color_effect._static = is_static;
        this.noise_effect._static = is_static;
        this.color_effect.update_enabled();
        this.noise_effect.update_enabled();

        // add the effects in order
        this.background.add_effect(this.color_effect);
        this.background.add_effect(this.noise_effect);
        this.background.add_effect(this.blur_effect);

        // add the background actor behing the panel
        this.background_parent.add_child(this.background);

        // perform updates
        this.update_wallpaper(is_static);
        this.update_size(is_static);


        // HACK
        //
        //`Shell.BlurEffect` does not repaint when shadows are under it. [1]
        //
        // This does not entirely fix this bug (shadows caused by windows
        // still cause artefacts), but it prevents the shadows of the panel
        // buttons to cause artefacts on the panel itself
        //
        // [1]: https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

        if (!is_static) {
            if (this.prefs.HACKS_LEVEL == 1) {
                this._log("panel hack level 1");
                this.paint_signals.disconnect_all();

                let rp = () => { this.blur_effect.queue_repaint(); };

                this.connections.connect(Main.panel, 'enter-event', rp);
                this.connections.connect(Main.panel, 'leave-event', rp);
                this.connections.connect(Main.panel, 'button-press-event', rp);

                Main.panel.get_children().forEach(child => {
                    this.connections.connect(child, 'enter-event', rp);
                    this.connections.connect(child, 'leave-event', rp);
                    this.connections.connect(child, 'button-press-event', rp);
                });
            } else if (this.prefs.HACKS_LEVEL == 2) {
                this._log("panel hack level 2");
                this.paint_signals.disconnect_all();

                this.paint_signals.connect(this.background, this.blur_effect);
            } else {
                this.paint_signals.disconnect_all();
            }
        }
    }

    update_wallpaper() {
        // if static blur, get right wallpaper and update blur with it
        if (this.prefs.panel.STATIC_BLUR) {
            let bg = Main.layoutManager._backgroundGroup.get_child_at_index(
                Main.layoutManager.monitors.length - this.monitor.index - 1
            );
            if (bg)
                this.background.set_content(bg.get_content());
            else
                this._log("could not get background for panel");
        }
    }

    update_size() {
        this.background_parent.width = Main.panel.width;
        this.background.width = Main.panel.width;

        // if static blur, need to clip the background
        if (this.prefs.panel.STATIC_BLUR) {
            let panel_box = Main.layoutManager.panelBox;
            let clip_box = panel_box.get_parent();

            this.background.set_clip(
                clip_box.x,
                clip_box.y,
                panel_box.width,
                panel_box.height
            );
            this.background.height = panel_box.height;
            this.background.x = -clip_box.x;
            this.background.y = -clip_box.y;

            // fixes a bug where the blur is washed away when changing the sigma
            this.invalidate_blur();
        }
    }

    /// Returns either the primary monitor, or a dummy one if none is connected
    get monitor() {
        if (Main.layoutManager.primaryMonitor != null) {
            return Main.layoutManager.primaryMonitor;
        } else {
            return { x: 0, y: 0, width: 0, index: 0 };
        }
    }

    /// Connect when overview if opened/closed to hide/show the blur accordingly
    ///
    /// If HIDETOPBAR is set, we need just to hide the blur when showing appgrid
    /// (so no shadow is cropped)
    connect_to_overview() {
        let appDisplay = Main.overview._overview._controls._appDisplay;

        this.connections.disconnect_all_for(appDisplay);
        this.connections.disconnect_all_for(Main.overview);

        // may be called when panel blur is disabled, if hidetopbar
        // compatibility is toggled on/off
        // if this is the case, do nothing as only the panel blur interfers with
        // hidetopbar
        if (
            this.prefs.panel.BLUR &&
            this.prefs.panel.UNBLUR_IN_OVERVIEW
        ) {
            if (!this.prefs.hidetopbar.COMPATIBILITY) {
                this.connections.connect(
                    Main.overview, 'showing', this.hide.bind(this)
                );
                this.connections.connect(
                    Main.overview, 'hidden', this.show.bind(this)
                );
            } else {
                this.connections.connect(
                    appDisplay, 'show', this.hide.bind(this)
                );
                this.connections.connect(
                    appDisplay, 'hide', this.show.bind(this)
                );
                this.connections.connect(
                    Main.overview, 'hidden', this.show.bind(this)
                );
            }

        }
    }

    /// Fixes a bug where the blur is washed away when changing the sigma, or
    /// enabling/disabling other effects.
    invalidate_blur() {
        if (this.prefs.panel.STATIC_BLUR && this.background)
            this.background.get_content().invalidate();
    }

    set_sigma(s) {
        this.blur_effect.sigma = s;

        this.invalidate_blur();
    }

    set_brightness(b) {
        this.blur_effect.brightness = b;
    }

    set_color(c) {
        this.color_effect.color = c;
    }

    set_noise_amount(n) {
        this.noise_effect.noise = n;
    }

    set_noise_lightness(l) {
        this.noise_effect.lightness = l;
    }

    disable() {
        this._log("removing blur from top panel");
        Main.panel.remove_style_class_name('transparent-panel');

        try {
            Main.layoutManager.panelBox.remove_child(this.background_parent);
        } catch (e) { }

        this.connections.disconnect_all();

        this.enabled = false;
    }

    show() {
        this.background_parent.show();
    }

    hide() {
        this.background_parent.hide();
    }

    _log(str) {
        if (this.prefs.DEBUG)
            log(`[Blur my Shell] ${str}`);
    }
};
