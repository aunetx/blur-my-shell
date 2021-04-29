# GNOME Shell Extension - Blur my Shell

A GNOME Shell extension that adds a blur look to different parts of the GNOME Shell, including the top panel, dash and overview.

*Blurred Overview:*
![Blurred Overview](https://user-images.githubusercontent.com/38633812/116588850-779beb80-a935-11eb-8f2f-81bcd46fe694.png)
*Blurred Top Panel:*
![Blurred Top Panel](https://user-images.githubusercontent.com/38633812/116588885-81bdea00-a935-11eb-9c80-c97716369b7c.png)

[<img src="https://github.com/aunetx/files_utils/raw/master/get_it_on_gnome_extensions.png" height="100">](https://extensions.gnome.org/extension/3193/blur-my-shell/)

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
git clone https://github.com/aunetx/blur-my-shell
cd blur-my-shell
make install
```

And restart GNOME Shell if needed.

### Versions support

The current extension supports those GNOME Shell versions:

- 40

Older GNOME versions are supported up to Blur my Shell version 6:

- 3.36
- 3.38

## License

This program is distributed under the terms of the GNU General Public License, version 2 or later.
