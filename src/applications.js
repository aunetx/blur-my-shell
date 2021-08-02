"use strict";

const { St, Shell, Meta, Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PanelIndicator = Me.imports.panel_indicator;
let prefs = new Settings.Prefs();

const default_sigma = 30;
const default_brightness = 0.6;

let sigma = 30;

var ApplicationsBlur = class ApplicationsBlur {
  constructor(connections) {
    this.connections = connections;
    this.effect = new Shell.BlurEffect({
      brightness: default_brightness,
      sigma: default_sigma,
      mode: Shell.BlurMode.BACKGROUND,
    });
    this.windowActorBlurMap = new Map();
    this.pid = 0;
    this.override_map = {};
    Utils.setInterval(() => this.fix_blur(), 1);
  }
  create_blur_actor(pid) {
    let wab = this.windowActorBlurMap.get(pid);
    let meta_window = wab.window;
    let window_actor = wab.actor;

    let blurEffect = new Shell.BlurEffect({
      brightness: this.effect.brightness,
      sigma: this.effect.sigma,
      mode: this.effect.mode,
    });
    const frame = meta_window.get_frame_rect();
    const buffer = meta_window.get_buffer_rect();
    const offsetX = frame.x - buffer.x;
    const offsetY = frame.y - buffer.y;
    const offsetWidth = buffer.width - frame.width;
    const offsetHeight = buffer.height - frame.height;

    let constraintPosX = new Clutter.BindConstraint({
      source: window_actor,
      coordinate: Clutter.BindCoordinate.X,
      offset: offsetX,
    });
    let constraintPosY = new Clutter.BindConstraint({
      source: window_actor,
      coordinate: Clutter.BindCoordinate.Y,
      offset: offsetY,
    });

    let constraintSizeX = new Clutter.BindConstraint({
      source: window_actor,
      coordinate: Clutter.BindCoordinate.WIDTH,
      offset: -offsetWidth,
    });
    let constraintSizeY = new Clutter.BindConstraint({
      source: window_actor,
      coordinate: Clutter.BindCoordinate.HEIGHT,
      offset: -offsetHeight,
    });

    let blurActor = new Clutter.Actor();
    blurActor.add_constraint(constraintPosX);
    blurActor.add_constraint(constraintPosY);
    blurActor.add_constraint(constraintSizeX);
    blurActor.add_constraint(constraintSizeY);

    blurActor.add_effect_with_name("blur-effect", blurEffect);
    wab.blurActor = blurActor;
    if (wab.actor.visible && !wab.excluded) {
      blurActor.show();
    } else {
      blurActor.hide();
    }
    meta_window.connect("size-changed", (...args) => {
      const frame = meta_window.get_frame_rect();
      const buffer = meta_window.get_buffer_rect();
      const offsetX = frame.x - buffer.x;
      const offsetY = frame.y - buffer.y;
      const offsetWidth = buffer.width - frame.width;
      const offsetHeight = buffer.height - frame.height;

      blurActor.remove_constraint(constraintPosX);
      constraintPosX = new Clutter.BindConstraint({
        source: window_actor,
        coordinate: Clutter.BindCoordinate.X,
        offset: offsetX,
      });
      blurActor.remove_constraint(constraintPosY);
      constraintPosY = new Clutter.BindConstraint({
        source: window_actor,
        coordinate: Clutter.BindCoordinate.Y,
        offset: offsetY,
      });

      blurActor.remove_constraint(constraintSizeX);
      constraintSizeX = new Clutter.BindConstraint({
        source: window_actor,
        coordinate: Clutter.BindCoordinate.WIDTH,
        offset: -offsetWidth,
      });
      blurActor.remove_constraint(constraintSizeY);
      constraintSizeY = new Clutter.BindConstraint({
        source: window_actor,
        coordinate: Clutter.BindCoordinate.HEIGHT,
        offset: -offsetHeight,
      });
      blurActor.add_constraint(constraintPosX);
      blurActor.add_constraint(constraintPosY);
      blurActor.add_constraint(constraintSizeX);
      blurActor.add_constraint(constraintSizeY);
    });
    return blurActor;
  }

  update_blur(pid) {
    if (this.windowActorBlurMap.has(pid)) {
      let wab = this.windowActorBlurMap.get(pid);
      wab.excluded = this.override_map[Utils.get_process_name_from_window(wab.window)] === false;
      if (wab.blurActor) {
        this.update_blur_actor(pid);
      } else {
        this.init_blur_actor(pid);
      }
    }
  }

  set_blur_behind(blurActor, actor) {
    if (actor.get_parent() === blurActor.get_parent()) {
      global.window_group.set_child_below_sibling(blurActor, actor);
    }
  }

  remove_blur(pid) {
    if (this.windowActorBlurMap.has(pid)) {
      let wab = this.windowActorBlurMap.get(pid);
      delete wab.window["blur_provider_pid"];
      global.window_group.remove_actor(wab.blurActor);
      this.windowActorBlurMap.delete(pid);
    }
  }

  update_blur_actor(pid) {
    if (this.windowActorBlurMap.has(pid)) {
      let wab = this.windowActorBlurMap.get(pid);
      let blur_actor = wab.blurActor;
      if (blur_actor) {
        let blurEffect = new Shell.BlurEffect({
          brightness: this.effect.brightness,
          sigma: this.effect.sigma,
          mode: this.effect.mode,
        });
        blur_actor.remove_effect_by_name("blur-effect");
        blur_actor.add_effect_with_name("blur-effect", blurEffect);
        if (wab.actor.visible && !wab.excluded) {
          blur_actor.show();
        } else {
          blur_actor.hide();
        }
      }
    }
  }

  init_blur_actor(pid) {
    let wab = this.windowActorBlurMap.get(pid);
    if (!wab.blurActor) {
      let blurActor = this.create_blur_actor(pid);
      wab.blurActor = blurActor;
      global.window_group.insert_child_below(blurActor, wab.actor);
      blurActor["blur_provider_pid"] = pid;
      this.connections.connect(wab.actor, "notify::visible", (window_actor) => {
        let pid = window_actor.blur_provider_pid;
        if (this.windowActorBlurMap.has(pid)) {
          let blurActor = this.windowActorBlurMap.get(pid).blurActor;
          if (blurActor) {
            if (
              window_actor.visible &&
              !this.windowActorBlurMap.get(pid).excluded
            ) {
              blurActor.show();
            } else {
              blurActor.hide();
            }
          }
        }
      });
    }
  }

  track_new(actor, window) {
    let pid = window["blur_provider_pid"] || this.pid++;
    if (!this.windowActorBlurMap.has(pid)) {
      actor["blur_provider_pid"] = pid;
      window["blur_provider_pid"] = pid;
      let wab = { window: window, actor: actor, blurActor: null };
      this.windowActorBlurMap.set(pid, wab);
      this.connections.connect(actor, "destroy", (window_actor) => {
        this.actor_destroyed(window_actor);
      });
      this.connections.connect(window, "unmanaged", (meta_window) =>
        this.window_unmanaged(meta_window)
      );
      this.update_blur(pid);
    }
  }

  cleanup_things() {
    this.windowActorBlurMap.forEach((value, pid) => {
      this.destroy_wab(pid);
    });
  }

  focus_changed() {
    if (this.windowActorBlurMap.size > 0) {
      Meta.later_add(Meta.LaterType.BEFORE_REDRAW, () => this.fix_blur());
    }
  }

  blur_setting_changed() {
    this.windowActorBlurMap.forEach((wab, pid) => {
      this.update_blur(pid);
    });
  }

  fix_blur() {
    this.windowActorBlurMap.forEach((wab) => {
      this.set_blur_behind(wab.blurActor, wab.actor);
    });
  }

  destroy_wab(pid) {
    this.remove_blur(pid);
    this.windowActorBlurMap.delete(pid);
  }
  window_unmanaged(meta_window) {
    this._log("window_unmanaged");
    try {
      let pid = meta_window.blur_provider_pid;
      this.destroy_wab(pid);
    } catch (e) {}
  }

  actor_destroyed(window_actor) {
    let pid = window_actor.blur_provider_pid;
    try {
      let pid = meta_window.blur_provider_pid;
      this.destroy_wab(pid);
    } catch (e) {}
  }

  window_created(meta_display, meta_window) {
    log("window created");
    if (!meta_window) {
      this._log("no meta window");
      return;
    }
    let window_actor = meta_window.get_compositor_private();
    this.track_new(window_actor, meta_window);
  }
  enable() {
    this._log("blurring applications");
    this.connections.connect(global.display, "notify::focus-window", () =>
      this.focus_changed()
    );
    this.connections.connect(
      global.display,
      "window-created",
      (meta_display, meta_window) => {
        this.window_created(meta_display, meta_window);
      }
    );
    for (let wks = 0; wks < global.workspace_manager.n_workspaces; ++wks) {
      let metaWorkspace = global.workspace_manager.get_workspace_by_index(wks);
      let windows = metaWorkspace.list_windows();
      windows.forEach((v) => {
        this.window_created(undefined, v);
      });
    }
    // try {
    //   PanelIndicator.PanelIndicator.enable();
    // } catch (e) {}
  }

  get monitor() {
    return Main.layoutManager.primaryMonitor;
  }

  set_sigma(s) {
    this.effect.sigma = s;
    this.blur_setting_changed();
  }

  set_brightness(b) {
    this.effect.brightness = b;
    this.blur_setting_changed();
  }
  set_overrides(overrides) {
    this.override_map = overrides;
    this.blur_setting_changed();
  }

  disable() {
    this._log("removing blur from applications");

    try {
      this.cleanup_things();
    } catch (e) {}

    this.connections.disconnect_all();
    // try {
    //   PanelIndicator.PanelIndicator.disable();
    // } catch (e) {}
  }

  show() {}

  hide() {}

  _log(str) {
    log(`[Blur Me] ${str}`);
  }
};
