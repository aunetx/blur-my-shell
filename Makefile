SHARED_VM = $(HOME)/Projets/.shared/

.PHONY: build_pkg build vm_test install remove clean


build:
	glib-compile-schemas src/schemas
	mkdir -p build/
	cp -r src/* build/
	rm -f build/prefs.ui~


build_pkg: build
	mkdir -p pkg/
	cd build/ && zip -r ../pkg/blur-my-shell@aunetx.zip .


vm_test: build
	rm -rf $(SHARED_VM)/blur_my_shell/blur-my-shell@aunetx
	mkdir -p $(SHARED_VM)/blur_my_shell/blur-my-shell@aunetx
	cp -r build/* $(SHARED_VM)/blur_my_shell/blur-my-shell@aunetx/


vm_pkg: build_pkg
	cp pkg/blur-my-shell@aunetx.zip $(SHARED_VM)/blur_my_shell/blur-my-shell@aunetx.zip


install: build
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/blur-my-shell@aunetx
	mkdir -p $(HOME)/.local/share/gnome-shell/extensions/blur-my-shell@aunetx
	cp -r build/* $(HOME)/.local/share/gnome-shell/extensions/blur-my-shell@aunetx/


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/blur-my-shell@aunetx


clean:
	rm -rf pkg/ build/
