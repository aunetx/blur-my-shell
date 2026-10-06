import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import St from 'gi://St';

import { renderCustomStyle } from './custom_colors.js';

// A separately loaded, scoped stylesheet avoids changing actors' inline styles
// or overwriting styles owned by other extensions. Only settings changes create
// CSS; there is no work on the animation or paint path.
export class CustomStyle {
    constructor(kind) {
        if (!['overview', 'appfolders'].includes(kind))
            throw new Error(`Unknown custom style: ${kind}`);
        this._kind = kind;
        this._template = null;
        this._directory = null;
        this._file = null;
        this._theme = null;
        this._themeContext = null;
        this._themeChangedId = 0;
        this._serial = 0;
        this._css = null;
        this._updating = false;
    }

    update(background, text, options = {}) {
        let file = null;
        this._updating = true;
        try {
            if (this._template === null) {
                const source = global.blur_my_shell.dir.get_child('styles')
                    .get_child(`custom-${this._kind}.css`);
                const [success, contents] = source.load_contents(null);
                if (!success)
                    throw new Error('Could not read custom style template');
                this._template = new TextDecoder().decode(contents);
            }

            const css = renderCustomStyle(this._template, background, text, options);
            if (this._file && css === this._css)
                return true;

            if (!this._directory)
                this._directory = GLib.dir_make_tmp('blur-my-shell-colors-XXXXXX');
            file = Gio.File.new_for_path(GLib.build_filenamev([
                this._directory, `${this._kind}-${++this._serial}.css`,
            ]));
            GLib.file_set_contents(file.get_path(), css);

            const context = St.ThemeContext.get_for_stage(global.stage);
            const theme = context.get_theme();
            // Loading the replacement first keeps the old style intact if a
            // stylesheet cannot be loaded. Each file has a new path to prevent
            // the theme from reusing cached CSS after a color change.
            theme.load_stylesheet(file);
            this._remove_current_file();
            this._file = file;
            this._theme = theme;
            this._css = css;

            if (!this._themeChangedId) {
                this._themeContext = context;
                // ThemeContext exposes no "theme" property: its changed
                // signal also fires for stylesheet updates. Compare identities
                // and guard our own update to avoid recursive reloads.
                this._themeChangedId = context.connect('changed', () => {
                    const nextTheme = context.get_theme();
                    if (this._updating || !this._file || nextTheme === this._theme)
                        return;
                    const previousTheme = this._theme;
                    // Set this before loading, which emits changed again.
                    this._theme = nextTheme;
                    try {
                        nextTheme.load_stylesheet(this._file);
                        previousTheme?.unload_stylesheet(this._file);
                    } catch (error) {
                        this._theme = previousTheme;
                        this._warn(error);
                    }
                });
            }
            return true;
        } catch (error) {
            // The existing stylesheet remains usable when a replacement fails.
            if (file)
                this._delete_file(file);
            if (!this._file)
                this.clear();
            this._warn(error);
            return !!this._file;
        } finally {
            this._updating = false;
        }
    }

    clear() {
        if (this._themeChangedId) {
            this._themeContext.disconnect(this._themeChangedId);
            this._themeChangedId = 0;
            this._themeContext = null;
        }
        this._remove_current_file();
        if (this._directory) {
            try {
                Gio.File.new_for_path(this._directory).delete(null);
            } catch (error) {
                this._warn(error);
            }
            this._directory = null;
        }
    }

    _remove_current_file() {
        if (!this._file)
            return;
        try {
            this._theme?.unload_stylesheet(this._file);
        } catch (error) {
            this._warn(error);
        }
        this._delete_file(this._file);
        this._file = null;
        this._theme = null;
        this._css = null;
    }

    _delete_file(file) {
        try {
            file.delete(null);
        } catch (error) {
            this._warn(error);
        }
    }

    _warn(error) {
        console.warn(`[Blur my Shell > custom colors] ${this._kind}: ${error.message}`);
    }
}
