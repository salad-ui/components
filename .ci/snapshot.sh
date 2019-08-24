#!/usr/bin/env bash
source ".ci/utils/strict.sh"

yarn workspace @design-system-example/playground run snapshot
