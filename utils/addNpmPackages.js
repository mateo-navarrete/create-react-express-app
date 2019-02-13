const fs = require('fs');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`Adding npm packages...`);
  try {
    const isValid = await execFile('npm', [
      'install',
      '--prefix',
      name,
      'concurrently',
    ]).then(() => ({ message: true }));
    isValid
      ? spinner.succeed(`[ SUCCESS ] : packages added.`)
      : spinner.fail(`[ ERROR ] : packages not added.`);
    return isValid;
  } catch (e) {
    throw new Error('unable to install npm packages');
    return { message: e };
  }
};
