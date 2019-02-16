const menus = {
  main: `
    create-react-express-app [command] <options>

    create fullstack app in folder [APP_NAME] =>

    fullstack [APP_NAME]

    other useful commands =>
    fullstack -version ..... show package version
    fullstack -help ........ show help menu for a command`,

  version: `
    create-react-express-app <options>

    -v, --v, -version, --version :::::::::::: show package version`,
};

module.exports = args => {
  const option = args.filter(el => el !== 'help')[0];
  console.log(menus[option] || menus.main);
};
