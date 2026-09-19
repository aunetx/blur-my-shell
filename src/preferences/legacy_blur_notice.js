import Adw from 'gi://Adw';
import GIRepository from 'gi://GIRepository';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

const DISMISSED_KEY = 'rounded-blur-notice-dismissed';
const LEGACY_SCRIPT = 'https://github.com/aunetx/blur-my-shell/blob/f69c69e8693bfe1220bf315774fa3b9d30bed940/scripts/rounded_blur_build.sh';
const REMOVAL_COMMAND = `curl -fLO ${LEGACY_SCRIPT.replace('github.com/', 'raw.githubusercontent.com/').replace('/blob/', '/')} &&
bash rounded_blur_build.sh -u`;

export function has_legacy_blur() {
    const repository = GIRepository.Repository.get_default?.() ?? new GIRepository.Repository();
    return repository.enumerate_versions('Blur').includes('1.0');
}

export function initialize_legacy_blur_notice(group, settings) {
    if (settings.get_boolean(DISMISSED_KEY) || !has_legacy_blur())
        return;

    const row = new Adw.ActionRow({
        title: _('Rounded-blur is no longer needed'),
        subtitle: _('Blur my Shell handles rounded corners directly. You can remove the old library if nothing else uses it.'),
        subtitle_lines: 0,
    });
    const instructions = new Gtk.Button({
        label: _('Removal instructions'),
        valign: Gtk.Align.CENTER,
        height_request: 40,
    });
    const dismiss = new Gtk.Button({
        icon_name: 'window-close-symbolic',
        tooltip_text: _('Dismiss'),
        valign: Gtk.Align.CENTER,
        width_request: 40,
        height_request: 40,
        css_classes: ['flat'],
    });
    dismiss.update_property([Gtk.AccessibleProperty.LABEL], [_('Dismiss')]);
    instructions.connect('clicked', () => show_removal_instructions(group));
    dismiss.connect('clicked', () => {
        settings.set_boolean(DISMISSED_KEY, true);
        group.visible = false;
    });
    row.add_suffix(instructions);
    row.add_suffix(dismiss);
    row.activatable_widget = instructions;
    group.add(row);
    group.visible = true;
}

function show_removal_instructions(parent) {
    const dialog = new Adw.AlertDialog({
        heading: _('Removing the old blur library'),
        prefer_wide_layout: true,
        body_use_markup: true,
        body: [
            _('Removal is optional. Keep the library if another extension still needs it.'),
            _('Installed through a package manager? Remove the gnome-rounded-blur package with the same package manager. Review its proposed changes before confirming.'),
            _('Installed with the old Blur my Shell helper? The copied command downloads the <a href="%s">previous helper script</a> and runs its uninstaller. Review the script before running it.').replace('%s', LEGACY_SCRIPT),
            _('Built from source? Use “sudo ninja -C build uninstall” from the original build directory, or follow its install log. Do not use the helper to remove a package-managed installation.'),
            _('Log out and back in after removal. Blur my Shell will not uninstall anything for you.'),
        ].join('\n\n'),
    });
    dialog.add_response('close', _('Close'));
    dialog.add_response('copy', _('Copy command'));
    dialog.set_response_appearance('copy', Adw.ResponseAppearance.SUGGESTED);
    dialog.set_default_response('copy');
    dialog.set_close_response('close');
    dialog.connect('response::copy', () => {
        parent.get_clipboard().set(REMOVAL_COMMAND);
        parent.get_root().add_toast(new Adw.Toast({ title: _('Copied') }));
    });
    dialog.present(parent);
}
