.PHONY: build_pkg build vm_test install remove clean


build:
	mkdir -p build/
	cp -r src/* build/
	rm -f build/prefs.ui~


build_pkg: build
	mkdir -p pkg/
	cd build/ && zip -r ../pkg/blur_my_gnome/blur-my-gnome@aunetx.zip .


vm_test: build
	rm -rf $(HOME)/Documents/shared/blur_my_gnome/blur-my-gnome@aunetx
	mkdir -p $(HOME)/Documents/shared/blur_my_gnome/blur-my-gnome@aunetx
	cp -r build/* $(HOME)/Documents/shared/blur_my_gnome/blur-my-gnome@aunetx/


install: build
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/blur-my-gnome@aunetx
	mkdir -p $(HOME)/.local/share/gnome-shell/extensions/blur-my-gnome@aunetx
	cp -r build/* $(HOME)/.local/share/gnome-shell/extensions/blur-my-gnome@aunetx/


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/blur-my-gnome@aunetx


clean:
	rm -rf pkg/ build/
