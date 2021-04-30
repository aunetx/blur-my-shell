'use strict';

const GObject = imports.gi.GObject;

var Connections = class Connections {
    constructor() {
        this.buffer = [];
    }

    process_connection(actor, id) {
        let infos = {
            actor: actor,
            id: id
        };

        if (actor.connect && (!(actor instanceof GObject.Object) || GObject.signal_lookup('destroy', actor))) {
            let destroy_id = actor.connect('destroy', () => {
                actor.disconnect(id);
                actor.disconnect(destroy_id);

                let index = this.buffer.indexOf(infos);
                if (index >= 0) {
                    this.buffer.splice(index, 1)
                }
            })
        }

        this.buffer.push(infos)
    }

    connect(actor, signal, handler) {
        let id = actor.connect(signal, handler);
        this.process_connection(actor, id);
    }

    connect_after(actor, signal, handler) {
        let id = actor.connect_after(signal, handler);

        this.process_connection(actor, id);
    }

    disconnect_all() {
        this.buffer.forEach((connection) => {
            try {
                connection.actor.disconnect(connection.id)
            } catch (e) {
                this._log(`error removing connection: ${e}; continuing`)
            }
        })
        this.buffer = [];
    }

    _log(str) {
        log(`[Blur Me] ${str}`)
    }
}