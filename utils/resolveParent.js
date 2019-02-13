const createGitignore = require('./createGitignore');
const createPackageJson = require('./createPackageJson');
const createReadme = require('./createReadme');
const addNpmPackages = require('./addNpmPackages');

// const value = await asyncFunction().catch(err => new Error(err));
// if (value instanceof Error)
//   return res.status(500).send("There was an error doing something");

module.exports = async (name, spinner) => {
  // createReadme;
  // createGitignore;
  // createPkgJson;
  // npmAddPkgs; // => Concurrently
  // let tba = { message: true };
  let createdReadme = await createReadme(name, spinner); //
  let createdGitignore = await createGitignore(name, spinner); //
  let createdPackageJson = await createPackageJson(name, spinner); //
  let addedNpmPackages = await addNpmPackages(name, spinner); //
  //.catch(error =>  console.error('@rPerr', error)  );
  if (
    createdReadme.message &&
    createdGitignore.message &&
    createdPackageJson.message &&
    addedNpmPackages.message
  ) {
    return { message: true };
  }
  // console.log(createdReadme);
  // try {
  //   // let gitignore = await createGitignore(name, spinner);
  //   let res = await createGitignore(name, spinner).catch(err => {
  //     console.log(err);
  //   });
  //   // var response = await promisedFunction().catch((err) => { console.log(err); });
  //   console.log('323', res);
  //   if (res.status) {
  //     // spinner.succeed(`[ SUCCESS ] : .gitignore created.`);
  //     return { status: true };
  //   } else {
  //     throw new Error('[ ERROR ]');
  //   }
  // } catch (e) {
  //   spinner.fail('[ ERROR ] : @resolveParent');
  //   console.log(e);
  //   return { status: false };
  // }
};
