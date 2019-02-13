const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`Creating readme.md...`);
  try {
    const readme = `# ${name}`;
    await writeFile(`${name}/readme.md`, readme);
    const isValid = fs.existsSync(`${name}/readme.md`);
    isValid
      ? spinner.succeed(`[ SUCCESS ] : readme.md created.`)
      : spinner.fail(`[ ERROR ] : readme.md not created.`);
    return { message: isValid };
  } catch (e) {
    throw new Error('unable to create readme.md.');
    return { message: e };
  }
};
