#!/usr/bin/env bash
source ".ci/utils/strict.sh"

yarn workspace @salad-ui/playground run snapshot
