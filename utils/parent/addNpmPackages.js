const fs = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ addNpmPackages ] : install --prefix concurrently`);
  try {
    const isValid = await execFile('npm', [
      'install',
      '--prefix',
      name,
      'concurrently',
    ]).then(() => ({ message: true }));
    isValid
      ? spinner.succeed(`[ addNpmPackages ] : SUCCESS`)
      : spinner.fail(`[ addNpmPackages ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(`@ [ addNpmPackages ] : install --prefix concurrently`);
    return { message: e };
  }
};
