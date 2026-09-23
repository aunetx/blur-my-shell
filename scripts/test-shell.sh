#!/bin/sh

set -eu

uuid=$1
shift

gnome-shell "$@" &
shell_pid=$!

cleanup() {
    kill "$shell_pid" 2>/dev/null || true
    wait "$shell_pid" 2>/dev/null || true
}

trap cleanup EXIT HUP INT TERM

gdbus wait --session --timeout 30 org.gnome.Shell

attempt=0
while ! gnome-extensions info "$uuid" >/dev/null 2>&1; do
    attempt=$((attempt + 1))
    if [ "$attempt" -ge 300 ]; then
        exit 1
    fi
    sleep 0.1
done

gnome-extensions enable "$uuid"
wait "$shell_pid"
