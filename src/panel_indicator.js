const { Clutter, GObject, St ,GLib} = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;

const Gettext = imports.gettext.domain("gnome-shell-extensions");
const _ = Gettext.gettext;
const N_ = (x) => x;

const Me = ExtensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
let prefs = new Settings.Prefs();

var BlurWindowMenuItem = GObject.registerClass(
  class BlurWindowMenuItem extends PopupMenu.PopupBaseMenuItem {
    _init(wm_class) {
      super._init({
        style_class: "blur-window-menu-item",
      });
      this._wm_class = wm_class;

      this._label = new St.Label({
        text: wm_class,
        x_expand: true,
        y_align: Clutter.ActorAlign.CENTER,
      });
      this.add_child(this._label);
      this._toggleButton = new St.Button({
        label: "Toggle Blur",
        style_class: "button",
      });
      this._toggleButton.connect("clicked", () => {
        let p = prefs.WINDOW_CLASS_OVERRIDES.get();
        p[wm_class] = p[wm_class] === false;
        prefs.WINDOW_CLASS_OVERRIDES.set(p);
      });
      this.add_child(this._toggleButton);
    }

    destroy() {
      super.destroy();
    }

    activate(event) {
      super.activate(event);
    }
  }
);

const SECTIONS = ["windows"];

let BlurMenu = GObject.registerClass(
  class BlurMenu extends PanelMenu.Button {
    _init() {
      super._init(0.0, _("Toggle Application Blur"));

      let label = new St.Label({
        text: _("Toggle Application Blur"),
        y_expand: true,
        y_align: Clutter.ActorAlign.CENTER,
      });
      this.add_actor(label);

      this._sections = {};

      for (let i = 0; i < SECTIONS.length; i++) {
        let id = SECTIONS[i];
        if (id === "windows") {
          this._sections[id] = new PopupMenu.PopupMenuSection();
          global.display.connect(
            "window-created",
            (_meta_display, meta_window) => {
              this._redisplay(id);
              meta_window.connect("unmanaged", () => {
                this._redisplay(id);
              });
            }
          );
          this._create(id);
          this.menu.addMenuItem(this._sections[id]);
          this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());
        }
      }
    }

    _onDestroy() {
      this.blurManager.destroy();

      super._onDestroy();
    }

    _redisplay(id) {
      this._sections[id].removeAll();

      this._create(id);
    }

    _create(id) {
      if (id === "windows") {
        this._create_windows(id);
      }
    }
    _create_windows(id) {
      let wm_classes_set = new Set();
      for (let wks = 0; wks < global.workspace_manager.n_workspaces; ++wks) {
        let metaWorkspace =
          global.workspace_manager.get_workspace_by_index(wks);
        let windows = metaWorkspace.list_windows();
        windows.forEach((v) => {
          wm_classes_set.add(Utils.get_process_name_from_window(v));
        });
      }
      let wm_classes = [...wm_classes_set];

      for (let i = 0; i < wm_classes.length; i++)
        this._sections[id].addMenuItem(new BlurWindowMenuItem(wm_classes[i]));

      this._sections[id].actor.visible = true;
    }
  }
);

var PanelIndicator = class PanelIndicator {
  constructor(connections) {
      this.connections = connections;
      this._indicator = null;
  }

  enable() {
    if (this._indicator) {
      this._indicator.destroy();
      this._indicator = null;
    }
    this._indicator = new BlurMenu();

    let pos = Main.sessionMode.panel.left.indexOf("appMenu");
    if ("apps-menu" in Main.panel.statusArea) pos++;
    Main.panel.addToStatusArea("blur-menu", this._indicator, pos, "left");
  }

  disable() {
    if (this._indicator) {
      this._indicator.destroy();
      this._indicator = null;
    }
  }

}
