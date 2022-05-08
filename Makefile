NAME = blur-my-shell
UUID = $(NAME)@aunetx

.PHONY: build install remove clean


build: clean
	mkdir -p build/
	cd src && gnome-extensions pack -f \
			--extra-source=../metadata.json \
			--extra-source=../resources/icons \
			--extra-source=../resources/ui \
			--extra-source=./components \
			--extra-source=./conveniences \
			--extra-source=./preferences \
			--podir=../po \
			--schema=../schemas/org.gnome.shell.extensions.blur-my-shell.gschema.xml \
			-o ../build


install: build remove
	gnome-extensions install -f build/$(UUID).shell-extension.zip


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/$(UUID)


clean:
	rm -rf build/ schemas/gschemas.compiled
