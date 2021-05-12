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

var OtherBlur = class OtherBlur {
  constructor(connections) {
    this.connections = connections;
    this.effect = new Shell.BlurEffect({
      brightness: default_brightness,
      sigma: default_sigma,
      mode: Shell.BlurMode.BACKGROUND,
    });
    this.windowActorBlurMap = new Map();
    this.conspMap = new Map();
    this.pid = 0;
    this.addNotifInterval = undefined;
    this.keyboardActor = undefined;
    this.fixBlurInterval = Utils.setInterval(() => this.fix_blur(), 1);
  }
  create_blur_actor(pid) {
    let wab = this.windowActorBlurMap.get(pid);
    let meta_window = wab.window;
    let window_actor = wab.actor;
    let cons = this.conspMap.has(pid) ? this.conspMap.get(pid) : undefined;
    let con = cons ? cons : window_actor;

    let blurEffect = new Shell.BlurEffect({
      brightness: this.effect.brightness,
      sigma: this.effect.sigma,
      mode: this.effect.mode,
    });
    // const frame = meta_window.get_frame_rect();
    // const buffer = meta_window.get_buffer_rect();
    const offsetX = 0; //frame.x - buffer.x;
    const offsetY = 0; //frame.y - buffer.y;
    const offsetWidth = 0; //buffer.width - frame.width;
    const offsetHeight = 0; //buffer.height - frame.height;

    let constraintPosX = new Clutter.BindConstraint({
      source: con,
      coordinate: Clutter.BindCoordinate.X,
      offset: offsetX,
    });
    let constraintPosY = new Clutter.BindConstraint({
      source: con,
      coordinate: Clutter.BindCoordinate.Y,
      offset: offsetY,
    });

    let constraintSizeX = new Clutter.BindConstraint({
      source: con,
      coordinate: Clutter.BindCoordinate.WIDTH,
      offset: -offsetWidth,
    });
    let constraintSizeY = new Clutter.BindConstraint({
      source: con,
      coordinate: Clutter.BindCoordinate.HEIGHT,
      offset: -offsetHeight,
    });

    let blurActor = new Clutter.Actor({
      fixedPositionSet: true,
      fixedX: 0,
      fixedY: 0,
    });
    blurActor.add_constraint(constraintPosX);
    blurActor.add_constraint(constraintPosY);
    blurActor.add_constraint(constraintSizeX);
    blurActor.add_constraint(constraintSizeY);

    blurActor.add_effect_with_name("blur-effect", blurEffect);
    wab.blurActor = blurActor;
    if (wab.actor.visible) {
      blurActor.show();
    } else {
      blurActor.hide();
    }
    this.connections.connect(wab.actor, "notify", () => {
      blurActor.remove_constraint(constraintPosX);
      blurActor.remove_constraint(constraintPosY);
      blurActor.remove_constraint(constraintSizeX);
      blurActor.remove_constraint(constraintSizeY);
      constraintPosX = new Clutter.BindConstraint({
        source: con,
        coordinate: Clutter.BindCoordinate.X,
        offset: offsetX,
      });
      constraintPosY = new Clutter.BindConstraint({
        source: con,
        coordinate: Clutter.BindCoordinate.Y,
        offset: offsetY,
      });

      constraintSizeX = new Clutter.BindConstraint({
        source: con,
        coordinate: Clutter.BindCoordinate.WIDTH,
        offset: -offsetWidth,
      });
      constraintSizeY = new Clutter.BindConstraint({
        source: con,
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
      if (wab.blurActor) {
        this.update_blur_actor(pid);
      } else {
        this.init_blur_actor(pid);
      }
    }
  }

  set_blur_behind(blurActor, actor) {
    if (actor.get_parent() === blurActor.get_parent()) {
      actor.get_parent().set_child_below_sibling(blurActor, actor);
    }
  }

  remove_blur(pid) {
    if (this.windowActorBlurMap.has(pid)) {
      let wab = this.windowActorBlurMap.get(pid);
      delete wab.window["blur_provider_pid"];
      wab.blurActor.get_parent().remove_actor(wab.blurActor);
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
      }
    }
  }

  init_blur_actor(pid, get_p) {
    let wab = this.windowActorBlurMap.get(pid);
    if (!wab.blurActor) {
      let blurActor = this.create_blur_actor(pid);
      wab.blurActor = blurActor;
      try {
        if (get_p) {
          get_p(wab.actor)
            .get_parent()
            .insert_child_below(blurActor, get_p(wab.actor));
        } else {
          wab.actor.get_parent().insert_child_below(blurActor, wab.actor);
        }
      } catch (e) {
        global.fai = e;
      }
      blurActor["blur_provider_pid"] = pid;
      let lis = (window_actor) => {
        let pid = window_actor.blur_provider_pid;
        if (this.windowActorBlurMap.has(pid)) {
          let blurActor = this.windowActorBlurMap.get(pid).blurActor;
          if (blurActor) {
            if (window_actor.visible) {
              blurActor.show();
            } else {
              blurActor.hide();
            }
          }
        }
      };
      lis(wab.actor);
      this.connections.connect(wab.actor, "notify", lis);
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
      // this.connections.connect(window, "unmanaged", (meta_window) =>
      //   this.window_unmanaged(meta_window)
      // );
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

  window_created(meta_display, meta_window, getActor) {
    log("other thing created");
    if (!meta_window) {
      this._log("no other thing");
      return;
    }
    try {
      let window_actor = getActor
        ? getActor(meta_window)
        : meta_window.get_compositor_private();
      this.track_new(window_actor, meta_window);
    } catch (e) {
      this._log("failed to get actor for " + meta_window);
    }
  }
  enable() {
    this._log("blurring other");
    if (Main.keyboard.keyboardActor) {
      this.conspMap.set(this.pid, Main.keyboard.keyboardActor);
      this.window_created(undefined, Main.keyboard, (x) => {
        let c = x.keyboardActor.get_children();
        return c[Math.min(c.length - 1,1)];
      });
    }
    this.keyboardActor = Main.keyboard.keyboardActor;
    this.connections.connect(Main.uiGroup, "actor-added", (_, actor) => {
      if (Main.keyboard.keyboardActor && !this.keyboardActor) {
        this.conspMap.set(this.pid, Main.keyboard.keyboardActor);
        this.window_created(undefined, Main.keyboard, (x) => {
          let c = x.keyboardActor.get_children();
          return c[Math.min(c.length - 1,1)];
        });

        this.keyboardActor = Main.keyboard.keyboardActor;
      }
    });
    Main.createLookingGlass();
    this.conspMap.set(this.pid, Main.lookingGlass.actor);
    this.window_created(undefined, Main.lookingGlass, (x) => {
      return x.actor;
    });
    let addMC = () => {
      if (Main.messageTray && Main.messageTray._bannerBin) {
        let cc = Main.messageTray._bannerBin.get_children();
        for (let c of cc) {
          let wi = c.get_children()[0];
          let pid = wi["blur_provider_pid"] || this.pid;
          this.conspMap.set(pid, wi);
          this.window_created(undefined, wi, (x) => {
            return x.get_children()[0].actor;
          });
        }
      }
    };
    this.addNotifInterval = Utils.setInterval(() => {
      addMC();
    }, 1);
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
    this._log("removing blur from other");

    try {
      this.cleanup_things();
    } catch (e) {}
    if (this.addNotifInterval !== undefined) {
      Utils.clearInterval(this.addNotifInterval);
    }
    this.connections.disconnect_all();
  }

  show() {}

  hide() {}

  _log(str) {
    log(`[Blur Me] ${str}`);
  }
};
