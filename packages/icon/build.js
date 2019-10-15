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
  const src = `
import * as React from 'react';
import {GlyphProps} from '../types';
import {Icon} from '../Icon';

/* eslint-disable react/no-children-prop */
export const COMPONENT_NAME = (props: GlyphProps) => {
  return (
    React.createElement(
      Icon,
      {
        children: JSX
      }
    )
  );
};
/* eslint-enable react/no-children-prop */
  `;

  const tpl = template.smart(src, {
    plugins: ['typescript'],
    preserveComments: true,
  });

  return tpl({
    COMPONENT_NAME: componentName,
    JSX: jsx,
  });
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
          plugins: [
            // '@svgr/plugin-svgo',
            '@svgr/plugin-jsx',
            '@svgr/plugin-prettier',
          ],
        },
        {
          componentName: getComponentName(file),
        },
      );
      await writeFile(outputFile, output);
      console.log(`${sourceFile.padEnd(maxLength)} -> ${outputFile}`);
    }),
  );
};

const index = async files => {
  await writeFile(
    `${outputDirectory}/index.ts`,
    `
  import * as React from 'react';
  import {IconProps} from '../Icon';

${files
  .map(
    file =>
      `import {${getComponentName(file)}} from './${getComponentName(file)}';`,
  )
  .join('\n')}

${files.map(file => `export * from './${getComponentName(file)}';`).join('\n')}

export const glyphs: {[name: string]: React.ComponentType<IconProps>} = {
  ${files.map(file => `${getComponentName(file)}: ${getComponentName(file)}`)}
};

  `,
  );
};

(async () => {
  await mkdir(outputDirectory, {recursive: true});
  const files = await list();
  await convert(files);
  await index(files);
})();
