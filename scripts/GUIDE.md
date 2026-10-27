# gnome-rounded-blur helper script

Due to various technical difficulties, an additional external library is required to help fix the corners issue found while using dynamic blur. Included in this repo is a script that helps automate the building & installing of the library.

## Installing the library

The library can be installed by running the following command

```
curl https://raw.githubusercontent.com/aunetx/blur-my-shell/refs/heads/master/scripts/rounded_blur_build.sh | bash -s -- -i
```

**Note:** You will need to rerun this script every time GNOME Shell/Mutter is updated because the library needs to be built against the version that you have running on your computer.

**Important:** After installing the library, you must log out of your GNOME session and log back in for GNOME Shell to load it. In some cases, a full system reboot may be necessary.

## Uninstalling the library

The library can be uninstalled by running the following command

```
curl https://raw.githubusercontent.com/aunetx/blur-my-shell/refs/heads/master/scripts/rounded_blur_build.sh | bash -s -- -u
```

  

## For Arch Linux (or any of its derivatives) users

You can get this library by getting it on [the AUR](https://aur.archlinux.org/packages/gnome-rounded-blur). If you have an AUR helper, you can use that to install the library; here are some examples:

- For `paru` users
```
paru -S gnome-rounded-blur
```
- For `yay` users
```
yay -S gnome-rounded-blur
```

## For Fedora (or any of its derivatives, including Atomic-based distros) users

Fedora users can follow the following steps to install the library (Please note that this only applies to Fedora 44; Fedora 45 and newer should check the notes below)

- **REMEMBER TO UNINSTALL THE LIBRARY FIRST IF YOU ALREADY INSTALLED IT VIA THE SCRIPT HERE**. You can uninstall it by following the uninstall command below
- Enable the following copr using this command 
```
sudo dnf copr enable ublue-os/packages
```
- Disable the repo globally to prevent overwriting your main packages
```
sudo dnf config-manager setopt copr:copr.fedorainfracloud.org:ublue-os:packages.enabled=0
```
- Then, install the library using `dnf`
```
sudo dnf -y --enablerepo copr:copr.fedorainfracloud.org:ublue-os:packages install gnome-rounded-blur
```

## For Ubuntu (or any of its derivatives)
An Ubuntu user can follow the following steps to install the library:
- Visit the list of GNOME Rounded Blur packages at https://utile-os-smithy.mailworker.workers.dev/archives?q=blur
- Download `libblur-effect-1.0-1` and `gir1.2-blur-1.0`
- Run `sudo apt install gir1.2-blur-1.0_{version}_amd64.deb` and then `sudo apt install libblur-effect-1.0-1_{version}_amd64.deb`

**Please note that this only applies to Ubuntu 26.04/GNOME 50.** For different versions of Ubuntu, follow the instructions below.

## Notes
- If you want to install this library via the script on Fedora (useful if you are using an experimental version of Fedora), use the following command
  ```
  curl https://raw.githubusercontent.com/aunetx/blur-my-shell/refs/heads/master/scripts/rounded_blur_build.sh | bash -s -- -i -f
  ```
  - Fedora 45 (GNOME 51) users may want to use the command below (once upstream merges this patch, use the command above or install via the copr)
  ```
  curl https://raw.githubusercontent.com/aunetx/blur-my-shell/refs/heads/master/scripts/rounded_blur_build.sh | bash -s -- -i -f -e
  ```
  - Fedora Atomic users may want to manually download the RPM from [here](https://copr.fedorainfracloud.org/coprs/ublue-os/packages/package/gnome-rounded-blur/) and install it manually using `rpm-ostree`
  - Bazzite (or any of the ublue atomic distros) can directly install the library via the following command (Fedora Atomic users, after following the previous step, can use this as well):
  ```
  rpm-ostree install gnome-rounded-blur
  ```
** **
- If you want to install this library on Ubuntu versions other than the one mentioned above, clone and build the package using the ready-made script:
  ```bash
  curl https://raw.githubusercontent.com/aunetx/blur-my-shell/refs/heads/master/scripts/rounded_blur_build.sh | bash -s -- -i
  ```
  - If you want to be able to interact with it using APT, you can clone https://github.com/Proman4713/Utile-OS-debian and navigate into the `gnome-rounded-blur-abstract_any` (or any later version than `abstract`, if available) directory:
    - Run `sudo apt install devscripts && sudo mk-build-deps -i -r` to install required build dependencies
    - Run `debuild && debuild -T clean`
    - Then run `sudo apt install` on the produced `.deb` packages.

## Build it yourself

You can visit the original repo [here](https://github.com/kancko/gnome-rounded-blur) for a guide on how to build the library yourself. Do keep in mind that

- In order to build the library, you will need to install the following dependencies: `libglib2.0-dev build-essential gobject-introspection meson`, plus the `libmutter-<N>-dev` package matching the Mutter API version used by your GNOME Shell (for example `libmutter-18-dev` on GNOME 50, `libmutter-17-dev` on GNOME 49, `libmutter-16-dev` on GNOME 48). Do note that these are Ubuntu / Debian package names, so you will need to find the equivalent of these in the distro you are using.
- By default, meson will install the library to `/usr/local`; it's best to install it into a directory using `meson install -C build --destdir <custom_directory>` and then copy it to `/usr` later.

## Acknowledgments

Many thanks to [@kancko](https://github.com/kancko) for coming up with the library and the idea of this in the first place.
