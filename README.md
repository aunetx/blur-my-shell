# GNOME Shell Extension - Blur Me

A GNOME Shell extension that adds a blur look to different parts of the GNOME Shell, including the top panel, dash and overview, and Applications.

![widget-factory-dark](images/widget-factory-dark.png?raw=true)
*blurred applications* With [Materia Transparent](https://github.com/ckissane/materia-theme-transparent)

![Capture d’écran de 2021-04-21 23-59-06](https://user-images.githubusercontent.com/31563930/115626495-dc37c480-a2fd-11eb-8066-002dee4b5159.png)
*blurred top panel*
![Capture d’écran de 2021-04-21 23-59-11](https://user-images.githubusercontent.com/31563930/115626626-10ab8080-a2fe-11eb-89a5-7392cbe7c2f8.png)
*blurred overview*

[<img src="https://github.com/aunetx/files_utils/raw/master/get_it_on_gnome_extensions.png" height="100">](https://extensions.gnome.org/extension/4236/blur-me/)

## Known bugs

### Note

This extension can be buggy, as the gnome-shell's blur implementation is quite flawed in some ways.

To entirely remove artifacts from the top panel, you can use static blur with the appropriate switch, **use static blur**.

Moreover, selecting *no artifacts* in the settings allows the blur to regenerate itself a lot better, at the expense of CPU time (adds ~3% CPU usage for the gnome-shell process in my old Thinkpad).\
**note: in Gnome 40, selecting this option is not possible for the moment**

Selecting another profile might be enought (especially if you have disabled animations), feel free to test!

### List of bugs

- artifacts on blurred parts [gnome shell bug](https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857)
- some apps may become transparent, a weird issue...
- cannot create rounded blur
- etc (see in *issues*)

If you find other bugs, please report them!

## Advanced

### Install from source

To install the latest version (though maybe unstable), use the makefile:

```sh
git clone https://github.com/ckissane/blur-me
cd blur-me
make install
```

And restart GNOME Shell if needed.

### Versions support

The current extension supports those GNOME Shell versions:

- 40

## License

This program is distributed under the terms of the GNU General Public License, version 2 or later.
