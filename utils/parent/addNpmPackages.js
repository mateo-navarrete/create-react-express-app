const { execFile } = require('../nodeUtils');

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ addNpmPackagesParent ] : npm install --prefix concurrently`);
  try {
    const isValid = await execFile('npm', [
      'install',
      '--prefix',
      name,
      'concurrently',
    ]).then(() => ({ message: true }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ addNpmPackagesParent ] : SUCCESS`)
      : spinner.fail(` [ addNpmPackagesParent ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(
      `@[ addNpmPackagesParent ] : npm install --prefix concurrently`
    );
    return { message: e };
  }
};
