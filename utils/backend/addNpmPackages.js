const fs = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(
    `[ addNpmPackagesBackend ] : npm install --prefix ./backend body-parser pg-promise supervisor`
  );
  try {
    const isValid = await execFile('npm', [
      'install',
      '--prefix',
      `${name}/backend`,
      'body-parser',
      'pg-promise',
      'supervisor',
    ]).then(() => ({ message: true }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ addNpmPackagesBackend ] : SUCCESS`)
      : spinner.fail(` [ addNpmPackagesBackend ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(
      `@[ addNpmPackagesBackend ] : npm install --prefix ./backend body-parser pg-promise supervisor`
    );
    return { message: e };
  }
};
