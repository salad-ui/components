#!/usr/bin/env bash
source ".ci/utils/strict.sh"
echo "Branch: ${GITHUB_REF}"
if [ "${GITHUB_REF}" == "master" ]; then

  # configure NPM
  yarn lerna exec echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc 

  # configure GIT - set git user to the commit we are building from
  git config user.name "$(git --no-pager log --format=format:'%an' -n 1)"
  git config user.email "$(git --no-pager log --format=format:'%ae' -n 1)"
  git remote set-url origin "https://$GITHUB_ACTOR:$GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git"

  # version and publish
  git checkout master
  yarn build-releases version --commit
  git push
  yarn build-releases publish --public
  git push --tags

fi
