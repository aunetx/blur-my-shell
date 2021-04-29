"use strict";

const { St, Shell, Meta, Gio, GLib } = imports.gi;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
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
    this.blurActorMap = new Map();
    this.actorMap = new Map();
    this.windowMap = new Map();
    this.pid = 0;
    Utils.setInterval(() => this.fix_blur(), 1);
  }
  create_blur_actor(meta_window, window_actor) {
    let blurEffect = new Shell.BlurEffect({
      brightness: this.effect.brightness,
      sigma: this.effect.sigma,
      mode: this.effect.mode,
    });
    let frame = meta_window.get_frame_rect();
    let buffer = meta_window.get_buffer_rect();

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
    return blurActor;
  }

  update_blur(window, pid) {
    if (window && this.windowMap.has(pid)) {
      if (this.blurActorMap.has(pid)) {
        this.update_blur_actor(this.blurActorMap.get(pid));
      } else {
        this.set_blur(pid, this.actorMap.get(pid), window);
      }
    } else if (this.blurActorMap.has(pid)) {
      this.remove_blur(pid);
    }
  }

  set_blur_behind(blurActor, actor) {
    if (actor.get_parent() === blurActor.get_parent()) {
      global.window_group.set_child_below_sibling(blurActor, actor);
    }
  }

  remove_blur(pid) {
    global.window_group.remove_actor(this.blurActorMap.get(pid));
    this.blurActorMap.delete(pid);
  }

  update_blur_actor(blur_actor) {
    let blurEffect = new Shell.BlurEffect({
      brightness: this.effect.brightness,
      sigma: this.effect.sigma,
      mode: this.effect.mode,
    });
    blur_actor.remove_effect_by_name("blur-effect");
    blur_actor.add_effect_with_name("blur-effect", blurEffect);
  }

  set_blur(pid, actor, window) {
    let blurActor = this.create_blur_actor(window, actor);
    global.window_group.insert_child_below(blurActor, actor);
    blurActor["blur_provider_pid"] = pid;
    this.blurActorMap.set(pid, blurActor);
    this.connections.connect(actor, "notify::visible", (window_actor) => {
      let pid = window_actor.blur_provider_pid;
      if (window_actor.visible) {
        this.blurActorMap.get(pid).show();
      } else {
        this.blurActorMap.get(pid).hide();
      }
    });
  }

  track_new(actor, window) {
    let pid = window["blur_provider_pid"] || this.pid++;
    if (!this.actorMap.has(pid)) {
      actor["blur_provider_pid"] = pid;
      window["blur_provider_pid"] = pid;
      this.actorMap.set(pid, actor);
      this.windowMap.set(pid, window);
      this.connections.connect(actor, "destroy", (window_actor) => {
        this.actor_destroyed(window_actor);
      });
      this.connections.connect(window, "unmanaged", (...args) =>
        this.window_unmanaged(...args)
      );
      this.update_blur(window, pid);
    }
  }

  cleanup_windows() {
    this.windowMap.forEach((value, key) => {
      this.cleanup_window(key);
    });
  }

  cleanup_actors() {
    this.actorMap.forEach((value, key) => {
      this.cleanup_actor(key);
    });
  }

  focus_changed() {
    if (this.blurActorMap.size > 0) {
      Meta.later_add(Meta.LaterType.BEFORE_REDRAW, () => this.fix_blur());
    }
  }

  blur_setting_changed() {
    this.blurActorMap.forEach((value, k) => {
      this.update_blur(this.windowMap.get(k), k);
    });
  }

  cleanup_window(pid) {
    this.windowMap.delete(pid);
    try {
      this.cleanup_actor(pid);
    } catch (e) {}
    try {
      this.remove_blur(pid);
    } catch (e) {}
  }

  cleanup_actor(pid) {
    if (this.blurActorMap.has(pid)) {
      this.remove_blur(pid);
    }
    this.windowMap.delete(pid);

    this.on_actor_destroyedMap.delete(pid);
    this.actorMap.delete(pid);
  }

  fix_blur() {
    this.blurActorMap.forEach((blurActor, pid) => {
      let actor = this.actorMap.get(pid);
      this.set_blur_behind(blurActor, actor);
    });
  }

  window_unmanaged(meta_window) {
    this._log("window_unmanaged");
    try {
      let pid = meta_window.blur_provider_pid;
      this.cleanup_window(pid);
    } catch (e) {}
  }

  actor_destroyed(window_actor) {
    let pid = window_actor.blur_provider_pid;
    this.cleanup_actor(pid);
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

  disable() {
    this._log("removing blur from applications");

    try {
      this.cleanup_actors();
    } catch (e) {}
    try {
      this.cleanup_windows();
    } catch (e) {}
    this.connections.disconnect_all();
  }

  show() {}

  hide() {}

  _log(str) {
    log(`[Blur my Shell] ${str}`);
  }
};
