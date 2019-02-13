module.exports = () => {
  const args = process.argv.slice(2);
  let cmd = '';

  if (!args.length || args.includes('-h' || '--h' || '-help' || '--help')) {
    cmd = 'help';
  } else if (args.includes('-v' || '--v' || '-version' || '--version')) {
    cmd = 'version';
  }

  switch (cmd) {
    case 'help':
      require('./cmds/help')(args);
      break;
    case 'version':
      require('./cmds/version')(args);
      break;
    default:
      require('./cmds/createApp')(args.toString());
      break;
  }
};
