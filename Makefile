NAME = blur-my-shell
UUID = $(NAME)@aunetx

.PHONY: build pkg install remove clean


build: clean
	mkdir -p build/
	glib-compile-schemas schemas
	cp -r schemas build/schemas
	glib-compile-resources --sourcedir="resources" \
						   --generate resources/$(NAME).gresource.xml \
						   --target=build/$(NAME).gresource
	cp -r src/* build/
	cp -r resources/ui build/
	cp metadata.json build/metadata.json


pkg: build
	mkdir -p pkg/
	cd build/ && zip -r ../pkg/$(UUID).zip .


install: build remove
	mv build $(HOME)/.local/share/gnome-shell/extensions/$(UUID)


remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/$(UUID)


clean:
	rm -rf pkg/ build/
