#!/usr/bin/env bash
source ".ci/utils/strict.sh"

# configure GIT - setup the Github Deploy Key
mkdir ~/.ssh
chmod 700 ~/.ssh
echo "$GITHUB_DEPLOY_KEY" > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-keyscan -t rsa github.com > ~/.ssh/known_hosts
chmod 744 ~/.ssh/known_hosts

# configure GIT - setup the git user who will make the commit
git config user.name "$(git --no-pager log --format=format:'%an' -n 1)"
git config user.email "$(git --no-pager log --format=format:'%ae' -n 1)"

# using a machine user who is an admin of this repo so we can get around the branch restrictions
# echo "https://jameslnewell-bot:$GITHUB_BOT_TOKEN@github.com/$GITHUB_REPOSITORY.git"
# git remote set-url origin "https://jameslnewell-bot:$GITHUB_BOT_TOKEN@github.com/$GITHUB_REPOSITORY.git"

# configure NPM
yarn lerna exec echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc 

# version and publish
git checkout master
yarn changeset bump --commit
git push origin master
yarn changeset release --public
git push origin master --follow-tags
