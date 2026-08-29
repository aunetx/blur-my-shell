#!/bin/bash

is_os_family(){
	local target="$1"
	local os_id
	local -a os_ids
	read -r -a os_ids <<< "${OS_ID_TYPE:-} ${OS_LIKE_ID_TYPE:-}"
	for os_id in "${os_ids[@]}"; do
		if [[ "$os_id" = "$target" ]]; then
			return 0
		fi
	done
	return 1
}

check_env(){
	source /etc/os-release
	OS_ID_TYPE=${ID:-}
	OS_LIKE_ID_TYPE=${ID_LIKE:-}

	if is_os_family "arch"; then
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

	if is_os_family "fedora"; then
		if [[ $i = "y" ]] && [[ $u = "n" ]]; then		
			echo "--------------------------------------------------------"
			echo "Please do not use this script to install gnome-rounded-blur on Fedora"
			echo "To install this library on Fedora, follow the guide below"
			echo "https://github.com/aunetx/blur-my-shell/blob/master/scripts/GUIDE.md"
			echo "--------------------------------------------------------"
			sleep 5
			exit 1
		elif [[ $i = "n" ]] && [[ $u = "y" ]]; then	
			echo "--------------------------------------------------------"
			echo "Checking if the library is already installed via system package manager"
			echo "--------------------------------------------------------"
			if rpm -q --quiet "gnome-rounded-blur"; then
				echo "--------------------------------------------------------"
				echo "Please do not use this script to uninstall gnome-rounded-blur on Fedora"
				echo "To uninstall this library on Fedora, use your system package manager"
				echo "--------------------------------------------------------"
				sleep 5
				exit 1
			fi
		fi
	fi
}

install_git(){
	if ! command -v git >/dev/null 2>&1
	then
		if is_os_family "debian"; then
			echo "--------------------------------------------------------"
			echo "Installing git"
			echo "--------------------------------------------------------"
			sudo apt -y install git 
		else
			echo "--------------------------------------------------------"
			echo "Please manually install git using your distro's package manager"
			echo "--------------------------------------------------------"
			sleep 5
			exit 1
		fi
	fi

	# Ubuntu doesn't have this installed for some reason.
	if is_os_family "debian"; then
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
	if is_os_family "debian"; then
		echo "--------------------------------------------------------"
		echo "Installing dependency"
		echo "--------------------------------------------------------"
		sudo apt -y install libglib2.0-dev build-essential libmutter-"$DIFF_VALUE_2"-dev gobject-introspection meson
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
	meson setup build --prefix=/usr
	meson compile -C build
	
	# meson install the library in the wrong directory, we'll do that ourselves
	echo "--------------------------------------------------------"
	echo "Installing the library"
	echo "--------------------------------------------------------"
	sudo meson install -C build
	
	echo "--------------------------------------------------------"
	echo "For the changes to apply, please log out and then log back in."
	echo "--------------------------------------------------------"
}

