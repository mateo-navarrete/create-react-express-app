const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`Creating .gitignore...`);
  try {
    const gitignore = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

/*pendencies*/
/node_modules
/backend/node_modules
/frontend/node_modules
/backend/.pnp
/frontend/.pnp
.pnp.js

/*sting*/
/backend/coverage
/frontend/coverage

/*oduction*/
/backend/build
/frontend/build

/*sc*/
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*`;
    await writeFile(`${name}/.gitignore`, gitignore);
    const isValid = fs.existsSync(`${name}/.gitignore`);
    isValid
      ? spinner.succeed(`[ SUCCESS ] : .gitignore created.`)
      : spinner.fail(`[ ERROR ] : .gitignore not created.`);
    return { message: isValid };
  } catch (e) {
    throw new Error('unable to create .gitignore.');
    return { message: e };
  }
};
