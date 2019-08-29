import {fail, danger} from 'danger';

function assertChangsetExistsWhenAnyPackagesHaveBeenTouched(): void {
  // if the user has run `yarn changeset` then we're all good!
  console.log('danger: ', Object.keys(danger.git));
  console.log('danger: ', Object.keys(danger.github));
  const changeset = danger.git.fileMatch('.changeset/**');
  if (
    changeset.created ||
    changeset.edited ||
    changeset.modified ||
    changeset.deleted
  ) {
    return;
  }

  // if the user hasn't run `yarn changeset` and has modified a package, then we've got beef
  const packages = danger.git.fileMatch('packages/*/**');
  if (
    packages.created ||
    packages.edited ||
    packages.modified ||
    packages.deleted
  ) {
    fail(
      'One or more packages have changed but have not been marked for release. Please run `yarn run changeset` to mark a package for release.',
    );
  }
}

assertChangsetExistsWhenAnyPackagesHaveBeenTouched();
