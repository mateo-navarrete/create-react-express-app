const fs = require('fs');

module.exports = (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`Creating [ ${name} ] folders...`);
  fs.mkdirSync(name);
  fs.mkdirSync(`${name}/frontend`);
  fs.mkdirSync(`${name}/backend`);
  const isValid =
    fs.existsSync(name) &&
    fs.existsSync(`${name}/frontend`) &&
    fs.existsSync(`${name}/backend`);
  isValid
        ? spinner.succeed(`[ SUCCESS ] : ${name} folders created.`)
        : spinner.fail(`[ ERROR ] : ${name} folders not created.`);
  return { message: isValid };
};
