#!/usr/bin/env bash
source ".ci/utils/strict.sh"

if [ "${CIRCLE_BRANCH}" == "master" ]; then
    now --token $ZEIT_TOKEN website/public --local-config website/.now.json 
    now --token $ZEIT_TOKEN website/public --local-config website/.now.json alias
    now --token $ZEIT_TOKEN playground/storybook-static
    now --token $ZEIT_TOKEN playground/storybook-static --local-config playground/.now.json alias
    ## TODO: alias to an actual domain
else
    now --token $ZEIT_TOKEN website/public --local-config website/.now.json 
    now --token $ZEIT_TOKEN playground/storybook-static --local-config playground/.now.json 
fi
