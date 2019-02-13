const menus = {
  main: `
    create-react-express-app [command] <options>

   [APP_NAME] .......... create app [APP_NAME]
    version ............ show package version
    help ............... show help menu for a command`,

  version: `
    create-react-express-app <options>

    -v, --v, -version, --version :::::::::::: show package version`,
};

module.exports = args => {
  const option = args.filter(el => el !== 'help')[0];
  console.log(menus[option] || menus.main);
};
