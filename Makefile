SHARED_VM = $(HOME)/Projects/.shared/

.PHONY: build_pkg build vm_test install remove clean


build:
	glib-compile-schemas src/schemas
	mkdir -p build/
	cp -r src/* build/
	rm -f build/prefs.ui~


build_pkg: build
	mkdir -p pkg/
	cd build/ && zip -r ../pkg/blur-me@nunchucks.zip .


vm_test: build
	rm -rf $(SHARED_VM)/blur_my_shell/blur-me@nunchucks
	mkdir -p $(SHARED_VM)/blur_my_shell/blur-me@nunchucks
	cp -r build/* $(SHARED_VM)/blur_my_shell/blur-me@nunchucks/

vm_pkg: build_pkg
	cp pkg/blur-me@nunchucks.zip $(SHARED_VM)/blur_my_shell/blur-me@nunchucks.zip

install: build
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/blur-me@nunchucks
	mkdir -p $(HOME)/.local/share/gnome-shell/extensions/blur-me@nunchucks
	cp -r build/* $(HOME)/.local/share/gnome-shell/extensions/blur-me@nunchucks/


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/blur-me@nunchucks


clean:
	rm -rf pkg/ build/
