#!/bin/bash

check_env(){
	OS_ID_TYPE=$(cat /etc/os-release | grep -m 1 -o -P '(?<=ID=).*')
	OS_LIKE_ID_TYPE=$(cat /etc/os-release | grep -m 1 -o -P '(?<=ID_LIKE=).*' || true)

	if [[ "$OS_ID_TYPE" = "arch" ]] || [[ "$OS_LIKE_ID_TYPE" = "arch" ]]; then
		if [[ $i = "y" ]] && [[ $u = "n" ]]; then		
			echo "--------------------------------------------------------"
			echo "Please do not use this script to install gnome-rounded-blur on Arch Linux"
			echo "To install this library on Arch, please do so via the AUR"
			echo "https://aur.archlinux.org/packages/gnome-rounded-blur"
			echo "--------------------------------------------------------"
		elif [[ $i = "n" ]] && [[ $u = "y" ]]; then	
			echo "--------------------------------------------------------"
			echo "Please do not use this script to uninstall gnome-rounded-blur on Arch Linux"
			echo "To uninstall this library on Arch, please use the following command"
			echo "< sudo pacman -R gnome-rounded-blur >"
			echo "--------------------------------------------------------"
		fi
		sleep 5
		exit 1
	fi
}

install_git(){
	if ! command -v git >/dev/null 2>&1
	then
		if [[ "$OS_ID_TYPE" = "debian" ]] || [[ "$OS_LIKE_ID_TYPE" = "debian" ]]; then
			echo "--------------------------------------------------------"
			echo "Installing git"
			echo "--------------------------------------------------------"
			sudo apt -y install git 
		elif [[ "$OS_ID_TYPE" = "fedora" ]] || [[ "$OS_LIKE_ID_TYPE" = "fedora" ]]; then
			echo "--------------------------------------------------------"
			echo "Installing git"
			echo "--------------------------------------------------------"
			sudo dnf -y install git
		else
			echo "--------------------------------------------------------"
			echo "Please manually install git using your distro's package manager"
			echo "--------------------------------------------------------"
			sleep 5
			exit 1
		fi
	fi

	# Ubuntu doesn't have this installed for some reason.
	if [[ "$OS_ID_TYPE" = "debian" ]] || [[ "$OS_LIKE_ID_TYPE" = "debian" ]]; then	
		if ! command -v mutter >/dev/null 2>&1
		then
			echo "--------------------------------------------------------"
			echo "Installing mutter"
			echo "--------------------------------------------------------"
			sudo apt -y install mutter
		fi
	fi
}

install_dep(){
	if [[ "$OS_ID_TYPE" = "debian" ]] || [[ "$OS_LIKE_ID_TYPE" = "debian" ]]; then
		echo "--------------------------------------------------------"
		echo "Installing dependency"
		echo "--------------------------------------------------------"
		sudo apt -y install libglib2.0-dev build-essential libmutter-$DIFF_VALUE_2-dev gobject-introspection meson
	elif [[ "$OS_ID_TYPE" = "fedora" ]] || [[ "$OS_LIKE_ID_TYPE" = "fedora" ]]; then
		echo "--------------------------------------------------------"
		echo "Installing dependency"
		echo "--------------------------------------------------------"
		sudo dnf -y install glib2-devel @c-development meson mutter-devel gobject-introspection
	else
		echo "--------------------------------------------------------"
		echo "Please manually install the equivalent of libglib2.0-dev build-essential libmutter-$DIFF_VALUE_2-dev gobject-introspection meson on your computer"
		echo "The setup will still proceed and fail if you don't have those installed"
		echo "--------------------------------------------------------"
		sleep 5
	fi
}

install_lib(){
	prep_stage
		
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
	check_env
	
	if [[ "$OS_ID_TYPE" = "debian" ]] || [[ "$OS_LIKE_ID_TYPE" = "debian" ]] || [[ "$OS_ID_TYPE" = "fedora" ]] || [[ "$OS_LIKE_ID_TYPE" = "fedora" ]]; then
		echo "--------------------------------------------------------"
		echo "Uninstalling"
		echo "--------------------------------------------------------"
		sudo rm -rf /usr/include/blur-effect-1.0
		if [ -e /usr/lib64/libblur-effect-1.0.so ]; then
			sudo rm /usr/lib64/girepository-1.0/Blur-1.0.typelib /usr/lib64/pkgconfig/blur-effect-1.0.pc /usr/lib64/libblur-effect-1.0.so /usr/lib64/libblur-effect-1.0.so.1 /usr/lib64/libblur-effect-1.0.so.1.0.0 /usr/share/gir-1.0/Blur-1.0.gir || true
		elif [ -e /usr/lib/x86_64-linux-gnu/libblur-effect-1.0.so ]; then
			sudo rm /usr/lib/x86_64-linux-gnu/girepository-1.0/Blur-1.0.typelib /usr/lib/x86_64-linux-gnu/pkgconfig/blur-effect-1.0.pc /usr/lib/x86_64-linux-gnu/libblur-effect-1.0.so /usr/lib/x86_64-linux-gnu/libblur-effect-1.0.so.1 /usr/lib/x86_64-linux-gnu/libblur-effect-1.0.so.1.0.0 /usr/share/gir-1.0/Blur-1.0.gir || true
		elif [ -e /usr/lib/libblur-effect-1.0.so ]; then
			sudo rm /usr/lib/girepository-1.0/Blur-1.0.typelib /usr/lib/pkgconfig/blur-effect-1.0.pc /usr/lib/libblur-effect-1.0.so /usr/lib/libblur-effect-1.0.so.1 /usr/lib/libblur-effect-1.0.so.1.0.0 /usr/share/gir-1.0/Blur-1.0.gir || true
		else
			echo "--------------------------------------------------------"
			echo "No library found, skipping"
			echo "--------------------------------------------------------"
		fi
		echo "--------------------------------------------------------"
		echo "For the changes to apply, please log out and then log back in."
		echo "--------------------------------------------------------"
	fi
}

prep_stage(){
	REPO="https://github.com/kancko/gnome-rounded-blur"
	dest_dir="./binary"
	build_dir="/tmp"
	
	# Check for current environment before doing anything
	check_env
	
	# Install git first before doing anything else
	install_git
	
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
}

help_doc(){
	echo "--------------------------------------------------------"
	echo "gnome-rounded-blur install helper"
	echo "--------------------------------------------------------"
	echo "-i 			Install the library"
	echo "-u			Uninstall the library"
	echo "-h			Help"
}


# More safety, by turning some bugs into errors.
set -o errexit -o pipefail -o noclobber -o nounset

# ignore errexit with `&& true`
getopt --test > /dev/null && true
if [[ $? -ne 4 ]]; then
    echo 'I’m sorry, `getopt --test` failed in this environment.'
    exit 1
fi

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
			u=y
            uninstall_lib
            shift
            break
            ;;
		-h|--help)
			h=y
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
	help_doc
    exit 4
fi

# echo "all: $A, kernel: $k, gnome-shell: $g"
