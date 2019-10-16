#!/usr/bin/env node
require = require('esm')(module /*, options*/);
require('ts-node').register({transpileOnly: true});
require('./src').default();
