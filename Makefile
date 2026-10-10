NAME = blur-my-shell
UUID = $(NAME)@aunetx
VM_PATH = ~/Projects/shared/extensions
POT = po/$(UUID).pot
UI_SOURCES = $(shell find resources/ui -type f -name '*.ui' | sort)
EFFECT_I18N_SOURCES = src/effects/effects.js src/effects/effect_groups.js
PREFERENCES_I18N_SOURCES = $(shell find src/preferences -type f -name '*.js' | sort) src/prefs.js
SOURCE_DIRS = $(filter-out styles,$(patsubst src/%/,%,$(wildcard src/*/)))
# Preserve cascade order when bundling the component stylesheets.
STYLESHEETS = src/styles/panel.css \
	src/styles/dash.css \
	src/styles/popup/base.css \
	src/styles/popup/transparent.css \
	src/styles/popup/light.css \
	src/styles/popup/dark.css \
	src/styles/popup/menu-items.css \
	src/styles/overview.css \
	src/styles/appfolders.css \
	src/styles/panel-light-text.css

.PHONY: build install pot test-shell test-prefs test-vm remove clean


build: clean
	mkdir -p build/
# St does not give CSS @imports the priority of the extension stylesheet.
	awk '{ print }' $(STYLESHEETS) > build/stylesheet.css
	cd src && gnome-extensions pack -f \
			--extra-source=../build/stylesheet.css \
			--extra-source=../metadata.json \
			--extra-source=../LICENSE \
			--extra-source=../resources/icons \
			--extra-source=../resources/ui \
			$(foreach dir,$(SOURCE_DIRS),--extra-source=./$(dir)) \
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


TEST_SHELL_MODE ?= auto
test-shell: build
	sh scripts/test-shell.sh "$(UUID)" "build/$(UUID).shell-extension.zip" "$(TEST_SHELL_MODE)"


test-prefs: install
	gnome-extensions prefs $(UUID)


test-vm: build
	unzip -oq build/$(UUID).shell-extension.zip -d $(VM_PATH)/$(UUID)


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/$(UUID)


clean:
	rm -rf build/ po/*.mo schemas/gschemas.compiled
