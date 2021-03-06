const { fs, writeFile } = require('../nodeUtils');

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createPackageJson ] : ${name}/package.json`);
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
      keywords: [],
      author: '',
      license: 'ISC',
      repository: {},
      bugs: {},
      homepage: '',
    };
    let packageJson = JSON.stringify(packageJsonObj);

    await writeFile(`${name}/package.json`, packageJson);
    const isValid = fs.existsSync(`${name}/package.json`);
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ createPackageJson ] : SUCCESS`)
      : spinner.fail(` [ createPackageJson ] : ERROR`);
    return { message: isValid };
  } catch (e) {
    throw new Error(`@[ createPackageJson ] : ${name}/package.json`);
    return { message: e };
  }
};
