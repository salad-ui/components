#!/usr/bin/env bash
source ".ci/utils/strict.sh"

# increase watchers for gatsby
# @see https://github.com/gatsbyjs/gatsby/issues/11406#issuecomment-458769756
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

yarn run build
