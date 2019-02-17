const { readFile, writeFile } = require('../nodeUtils');

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createPort ] : ./${name}/backend/bin/www`);
  try {
    const port = `3100`;
    const portPath = `./${name}/backend/bin/www`;
    const getPortPath = await readFile(portPath, 'utf8');
    const setPort = getPortPath.replace(/3000/g, port);
    await writeFile(portPath, setPort);
    const getSetPortPath = await readFile(portPath, 'utf8');
    const isValid = getSetPortPath.indexOf(port) >= 0;
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ createPort ] : SUCCESS`)
      : spinner.fail(` [ createPort ] : ERROR`);
    return { message: isValid };
  } catch (e) {
    throw new Error(`@[ createPort ] : ./${name}/backend/bin/www`);
    return { message: e };
  }
};
