const fs = require('fs');
const path = require('path');

module.exports = (dir, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  const name = path.parse(dir).name;
  console.log(`Validating App Name : [ ${name} ] ...`);
  const isValid = !fs.existsSync(name);
  isValid
      ? spinner.succeed(`[ SUCCESS ] : ${name} validated.`)
      : spinner.fail(`[ ERROR ] : ${name} already exists!`);
  return { message: isValid, name: name };
};
