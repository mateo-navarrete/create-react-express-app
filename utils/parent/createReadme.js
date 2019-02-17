const { fs, writeFile } = require('../nodeUtils');

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createReadme ] : ${name}/readme.md`);
  try {
    const readme = `# ${name}

    **TO DEPLOY DEV SERVER:**
    inside app folder =>
    \`\`\`npm start\`\`\`

    // for example:

    \`\`\`
    cd ${name}
    npm start

    \`\`\`

    // the app will automatically open on http://localhost:3000/
    // the backend express server can be viewed on http://localhost:3100/

    ---

    **frontend @ http://localhost:3000/**
    **backend @ http://localhost:3100/**

    Cheers!`;
    await writeFile(`${name}/readme.md`, readme);
    const isValid = fs.existsSync(`${name}/readme.md`);
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ createReadme ] : SUCCESS`)
      : spinner.fail(` [ createReadme ] : ERROR`);
    return { message: isValid };
  } catch (e) {
    throw new Error(`@[ createReadme ] : ${name}/readme.md`);
    return { message: e };
  }
};
