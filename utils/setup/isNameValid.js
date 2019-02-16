const fs = require('fs');
const path = require('path');

module.exports = (dir, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  const name = path.parse(dir).name;
  console.log(`[ isNameValid ] : ${name}`);
  const isValid = !fs.existsSync(name);
  console.log(`----------------------------------------`);
  isValid
    ? spinner.succeed(` [ isNameValid ] : SUCCESS`)
    : spinner.fail(` [ isNameValid ] : ERROR => ${name} already exists!`);
  return { message: isValid, name: name };
};
