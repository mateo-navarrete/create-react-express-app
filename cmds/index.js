// const fs = require('fs');

module.exports = () => {
  const args = process.argv.slice(2);
  let cmd = '';

  if (!args.length || args.find(el => el === '-h' || el === '--h' || el === '-help' || el === '--help')) {
    cmd = 'help';
  } else if (args.find(el => el === '-v' || el === '--v' || el === '-version' || el === '--version')) {
    cmd = 'version';
  }

  switch (cmd) {
    case 'help':
      // console.log('@help');
      require('./help')(args);
      // require('./cmds/help')(args);
      break;
    case 'version':
      console.log('@version');
      require('./version')(args);
      // require('./cmds/version')(args);
      break;
    default:
      let name = args[0];
      console.log('@buildApp', name);
      require('./createApp')(args.toString());
      // fs.mkdirSync(name);
      // fs.mkdirSync(`${name}/frontend`);
      // fs.mkdirSync(`${name}/backend`);
      // require('./cmds/createApp')(args.toString());
      break;
  }
};
