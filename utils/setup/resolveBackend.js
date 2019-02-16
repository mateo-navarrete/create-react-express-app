const { addNpmPackages, createBackend, createPort, editPackageJson, installBackendPackages } = require('../backend');
const { spinner } = require('./spinner');
// const npmInstall = require('./npmInstall');

// express backend
// npm install --prefix ./backend body-parser pg-promise supervisor
// cd backend/
// npm install

module.exports = async (name) => {
  // console.log('@resolveBackend');
  // express backend
  // npm install --prefix ./backend body-parser pg-promise supervisor
  // cd backend/
  // npm install
  //===
  //let or const?
  let createdBackend = await createBackend(name, spinner);
  let createdPort = await createPort(name, spinner);
  let editedPackageJson = await editPackageJson(name, spinner);
  let addedNpmPackages = await addNpmPackages(name, spinner);
  let installedBackendPackages = await installBackendPackages(name, spinner);

  // let npmInstallBackend = await npmInstall(
  // name,
  // spinner
  // );
  // let npmInstalled = await npmInstall(name, spinner);
  //.catch(error =>  console.error('@rPerr', error)  );
  if (
    createdBackend.message
    && createdPort.message
    && editedPackageJson.message
    && addedNpmPackages.message
    && installedBackendPackages.message
    // &&
    // updatedFrontendPackageJson.message &&
    // npmInstalled.message
  ) {
    return { message: true };
  } else {
    return { message: false };
  }
};
