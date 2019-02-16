const fs = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ installedBackendPackages ] : npm install --prefix ${name}/backend`);
  try {
    const isValid = await execFile('npm', [
      'install',
      '--prefix',
      `${name}/backend`,
    ]).then(() => ({ message: true }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ installedBackendPackages ] : SUCCESS`)
      : spinner.fail(` [ installedBackendPackages ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(`@[ installedBackendPackages ] : npm install --prefix ${name}/backend`);
    return { message: e };
  }
};
