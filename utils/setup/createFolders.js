const fs = require('fs');

module.exports = (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createFolders ] : ${name}, ${name}/frontend, ${name}/backend`);
  fs.mkdirSync(name);
  fs.mkdirSync(`${name}/frontend`);
  fs.mkdirSync(`${name}/backend`);
  const isValid =
    fs.existsSync(name) &&
    fs.existsSync(`${name}/frontend`) &&
    fs.existsSync(`${name}/backend`);
  isValid
    ? spinner.succeed(`[ createFolders ] : SUCCESS`)
    : spinner.fail(`[ createFolders ] : ERROR`);
  return { message: isValid };
};
