const INHERITED_KEYS = {
    'static-blur': 'profile-static-blur',
    'pipeline': 'profile-pipeline',
    'override-background': 'profile-override-background',
    'background-style': 'profile-background-style',
};

const INHERITED_PROPERTIES = {
    STATIC_BLUR: 'PROFILE_STATIC_BLUR',
    PIPELINE: 'PROFILE_PIPELINE',
    OVERRIDE_BACKGROUND: 'PROFILE_OVERRIDE_BACKGROUND',
    BACKGROUND_STYLE: 'PROFILE_BACKGROUND_STYLE',
};

export const SurfaceSettings = class SurfaceSettings {
    constructor(settings, component_name) {
        this.root = settings;
        this.component_name = component_name;
        this.component = settings[component_name.replaceAll('-', '_')];
        this.settings = new SurfaceSettingsSignals(settings, this.component);
    }

    get USE_GLOBAL() {
        return this.component?.USE_GLOBAL ?? false;
    }

    get STATIC_BLUR() {
        return this.get_inherited('STATIC_BLUR');
    }

    get PIPELINE() {
        return this.get_inherited('PIPELINE');
    }

    get CORNER_RADIUS() {
        return this.component.CORNER_RADIUS;
    }

    get OVERRIDE_BACKGROUND() {
        return this.get_inherited('OVERRIDE_BACKGROUND');
    }

    get BACKGROUND_STYLE() {
        return this.get_inherited('BACKGROUND_STYLE');
    }

    get_inherited(property_name) {
        if (this.USE_GLOBAL && property_name in INHERITED_PROPERTIES)
            return this.root[INHERITED_PROPERTIES[property_name]];

        return this.component[property_name];
    }
};

class SurfaceSettingsSignals {
    constructor(root_settings, component) {
        this.root_settings = root_settings;
        this.component = component;
        this.next_id = 1;
        this.connections = new Map();
    }

    connect(signal, callback) {
        const handlers = [[
            this.component.settings,
            this.component.settings.connect(signal, callback),
        ]];
        const key = signal.startsWith('changed::') ? signal.slice(9) : null;

        if (key in INHERITED_KEYS) {
            handlers.push([
                this.root_settings.settings,
                this.root_settings.settings.connect(`changed::${INHERITED_KEYS[key]}`, callback),
            ]);
            if ('USE_GLOBAL' in this.component)
                handlers.push([
                    this.component.settings,
                    this.component.settings.connect('changed::use-global', callback),
                ]);
        }

        const id = this.next_id++;
        this.connections.set(id, handlers);
        return id;
    }

    disconnect(id) {
        const handlers = this.connections.get(id);
        if (!handlers)
            return;

        handlers.forEach(([settings, signal_id]) => {
            try {
                settings.disconnect(signal_id);
            } catch (e) { }
        });
        this.connections.delete(id);
    }
}
