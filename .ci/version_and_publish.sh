#!/usr/bin/env bash
source ".ci/utils/strict.sh"

# configure GIT - set git user to the commit we are building from
git config user.name "$(git --no-pager log --format=format:'%an' -n 1)"
git config user.email "$(git --no-pager log --format=format:'%ae' -n 1)"
# git remote set-url origin "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git"
git remote set-url origin "https://$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git"

# configure NPM
yarn lerna exec echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc 

# version and publish
git checkout master
yarn changeset bump --commit
git push origin master
yarn changeset release --public
git push origin master --follow-tags
