const {
  createFolders,
  isNameValid,
  resolveParent,
  resolveBackend,
  resolveFrontend,
  spinner,
} = require('../utils/setup');

module.exports = async name => {
  const isValid = isNameValid(name, spinner);
  if (isValid.message) {
    name = isValid.name;
    const createdFolders = createFolders(name, spinner);
    if (createdFolders.message) {
      let parent = resolveParent(name, spinner);
      let backend = resolveBackend(name, spinner);
      let frontend = resolveFrontend(name, spinner);
      let p = await parent;
      let be = await backend;
      let fe = await frontend;
      if (p.message && be.message && fe.message) {
        console.log(`----------------------------------------`);
        console.log();
        // console.log('COMPLETE!!!', p, be, fe);
        console.log(`COMPLETE! to run server:`);
        console.log(`cd ${name}`);
        console.log(`npm start`);
        console.log();
      } else {
        console.log(new Error('Unable to create app.'));
      }
    } else {
      console.log(new Error('Unable to create required folders.'));
    }
  } else {
    console.log(new Error('Unable to validate app name.'));
  }
};
