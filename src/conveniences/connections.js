import GObject from 'gi://GObject';

function has_destroy_signal(object) {
    const gtype = object.constructor.$gtype;
    return gtype && GObject.signal_lookup('destroy', gtype) !== 0;
}

/// An object to easily manage signals. When an object starts being destroyed, every handler but the
/// destroy ones is disconnected from it, so nothing reacts to the signals it still emits while it
/// disposes of itself, and the object is forgotten.
export const Connections = class Connections {
    constructor() {
        this.records = new Map();
    }

    /// Connects the handler to one signal (returning its id) or to an array of signals (returning
    /// an array of ids).
    connect(object, signals, handler) {
        const record = this.get_record(object);
        const ids = [signals].flat().map(signal => {
            const id = object.connect(signal, handler);
            record.ids.set(id, signal);
            return id;
        });
        return Array.isArray(signals) ? ids : ids[0];
    }

    get_record(object) {
        let record = this.records.get(object);
        if (record)
            return record;

        record = { ids: new Map(), destroy_id: 0 };
        this.records.set(object, record);
        if (has_destroy_signal(object))
            record.destroy_id = object.connect('destroy', () => this.release(object));

        return record;
    }

    release(object) {
        const record = this.records.get(object);
        this.records.delete(object);
        record.ids.forEach((signal, id) => {
            if (signal !== 'destroy')
                object.disconnect(id);
        });
    }

    disconnect_all_for(object) {
        const record = this.records.get(object);
        if (!record)
            return;

        this.records.delete(object);
        record.ids.forEach((_, id) => object.disconnect(id));
        if (record.destroy_id)
            object.disconnect(record.destroy_id);
    }

    disconnect_all() {
        [...this.records.keys()].forEach(object => this.disconnect_all_for(object));
    }

    disconnect(object, id) {
        const record = this.records.get(object);
        if (!record?.ids.delete(id))
            return;

        object.disconnect(id);
        if (record.ids.size === 0)
            this.disconnect_all_for(object);
    }
};
