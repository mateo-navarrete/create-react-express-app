// express backend
const fs = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createBackend ] : express ${name}/backend`);
  try {
    const isValid = await execFile('express', [`${name}/backend`]).then(() => ({
      message: true,
    }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ createBackend ] : SUCCESS`)
      : spinner.fail(` [ createBackend ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(`@[ createBackend ] : express ${name}/backend`);
    return { message: e };
  }
};

// const { stdout } = await execFile('express', [`${name}/backend`]).then(
//   () => ({
//     message: true,
//   })
// );
// const { stdout } = await execFile('node', ['--version']);
// console.log('@stdout', stdout);
// console.log('backend complete');
// const isValid = await execFile("express", ["backend"]).then(() => ({
//   message: true
// }));
