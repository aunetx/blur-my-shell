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

I (aunetx) have not been able to do a lot of changes to the extension recently because of my studies, work and general state of mind. It is all getting a little easier now, and so I started working on the extension a little bit more. However, there are some major issues with this extension that I do not have the manpower to tackle.

Quite specifically,
- everything that is related to multi-monitor usage cannot be tested by myself as I only have one screen (and that accounts to a LOT of bugs: #40, #94, #23, #288, #298, #370, #274 (maybe?), #345, #408, #233, #465, #363, #469, #476, #486, #496, #457, ...); or monitor in portait mode (#177).\
  By the way, there are **A LOT** of tips in order to get multi-monitor setups more or less working in the issues thread, you can take a look if you need help!
- I find a lot of bugs that are related to extensions touching at the panel hard to be tested because I don't use dash-to-panel (and such extensions), and more generally everything I do concerning the panel makes the implementation dirtier and less bug-proof (that concerns for example #294, #244, #243, ...)
- dash-to-dock is really unstable in term of API (because I treat the implementation of external extensions as an API, that's the only way I can do anything interesting), and so its blurring implementation is not working very well (that concerns for example #231, #440, ...)
- everything related to COSMIC, Pop_os!, ... cannot be either tested or fixed, because I am on Fedora and the extensions/themes really are not compatible with stock GNOME (for example, #256, #117, #474, #276, ...)
- curved corners for the blur. Now that is THE bug, and this is one I cannot do anything about, because... that's not a blur-my-shell bug, and even hardly a GNOME bug: it's just that curved blur effect are not implemented yet in GNOME, and so I can't use it (for example: #8, #248, #336, #183, #383, ...)
- application blur is improving, but still subject to important bugs that I cannot list here as they are changing constantly. I disabled it in default for new users because it visibly causes major problems with multi-monitor setups

As you can see, there are some areas that really *need* work, and on which I *cannot* work. So, I will gladly accept any help in order to fix them, and specially carefully tested pull requests! I will try to tackle most of these issues at some point anyway, but (especially for multi-monitor things and Pop_os! bugs) that may take a lot of time if I am alone.

Thank you still for using this extension,\
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

- 45 -- `master` branch

Blur my Shell supports older GNOME Shell versions, with versions 29 and 47:

- 44 -- version 47, `v47` tag
- 43 -- version 47, `v47` tag
- 42 -- version 29, `v47` tag
- 41 -- version 29, `v29` tag
- 40 -- version 29, `v29` tag

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
