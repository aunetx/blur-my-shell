# GNOME Shell Extension - Blur my Shell

[<img src="https://github.com/aunetx/files_utils/raw/master/get_it_on_gnome_extensions.png" height="100" align="right">](https://extensions.gnome.org/extension/3193/blur-my-shell/)

A GNOME Shell extension that adds a blur look to different parts of the GNOME Shell, including the top panel, dash and overview.

[Want to integrate simple automatic blurring in to your application?](https://github.com/aunetx/blur-my-shell#integrate-in-to-your-application)

Functionalities:

- blur dash with opacity prefs
- blur panel
- blur overview
- blur appfolders
- blur workspaces separation
- blur applications that request it (blur-provider)
- change lockscreen blur settings
- change appgrid's folders background blur intensity
- choose between static blur (generated once) and dynamic blur (generated each frame) for panel blur
- change performances settings

This extension is guaranteed to be compatible with the following extensions:

- [Dash to Dock](https://github.com/micheleg/dash-to-dock) (from dash blur switch)
- [Dash to Panel](https://github.com/home-sweet-gnome/dash-to-panel) (from panel blur switch)
- [Window List](https://extensions.gnome.org/extension/602/window-list/) (from dedicated switch)
- [Hide Top Bar](https://github.com/mlutfy/hidetopbar) (from dedicated option)

## Screenshots

Blurred Overview:
![Blurred Overview](https://user-images.githubusercontent.com/38633812/116588850-779beb80-a935-11eb-8f2f-81bcd46fe694.png)

Blurred Top Panel:
![Blurred Top Panel](https://user-images.githubusercontent.com/38633812/116588885-81bdea00-a935-11eb-9c80-c97716369b7c.png)

Preferences:
![Screenshot from 2022-04-03 00-35-16](https://user-images.githubusercontent.com/31563930/161403582-4cd8ebb9-7ffd-47c9-b4af-f6ddff8348df.png)

## Known bugs

### Note

This extension can be buggy, as the gnome-shell's blur implementation is quite flawed in some ways.

To entirely remove artefacts from the top panel, you can use static blur with the appropriate switch, **use static blur**.

Moreover, if you don't use static blur, selecting *no artefacts* in the settings allows the blur to regenerate itself a lot better, at the expense of CPU time (but cannot currently tell the difference, less than 0.5% CPU on my middle-range i5)

Selecting another profile might be enough (especially if you have disabled animations and/or windows borders), feel free to test!

### List of bugs

- artefacts on blurred parts [gnome shell bug](https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/2857)
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

### Application Blurring

Blur my Shell now supports providing blur to applications (formerly [blur-provider](https://github.com/CorvetteCole/blur-provider)).
Soon, this will allow users to choose applications out of a list to manually apply background blur to.

#### Try it out!

**Method 1**

1. run `xprop -f _MUTTER_HINTS 8s -set _MUTTER_HINTS blur-provider=${sigma-value}`
2. click on the window you want blur applied to (it needs to have transparency for the blur to be visible)

**Method 2**

1. `git clone https://github.com/AryToNeX/Glasstron`
2. `cd Glasstron/test`
3. `npm install && npm test`

#### Integrate in to your application

To request your application to be blurred, you simply need to add a property to your window.

Add one of the below keypairs to property `_MUTTER_HINTS`:
- `blur-provider=-1` to use the default Blur my Shell value, defined by the user
- `blur-provider=15` to select the sigma value yourself, where 15 can be replaced by any number from 0 to 111

You can test this with xprop: `xprop -f _MUTTER_HINTS 8s -set _MUTTER_HINTS blur-provider=15`.

*Infos about `_MUTTER_HINTS` property*

The purpose of the hints is to allow fine-tuning of the Window Manager and Compositor behaviour on per-window basis, and is intended primarily for hints that are plugin-specific.

The property is a list of colon-separated `key=value` pairs. The key names for any plugin-specific hints must be suitably namespaced to allow for shared use; `mutter-` key prefix is reserved for internal use, and must not be used by plugins.

### Force overview blur update

In case you have problems with your dynamic timed wallpaper not being updated due to using third-party process to change the wallpaper, you can force the overview blur to be updated with the command:\
`gsettings set org.gnome.desktop.background picture-opacity 99 && gsettings set org.gnome.desktop.background picture-opacity 100`

### Versions support

The current extension supports these GNOME Shell versions:

- 42 -- `master` branch

Up to version 29, Blur my Shell supports GNOME Shell versions:

- 41 -- `master` branch
- 40 -- `master` branch

Older GNOME Shell versions are supported up to Blur my Shell version 6, and by versions 17, 19 and 22:

- 3.38 -- `pre_40` branch
- 3.36 -- `pre_40` branch

## Special thanks

<img src="https://github.com/aunetx/files_utils/raw/master/blur-my-shell@4x.png" height="128" align="right">

Special thanks to @swyknox for the awesome icon!

Many thanks to @CorvetteCole for his awesome contributions, especially for the applications blur :p

Of course, I am really grateful to the people sponsoring my work, it is really cool to be supported like this!

And an enormous thank you to every contributors, issue openers or simple users -- this is a fun project to manage :)

## License

This program is distributed under the terms of the GNU General Public License, version 2 or later.
