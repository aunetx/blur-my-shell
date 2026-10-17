import Adw from 'gi://Adw';
import GIRepository from 'gi://GIRepository';
import Gtk from 'gi://Gtk';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

const DISMISSED_KEY = 'rounded-blur-notice-dismissed';
const REMOVAL_INSTRUCTIONS = 'https://github.com/aunetx/blur-my-shell/blob/master/docs/rounded-blur-removal.md';

// GIRepository 3.0 has no process-wide default repository anymore
const repository = 'get_default' in GIRepository.Repository
    ? GIRepository.Repository.get_default()
    : new GIRepository.Repository();

// libadwaita 1.6 (GNOME 47) added wide alert dialogs
const HAS_WIDE_ALERT_DIALOGS = Adw.get_minor_version() >= 6;

function has_legacy_blur() {
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
        body: [
            _('Removal is optional. Keep the library if another extension still needs it.'),
            _('Installed through a package manager? Remove the gnome-rounded-blur package with the same package manager. Review its proposed changes before confirming.'),
            _('Installed with the old Blur my Shell helper? The instructions explain how to run its uninstaller.'),
            _('Built from source? Use “sudo ninja -C build uninstall” from the original build directory, or follow its install log. Do not use the helper to remove a package-managed installation.'),
            _('Log out and back in after removal. Blur my Shell will not uninstall anything for you.'),
        ].join('\n\n'),
    });
    if (HAS_WIDE_ALERT_DIALOGS)
        dialog.prefer_wide_layout = true;
    dialog.add_response('close', _('Close'));
    dialog.add_response('open', _('Open instructions'));
    dialog.set_response_appearance('open', Adw.ResponseAppearance.SUGGESTED);
    dialog.set_default_response('open');
    dialog.set_close_response('close');
    dialog.connect('response::open', () =>
        new Gtk.UriLauncher({ uri: REMOVAL_INSTRUCTIONS }).launch(parent.get_root(), null, null)
    );
    dialog.present(parent);
}
