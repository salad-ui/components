import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
import svgr from '@svgr/core';
import toPascalCase from 'to-pascal-case';

const sourceDirectory = './src/svgs';
const outputDirectory = './src/glyphs';
const mkdir = util.promisify(fs.mkdir);
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const template = ({template}, _opts, {componentName, jsx}) => {
  const options = {
    plugins: ['typescript'],
    preserveComments: true,
  };

  return template.smart(options).ast`
import * as React from 'react';
import {GlyphProps} from '../GlyphProps';
import {Icon} from '../Icon';

export const ${componentName} = ({color, className, ...props}: GlyphProps) => {
  return (
    React.createElement(
      Icon,
      {
        color,
        className,
        children: ${jsx}
      }
    )
  );
};
    `;
};

const getComponentName = file => toPascalCase(path.basename(file, '.svg'));

const list = async () => await readdir(sourceDirectory);

const convert = async files => {
  const maxLength =
    files.reduce(
      (previousMaxLength, file) => Math.max(previousMaxLength, file.length),
      0,
    ) +
    sourceDirectory.length +
    1;
  await Promise.all(
    files.map(async file => {
      const sourceFile = `${sourceDirectory}/${file}`;
      const outputFile = `${outputDirectory}/${getComponentName(file)}.tsx`;
      const source = await readFile(sourceFile);
      const output = await svgr(
        source,
        {
          icon: true,
          template,
          svgoConfig: {
            removeComments: false,
          },
          plugins: [
            '@svgr/plugin-svgo',
            '@svgr/plugin-jsx',
            '@svgr/plugin-prettier',
          ],
        },
        {
          componentName: getComponentName(file),
        },
      );
      await writeFile(
        outputFile,
        `
/* eslint-disable react/no-children-prop */
${output}
        `.trim(),
      );
      console.log(`${sourceFile.padEnd(maxLength)} -> ${outputFile}`);
    }),
  );
};

const index = async files => {
  await writeFile(
    `${outputDirectory}/index.ts`,
    `
  import * as React from 'react';
  import {GlyphProps} from '../GlyphProps';

${files
  .map(
    file =>
      `import {${getComponentName(file)}} from './${getComponentName(file)}';`,
  )
  .join('\n')}

${files.map(file => `export * from './${getComponentName(file)}';`).join('\n')}

export const glyphs: {[name: string]: React.ComponentType<GlyphProps>} = {
  ${files.map(file => `${getComponentName(file)}: ${getComponentName(file)}`)}
};

  `,
  );
};

(async () => {
  try {
    await mkdir(outputDirectory, {recursive: true});
    const files = await list();
    await convert(files);
    await index(files);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
