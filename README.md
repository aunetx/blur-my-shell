# GNOME Shell Extension - Blur Me

A GNOME Shell extension to blur:

Applications | Dash | Overview | Dash | Panel | Onscreen Keyboard | & More!

![blurred-applications](images/blurred-applications.png?raw=true)
*blurred applications* With [Materia Transparent](https://github.com/ckissane/materia-theme-transparent)

![blurred-top-panel](images/blurred-top-panel.png?raw=true)
*blurred top panel*
![blurred-overview](images/blurred-overview.png?raw=true)
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
