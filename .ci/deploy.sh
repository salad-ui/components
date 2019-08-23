#!/usr/bin/env bash
source ".ci/utils/strict.sh"

if [ "${CIRCLE_BRANCH}" == "master" ]; then
    yarn now --token $ZEIT_TOKEN --target production --local-config website/.now.json website/public
    yarn now --token $ZEIT_TOKEN --target production --local-config playground/.now.json playground/storybook-static
else
    yarn now --token $ZEIT_TOKEN --local-config website/.now.json website/public
    yarn now --token $ZEIT_TOKEN --local-config playground/.now.json playground/storybook-static
fi
