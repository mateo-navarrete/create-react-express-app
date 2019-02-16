const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createReadme ] : ${name}/readme.md`);
  try {
    const readme = `# ${name}`;
    await writeFile(`${name}/readme.md`, readme);
    const isValid = fs.existsSync(`${name}/readme.md`);
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ createReadme ] : SUCCESS`)
      : spinner.fail(` [ createReadme ] : ERROR`);
    return { message: isValid };
  } catch (e) {
    throw new Error(`@[ createReadme ] : ${name}/readme.md`);
    return { message: e };
  }
};
