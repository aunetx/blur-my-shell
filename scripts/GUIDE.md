
## gnome-rounded-blur helper script
Due to various technical difficulties, an additional external library is required to help fix the corners issue found while using dynamic blur. Included in this repo is a script that help automate the building & installing of the library.

### Installing the library
Before running the script, it is necessary to grant it executing permission by using this command
```
$ sudo chmod +x rounded_blur_build.sh
```
After doing that, the library can be install by running the script
```
$ ./rounded_blur_build.sh -i
```
**Note:** You will need to rerun this script everytime GNOME Shell / mutter is updated because the library need to be built against the version that you have running on your computer.
### Uninstalling the library
The library can be uninstall by running the script
```
$ ./rounded_blur_build.sh -u
```

### For Arch Linux (or any of its derivatives) users
You can get this library by getting it on [the AUR](https://aur.archlinux.org/packages/gnome-rounded-blur). If you have an AUR helper, you can use that to, here are some example

 - For `paru` users
```
$ paru -S gnome-rounded-blur
```
 - For `yay` users
```
$ yay -S gnome-rounded-blur
```

### Build it yourself
You can visit the original repo [here](https://github.com/kancko/gnome-rounded-blur) for guide on how to build the library yourself

### Acknowledgments
Much thanks to [@kancko](https://github.com/kancko) for coming up with the library and the idea of this in the first place. 