const fs = require('fs');

module.exports = async (name, spinner) => {
  spinner.start();
  try {
    fs.mkdirSync(name);
    fs.mkdirSync(`${name}/frontend`);
    fs.mkdirSync(`${name}/backend`);
    spinner.succeed();
    //{status, payload, msg}
    return { result: true, name: name };
  } catch (err) {
    spinner.fail('[ ERROR ] @createDir');
    console.log('err@createDir', err);
  }
  // let readme = `# ${name}`;
};
