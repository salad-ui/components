const path = require('path');
const fs = require('fs-extra');
const {rollup} = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const {getSourceDirectory, getBuildDirectory} = require('./build-utilities');

/* Use TSDX instead of this package when it supports monorepos to save repeating configuration in every single package */

const buildDirectory = getBuildDirectory();
const sourceDirectoryRelativeToCurrentDirectory = path.relative(
  `../..`,
  './src',
);

const inputFile = fs.existsSync(`${getSourceDirectory()}/index.tsx`)
  ? `${getSourceDirectory()}/index.tsx`
  : fs.existsSync(`${getSourceDirectory()}/index.ts`)
  ? `${getSourceDirectory()}/index.ts`
  : undefined;
const outputFile = `${getBuildDirectory()}/index`;

// exclude dependencies which may be imported like `uuid` or `uuid/v4`
const pkg = require(path.resolve('package.json'));
const deps = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];
const regexps = deps.map(dep => new RegExp(`^${dep}($|\/)`));
const external = id => regexps.some(regexp => regexp.test(id));

function createRollupOptions() {
  return {
    input: inputFile,
    external,
    plugins: [
      resolve({
        mainFields: ['module', 'main', 'browser'],
      }),
      commonjs({
        include: /node_modules/,
        // 😢@see https://github.com/reduxjs/react-redux/issues/643#issuecomment-364064645
        // 😢@see https://github.com/styled-components/styled-components/issues/1654
        namedExports: {
          '../../node_modules/react/index.js': [
            'cloneElement',
            'createContext',
            'Component',
            'createElement',
          ],
          '../../node_modules/react-dom/index.js': ['render', 'hydrate'],
          '../../node_modules/react-is/index.js': [
            'isElement',
            'isValidElementType',
            'ForwardRef',
          ],
        },
      }),
      typescript({
        cacheRoot: `.tsc_cache`,
        include: ['src/**/*.ts+(|x)'],
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            target: 'esnext',
            outDir: buildDirectory,
          },
        },
      }),
    ],
  };
}

async function createRollupBundles() {
  const bundle = await rollup(createRollupOptions());
  await Promise.all([
    await bundle.write({file: `${outputFile}.cjs.js`, format: 'cjs'}),
    await bundle.write({file: `${outputFile}.esm.js`, format: 'es'}),
  ]);
}

async function moveTypescriptTypes() {
  const nestedTypesDirectory = `${buildDirectory}/${sourceDirectoryRelativeToCurrentDirectory}`;
  if (!fs.existsSync()) {
    return;
  }
  await fs.copy(nestedTypesDirectory, buildDirectory, {
    overwrite: true,
  });
  await fs.remove(
    `${buildDirectory}/${
      sourceDirectoryRelativeToCurrentDirectory.split(path.sep)[0]
    }`,
  );
}

module.exports.bundle = async () => {
  if (!inputFile) {
    return;
  }
  await createRollupBundles();
  await moveTypescriptTypes();
};
