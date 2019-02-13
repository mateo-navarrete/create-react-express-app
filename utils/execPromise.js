const exec = require('child_process').execSync;
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
const { spinner } = require('./spinner');

const execPromise = async name => {
  spinner.start();
  console.log(`Creating react app: [ ${name} ]`);
  console.log(`----------------------------------------`);
  console.log(`Gratitude for your patience.`);
  // spinner.start();
  const { stdout } = await execFile('create-react-app', [`${name}/frontend`]);
  // const { stdout } = await execFile('node', ['--version']);
  // console.log('@stdout', stdout);
  spinner.succeed(`[ SUCCESS ] => [ ${name} ] folder created!`),
    console.log('frontend complete');
  console.log(`----------------------------------------`);
};

module.exports = execPromise;
