import GObject from 'gi://GObject';

function supports_destroy_signal(object) {
    const gtype = object?.constructor?.$gtype;
    return gtype && GObject.signal_lookup('destroy', gtype) !== 0;
}

export const Connections = class Connections {
    constructor() {
        this.records = new Map();
    }

    connect(object, signals, handler) {
        const names = Array.isArray(signals) ? signals : [signals];
        const record = this.get_record(object);
        const ids = [];

        for (const signal of names) {
            const id = object.connect(signal, handler);
            record.ids.add(id);
            ids.push(id);
        }
        return Array.isArray(signals) ? ids : ids[0];
    }

    get_record(object) {
        let record = this.records.get(object);
        if (record)
            return record;

        record = {
            ids: new Set(),
            destroy_id: null,
        };
        this.records.set(object, record);

        if (supports_destroy_signal(object))
            record.destroy_id = object.connect('destroy', () => {
                this.records.delete(object);
                record.ids.clear();
                record.destroy_id = null;
            });

        return record;
    }

    disconnect_all_for(object) {
        const record = this.records.get(object);
        if (!record)
            return;

        this.records.delete(object);
        for (const id of record.ids)
            this.raw_disconnect(object, id);
        if (record.destroy_id)
            this.raw_disconnect(object, record.destroy_id);
    }

    disconnect_all() {
        for (const object of [...this.records.keys()])
            this.disconnect_all_for(object);
    }

    disconnect(object, id) {
        const record = this.records.get(object);
        if (record)
            record.ids.delete(id);

        this.raw_disconnect(object, id);

        if (record && record.ids.size === 0) {
            this.records.delete(object);
            if (record.destroy_id)
                this.raw_disconnect(object, record.destroy_id);
        }
    }

    raw_disconnect(object, id) {
        try {
            object.disconnect(id);
        } catch (error) {
            this._warn(`error removing connection: ${error}; continuing`);
        }
    }

    _warn(str) {
        console.warn(`[Blur my Shell > connections]  ${str}`);
    }
};
