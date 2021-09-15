'use strict';

const { Shell, GLib, Clutter } = imports.gi;
const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Settings = Me.imports.settings;
const Utils = Me.imports.utilities;
const PaintSignals = Me.imports.paint_signals;

const transparent = Clutter.Color.from_pixel(0x00000000);
const FOLDER_DIALOG_ANIMATION_TIME = 200;
const FRAME_UPDATE_PERIOD = 16;

let original_zoomAndFadeIn = null;
let original_zoomAndFadeOut = null;
let sigma = 30;
let brightness = 0.6;

let _zoomAndFadeIn = function () {
    let [sourceX, sourceY] =
        this._source.get_transformed_position();
    let [dialogX, dialogY] =
        this.child.get_transformed_position();

    this.child.set({
        translation_x: sourceX - dialogX,
        translation_y: sourceY - dialogY,
        scale_x: this._source.width / this.child.width,
        scale_y: this._source.height / this.child.height,
        opacity: 0,
    });

    this.set_background_color(transparent);

    let effect = this.get_effect("appfolder-blur");

    effect.sigma = 0;
    Utils.ease_property(effect, 'sigma', 0, sigma, FOLDER_DIALOG_ANIMATION_TIME, FRAME_UPDATE_PERIOD);

    effect.brightness = 1.0;
    Utils.ease_property(effect, 'brightness', 1.0, brightness, FOLDER_DIALOG_ANIMATION_TIME, FRAME_UPDATE_PERIOD);

    this.child.ease({
        translation_x: 0,
        translation_y: 0,
        scale_x: 1,
        scale_y: 1,
        opacity: 255,
        duration: FOLDER_DIALOG_ANIMATION_TIME,
        mode: Clutter.AnimationMode.EASE_OUT_QUAD,
    });

    this._needsZoomAndFade = false;

    if (this._sourceMappedId === 0) {
        this._sourceMappedId = this._source.connect(
            'notify::mapped', this._zoomAndFadeOut.bind(this));
    }
}

let _zoomAndFadeOut = function () {
    if (!this._isOpen)
        return;

    if (!this._source.mapped) {
        this.hide();
        return;
    }

    let [sourceX, sourceY] =
        this._source.get_transformed_position();
    let [dialogX, dialogY] =
        this.child.get_transformed_position();

    this.set_background_color(transparent);

    let effect = this.get_effect("appfolder-blur");

    Utils.ease_property(effect, 'sigma', effect.sigma, 0, FOLDER_DIALOG_ANIMATION_TIME, FRAME_UPDATE_PERIOD);

    Utils.ease_property(effect, 'brightness', effect.brightness, 1.0, FOLDER_DIALOG_ANIMATION_TIME, FRAME_UPDATE_PERIOD);

    this.child.ease({
        translation_x: sourceX - dialogX,
        translation_y: sourceY - dialogY,
        scale_x: this._source.width / this.child.width,
        scale_y: this._source.height / this.child.height,
        opacity: 0,
        duration: FOLDER_DIALOG_ANIMATION_TIME,
        mode: Clutter.AnimationMode.EASE_OUT_QUAD,
        onComplete: () => {
            this.child.set({
                translation_x: 0,
                translation_y: 0,
                scale_x: 1,
                scale_y: 1,
                opacity: 255,
            });
            this.hide();

            this._popdownCallbacks.forEach(func => func());
            this._popdownCallbacks = [];
        },
    });

    this._needsZoomAndFade = false;
}


var AppFoldersBlur = class AppFoldersBlur {
    constructor(connections, prefs) {
        this.connections = connections;
        this.paint_signals = new PaintSignals.PaintSignals(connections);
        this.prefs = prefs;
    }

    enable() {
        this._log("blurring appfolders");

        if (Main.overview._overview.controls._appDisplay._folderIcons.length > 0) {
            this.blur_appfolders();
        }
        this.connections.connect(Main.overview._overview.controls._appDisplay, 'view-loaded', () => {
            this.blur_appfolders();
        })
    }

    blur_appfolders() {
        Main.overview._overview.controls._appDisplay._folderIcons.forEach(icon => {
            icon._ensureFolderDialog();

            if (original_zoomAndFadeIn == null) {
                original_zoomAndFadeIn = icon._dialog._zoomAndFadeIn;
            }
            if (original_zoomAndFadeOut == null) {
                original_zoomAndFadeOut = icon._dialog._zoomAndFadeOut;
            }

            let effect = new Shell.BlurEffect({
                name: "appfolder-blur",
                sigma: sigma,
                brightness: brightness,
                mode: 1
            });
            icon._dialog.remove_effect_by_name("appfolder-blur");
            icon._dialog.add_effect(effect);

            // HACK
            // ! DIRTY PART: hack because `Shell.BlurEffect` does not repaint when shadows are under it
            // ! this does not entirely fix this bug (shadows caused by windows still cause artefacts)
            // ! but it prevents the shadows of the panel buttons to cause artefacts on the panel itself
            // ! note: issue opened at https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (this.prefs.HACKS_LEVEL.get() == 1) {
                this._log("appfolders hack level 1");
                this.paint_signals.disconnect_all();

                Utils.setTimeout(() => {
                    this.paint_signals.connect(Main.overview._overview, effect);
                    this.paint_signals.connect(icon._dialog, effect);
                }, 100);
            } else if (this.prefs.HACKS_LEVEL.get() == 2) {
                this._log("appfolders hack level 2");
                this.paint_signals.disconnect_all();

                Utils.setTimeout(() => {
                    this.paint_signals.connect(Main.overview._overview, effect);
                    this.paint_signals.connect(icon._dialog, effect);
                }, 100);
            } else {
                this.paint_signals.disconnect_all();
            }

            // ! END OF DIRTY PART

            icon._dialog._viewBox.set_style_class_name('app-folder-dialog transparent-app-folder-dialogs-' + 100 * this.prefs.APPFOLDER_DIALOG_OPACITY.get());

            icon._dialog._zoomAndFadeIn = _zoomAndFadeIn;
            icon._dialog._zoomAndFadeOut = _zoomAndFadeOut;
        });
    }

    set_sigma(s) {
        sigma = s;
        if (this.prefs.BLUR_APPFOLDERS.get())
            this.blur_appfolders();
    }

    set_brightness(b) {
        brightness = b;
        if (this.prefs.BLUR_APPFOLDERS.get())
            this.blur_appfolders();
    }

    disable() {
        this._log("removing blur from appfolders");

        if (original_zoomAndFadeIn != null) {
            Main.overview._overview.controls._appDisplay._folderIcons.forEach(icon => {
                if (icon._dialog)
                    icon._dialog._zoomAndFadeIn = original_zoomAndFadeIn;
            });
        }
        if (original_zoomAndFadeOut != null) {
            Main.overview._overview.controls._appDisplay._folderIcons.forEach(icon => {
                if (icon._dialog)
                    icon._dialog._zoomAndFadeOut = original_zoomAndFadeOut;
            });
        }
        Main.overview._overview.controls._appDisplay._folderIcons.forEach(icon => {
            if (icon._dialog) {
                icon._dialog.remove_effect_by_name("appfolder-blur")
                icon._dialog._viewBox.remove_style_class_name('transparent-app-folder-dialogs-' + 100 * this.prefs.APPFOLDER_DIALOG_OPACITY.get());
            }
        });

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.prefs.DEBUG.get())
            log(`[Blur my Shell] ${str}`)
    }
}