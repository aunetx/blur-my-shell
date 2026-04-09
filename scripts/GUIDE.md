## gnome-rounded-blur helper script

Due to various technical difficulties, an additional external library is required to help fix the corners issue found while using dynamic blur. Included in this repo is a script that help automate the building & installing of the library.

### Installing the library

The library can be installed by running the following command

```
$ curl https://raw.githubusercontent.com/aunetx/blur-my-shell/refs/heads/master/scripts/rounded_blur_build.sh | bash -s -- -i
```

**Note:** You will need to rerun this script everytime GNOME Shell / mutter is updated because the library need to be built against the version that you have running on your computer.

### Uninstalling the library

The library can be uninstalled by running the following command

```
$ curl https://raw.githubusercontent.com/aunetx/blur-my-shell/refs/heads/master/scripts/rounded_blur_build.sh | bash -s -- -u
```

  

### For Arch Linux (or any of its derivatives) users

You can get this library by getting it on [the AUR](https://aur.archlinux.org/packages/gnome-rounded-blur). If you have an AUR helper, you can use that to, here are some example:

- For `paru` users
```
$ paru -S gnome-rounded-blur
```
- For `yay` users
```
$ yay -S gnome-rounded-blur
```

### Build it yourself

You can visit the original repo [here](https://github.com/kancko/gnome-rounded-blur) for guide on how to build the library yourself. Do keep in mind that

- In order to build the library, you will need to install the following dependencies: `libglib2.0-dev build-essential libmutter-14-dev gobject-introspection`, do note that these are Ubuntu / Debian packages name so you will need to find the equivalent of these in the distro you are using.
- By default, meson will install the library to `/usr/local`, it's best to install it into a directory using `meson install -C build --destdir <custom_directory>` and then copy it to `/usr` later.

### Acknowledgments

Much thanks to [@kancko](https://github.com/kancko) for coming up with the library and the idea of this in the first place.