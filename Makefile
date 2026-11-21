NAME = blur-my-shell
UUID = $(NAME)@aunetx
PREFIX ?= /usr/local
EXTENSION_DIR = $(PREFIX)/share/gnome-shell/extensions/$(UUID)
VM_PATH = ~/Projects/shared/extensions
POT = po/$(UUID).pot
UI_SOURCES = $(shell find resources/ui -type f -name '*.ui' | sort)
GRESOURCE = resources/$(NAME).gresource.xml
EFFECT_I18N_SOURCES = $(shell find src/effects -type f -name '*.js' | sort)
PREFERENCES_I18N_SOURCES = $(shell find src/preferences -type f -name '*.js' | sort) src/prefs.js
SOURCE_DIRS = $(filter-out styles,$(patsubst src/%/,%,$(wildcard src/*/)))
SOURCE_FILES = $(shell find $(addprefix src/,$(SOURCE_DIRS)) -type f | sort)
# Preserve cascade order when bundling the component stylesheets.
STYLESHEETS = src/styles/panel.css \
	src/styles/dash.css \
	src/styles/popup/base.css \
	src/styles/popup/transparent.css \
	src/styles/popup/light.css \
	src/styles/popup/dark.css \
	src/styles/popup/menu-items.css \
	src/styles/popup/unblurred.css \
	src/styles/overview.css \
	src/styles/appfolders.css \
	src/styles/panel-light-text.css

.PHONY: build pack install user-install pot test-shell test-prefs test-vm remove clean


build: clean
	mkdir -p build/
# St does not give CSS @imports the priority of the extension stylesheet.
	awk '{ print }' $(STYLESHEETS) > build/stylesheet.css
	sed -E -z '$(METADATA_FILTER)' metadata.json > build/metadata.json
	glib-compile-resources --sourcedir=resources --target=build/resources.gresource $(GRESOURCE)
	for catalog in po/*.po; do \
		language=$$(basename "$$catalog" .po); \
		mkdir -p "build/locale/$$language/LC_MESSAGES" || exit; \
		msgfmt "$$catalog" -o "build/locale/$$language/LC_MESSAGES/$(UUID).mo" || exit; \
	done


pack: build
	cd src && gnome-extensions pack -f \
			--extra-source=../build/stylesheet.css \
			--extra-source=../build/metadata.json \
			--extra-source=../LICENSE \
			--extra-source=../build/resources.gresource \
			$(foreach dir,$(SOURCE_DIRS),--extra-source=./$(dir)) \
			--extra-source=../build/locale \
			--schema=../schemas/org.gnome.shell.extensions.$(NAME).gschema.xml \
			-o ../build


# GNOME Shell reads the translations of a system extension from its own locale folder, or from
# /usr/share/locale when it has none, so keeping them in the extension folder works with any prefix
install:
	install -d -m 0755 "$(DESTDIR)$(EXTENSION_DIR)"
	install -m 0644 build/metadata.json build/stylesheet.css build/resources.gresource LICENSE \
		"$(DESTDIR)$(EXTENSION_DIR)/"
	for source in src/extension.js src/prefs.js $(SOURCE_FILES); do \
		install -D -m 0644 "$$source" "$(DESTDIR)$(EXTENSION_DIR)/$${source#src/}" || exit; \
	done
	for catalog in build/locale/*/LC_MESSAGES/*.mo; do \
		install -D -m 0644 "$$catalog" "$(DESTDIR)$(EXTENSION_DIR)/$${catalog#build/}" || exit; \
	done
	install -D -m 0644 schemas/org.gnome.shell.extensions.$(NAME).gschema.xml \
		"$(DESTDIR)$(PREFIX)/share/glib-2.0/schemas/org.gnome.shell.extensions.$(NAME).gschema.xml"
# packages compile the schemas from their own triggers
ifeq ($(DESTDIR),)
	glib-compile-schemas "$(PREFIX)/share/glib-2.0/schemas"
endif


# GNOME replaces an installed version that extensions.gnome.org doesn't know with the released one,
# but leaves an extension without a version alone
user-install: METADATA_FILTER = s/,[[:space:]]*"version":[[:space:]]*[0-9]+//
user-install: pack
	rm -rf "$${XDG_DATA_HOME:-$$HOME/.local/share}/gnome-shell/extension-updates/$(UUID)"
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


TEST_SHELL_MODE ?= auto
test-shell: pack
	sh scripts/test-shell.sh "$(UUID)" "build/$(UUID).shell-extension.zip" "$(TEST_SHELL_MODE)"


test-prefs: user-install
	gnome-extensions prefs $(UUID)


test-vm: pack
	unzip -oq build/$(UUID).shell-extension.zip -d $(VM_PATH)/$(UUID)


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/$(UUID)


clean:
	rm -rf build/ po/*.mo schemas/gschemas.compiled
