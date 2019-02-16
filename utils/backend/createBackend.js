// express backend
const fs = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`creating express backend...`);
  try {
    const { stdout } = await execFile('express', ['my-fresh-app/backend']).then(
      () => ({
        message: true,
      })
    );
    // const { stdout } = await execFile('node', ['--version']);
    // console.log('@stdout', stdout);
    // console.log('backend complete');
    // const isValid = await execFile("express", ["backend"]).then(() => ({
    //   message: true
    // }));
    isValid
      ? spinner.succeed(`[ SUCCESS ] : express backend created.`)
      : spinner.fail(`[ ERROR ] : failed to create express backend.`);
    return isValid;
  } catch (e) {
    throw new Error('unable to create express backend');
    return { message: e };
  }
};
