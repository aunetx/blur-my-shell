# GNOME Shell Extension - Blur my Shell

[<img src="https://github.com/aunetx/files_utils/raw/master/get_it_on_gnome_extensions.png" height="100" align="right">](https://extensions.gnome.org/extension/3193/blur-my-shell/)

[![License](https://img.shields.io/github/license/aunetx/blur-my-shell)](https://github.com/aunetx/blur-my-shell/blob/master/LICENSE)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/aunetx/blur-my-shell)](https://github.com/aunetx/blur-my-shell/releases/latest)
[![Weblate project translated](https://hosted.weblate.org/widgets/blur-my-shell/-/blur-my-shell/svg-badge.svg)](https://hosted.weblate.org/engage/blur-my-shell/)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/aunetx)](https://github.com/sponsors/aunetx)

A GNOME Shell extension that adds a blur look to different parts of the GNOME Shell, including the top panel, dash and overview.

[<img src="https://hosted.weblate.org/widgets/blur-my-shell/-/blur-my-shell/multi-auto.svg" align="right">](https://hosted.weblate.org/engage/blur-my-shell/)

---

***Notice***

I (aunetx) am currently quite busy and I won't be able to do a lot of changes in this extension for the following months (probably until fall 2023)... You can consider this extension in low maintenance mode, I will still do important releases (for GNOME 44 etc) but no new features for the moment, and I won't be able to reply to every openend issue (even though I read them all in case).

Especially, consider the application blur to be in alpha state, because it is even broken for me so I don't think it works for anybody else... If someone wants to spend time fixing it, I will gladly merge pull requests. The dash-to-dock blur seems quite broken too, although I don't even know to what extent.

I am deeply sorry about all the problems that may arise, do not hesitate to open pull requests if needed and I will try to find motivation to answer them at some point :)

Sincerely, Aurélien

---

Functionalities:

- apply a blur effect to different components of the shell:
  - panel — compatible with [Dash to Panel](https://github.com/home-sweet-gnome/dash-to-panel) and [Hide Top Bar](https://github.com/mlutfy/hidetopbar)
  - overview
  - [Dash to Dock](https://github.com/micheleg/dash-to-dock) — however you can't have rounded corners
  - application folders background
  - workspace separation — useful with [Desktop Cube](https://extensions.gnome.org/extension/4648/desktop-cube/)
  - window selector for screenshot
  - lockscreen — to customize the already existing blur
  - [Window List](https://extensions.gnome.org/extension/602/window-list/) extension
- applications can be blurred too — see [Application blurring](https://github.com/aunetx/blur-my-shell#application-blurring)
- panel blur can be deactivated when a window is near it, for example in fullscreen
- components have either a static or a dynamic blur:
  - static blur (generated once) is faster and more stable, used for Overview, Lockscreen, Screenshot
  - dynamic blur (generated each frame) is more adapted to widgets which have components behind them, although it contains artifacts; used for Applications, Dash to Dock, Application folders, Window List
  - the Panel can be configured to either use static or dynamic mode; I personally prefer static blur
  - to prevent the artifacts from appearing with dynamic blur, the option Hack level permits you to select a behaviour:
    - High performances totally disables the optimisations, making the blur look broken sometimes; but that can be mitigated when animations and windows shadows are disabled
    - High quality fixes the blur as much as it can, at the expense of some performance penalty; but not more than 0.5% of CPU on my middle-range i5 so the difference may be unnoticeable
    - Default is a mix of both, and quite recommended overall
- components using Static blur can also be added:
  - a noise effect, which can help to either prevent color bending in older monitors, or for aesthetic purpose
  - a color overlay, which can help to either increase readability, or... for aesthetic purpose :)
- and everything is configurable, for every component separately if wanted!

Blur my Shell is guaranteed to be compatible, in the sense of at least not to mess around, with the following extensions:

- [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/) (configurable from Dash to Dock page)
- [Dash to Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/) (configurable from Panel page)
- [Window List](https://extensions.gnome.org/extension/602/window-list/) (configurable from Other page)
- [Hide Top Bar](https://extensions.gnome.org/extension/545/hide-top-bar/) (configurable from dedicated switch in Panel page)
- [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)
- [Panel Corners](https://extensions.gnome.org/extension/4805/panel-corners/), although corners can't be blurred
- [Burn my Windows](https://extensions.gnome.org//extension/4679/burn-my-windows/), although nothing is blurred either

## Screenshots

![Blurred Overview](https://user-images.githubusercontent.com/38633812/116588850-779beb80-a935-11eb-8f2f-81bcd46fe694.png)

![Blurred Top Panel](https://user-images.githubusercontent.com/38633812/116588885-81bdea00-a935-11eb-9c80-c97716369b7c.png)

![Screenshot from 2022-05-19 00-03-27](https://user-images.githubusercontent.com/31563930/169163355-7da05dbb-7d93-41fe-8c4d-770ffb7568af.png)

## Participate

If you with to help me with this extension, there are quite a lot you can do!

### Translations

You can help to translate the extension into your language, either by directly opening a pull request with the additions you've made, or by using [Weblate](https://hosted.weblate.org/engage/blur-my-shell/)!

### Development

To install the extension from source:

```sh
git clone https://github.com/aunetx/blur-my-shell
cd blur-my-shell
make install
```

You will then need to reload GNOME shell, for example by login out and in again, or under Xorg, `alt+f2` and type `r`.

To debug the extension, you can use Looking Glass (`alt+f2`, type `lg`); I stored the extension object in `global.blur_my_shell`.

To see the extension logs, you can use:

```sh
# for debug logs (when Debug is activated in preferences)
sudo journalctl /usr/bin/gnome-shell | grep Blur my Shell

# for crash logs in GNOME shell
sudo journalctl /usr/bin/gnome-shell | grep blur-my-shell

# for crash logs in the extension's preferences
sudo journalctl /usr/bin/gjs | grep blur-my-shell
```

Just don't hesitate to open issues and pull requests, and sorry if I take some time to answer!

### Donations

If you want to sponsor me, well thank you very much!

You can use either [GitHub Sponsors](https://github.com/sponsors/aunetx) or [Ko-fi](https://ko-fi.com/aunetx); and don't hesitate to ask for more specialized support if you need to!

## Advanced

### Application Blurring

Blur my Shell now supports providing blur to applications (formerly [blur-provider](https://github.com/CorvetteCole/blur-provider)).

This is a beta functionnality, however you can test it by either:

- entering the application's class name in the whitelist in the preferences
  - under Xorg, you can type `xprop|grep WM_CLASS`, click on the app and paste the last name on the whilelist field
- setting the Mutter hint `blur-provider` to test it, it will be resetted when the session is closed
  - under Xorg, you can do it by typing `xprop -f _MUTTER_HINTS 8s -set _MUTTER_HINTS blur-provider=sigma:60,brightness:0.6`, and with the sigma and brightness you want
- integrating it with your application if you're the developper
  - you must set the window's property `_MUTTER_HINTS` to `blur-provider=sigma:...,brightness:...`; if you do not set them the application will use default blurring settings from Blur my Shell
  - for Electron applications, you can try building it with [Glasstron Clarity](https://www.npmjs.com/package/glasstron-clarity)

### Force overview blur update

In case you have problems with your dynamic timed wallpaper not being updated due to using third-party process to change the wallpaper, you can force the overview blur to be updated with the command:

```sh
gsettings set org.gnome.desktop.background picture-opacity 99 && gsettings set org.gnome.desktop.background picture-opacity 100
```

## Versions support

The current extension supports these GNOME Shell versions:

- 44 -- `master` branch
- 43 -- `master` branch
- 42 -- `master` branch

Up to version 29, Blur my Shell supports GNOME Shell versions:

- 41 -- `v29` tag
- 40 -- `v29` tag

Older GNOME Shell versions are supported up to Blur my Shell version 6, and by versions 17, 19 and 22:

- 3.38 -- `pre_40` branch
- 3.36 -- `pre_40` branch

## Special thanks

<img src="https://github.com/aunetx/files_utils/raw/master/blur-my-shell@4x.png" height="128" align="right">

Much much love to:
- @swyknox for the awesome icon!
- @CorvetteCole for his awesome contributions, especially for the applications blur :p
- every contributor, and even those who open these ugly issues!!! Because that's maybe the most important of it all :)

Of course, I am really grateful to the people sponsoring my work, it is really cool to be supported like this!

And lastly, thank you, kind visitor -- this is a fun project to manage :)

## License

This program is distributed under the terms of the GNU General Public License, version 3 or later.
