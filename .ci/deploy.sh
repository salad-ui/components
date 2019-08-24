#!/usr/bin/env bash
source ".ci/utils/strict.sh"

if [ "${CIRCLE_BRANCH}" == "master" ]; then
    yarn now --token $ZEIT_TOKEN --prod website
    yarn now --token $ZEIT_TOKEN --prod playground
else
    yarn now --token $ZEIT_TOKEN website
    yarn now --token $ZEIT_TOKEN playground
fi
