#  Makefile
#
#  Copyright (c) 2018, DocuSign, Inc
#  All rights reserved.
#

clobber:
	@echo "======================================================"
	@echo "clobber"
	@echo "======================================================"
	rm dist
	rm -fR node_modules
	rm -f package-lock.json

install: clobber
	@echo "======================================================"
	@echo "install"
	@echo "======================================================"
	npm install --verbose

start-dev:
	@echo "======================================================"
	@echo start-dev
	@echo "======================================================"
	npm start

build:
	@echo "======================================================"
	@echo build
	@echo "======================================================"
	rm -fR dist
	npm run build
	open ./dist/index.html

list:
	@echo "======================================================"
	@echo list targets
	@echo "======================================================"
	cat Makefile | grep "^[a-z]" | awk '{print $$1}' | sed "s/://g" | sort

