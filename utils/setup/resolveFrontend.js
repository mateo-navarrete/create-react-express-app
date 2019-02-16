const createFrontend = require('./createFrontend');
const updateFrontendPackageJson = require('./updateFrontendPackageJson');
const npmInstall = require('./npmInstall');

// const value = await asyncFunction().catch(err => new Error(err));
// if (value instanceof Error)
//   return res.status(500).send("There was an error doing something");

module.exports = async (name, spinner) => {
  console.log('@resolveBackend');
  // express backend
  // npm install --prefix ./backend body-parser pg-promise supervisor
  // cd backend/
  // npm install
  //===
  //let or const?
  let createdFrontend = await createFrontend(name, spinner);
  let updatedFrontendPackageJson = await updateFrontendPackageJson(
    name,
    spinner
  );
  let npmInstalled = await npmInstall(name, spinner);
  //.catch(error =>  console.error('@rPerr', error)  );
  if (
    createdFrontend.message &&
    updatedFrontendPackageJson.message &&
    npmInstalled.message
  ) {
    return { message: true };
  }
};
