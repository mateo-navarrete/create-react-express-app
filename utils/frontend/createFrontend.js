const { execFile } = require('../nodeUtils');

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createFrontend ] : create-react-app ${name}/frontend`);
  try {
    const isValid = await execFile('create-react-app', [
      `${name}/frontend`,
    ]).then(() => ({
      message: true,
    }));
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ createFrontend ] : SUCCESS`)
      : spinner.fail(` [ createFrontend ] : ERROR`);
    return isValid;
  } catch (e) {
    throw new Error(`@[ createFrontend ] : create-react-app ${name}/frontend`);
    return { message: e };
  }
};
