import path from 'path';
import fs from 'fs-extra';
import {rollup} from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {getSourceDirectory, getBuildDirectory} from './build-utilities';

const inputFile = fs.existsSync(`${getSourceDirectory()}/index.tsx`)
  ? `${getSourceDirectory()}/index.tsx`
  : fs.existsSync(`${getSourceDirectory()}/index.ts`)
  ? `${getSourceDirectory()}/index.ts`
  : undefined;
const outputFile = `${getBuildDirectory()}/index`;

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

// exclude dependencies which may be imported like `uuid` or `uuid/v4`
const pkg = require(path.resolve('package.json'));
const deps = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];
const regexps = deps.map(dep => new RegExp(`^${dep}($|\/)`));
const external = (id: string) => regexps.some(regexp => regexp.test(id));

function createRollupOptions() {
  return {
    input: inputFile,
    external,
    plugins: [
      resolve({
        mainFields: ['module', 'main', 'browser'],
        extensions,
      }),
      commonjs({
        include: /node_modules/,
        // 😢@see https://github.com/reduxjs/react-redux/issues/643#issuecomment-364064645
        // 😢@see https://github.com/styled-components/styled-components/issues/1654
        namedExports: {
          '../../node_modules/react/index.js': [
            'Component',
            'cloneElement',
            'createContext',
            'createElement',
            'Fragment',
            'useContext',
            'useMemo',
          ],
          '../../node_modules/react-dom/index.js': ['render', 'hydrate'],
          '../../node_modules/react-is/index.js': [
            'isElement',
            'isValidElementType',
            'ForwardRef',
          ],
        },
      }),
      babel({
        extensions,
        include: 'src/**',
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', {modules: false}],
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: [
          '@babel/proposal-class-properties',
          '@babel/proposal-object-rest-spread',
        ],
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

export const createBundles = async () => {
  if (!inputFile) {
    return;
  }
  await createRollupBundles();
};
