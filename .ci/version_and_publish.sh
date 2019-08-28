#!/usr/bin/env bash
source ".ci/utils/strict.sh"

# configure NPM
yarn lerna exec echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc 

# configure GIT - set git user to the commit we are building from
git config user.name "$(git --no-pager log --format=format:'%an' -n 1)"
git config user.email "$(git --no-pager log --format=format:'%ae' -n 1)"

# version and publish
git pull
yarn build-releases version --commit
echo "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPO.git"

git remote set-url origin "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPO.git"
git push "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPO.git" master
yarn build-releases publish --public
git push "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPO.git" --follow-tags
