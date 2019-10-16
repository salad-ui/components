import * as path from 'path';
import * as fs from 'fs-extra';

export const getSourceDirectory = () => {
  return path.resolve('./src');
};

export const getBuildDirectory = () => {
  return path.resolve('./dist');
};

export const ensureDirectoryExists = async (path: string) => {
  await fs.mkdirp(path);
};
