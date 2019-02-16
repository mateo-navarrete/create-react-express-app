const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ editPackageJson ] : ./${name}/backend/bin/www`);
  try {
    const startScript = `supervisor ./bin/www`;
    const packageJsonPath = `./${name}/backend/package.json`;
    const getPackageJson = await readFile(packageJsonPath, 'utf8');
    let packageJson = JSON.parse(getPackageJson);
    packageJson.scripts.start = startScript;
    let editedPackageJson = JSON.stringify(packageJson);
    await writeFile(packageJsonPath, editedPackageJson);
    const getEditedPackageJson = await readFile(packageJsonPath, 'utf8');
    // console.log('gepj', getEditedPackageJson);
    const isValid = getEditedPackageJson.indexOf(startScript) >= 0;
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ editPackageJson ] : SUCCESS`)
      : spinner.fail(` [ editPackageJson ] : ERROR`);
    return { message: isValid };
  } catch (e) {
    throw new Error(`@[ editPackageJson ] : ./${name}/backend/bin/www`);
    return { message: e };
  }
};
