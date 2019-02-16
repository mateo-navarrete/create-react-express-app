const fs = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ cleanupBackend ] : npm install --prefix ${name}/backend`);
  try {
    const isValid = await execFile('npm', [
      'install',
      '--prefix',
      `${name}/backend`,
    ]).then(() => ({ message: true }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ cleanupBackend ] : SUCCESS`)
      : spinner.fail(` [ cleanupBackend ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(
      `@[ cleanupBackend ] : npm install --prefix ${name}/backend`
    );
    return { message: e };
  }
};
