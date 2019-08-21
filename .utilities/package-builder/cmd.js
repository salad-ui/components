#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const {rollup} = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');

/* Use TSDX instead of this package when it supports monorepos to save repeating configuration in every single package */

const distDir = 'dist';
const srcDirRelativeToRootDir = path.relative(`../..`, './src');

async function moveTypes() {
  await fs.copy(`${distDir}/${srcDirRelativeToRootDir}`, distDir, {
    overwrite: true,
  });
  await fs.remove(`${distDir}/${srcDirRelativeToRootDir.split(path.sep)[0]}`);
}

function createInputOptions() {
  const pkg = require(path.resolve('package.json'));
  return {
    input: 'src/index.tsx',
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      resolve(),
      typescript({
        cacheRoot: `.tsc_cache`,
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            target: 'esnext',
            outDir: distDir,
          },
        },
      }),
    ],
  };
}

async function createBundles() {
  const bundle = await rollup(createInputOptions());
  await Promise.all([
    await bundle.write({file: `${distDir}/index.cjs.js`, format: 'cjs'}),
    await bundle.write({file: `${distDir}/index.esm.js`, format: 'es'}),
  ]);
}

(async () => {
  try {
    await fs.mkdirp(distDir);
    await createBundles();
    await moveTypes();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
