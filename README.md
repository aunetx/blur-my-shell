# GNOME Shell Extension - Blur my Shell

[<img src="https://github.com/aunetx/files_utils/raw/master/get_it_on_gnome_extensions.png" height="100" align="right">](https://extensions.gnome.org/extension/3193/blur-my-shell/)

A GNOME Shell extension that adds a blur look to different parts of the GNOME Shell, including the top panel, dash and overview.

Functionnalities:

- blur dash with opacity prefs
- blur panel
- blur overview
- blur appfolders
- change lockscreen blur settings
- change appgrid's folders background
- choose between static blur (generated once) and dynamic blur (generated each frame)
- change performances settings

This extension is guaranteed to be compatible with the following extensions:

- [Dash to Dock](https://github.com/micheleg/dash-to-dock) (from dash blur switch)
- [Dash to Panel](https://github.com/home-sweet-gnome/dash-to-panel) (from panel blur switch)
- [Window List](https://extensions.gnome.org/extension/602/window-list/) (from dedicated switch)


## Screenshots

Blurred Overview:
![Blurred Overview](https://user-images.githubusercontent.com/38633812/116588850-779beb80-a935-11eb-8f2f-81bcd46fe694.png)

Blurred Top Panel:
![Blurred Top Panel](https://user-images.githubusercontent.com/38633812/116588885-81bdea00-a935-11eb-9c80-c97716369b7c.png)

Preferences:
![Preferences](https://user-images.githubusercontent.com/31563930/130880374-4345abd9-2ed0-4f97-95b3-66d9039395e1.png)

## Known bugs

### Note

This extension can be buggy, as the gnome-shell's blur implementation is quite flawed in some ways.

To entirely remove artifacts from the top panel, you can use static blur with the appropriate switch, **use static blur**.

Moreover, if you don't use static blur, selecting *no artifacts* in the settings allows the blur to regenerate itself a lot better, at the expense of CPU time (but cannot currently tell the difference, less than 0.5% CPU on my middle-range i5)

Selecting another profile might be enough (especially if you have disabled animations and/or windows borders), feel free to test!

### List of bugs

- artifacts on blurred parts [gnome shell bug](https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857)
- some apps may become transparent, a weird issue...
- cannot create rounded blur (so no rounded dash-to-dock, or panel corners, ...)
- overview blur is transparent on second monitor when using Wayland, sometimes :(
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

### Force overview blur update

In case you have problems with your dynamic timed wallpaper not being updated due to using third-party process to change the wallpaper, you can force the overview blur to be updated with the command:\
`gsettings set org.gnome.desktop.background picture-opacity 99 && gsettings set org.gnome.desktop.background picture-opacity 100`

### Versions support

The current extension supports these GNOME Shell versions:

- 40 -- `master` branch

Older GNOME Shell versions are supported up to Blur my Shell version 6, and by versions 17, 19 and 22:

- 3.38 -- `pre_40` branch
- 3.36 -- `pre_40` branch

## Special thanks

<img src="https://github.com/aunetx/files_utils/raw/master/blur-my-shell@4x.png" height="128" align="right">

Special thanks to @swyknox for the awesome icon!

Many thanks to @CorvetteCole for his awesome contributions, and the upcoming applications blur :p

And an enormous thank you to every contributors, issue openers or simple users -- this is a fun project to manage :)

## License

This program is distributed under the terms of the GNU General Public License, version 2 or later.
