NAME = blur-my-shell
UUID = $(NAME)@aunetx
VM_PATH = ~/Projects/shared/extensions
POT = po/$(UUID).pot
UI_SOURCES = $(shell find resources/ui -type f -name '*.ui' | sort)
EFFECT_I18N_SOURCES = src/effects/effects.js src/effects/effect_groups.js
PREFERENCES_I18N_SOURCES = $(shell find src/preferences -type f -name '*.js' | sort) src/prefs.js

.PHONY: build install pot test-shell test-prefs test-vm remove clean


build: clean
	mkdir -p build/
	cd src && gnome-extensions pack -f \
			--extra-source=../metadata.json \
			--extra-source=../LICENSE \
			--extra-source=../resources/icons \
			--extra-source=../resources/ui \
			--extra-source=./components \
			--extra-source=./conveniences \
			--extra-source=./effects \
			--extra-source=./preferences \
			--extra-source=./dbus \
			--extra-source=./render \
			--extra-source=./styles \
			--podir=../po \
			--schema=../schemas/org.gnome.shell.extensions.$(NAME).gschema.xml \
			-o ../build


install: build
	gnome-extensions install -f build/$(UUID).shell-extension.zip


pot:
	xgettext --language=JavaScript --from-code=utf-8 --package-name=$(UUID) \
		--keyword=_ --keyword=ngettext:1,2 \
		--output=$(POT) $(EFFECT_I18N_SOURCES)
	xgettext --language=Glade --from-code=utf-8 --package-name=$(UUID) \
		--join-existing --output=$(POT) $(UI_SOURCES)
	xgettext --language=JavaScript --from-code=utf-8 --package-name=$(UUID) \
		--keyword=_ --keyword=ngettext:1,2 --join-existing \
		--output=$(POT) $(PREFERENCES_I18N_SOURCES)
	find po -maxdepth 1 -type f -name '*.po' -printf '%f\n' | \
		sed 's/\.po$$//' | sort > po/LINGUAS
	for catalog in po/*.po; do \
		msgmerge --update --backup=none --no-fuzzy-matching "$$catalog" $(POT); \
	done


test-shell: build
	test_root=$$(mktemp -d); \
	trap 'rm -rf -- "$$test_root"' EXIT; \
	mkdir -p "$$test_root/config" "$$test_root/cache" "$$test_root/data" \
		"$$test_root/state" \
		"$$test_root/data/gnome-shell/extensions/$(UUID)"; \
	unzip -q build/$(UUID).shell-extension.zip \
		-d "$$test_root/data/gnome-shell/extensions/$(UUID)"; \
	glib-compile-schemas \
		"$$test_root/data/gnome-shell/extensions/$(UUID)/schemas"; \
	export XDG_CONFIG_HOME="$$test_root/config" \
		XDG_CACHE_HOME="$$test_root/cache" \
		XDG_DATA_HOME="$$test_root/data" \
		XDG_STATE_HOME="$$test_root/state" \
		GSETTINGS_BACKEND=keyfile; \
	gsettings set org.gnome.shell enabled-extensions "['$(UUID)']"; \
	shell_mode="--nested --wayland"; \
	if gnome-shell --help 2>&1 | grep -q -- '--devkit'; then \
		shell_mode="--devkit"; \
	fi; \
	env GNOME_SHELL_SLOWDOWN_FACTOR=2 \
		MUTTER_DEBUG_DUMMY_MODE_SPECS=1500x1000 \
	 	MUTTER_DEBUG_DUMMY_MONITOR_SCALES=1 \
		dbus-run-session -- sh scripts/test-shell.sh "$(UUID)" $$shell_mode


test-prefs: install
	gnome-extensions prefs $(UUID)


test-vm: build
	unzip -oq build/$(UUID).shell-extension.zip -d $(VM_PATH)/$(UUID)


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/$(UUID)


clean:
	rm -rf build/ po/*.mo schemas/gschemas.compiled
