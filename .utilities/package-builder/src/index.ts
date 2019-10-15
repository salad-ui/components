import {ensureDirectoryExists, getBuildDirectory} from './build-utilities';
import {createBundles} from './createBundles';
import {createTypings} from './createTypings';

export default async () => {
  try {
    await ensureDirectoryExists(getBuildDirectory());
    await Promise.all([await createBundles(), await createTypings()]);
  } catch (error) {
    console.error(error);
    console.log(error.stack);
    process.exit(1);
  }
};
