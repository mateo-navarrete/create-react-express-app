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

---

**FAQ**  
@ initial git add . => command line may display CRLF to LF etc

This is just letting you know that your code editor is doing its job and is saving the files in your preferred format.
More details:
https://stackoverflow.com/questions/1552749/difference-between-cr-lf-lf-and-cr-line-break-types

---

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
