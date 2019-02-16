const createBackend = require('./createBackend');
// const npmInstall = require('./npmInstall');

// express backend
// npm install --prefix ./backend body-parser pg-promise supervisor
// cd backend/
// npm install

module.exports = async (name, spinner) => {
  console.log('@resolveBackend');
  // express backend
  // npm install --prefix ./backend body-parser pg-promise supervisor
  // cd backend/
  // npm install
  //===
  //let or const?
  let createdBackend = await createBackend(name, spinner);
  // let npmInstallBackend = await npmInstall(
  // name,
  // spinner
  // );
  // let npmInstalled = await npmInstall(name, spinner);
  //.catch(error =>  console.error('@rPerr', error)  );
  if (
    createdBackend.message
    // &&
    // updatedFrontendPackageJson.message &&
    // npmInstalled.message
  ) {
    return { message: true };
  }
};
