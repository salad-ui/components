#!/usr/bin/env bash
source ".ci/utils/strict.sh"

if [ "${CIRCLE_BRANCH}" == "master" ]; then
    yarn now --token $ZEIT_TOKEN --prod --local-config="./.now.json" website/public
    yarn now --token $ZEIT_TOKEN --prod --local-config="./.now.json" playground/storybook-static
else
    yarn now --token $ZEIT_TOKEN --local-config="./.now.json" website/public
    yarn now --token $ZEIT_TOKEN --local-config="./.now.json" playground/storybook-static
fi