uninstall_lib(){
	check_env
	
	if is_os_family "debian" || is_os_family "fedora"; then
		echo "--------------------------------------------------------"
		echo "Uninstalling"
		echo "--------------------------------------------------------"
		sudo rm -rf /usr/include/blur-effect-1.0
		
		# Clean library matching multiarch directories
		local cleaned=0
		for prefix in /usr/lib /usr/lib64 /usr/lib/*-linux-gnu; do
			if [ -e "$prefix/libblur-effect-1.0.so" ]; then
				sudo rm -f "$prefix"/girepository-1.0/Blur-1.0.typelib \
				           "$prefix"/pkgconfig/blur-effect-1.0.pc \
				           "$prefix"/libblur-effect-1.0.so* \
				           /usr/share/gir-1.0/Blur-1.0.gir || true
				cleaned=1
			fi
		done
		
		if [ $cleaned -eq 0 ]; then
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
	cd "$build_dir"
	# Remove current working dir if found
	if [ -d "gnome-rounded-blur" ]; then
		rm -rf gnome-rounded-blur
	fi
	git clone --depth 1 "$REPO"
	cd gnome-rounded-blur
	
	# Get mutter version
	if command -v mutter >/dev/null 2>&1; then
		MUTTER_SYS_VER=$(mutter --version | grep -o -P '(?<=mutter ).*' | sed -e 's/"//g' -e "s/'//g" -e 's/\..*//g')
	elif command -v gnome-shell >/dev/null 2>&1; then
		MUTTER_SYS_VER=$(gnome-shell --version | grep -oE '[0-9]+' | head -n 1)
	else
		MUTTER_SYS_VER=51
	fi
	
	HARDCODE_MUTTER_SYS_VER=$(cat meson.build | grep -o -P '(?<=mutter_req = ).*' | sed -e 's/"//g' -e "s/'//g" -e 's/\..*//g' -e 's/>//g' -e 's/=//g' -e 's/ //g' | head -n 1)
	MUTTER_API_REPO_VER=$(cat meson.build | grep -o -P '(?<=mutter_api_version = ).*' | sed -e 's/"//g' -e "s/'//g" -e 's/ //g' | head -n 1)
	
	# Edit meson.build to allow builing
	if grep -q "mutter_api_versions" meson.build; then
		if [[ "$MUTTER_SYS_VER" -ge 51 ]]; then
			DIFF_VALUE_2="$MUTTER_SYS_VER"
			if ! grep -q "'$MUTTER_SYS_VER'" meson.build; then
				sed -i -e "s/mutter_api_versions = \[/mutter_api_versions = ['$MUTTER_SYS_VER', /g" meson.build
			fi
		elif [[ "$MUTTER_SYS_VER" -eq 50 ]]; then
			DIFF_VALUE_2="18"
		else
			DIFF_VALUE_2=$((MUTTER_SYS_VER - 32))
			sed -i -e "s/mutter_api_versions = \[/mutter_api_versions = ['$DIFF_VALUE_2', /g" meson.build
			sed -i -e "s/mutter_req = '>= 50.0'/mutter_req = '>= $MUTTER_SYS_VER.0'/g" meson.build
		fi
	else
		if [[ "$MUTTER_SYS_VER" -ge 51 ]]; then
			DIFF_VALUE_2="$MUTTER_SYS_VER"
		elif [[ "$MUTTER_SYS_VER" -ge "$HARDCODE_MUTTER_SYS_VER" ]]; then
			DIFF_VALUE=$((MUTTER_SYS_VER - HARDCODE_MUTTER_SYS_VER))
			DIFF_VALUE_2=$((MUTTER_API_REPO_VER + DIFF_VALUE))
		else
			DIFF_VALUE=$((HARDCODE_MUTTER_SYS_VER - MUTTER_SYS_VER))
			DIFF_VALUE_2=$((MUTTER_API_REPO_VER - DIFF_VALUE))
		fi

		sed -i -E "s/mutter_api_version = '[0-9]+'/mutter_api_version = '$DIFF_VALUE_2'/" meson.build
		sed -i -E "s/mutter_req = '>= [0-9.]+'/mutter_req = '>= $MUTTER_SYS_VER.0'/" meson.build
		sed -i -E "s/dependency\('libmutter-[0-9]+'\)/dependency('libmutter-' + mutter_api_version)/" meson.build
	fi
	
	install_dep
}

help_doc(){
	echo "--------------------------------------------------------"
	echo "gnome-rounded-blur install helper"
	echo "--------------------------------------------------------"
	echo "-i 			Install the library"
	echo "-u			Uninstall the library"
	echo "-h			Help"
}


set -o errexit -o pipefail -o noclobber -o nounset

getopt --test > /dev/null && true
if [[ $? -ne 4 ]]; then
    echo 'I’m sorry, `getopt --test` failed in this environment.'
    exit 1
fi

LONGOPTS=install,uninstall,help
OPTIONS=iuh

PARSED=$(getopt --options=$OPTIONS --longoptions=$LONGOPTS --name "$0" -- "$@") || exit 2
eval set -- "$PARSED"

i=n u=n h=n
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
if [[ "$i" = "n" && "$u" = "n" && "$h" = "n" ]]; then
	help_doc
    exit 4
fi

# echo "all: $A, kernel: $k, gnome-shell: $g"