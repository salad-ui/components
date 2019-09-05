const path = require('path');
const fs = require('fs-extra');

module.exports.getSourceDirectory = () => {
  return path.resolve('./src');
};

module.exports.getBuildDirectory = () => {
  return path.resolve('./dist');
};

/** @param {string} path */
module.exports.ensureDirectoryExists = async path => {
  await fs.mkdirp(path);
};
