# GNOME Shell Extension - Blur my Shell

[<img src="https://github.com/aunetx/files_utils/raw/master/get_it_on_gnome_extensions.png" height="100" align="right">](https://extensions.gnome.org/extension/3193/blur-my-shell/)

[![License](https://img.shields.io/github/license/aunetx/blur-my-shell)](https://github.com/aunetx/blur-my-shell/blob/master/LICENSE)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/aunetx/blur-my-shell)](https://github.com/aunetx/blur-my-shell/releases/latest)
[![Weblate project translated](https://hosted.weblate.org/widgets/blur-my-shell/-/blur-my-shell/svg-badge.svg)](https://hosted.weblate.org/engage/blur-my-shell/)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/aunetx)](https://github.com/sponsors/aunetx)

A GNOME Shell extension that adds a blur look to different parts of the GNOME Shell, including the top panel, dash and overview.

[<img src="https://hosted.weblate.org/widgets/blur-my-shell/-/blur-my-shell/multi-auto.svg" align="right">](https://hosted.weblate.org/engage/blur-my-shell/)

## Functionnalities

- apply a blur effect to different components of the shell:
  - overview
    - uses static blur only, [see here to understand what it means](#static-and-dynamic-blur)
    - you can choose the colour of the components of the overview, to integrate them better with the background
    - blurs the workspace separation too — useful with [Desktop Cube](https://extensions.gnome.org/extension/4648/desktop-cube/)
  - panel — compatible with [Dash to Panel](https://github.com/home-sweet-gnome/dash-to-panel) and [Hide Top Bar](https://github.com/mlutfy/hidetopbar)
    - you can choose between static blur and dynamic blur for the panel
    - you can select the background of the panel itself (above the blur), to force transparency for example
    - in the same settings, panel blur can be deactivated when a window is near it, for example in fullscreen
    - you can deactivate the panel blur automatically when entering the overview if you need it
  - [Dash to Dock](https://github.com/micheleg/dash-to-dock)
    - you can choose between static blur and dynamic blur for Dash to Dock
    - you can configure the background color of the dash itself for it not to interfere with the blur
    - and you can deactivate the blur when entering the overview
  - application folders background
    - uses dynamic blur only
    - you can select the styling of the background of the folder when it is opened
  - window selector when taking a screenshot
    - uses static blur only
  - lockscreen — to customize the already existing blur
    - uses static blur only
  - [Window List](https://extensions.gnome.org/extension/602/window-list/) extension
    - uses dynamic blur only
  - applications
    - uses dynamic blur only for the moment
    - you can select the opacity of the window that is above the blur: a lower opacity means it will be less legible
    - but you can select to make the focused window totally opaque, so that you can enjoy your blur while always having a legible window you work on!
    - you can activate an option to better blur the windows while in overview, although it won't make the blur really good anyway in overview
    - and there are two modes for blurring applications:
      - whitelisting (by default), where only windows that are selected are blurred
      - blacklisting, where every window is blurred, excepted for the selected ones

## Static and dynamic blur

For the difference between static blur and dynamic blur:

- static blur uses a static image of the wallpaper, and applies the effects that are part of a pipeline on it
  - you can create, duplicate, rename, delete the pipelines in the first tab
  - for each pipeline, you can add effects (including gaussian blur, Monte Carlo blur, pixelization, corners... with more coming soon, you can open issues if you have a specific idea!), configure them, reorder and delete them
  - the effects order is important: the first effect in list will be applied... first, which means that if you want to add corners to you pipeline (for the panel or Dash to Dock for example), you need to add it last!
  - the first pipeline (with id “pipeline_default”) is not deletable, but still configurable — if you delete a pipeline that is being used, this is the pipeline that will be switched to
  - even though it is static, this method of applying effects is not always so fast: for example, applying non-native gaussian blur, or Monte Carlo blur with a lot of iterations will make GNOME Shell quite slow while using the overview or switching workspace. This is being worked on, but for the moment you can for example limit yourself to 5 to 10 iterations for the Monte Carlo blur (which looks cool anyway!), and use native gaussian blur (which is very slightly less precise, but that really does not change anything in reality)
- dynamic blur makes the component translucent, and blur directly what is behind it
  - you can only use a gaussian blur for this kind of blurring: this means that it is not possible to add corners, for example
  - you can still configure the gaussian blur to make it look as cool as you want
  - this method of blurring is not very efficient: even though it should not slow down your computer to a halt, using static blur is still prefered when possible
  - the gaussian blur effect that is being used has implementation defects, which make if having artifacts in the form of black rectangles when interacting with things that are close to the effect
  - however, you can remove this problem by selecting a “Hack level" in the “Other" tab in preferences
    - if using “High performances”, then nothing is done to prevent the artifacts
    - if using “Default”, then the blur is updated nearly every time it should be: this removes most artifacts, and induces some performances loss when using the blur effect but while still being usable
    - if using “No artifacts”, then the extension will deactivate clipped redraws in GNOME Shell. This effectively entirely fixes the issue, BUT in return will make your entire computer slower and possibly laggy; even when the blur effect is NOT shown. So I really do not recommend using this option; although it is still included because in the end you are the master of your computer!

## Extensions compatibility

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

![Preferences](https://github.com/aunetx/blur-my-shell/assets/31563930/8596bff3-5e4f-46b4-978f-0297a083df8a)

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

If you want to sponsor me, first of all thank you very much! That really is not a required part of being an user, and other developpers (for quite a lot of projects, them being extensions or GNOME itself) surely merit it more than me!

You can use either [GitHub Sponsors](https://github.com/sponsors/aunetx) or [Ko-fi](https://ko-fi.com/aunetx); and don't hesitate to ask for more specialized support if you need to!

## Versions support

The current extension supports these GNOME Shell versions:

- 46 — `master` branch

Blur my Shell supports older GNOME Shell versions, with different version tags:

- 45 — version 58, `v58` tag
- 44 — version 47, `v47` tag
- 43 — version 47, `v47` tag
- 42 — version 29, `v29` tag
- 41 — version 29, `v29` tag
- 40 — version 29, `v29` tag

Older GNOME Shell versions are supported up to Blur my Shell version 6, and by versions 17, 19 and 22:

- 3.38 — `pre_40` branch
- 3.36 — `pre_40` branch

## Special thanks

<img src="https://github.com/aunetx/files_utils/raw/master/blur-my-shell@4x.png" height="128" align="right">

Much much love to (I hope I did not forget anyone...):

- @yozoon, who is the basis of this work thanks to the [Blyr extension](https://github.com/yozoon/gnome-shell-extension-blyr)
- @a-parhom, who really permitted us to have a good static blur method, and especially to have corners!
- @JugadK who is the person behind using custom effects, and thanks to who you can have a crafted-to-your-will GNOME Shell
- @DaPigGuy who permitted the extension to continue after GNOME 45, by doing the egregious porting work :)
- @CorvetteCole for his awesome contributions, especially for the applications blur :p
- @RichardLuo0 who permitted to change the panel background colour
- @a2leexx who fixed important issues regarding dynamic blur
- @io12 thanks to which applications blurring works well enough for it to be usable
- @Schneegans thanks to whom a lot is coming from actually, because its code is so crystal-clear that it helped me during my development (that is the case of many other extensions developpers by the way!!)
- @TomBursch thanks to which panel blur can be deactivated when windows are close to it
- @defkev who helped to work on GNOME 46
- @swyknox for the awesome icon!
- the translators, which I can't name here because there are quite a lot actually!
- every contributor, and even those who open these ugly issues!!! Because that's maybe the most important of it all :)

Of course, I am really grateful to the people sponsoring my work, it is really cool to be supported like this!

And lastly, thank you, kind visitor — this is a fun project to manage :)

## License

This program is distributed under the terms of the GNU General Public License, version 3 or later.
