#!/usr/bin/env node
const utilities = require('./build-utilities');
const scripts = require('./build-scripts');
const styles = require('./build-styles');

(async () => {
  try {
    await utilities.ensureDirectoryExists(utilities.getBuildDirectory());
    await scripts.bundle();
    await styles.bundle();
  } catch (error) {
    console.error(error);
    console.log(error.stack);
    process.exit(1);
  }
})();
