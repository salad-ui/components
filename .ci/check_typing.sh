#!/usr/bin/env bash
source ".ci/utils/strict.sh"

yarn run check:typing && yarn run check:package:typing
