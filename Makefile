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
			--extra-source=./effects \
			--extra-source=./preferences \
			--podir=../po \
			--schema=../schemas/org.gnome.shell.extensions.$(NAME).gschema.xml \
			-o ../build


install: build remove
	gnome-extensions install -f build/$(UUID).shell-extension.zip


pot:
	find resources/ui -iname "*.ui" -printf "%f\n" | sort | \
		xargs xgettext --directory=resources/ui --output=po/$(UUID).pot \
		--from-code=utf-8 --package-name=$(UUID)

	for l in $$(ls po/*.po); do \
		basename $$l .po >> po/LINGUAS; \
	done

	cd po && \
	for lang in $$(cat LINGUAS); do \
    	mv $${lang}.po $${lang}.po.old; \
    	msginit --no-translator --locale=$$lang --input $(UUID).pot -o $${lang}.po.new; \
    	msgmerge -N $${lang}.po.old $${lang}.po.new > $${lang}.po; \
    	rm $${lang}.po.old $${lang}.po.new; \
	done



remove:
	rm -rf $(HOME)/.local/share/gnome-shell/extensions/$(UUID)


clean:
	rm -rf build/
