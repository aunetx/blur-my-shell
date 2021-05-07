"use strict";

const { St, Shell, GLib } = imports.gi;
const Main = imports.ui.main;
const Signals = imports.signals;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
let prefs = new Settings.Prefs();

const default_sigma = 30;
const default_brightness = 0.6;

class DashInfos {
  constructor(dash_blur, dash, dash_box, background_parent, effect) {
    this.dash_blur = dash_blur;
    this.dash = dash;
    this.dash_box = dash_box;
    this.background_parent = background_parent;
    this.effect = effect;

    dash_blur.connections.connect(dash_blur, "remove-dashes", () => {
      this._log("removing blur from dash");
      this.dash.get_parent().remove_child(this.background_parent);
      this.dash_box.style = null;
    });

    dash_blur.connections.connect(dash_blur, "update-sigma", () => {
      this.effect.sigma = this.dash_blur.sigma;
    });

    dash_blur.connections.connect(dash_blur, "update-brightness", () => {
      this.effect.brightness = this.dash_blur.brightness;
    });

    dash_blur.connections.connect(dash_blur, "show", () => {
      this.effect.sigma = this.dash_blur.sigma;
    });

    dash_blur.connections.connect(dash_blur, "hide", () => {
      this.effect.sigma = 0;
    });
  }

  _log(str) {
    log(`[Blur Me] ${str}`);
  }
}

var DashBlur = class DashBlur {
  constructor(connections) {
    this.dashes = [];
    this.connections = connections;
    this.sigma = default_sigma;
    this.brightness = default_brightness;
  }

  enable() {
    this.connections.connect(Main.uiGroup, "actor-added", (_, actor) => {
      try {
        this.try_blur(actor);
      } catch (e) {}
    });

    this.blur_existing_dashes();
  }

  // Finds all existing dashes on every monitor, and call `try_blur` on them
  blur_existing_dashes() {
    this._log("searching for dash");
    // blur every dash found
    Main.uiGroup.get_children().forEach((child) => {
      try {
        this.try_blur(child);
      } catch (e) {}
    });
  }

  // Tries to blur the child if it is a dash needing to be blurred
  try_blur(dash) {
    if (
      dash.get_name() == "dashtodockContainer" &&
      dash.constructor.name == "DashToDock" &&
      dash
        .get_child_at_index(0)
        .get_child_at_index(0)
        .get_child_at_index(0)
        .get_child_at_index(0).name != "dash-blurred-background-parent"
    ) {
      this._log("dash to dock found, blurring it");
      this.dashes.push(this.blur_dash_from(dash));
    }
  }

  // Blurs the dash and returns a `DashInfos` containing its informations
  blur_dash_from(dash_container) {
    // the actual styled dash
    let dash = dash_container
      .get_child_at_index(0)
      .get_child_at_index(0)
      .get_child_at_index(0);
    let dash_box = dash.get_child_at_index(0);

    // the effect applied
    let effect = new Shell.BlurEffect({
      brightness: this.brightness,
      sigma: this.sigma,
      mode: 1,
    });

    // dash background parent, not visible
    let background_parent = new St.Widget({
      style_class: "dash-blurred-background-parent",
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });

    // dash background widget
    let background = new St.Widget({
      style_class: "dash-blurred-background",
      x: dash_box.x,
      y: dash.height - dash_box.height - 8,
      width: dash_box.width,
      height: dash_box.height,
    });

    Utils.setTimeout(() => {
      background.height = dash_box.height;
      background.width = dash_box.width;
      background.x = dash_box.x;
      background.y = dash.height - dash_box.height - 8;
    }, 100);

    let dash_icons_container = dash
      .get_child_at_index(1)
      .get_child_at_index(0)
      .get_child_at_index(2);

    // updates size on change
    // TODO maybe use `connect_after`?
    this.connections.connect(dash_icons_container, "notify", () => {
      background.height = dash_box.height;
      background.width = dash_box.width;
      background.x = dash_box.x;
      background.y = dash.height - dash_box.height - 8;
    });

    // HACK
    {
      // ! DIRTY PART: hack because `Shell.BlurEffect` does not repaint when shadows are under it
      // ! this does not entirely fix this bug (shadows caused by windows still cause artefacts)
      // ! but it prevents the shadows of the dash buttons to cause artefacts on the dash itself
      // ! note: issue opened at https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

      if (prefs.HACKS_LEVEL.get() == 1) {
        this._log("dash hack level 1");

        let rp = () => {
          effect.queue_repaint();
        };

        dash_icons_container.get_children().forEach((icon) => {
          let zone = icon.get_child_at_index(0);
          this.connections.connect(zone, "enter-event", rp);
          this.connections.connect(zone, "leave-event", rp);
          this.connections.connect(zone, "button-press-event", rp);
        });

        this.connections.connect(
          dash_icons_container,
          "actor-added",
          (_, actor) => {
            try {
              let zone = actor.get_child_at_index(0);
              this.connections.connect(zone, "enter-event", rp);
              this.connections.connect(zone, "leave-event", rp);
              this.connections.connect(zone, "button-press-event", rp);
            } catch (e) {
              this._log(`${e}, continuing`);
            }
          }
        );

        let dash_show_apps = dash.get_child_at_index(1).get_child_at_index(1);

        this.connections.connect(dash_show_apps, "enter-event", rp);
        this.connections.connect(dash_show_apps, "leave-event", rp);
        this.connections.connect(dash_show_apps, "button-press-event", rp);

        this.connections.connect(dash, "leave-event", rp);
      } else if (prefs.HACKS_LEVEL.get() == 2) {
        this._log("dash hack level 2");

        let rp = () => {
          effect.queue_repaint();
        };

        // disabled because of #31
        /*
                this.connections.connect(dash, 'paint', rp);
                */
      }

      // ! END OF DIRTY PART
    }

    // add the widget to the dash
    background.add_effect(effect);
    background_parent.add_child(background);
    dash.get_parent().insert_child_at_index(background_parent, 0);
    dash_box.style = "background-color:rgba(0,0,0,0.0);";
    Utils.setTimeout(() => {
      dash_box.style = "background-color:rgba(0,0,0,0.0);";
      Main.panel._leftCorner.hide();
      Main.panel._rightCorner.hide();
    }, 500);
    Utils.setTimeout(() => {
      dash_box.style = "background-color:rgba(0,0,0,0.0);";
    }, 3000);

    // returns infos
    return new DashInfos(this, dash, dash_box, background_parent, effect);
  }

  set_sigma(sigma) {
    this.sigma = sigma;
    this.emit("update-sigma", true);
  }

  set_brightness(brightness) {
    this.brightness = brightness;
    this.emit("update-brightness", true);
  }

  disable() {
    this._log("removing blur from dashes");

    this.emit("remove-dashes", true);

    this.dashes = [];
    this.connections.disconnect_all();
  }

  show() {
    this.emit("show", true);
  }
  hide() {
    this.emit("hide", true);
  }

  _log(str) {
    log(`[Blur Me] ${str}`);
  }
};

Signals.addSignalMethods(DashBlur.prototype);
