#!/bin/bash

install_lib(){
	REPO="https://github.com/kancko/gnome-rounded-blur"
	dest_dir="./binary"
	build_dir="/tmp"
	
	echo "--------------------------------------------------------"
	echo "Cloning repo"
	echo "--------------------------------------------------------"
	cd $build_dir
	# Remove current working dir if found
	if [ -d "gnome-rounded-blur" ]; then
		rm -rf gnome-rounded-blur
		git clone $REPO
		cd gnome-rounded-blur;
	else
		git clone $REPO
		cd gnome-rounded-blur;
	fi
	
	# Get mutter version
	MUTTER_SYS_VER=$(mutter --version | grep -o -P '(?<=mutter ).*' | sed -e 's/"//g' -e "s/'//g" -e 's/\..*//g')
	HARDCODE_MUTTER_SYS_VER=$(cat meson.build | grep -o -P '(?<=mutter_req = ).*' | sed -e 's/"//g' -e "s/'//g" -e 's/\..*//g' -e 's/>//g' -e 's/=//g' -e 's/ //g')
	MUTTER_API_REPO_VER=$(cat meson.build | grep -o -P '(?<=mutter_api_version = ).*' | sed -e 's/"//g' -e "s/'//g" -e 's/ //g')
	
	# Edit meson.build to allow builing
	if [[ "$MUTTER_SYS_VER" -ge "$HARDCODE_MUTTER_SYS_VER" ]]; then
		DIFF_VALUE=$(echo "$MUTTER_SYS_VER - $HARDCODE_MUTTER_SYS_VER" | bc)
		DIFF_VALUE_2=$(echo "$MUTTER_API_REPO_VER + $DIFF_VALUE" | bc)
		sed -i -e '0,/'"mutter_api_version = ""$MUTTER_API_REPO_VER"'/{s/'"$MUTTER_API_REPO_VER"'/'"$DIFF_VALUE_2"'/g}' meson.build
	else
		DIFF_VALUE=$(echo "$HARDCODE_MUTTER_SYS_VER - $MUTTER_SYS_VER" | bc)
		DIFF_VALUE_2=$(echo "$MUTTER_API_REPO_VER - $DIFF_VALUE" | bc)
		sed -i -e '0,/'"mutter_req = ""$HARDCODE_MUTTER_SYS_VER"'/{s/'"$HARDCODE_MUTTER_SYS_VER"'/'"$MUTTER_SYS_VER"'/g}' meson.build
		sed -i -e '0,/'"mutter_api_version = ""$MUTTER_API_REPO_VER"'/{s/'"$MUTTER_API_REPO_VER"'/'"$DIFF_VALUE_2"'/g}' meson.build
	fi
	
	install_dep;
	
	echo "--------------------------------------------------------"
	echo "Building the library"
	echo "--------------------------------------------------------"
	meson setup build;
	meson compile -C build;
	
	# meson install the library in the wrong directory, we'll do that ourselves
	echo "--------------------------------------------------------"
	echo "Installing the library"
	echo "--------------------------------------------------------"
	meson install -C build --destdir "$dest_dir"
	sudo cp -rf ./build/binary/usr/local/* /usr/
	
	echo "--------------------------------------------------------"
	echo "For the changes to apply, please log out and then log back in."
	echo "--------------------------------------------------------"
}

uninstall_lib(){
	echo "--------------------------------------------------------"
	echo "Uninstalling"
	echo "--------------------------------------------------------"
	
	sudo rm -rf /usr/include/blur-effect-1.0
	sudo rm /usr/lib/girepository-1.0/Blur-1.0.typelib /usr/lib/pkgconfig/blur-effect-1.0.pc /usr/lib/libblur-effect-1.0.so /usr/lib/libblur-effect-1.0.so.1 /usr/lib/libblur-effect-1.0.so.1.0.0 /usr/share/gir-1.0/Blur-1.0.gir
	
	echo "--------------------------------------------------------"
	echo "For the changes to apply, please log out and then log back in."
	echo "--------------------------------------------------------"
}

# More safety, by turning some bugs into errors.
set -o errexit -o pipefail -o noclobber -o nounset

# ignore errexit with `&& true`
getopt --test > /dev/null && true
if [[ $? -ne 4 ]]; then
    echo 'I’m sorry, `getopt --test` failed in this environment.'
    exit 1
fi

install_dep(){
	echo "Checking environment"
	OS_ID_TYPE=$(cat /etc/os-release | grep -m 1 -o -P '(?<=ID=).*')
	OS_LIKE_ID_TYPE=$(cat /etc/os-release | grep -m 1 -o -P '(?<=ID_LIKE=).*' || true)

	if [[ "$OS_ID_TYPE" = "arch" ]] || [[ "$OS_LIKE_ID_TYPE" = "arch" ]]; then
	 	echo "--------------------------------------------------------"
		echo "Please install this library via the AUR"
		echo "https://aur.archlinux.org/packages/gnome-rounded-blur"
		echo "--------------------------------------------------------"
		sleep 5
		exit 1
	elif [[ "$OS_ID_TYPE" = "debian" ]] || [[ "$OS_LIKE_ID_TYPE" = "debian" ]]; then
		echo "--------------------------------------------------------"
		echo "Installing dependency"
		echo "--------------------------------------------------------"
		sudo apt install git libglib2.0-dev build-essential libmutter-$DIFF_VALUE_2-dev gobject-introspection meson
	elif [[ "$OS_ID_TYPE" = "fedora" ]] || [[ "$OS_LIKE_ID_TYPE" = "fedora" ]]; then
		echo "--------------------------------------------------------"
		echo "Installing dependency"
		echo "--------------------------------------------------------"
		sudo dnf install git glib2-devel @c-development meson mutter-devel gobject-introspection
	else
		echo "--------------------------------------------------------"
		echo "Please manually install the equivalent of libglib2.0-dev build-essential libmutter-$DIFF_VALUE_2-dev gobject-introspection meson on your computer"
		echo "The setup will still proceed and fail if you don't have those installed"
		echo "--------------------------------------------------------"
		sleep 5
	fi
}

help_doc(){
	echo "--------------------------------------------------------"
	echo "gnome-rounded-blur install helper"
	echo "--------------------------------------------------------"
	echo "-i 			Install the library"
	echo "-u			Uninstall the library"
	echo "-h			Help"
}

LONGOPTS=install,uninstall,help
OPTIONS=iuh

# -temporarily store output to be able to check for errors
# -activate quoting/enhanced mode (e.g. by writing out “--options”)
# -pass arguments only via   -- "$@"   to separate them correctly
# -if getopt fails, it complains itself to stderr
PARSED=$(getopt --options=$OPTIONS --longoptions=$LONGOPTS --name "$0" -- "$@") || exit 2
# read getopt’s output this way to handle the quoting right:
eval set -- "$PARSED"

i=n u=n h=n
# now enjoy the options in order and nicely split until we see --
while true; do
    case "$1" in
        -i|--install)
            i=y
            install_lib
            shift
            break
            ;;
				-u|--uninstall)
						k=y
            uninstall_lib
            shift
            break
            ;;
				-h|--help)
						k=y
            help_doc
            shift
            break
            ;;
        --)
            shift
            break
            ;;
        *)
            echo "Programming error"
            exit 3
            ;;
    esac
done

# handle non-option arguments
if [[ $# -ne 1 ]]; then
    echo "$0: A single input file is required."
    exit 4
fi

# echo "all: $A, kernel: $k, gnome-shell: $g"
