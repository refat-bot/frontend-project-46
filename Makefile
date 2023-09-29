
gendiff:
	node bin/gendiff.js --help

install:
	npm ci

publish:
	npm publish --dry-run

setup: install publish

link:
	sudo npm link

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test