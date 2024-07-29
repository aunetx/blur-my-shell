import Shell from 'gi://Shell';
import Clutter from 'gi://Clutter';
import Cogl from 'gi://Cogl';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { adjustAnimationTime } from 'resource:///org/gnome/shell/misc/animationUtils.js';

import { PaintSignals } from '../conveniences/paint_signals.js';
// TODO drop Tweener in favour of Clutter's `ease` (will need to extend the blur effect for it)
const Tweener = imports.tweener.tweener;

// TODO: Drop GNOME 46 backwards compatibility
const transparent = Clutter.Color ?
    Clutter.Color.from_pixel(0x00000000) :
    new Cogl.Color({
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
    });
const FOLDER_DIALOG_ANIMATION_TIME = 200;

const DIALOGS_STYLES = [
    "appfolder-dialogs-transparent",
    "appfolder-dialogs-light",
    "appfolder-dialogs-dark"
];

let original_zoomAndFadeIn = null;
let original_zoomAndFadeOut = null;
let sigma;
let brightness;

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

    let blur_effect = this.get_effect("appfolder-blur");

    blur_effect.radius = 0;
    blur_effect.brightness = 1.0;
    Tweener.addTween(blur_effect,
        {
            radius: sigma * 2,
            brightness: brightness,
            time: adjustAnimationTime(FOLDER_DIALOG_ANIMATION_TIME / 1000),
            transition: 'easeOutQuad'
        }
    );

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
};

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

    let blur_effect = this.get_effect("appfolder-blur");
    Tweener.addTween(blur_effect,
        {
            radius: 0,
            brightness: 1.0,
            time: adjustAnimationTime(FOLDER_DIALOG_ANIMATION_TIME / 1000),
            transition: 'easeInQuad'
        }
    );

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
};


export const AppFoldersBlur = class AppFoldersBlur {
    // we do not use the effects manager and dummy pipelines here because we
    // really want to manage our sigma value ourself during the transition
    constructor(connections, settings, _) {
        this.connections = connections;
        this.paint_signals = new PaintSignals(connections);
        this.settings = settings;
    }

    enable() {
        this._log("blurring appfolders");

        brightness = this.settings.appfolder.BRIGHTNESS;
        sigma = this.settings.appfolder.SIGMA;

        let appDisplay = Main.overview._overview.controls._appDisplay;

        if (appDisplay._folderIcons.length > 0) {
            this.blur_appfolders();
        }

        this.connections.connect(
            appDisplay, 'view-loaded', _ => this.blur_appfolders()
        );
    }

    blur_appfolders() {
        let appDisplay = Main.overview._overview.controls._appDisplay;

        if (this.settings.HACKS_LEVEL === 1)
            this._log("appfolders hack level 1");

        appDisplay._folderIcons.forEach(icon => {
            icon._ensureFolderDialog();

            if (original_zoomAndFadeIn == null) {
                original_zoomAndFadeIn = icon._dialog._zoomAndFadeIn;
            }
            if (original_zoomAndFadeOut == null) {
                original_zoomAndFadeOut = icon._dialog._zoomAndFadeOut;
            }

            let blur_effect = new Shell.BlurEffect({
                name: "appfolder-blur",
                radius: sigma * 2,
                brightness: brightness,
                mode: Shell.BlurMode.BACKGROUND
            });

            icon._dialog.remove_effect_by_name("appfolder-blur");
            icon._dialog.add_effect(blur_effect);

            DIALOGS_STYLES.forEach(
                style => icon._dialog._viewBox.remove_style_class_name(style)
            );

            if (this.settings.appfolder.STYLE_DIALOGS > 0)
                icon._dialog._viewBox.add_style_class_name(
                    DIALOGS_STYLES[this.settings.appfolder.STYLE_DIALOGS - 1]
                );

            // finally override the builtin functions
            icon._dialog._zoomAndFadeIn = _zoomAndFadeIn;
            icon._dialog._zoomAndFadeOut = _zoomAndFadeOut;


            // HACK
            //
            //`Shell.BlurEffect` does not repaint when shadows are under it. [1]
            //
            // This does not entirely fix this bug (shadows caused by windows
            // still cause artifacts), but it prevents the shadows of the panel
            // buttons to cause artifacts on the panel itself
            //
            // [1]: https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857

            if (this.settings.HACKS_LEVEL === 1) {
                this.paint_signals.disconnect_all_for_actor(icon._dialog);
                this.paint_signals.connect(icon._dialog, blur_effect);
            } else {
                this.paint_signals.disconnect_all();
            }
        });
    };

    set_sigma(s) {
        sigma = s;
        if (this.settings.appfolder.BLUR)
            this.blur_appfolders();
    }

    set_brightness(b) {
        brightness = b;
        if (this.settings.appfolder.BLUR)
            this.blur_appfolders();
    }

    disable() {
        this._log("removing blur from appfolders");

        let appDisplay = Main.overview._overview.controls._appDisplay;

        if (original_zoomAndFadeIn != null) {
            appDisplay._folderIcons.forEach(icon => {
                if (icon._dialog)
                    icon._dialog._zoomAndFadeIn = original_zoomAndFadeIn;
            });
        }

        if (original_zoomAndFadeOut != null) {
            appDisplay._folderIcons.forEach(icon => {
                if (icon._dialog)
                    icon._dialog._zoomAndFadeOut = original_zoomAndFadeOut;
            });
        }

        appDisplay._folderIcons.forEach(icon => {
            if (icon._dialog) {
                icon._dialog.remove_effect_by_name("appfolder-blur");
                DIALOGS_STYLES.forEach(
                    s => icon._dialog._viewBox.remove_style_class_name(s)
                );
            }
        });

        this.connections.disconnect_all();
    }

    _log(str) {
        if (this.settings.DEBUG)
            console.log(`[Blur my Shell > appfolders]   ${str}`);
    }
};