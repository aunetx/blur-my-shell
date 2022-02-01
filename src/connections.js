'use strict';

const GObject = imports.gi.GObject;


var Connections = class Connections {
    constructor() {
        this.buffer = [];
    }

    /// Process the given actor and id, so that the signal is disconnected when
    /// the actor is destroyed, and that the connected can be managed through
    /// other Connections methods
    process_connection(actor, id) {
        let infos = {
            actor: actor,
            id: id
        };

        if (
            actor.connect &&
            (
                !(actor instanceof GObject.Object) ||
                GObject.signal_lookup('destroy', actor)
            )
        ) {
            let destroy_id = actor.connect('destroy', () => {
                actor.disconnect(id);
                actor.disconnect(destroy_id);

                let index = this.buffer.indexOf(infos);
                if (index >= 0) {
                    this.buffer.splice(index, 1);
                }
            });
        }

        this.buffer.push(infos);
    }

    /// Add a connection
    ///
    /// Takes as argument:
    /// - an actor, which fires the signal
    /// - a signal (string), which is watched for
    /// - a callback, which is called when the signal is fired
    connect(actor, signal, handler) {
        let id = actor.connect(signal, handler);

        this.process_connection(actor, id);
    }

    /// Add a latent connection if possible, same as connect otherwise
    connect_after(actor, signal, handler) {
        let id = actor.connect_after(signal, handler);

        this.process_connection(actor, id);
    }

    /// Disconnect every connection found for an actor
    disconnect_all_for(actor) {
        let actor_connections = [];

        this.buffer.forEach((infos) => {
            if (infos.actor == actor) {
                actor_connections.push(infos);
            }
        });

        actor_connections.forEach((connection) => {
            // disconnect
            try {
                connection.actor.disconnect(connection.id);
            } catch (e) {
                this._log(`error removing connection: ${e}; continuing`);
            }

            // remove from buffer
            let index = this.buffer.indexOf(connection);
            this.buffer.splice(index, 1);
        });
    }

    /// Disconnect every connection for all actors
    disconnect_all() {
        this.buffer.forEach((connection) => {
            try {
                connection.actor.disconnect(connection.id);
            } catch (e) {
                this._log(`error removing connection: ${e}; continuing`);
            }
        });
        this.buffer = [];
    }

    _log(str) {
        // no need to check if DEBUG here, this._log is only used on error
        log(`[Blur my Shell] ${str}`);
    }
};