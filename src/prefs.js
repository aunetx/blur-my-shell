"use strict";

const { GObject, Gtk } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Extension = ExtensionUtils.getCurrentExtension();
let Settings = Extension.imports.settings;
let config = new Settings.Prefs();

const BlurMePrefsWidget = GObject.registerClass(
  {
    GTypeName: "BlurMePrefsWidget",
    Template: Extension.dir.get_child("prefs.ui").get_uri(),
    InternalChildren: [
      "sigma_scale",
      "brightness_scale",
      "blur_dash",
      "blur_panel",
      "blur_overview",
      "blur_lockscreen",
      "blur_applications",
      "blur_other",
      "hacks_level0",
      "hacks_level1",
      "hacks_level2",
      "dash_opacity_scale",
      "static_blur",
      "toggle_app_blur",
    ],
  },
  class BlurMePrefsWidget extends Gtk.Box {
    _init(params = {}) {
      super._init(params);

      // ! sigma
      this._sigma_scale.set_value(config.SIGMA.get());

      // ! brightness
      this._brightness_scale.set_value(config.BRIGHTNESS.get());

      // ! blur dash
      this._blur_dash.set_active(config.BLUR_DASH.get());

      // ! blur panel
      this._blur_panel.set_active(config.BLUR_PANEL.get());

      // ! blur overview
      this._blur_overview.set_active(config.BLUR_OVERVIEW.get());

      // ! blur lockscreen
      this._blur_lockscreen.set_active(config.BLUR_LOCKSCREEN.get());

      // ! blur applications
      this._blur_applications.set_active(config.BLUR_APPLICATIONS.get());

      this._blur_other.set_active(config.BLUR_OTHER.get());

      this._toggle_app_blur.set_active(config.TOGGLE_APP_BLUR.get());

      // ! dash hacks
      if (config.HACKS_LEVEL.get() == 0) {
        this._hacks_level0.set_active(true);
      } else if (config.HACKS_LEVEL.get() == 1) {
        this._hacks_level1.set_active(true);
      } else if (config.HACKS_LEVEL.get() == 2) {
        this._hacks_level2.set_active(true);
      } else {
        this._log(`hack level out-of-bound: ${hack_level}, defaulting to 1.`);
        this._hacks_level0.set_active(true);
      }

      // ! dash opacity
      this._dash_opacity_scale.set_value(config.DASH_OPACITY.get());

      // ! static panel blur
      this._static_blur.set_active(config.STATIC_BLUR.get());
    }

    sigma_changed(w) {
      let value = w.get_value();
      config.SIGMA.set(value);
      this.set_data_w();
    }

    brightness_changed(w) {
      let value = w.get_value();
      config.BRIGHTNESS.set(value);
    }

    blur_dash_toggled(w) {
      let value = w.get_active();
      config.BLUR_DASH.set(value);
    }

    blur_panel_toggled(w) {
      let value = w.get_active();
      config.BLUR_PANEL.set(value);
    }

    blur_overview_toggled(w) {
      let value = w.get_active();
      config.BLUR_OVERVIEW.set(value);
    }

    blur_lockscreen_toggled(w) {
      let value = w.get_active();
      config.BLUR_LOCKSCREEN.set(value);
    }

    blur_applications_toggled(w) {
      let value = w.get_active();
      config.BLUR_APPLICATIONS.set(value);
    }

    blur_other_toggled(w) {
      let value = w.get_active();
      config.BLUR_OTHER.set(value);
    }

    toggle_app_blur_toggled(w) {
      let value = w.get_active();
      config.TOGGLE_APP_BLUR.set(value);
    }

    hacks_level0_toggled(w) {
      let is_active = w.get_active();
      if (is_active) {
        config.HACKS_LEVEL.set(0);
      }
    }

    hacks_level1_toggled(w) {
      let is_active = w.get_active();
      if (is_active) {
        config.HACKS_LEVEL.set(1);
      }
    }

    hacks_level2_toggled(w) {
      let is_active = w.get_active();
      if (is_active) {
        config.HACKS_LEVEL.set(2);
      }
    }

    dash_opacity_changed(w) {
      let value = w.get_value();
      config.DASH_OPACITY.set(value);
    }

    static_blur_toogled(w) {
      let value = w.get_active();
      config.STATIC_BLUR.set(value);
    }

    _log(str) {
      log(`[Blur Me] ${str}`);
    }
  }
);

function init() {}

function buildPrefsWidget() {
  return new BlurMePrefsWidget();
}
