const {
  addNpmPackages,
  cleanupBackend,
  createBackend,
  createPort,
  editPackageJson,
} = require('../backend');

module.exports = async (name, spinner) => {
  let createdBackend = await createBackend(name, spinner);
  let createdPort = await createPort(name, spinner);
  let editedPackageJson = await editPackageJson(name, spinner);
  let addedNpmPackages = await addNpmPackages(name, spinner);
  let cleanedupBackend = await cleanupBackend(name, spinner);
  if (
    createdBackend.message &&
    createdPort.message &&
    editedPackageJson.message &&
    addedNpmPackages.message &&
    cleanedupBackend.message
  ) {
    return { message: true };
  } else {
    return { message: false };
  }
};
