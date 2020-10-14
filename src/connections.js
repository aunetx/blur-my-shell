'use strict';

const GObject = imports.gi.GObject;

var Connections = class Connections {
    constructor() {
        this.buffer = [];
    }

    connect(actor, signal, handler) {
        let id = actor.connect(signal, handler);

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
        log(`[Blur my Shell] ${str}`)
    }
}