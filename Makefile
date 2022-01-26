.PHONY: build pkg install remove clean


build: clean
	glib-compile-schemas src/schemas
	mkdir -p build/
	cp -r src/* build/
	rm -f build/prefs.ui~


pkg: build
	mkdir -p pkg/
	cd build/ && zip -r ../pkg/blur-my-shell@aunetx.zip .


install: build
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/blur-my-shell@aunetx
	mkdir -p $(HOME)/.local/share/gnome-shell/extensions/blur-my-shell@aunetx
	cp -r build/* $(HOME)/.local/share/gnome-shell/extensions/blur-my-shell@aunetx/


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/blur-my-shell@aunetx


clean:
	rm -rf pkg/ build/
