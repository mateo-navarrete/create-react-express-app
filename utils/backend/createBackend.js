const { execFile } = require('../nodeUtils');

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createBackend ] : express ${name}/backend`);
  try {
    const isValid = await execFile('express', [`${name}/backend`]).then(() => ({
      message: true,
    }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ createBackend ] : SUCCESS`)
      : spinner.fail(` [ createBackend ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(`@[ createBackend ] : express ${name}/backend`);
    return { message: e };
  }
};
