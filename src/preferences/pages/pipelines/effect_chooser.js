import Adw from 'gi://Adw';
import { gettext as _ } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

import { get_effects_groups, get_supported_effects } from '../../../effects/effects.js';


export function present_effect_chooser(parent, on_chosen) {
    const supported_effects = get_supported_effects(_);
    const page = new Adw.PreferencesPage();
    const toolbar = new Adw.ToolbarView({ content: page });
    toolbar.add_top_bar(new Adw.HeaderBar());
    const dialog = new Adw.Dialog({
        title: _('Add Effect'),
        content_width: 460,
        content_height: 620,
        child: toolbar,
    });

    for (const group_infos of Object.values(get_effects_groups(_))) {
        const group = new Adw.PreferencesGroup({
            title: group_infos.name,
            description: group_infos.description ?? '',
        });
        page.add(group);

        for (const effect_type of group_infos.contains) {
            const effect = supported_effects[effect_type];
            const row = new Adw.ActionRow({
                title: effect.name,
                subtitle: effect.description,
                activatable: true,
            });
            row.connect('activated', () => {
                dialog.close();
                on_chosen(effect_type);
            });
            group.add(row);
        }
    }

    dialog.present(parent);
}
