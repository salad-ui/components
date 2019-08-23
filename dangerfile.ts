import {fail, danger} from 'danger';

function assertChangsetExistsWhenAnyPackagesHaveBeenTouched(): void {
  const packages = danger.git.fileMatch('packages/*/**');
  if (
    packages.created ||
    packages.edited ||
    packages.modified ||
    packages.deleted
  ) {
    fail('One or more packages have changed. Please run `yarn run changeset`.');
  }
}

assertChangsetExistsWhenAnyPackagesHaveBeenTouched();
