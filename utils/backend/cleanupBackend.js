const { execFile } = require('../nodeUtils');

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
      ? spinner.succeed(` [ cleanupBackend ] : SUCCESS
        This next step may take a minute,
        Gratitude for your understanding.`)
      : spinner.fail(` [ cleanupBackend ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(
      `@[ cleanupBackend ] : npm install --prefix ${name}/backend`
    );
    return { message: e };
  }
};
