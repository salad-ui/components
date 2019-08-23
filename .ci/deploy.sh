#!/usr/bin/env bash
source ".ci/utils/strict.sh"

if [ "${CIRCLE_BRANCH}" == "master" ]; then
    cd website/public && yarn now --token $ZEIT_TOKEN --prod --local-config="../now.json" && cd ..
    cd playground/storybook-static && yarn now --token $ZEIT_TOKEN --prod --local-config="../now.json" && cd ..
else
    cd website/public && yarn now --token $ZEIT_TOKEN --local-config="../now.json" && cd ..
    cd playground/storybook-static && yarn now --token $ZEIT_TOKEN --local-config="../now.json" && cd ..
fi
