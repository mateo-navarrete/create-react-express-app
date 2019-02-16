const fs = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(
    `[ addNpmPackagesFrontend ] : npm install --prefix ${name}/frontend axios`
  );
  try {
    const isValid = await execFile('npm', [
      'install',
      '--prefix',
      `${name}/frontend`,
      'axios',
    ]).then(() => ({ message: true }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ addNpmPackagesFrontend ] : SUCCESS`)
      : spinner.fail(` [ addNpmPackagesFrontend ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(
      `@[ addNpmPackagesFrontend ] : npm install --prefix ${name}/frontend axios`
    );
    return { message: e };
  }
};
