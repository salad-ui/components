const fs = require('fs-extra');
const sass = require('node-sass');
const {getSourceDirectory, getBuildDirectory} = require('./build-utilities');

const inputFile = fs.existsSync(`${getSourceDirectory()}/index.scss`)
  ? `${getSourceDirectory()}/index.scss`
  : undefined;
const outputFile = `${getBuildDirectory()}/index`;

module.exports.bundle = async () => {
  if (!inputFile) {
    return;
  }
  return new Promise((resolve, reject) => {
    sass.render(
      {
        file: inputFile,
        sourceMap: true,
        outFile: `${outputFile}.css`,
      },
      (error, result) => {
        if (error) {
          reject(error);
        }
        Promise.all([
          fs.writeFile(`${outputFile}.css`, result.css),
          result.map && fs.writeFile(`${outputFile}.css.map`, result.map),
        ]).then(resolve, reject);
      },
    );
  });
};
