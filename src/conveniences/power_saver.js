import Gio from 'gi://Gio';

function watchPowerProfiles(onChange) {
    let proxy = null;
    let changeId = 0;
    let stopped = false;

    Gio.DBusProxy.new_for_bus(
        Gio.BusType.SYSTEM,
        Gio.DBusProxyFlags.NONE,
        null,
        'net.hadess.PowerProfiles',
        '/net/hadess/PowerProfiles',
        'net.hadess.PowerProfiles',
        null,
        (_source, result) => {
            if (stopped)
                return;

            proxy = Gio.DBusProxy.new_for_bus_finish(result);

            const readProfile = () => {
                const value = proxy.get_cached_property('ActiveProfile')?.deep_unpack();
                if (typeof value !== 'string') {
                    return;
                }

                onChange(value === 'power-saver', value);
            };

            changeId = proxy.connect('g-properties-changed', readProfile);
            readProfile();
        }
    );

    return () => {
        stopped = true;
        if (proxy && changeId)
            proxy.disconnect(changeId);
    };
}

export function is_power_saver(onChange) {
    return watchPowerProfiles((isPowerSaver, profile) => {
        onChange(isPowerSaver, profile);
    });
}
