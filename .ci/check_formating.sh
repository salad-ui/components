#!/usr/bin/env bash
source ".ci/utils/strict.sh"

yarn prettier --check \"**/*.{ts,tsx,js,jsx,json,md}\"
