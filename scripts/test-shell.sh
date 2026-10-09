#!/bin/sh

set -eu

uuid=$1
archive=$2
mode=${3:-auto}

if [ "$mode" = "auto" ]; then
    if [ -z "${WAYLAND_DISPLAY:-}${DISPLAY:-}" ]; then
        mode=native
    elif gnome-shell --help 2>&1 | grep -q -- '--devkit'; then
        mode=devkit
    else
        mode=nested
    fi
fi

case "$mode" in
    native) set -- --wayland --display-server ;;
    devkit) set -- --devkit ;;
    nested) set -- --nested --wayland ;;
    *) echo "Invalid mode. Use auto, native or devkit/nested." >&2; exit 1 ;;
esac

test_root=$(mktemp -d)
trap 'rm -rf -- "$test_root"' EXIT

export XDG_CONFIG_HOME="$test_root/config"
export XDG_CACHE_HOME="$test_root/cache"
export XDG_DATA_HOME="$test_root/data"
export XDG_STATE_HOME="$test_root/state"
export GSETTINGS_BACKEND=keyfile

extension_dir="$XDG_DATA_HOME/gnome-shell/extensions/$uuid"
mkdir -p "$XDG_CONFIG_HOME" "$XDG_CACHE_HOME" "$XDG_STATE_HOME" "$XDG_DATA_HOME/applications" "$extension_dir"
unzip -q "$archive" -d "$extension_dir"
glib-compile-schemas "$extension_dir/schemas"

# add BMS settings to dock
cat > "$XDG_DATA_HOME/applications/blur-my-shell-settings.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=Blur My Shell Settings
Icon=org.gnome.Shell.Extensions
Exec=gnome-extensions prefs $uuid
Terminal=false
EOF
gsettings set org.gnome.shell favorite-apps "$(gsettings get org.gnome.shell favorite-apps \
    | sed "s/\[/['blur-my-shell-settings.desktop', /")"
gsettings set org.gnome.shell welcome-dialog-last-shown-version 999 # hide welcome dialog
gsettings --schemadir "$extension_dir/schemas" set org.gnome.shell.extensions.blur-my-shell debug true
gsettings set org.gnome.shell enabled-extensions "['$uuid']"

if [ "$mode" != "native" ]; then
    export MUTTER_DEBUG_DUMMY_MODE_SPECS=1500x1000
    export MUTTER_DEBUG_DUMMY_MONITOR_SCALES=1
fi

env GNOME_SHELL_SLOWDOWN_FACTOR=2 \
    dbus-run-session -- sh scripts/test-shell-session.sh "$uuid" "$@"
