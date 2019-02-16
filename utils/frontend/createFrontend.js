const fs = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createFrontend ] : create-react-app ${name}/frontend`);
  try {
    const isValid = await execFile('create-react-app', [
      `${name}/frontend`,
    ]).then(() => ({
      message: true,
    }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ createFrontend ] : SUCCESS`)
      : spinner.fail(` [ createFrontend ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(`@[ createFrontend ] : create-react-app ${name}/frontend`);
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

// //createFrontend
// module.exports = async name => {
//   let tba = { message: true };
//   let tbd = await tba;
//   console.log(tba);
//   return tbd;
//   // try {
//   //   return { status: true };
//   // } catch (e) {
//   //   return { status: false };
//   // }
// };
