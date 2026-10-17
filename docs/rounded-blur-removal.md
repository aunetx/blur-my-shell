# Removing the old rounded-blur library

Blur my Shell handles rounded corners without gnome-rounded-blur. Preferences
shows a dismissible notice when the old Blur-1.0 typelib is detected. Dismissing
it does not remove files. Check whether another extension needs the library
before removing it; keeping it installed does not affect Blur my Shell.

## Package-managed installations

Remove `gnome-rounded-blur` with the package manager used to install it:

- Fedora: `sudo dnf remove gnome-rounded-blur`
- Fedora Atomic layered package: `rpm-ostree uninstall gnome-rounded-blur`
- Arch: `sudo pacman -R gnome-rounded-blur`

Review the proposed changes before confirming. Do not use the old helper or
delete package-owned files manually for these installations.

## Installations made with the old helper

Download and review the [previous helper script](https://github.com/aunetx/blur-my-shell/blob/f69c69e8693bfe1220bf315774fa3b9d30bed940/scripts/rounded_blur_build.sh).
The notice's “Copy command” button copies the following command. It downloads
the pinned helper and only runs it if the download succeeds:

```sh
curl -fLO https://raw.githubusercontent.com/aunetx/blur-my-shell/f69c69e8693bfe1220bf315774fa3b9d30bed940/scripts/rounded_blur_build.sh &&
bash rounded_blur_build.sh -u
```

This historical helper supports Debian/Ubuntu and Fedora source installations.
It requests administrator access and removes the library's installed files.
It is not a package-manager uninstaller.

## Other source installations

Use `sudo ninja -C build uninstall` from the original source directory if you
kept its Meson build directory. Otherwise, use that build's install log to
identify its files; do not remove whole system library directories or guess
paths from another installation.

Log out and back in after removal. Blur my Shell never runs uninstall commands
automatically.
