const fs = require('fs');
const path = require('path');
// const exec = require('child_process').execSync;
// const util = require('util');
// const execFile = util.promisify(require('child_process').execFile);
// const ora = require('ora');
const errCB = require('../utils/errCallback');
const eP = require('../utils/execPromise');
const { spinner } = require('../utils/spinner');

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

module.exports = dir => {
  const name = path.parse(dir).name;

  console.log(`----------------------------------------`);
  // console.log(`Gratitude for your patience.`);
  // console.log(`Creating directory: [ ${name} ]`);
  // console.log(`----------------------------------------`);
  // console.log();
  // let gfx = fx[(Math.random() * fx.length) >> 0];
  // const spinner = ora({ spinner: gfx }); //.start();
  !fs.existsSync(name)
    ? createFolder(name, errCB)
    : (spinner.fail(`[ ${name} ] already exists!`),
      errCB(`[ ERROR ] => NAME MUST BE UNIQUE`));

  // console.log('Welcome to the your new app!');
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
