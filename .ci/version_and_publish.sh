#!/usr/bin/env bash

git config user.email "ci-server@example.com"
git config user.name "CI Server"

yarn build-releases version --commit
git push origin master
yarn build-releases publish --public
git push --follow-tags
