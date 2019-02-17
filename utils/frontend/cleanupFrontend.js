const { execFile } = require('../nodeUtils');

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ cleanupFrontend ] : rm -rf ${name}/frontend/.gitignore`);
  try {
    const isValid = await execFile('rm', [
      '-rf',
      `${name}/frontend/.gitignore`,
      `${name}/frontend/.git`,
    ]).then(() => ({ message: true }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ cleanupFrontend ] : SUCCESS`)
      : spinner.fail(` [ cleanupFrontend ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(
      `@[ cleanupFrontend ] : rm -rf ${name}/frontend/.gitignore`
    );
    return { message: e };
  }
};
