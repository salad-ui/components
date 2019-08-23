#!/usr/bin/env bash
source ".ci/utils/strict.sh"

if [ "${CIRCLE_BRANCH}" == "master" ]; then
    yarn now --token $ZEIT_TOKEN website/public --local-config website/.now.json 
    yarn now --token $ZEIT_TOKEN website/public --local-config website/.now.json alias
    yarn now --token $ZEIT_TOKEN playground/storybook-static
    yarn now --token $ZEIT_TOKEN playground/storybook-static --local-config playground/.now.json alias
else
    yarn now --token $ZEIT_TOKEN website/public --local-config website/.now.json 
    yarn now --token $ZEIT_TOKEN playground/storybook-static --local-config playground/.now.json 
fi
