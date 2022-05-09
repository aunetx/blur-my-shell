NAME = blur-my-shell
UUID = $(NAME)@aunetx

.PHONY: build install pot remove clean


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
			--schema=../schemas/org.gnome.shell.extensions.$(NAME).gschema.xml \
			-o ../build


install: build remove
	gnome-extensions install -f build/$(UUID).shell-extension.zip


pot:
	xgettext --from-code=UTF-8 resources/ui/*.ui --output=po/$(UUID).pot


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/$(UUID)


clean:
	rm -rf build/
