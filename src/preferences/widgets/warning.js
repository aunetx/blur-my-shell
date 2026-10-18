import Gtk from 'gi://Gtk';


export class Warning {
    constructor(row, title, subtitle) {
        this.row = row;
        row.title = title;
        row.subtitle = subtitle;
        this.row.add_prefix(new Gtk.Image({
            icon_name: 'dialog-warning-symbolic',
            css_classes: ['warning'],
        }));
        this.update(false);
    }

    update(visible) {
        this.row.visible = Boolean(visible);
    }
}
