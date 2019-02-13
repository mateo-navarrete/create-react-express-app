const fs = require('fs');
const path = require('path');
// const exec = require('child_process').execSync;
// const util = require('util');
// const execFile = util.promisify(require('child_process').execFile);
// const ora = require('ora');
const errCB = require('../utils/errCallback');
const eP = require('../utils/execPromise');
const { spinner } = require('../utils/spinner');
const isNameValid = require('../utils/isNameValid');
const createDir = require('../utils/createDir');

// const { promiseMe } = require('./promiseMe');
// let fx = [
//   'bouncingBall',
//   'bouncingBar',
//   'dots',
//   'dots12',
//   'moon',
//   'point',
//   'weather',
// ];

module.exports = async dir => {
  // isNameValid(dir).then(result => console.log('@result', result));
  let isValid = await isNameValid(dir, spinner);
  //.then(result => console.log('@result', result));
  try {
    if (isValid.result) {
      spinner.succeed(`[ Success ]`);
      let createdDir = await createDir(isValid.name, spinner);
      try {
        if (createdDir) {
          console.log('@createdDir try block', createdDir);
        }
      } catch (err) {
        console.log('@createDirErr', err);
      }
      // console.log('@IS_VALID!!', isValid, isValid.result, isValid.name);
      // fs.mkdirSync(isValid.name);
    } else {
      spinner.fail(`[ ${isValid.name} ] already exists!`);
      errCB(`[ ERROR ] => NAME MUST BE UNIQUE`);
    }
  } catch (err) {
    spinner.fail();
    errCB(`[ ERROR ] @buildApp`);
    // console.log('@err', err);
  }

  // const name = path.parse(dir).name;
  // console.log(`----------------------------------------`);
  // !fs.existsSync(name)
  //   ? createFolder(name, errCB)
  //   : (spinner.fail(`[ ${name} ] already exists!`),
  //     errCB(`[ ERROR ] => NAME MUST BE UNIQUE`));
  //
};

const errORcb = (err, cb) => {
  if (err) return errCB(err);
  cb();
};

const createFolder = (name, errCB) => {
  spinner.start();
  console.log(`Creating directory: [ ${name} ]`);
  console.log(`----------------------------------------`);
  fs.mkdirSync(name);
  fs.mkdirSync(`${name}/frontend`);
  fs.mkdirSync(`${name}/backend`);
  let readme = `# ${name}`;
  // fs.writeFile(`${name}/README.md`, readme, err => errORcb(err, doit));
  wF(name, readme); //.then(result => console.log('@result', result));
  // console.log('@W', w);
  const doit = () => (
    spinner.succeed(`[ SUCCESS ] => [ ${name} ] folder created!`),
    console.log(`----------------------------------------`),
    eP(name)
  );
  // console.log('cheers');
  // eP(name);
};

const cbx = () => console.log('this is a test');

const wF = async (name, readme) => {
  return await fs.writeFile(`${name}/README.md`, readme, cbx);
};

//TODO:
// checkIfValidDir;
// createValidDirs;
// createReactAppFrontend;
// removeGitFromFrontend;
// addAxiosAddProxyToFrontendPkg;
// expressBackend;
// addPgPromiseAddSupervisorAndStartScriptToBackendPkg;
// wwwChangeFrom3000to3001;
// npmInstallBackend;
// addPkgAndGitignore;
// installConcurrently;
