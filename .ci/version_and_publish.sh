#!/usr/bin/env bash
source ".ci/utils/strict.sh"

# configure GIT - deploy key
mkdir ~/.ssh
chmod 700 ~/.ssh
echo "$GITHUB_DEPLOY_KEY" > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
echo "github.com,13.237.44.5 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==" > ~/.ssh/known_hosts
chmod 744 ~/.ssh/known_hosts
ssh -Tv git@github.com

# configure GIT - set git user to the commit we are building from
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
