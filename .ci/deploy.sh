#!/usr/bin/env bash
source ".ci/utils/strict.sh"

if [ "${GITHUB_REF}" == "refs/heads/master" ]; then
    yarn now --token $ZEIT_TOKEN --prod website
    yarn now --token $ZEIT_TOKEN --prod storybook
    yarn now --token $ZEIT_TOKEN --prod playground
else
    yarn now --token $ZEIT_TOKEN website
    yarn now --token $ZEIT_TOKEN storybook
    yarn now --token $ZEIT_TOKEN playground
fi
