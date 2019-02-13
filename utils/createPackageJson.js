const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`Creating package.json...`);
  try {
    const packageJsonObj = {
      name: `${name}`,
      version: '1.0.0',
      description: '',
      main: 'index.js',
      scripts: {
        test: 'echo "Error: no test specified" && exit 1',
        start:
          'concurrently --kill-others "cd frontend && npm start" "cd backend && npm start"',
      },
      author: '',
      license: 'MIT',
    };
    let packageJson = JSON.stringify(packageJsonObj);

    await writeFile(`${name}/package.json`, packageJson);
    const isValid = fs.existsSync(`${name}/package.json`);
    isValid
      ? spinner.succeed(`[ SUCCESS ] : package.json created.`)
      : spinner.fail(`[ ERROR ] : package.json not created.`);
    return { message: isValid };
  } catch (e) {
    throw new Error('unable to create package.json');
    return { message: e };
  }
};
