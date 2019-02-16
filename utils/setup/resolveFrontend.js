const {
  addNpmPackages,
  cleanupFrontend,
  createFrontend,
  editPackageJson,
} = require('../frontend');

module.exports = async (name, spinner) => {
  let createdFrontend = await createFrontend(name, spinner);
  let editedPackageJson = await editPackageJson(name, spinner);
  let addedNpmPackages = await addNpmPackages(name, spinner);
  let cleanedupFrontend = await cleanupFrontend(name, spinner);
  if (
    createdFrontend.message &&
    editedPackageJson.message &&
    addedNpmPackages.message &&
    cleanedupFrontend.message
  ) {
    return { message: true };
  }
};
