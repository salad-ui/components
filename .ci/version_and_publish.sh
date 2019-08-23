#!/usr/bin/env bash
source ".ci/utils/strict.sh"

# configure NPM
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc 

# configure GIT
git config user.email "ci-server@example.com"
git config user.name "CI Server"

# version and publish
git pull
yarn build-releases version --commit
git push origin master
yarn build-releases publish --public
git push --follow-tags
