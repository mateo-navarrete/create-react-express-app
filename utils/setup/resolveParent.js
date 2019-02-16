const {
  addNpmPackages,
  createGitignore,
  createPackageJson,
  createReadme,
} = require('../parent');

module.exports = async (name, spinner) => {
  let createdReadme = await createReadme(name, spinner);
  let createdGitignore = await createGitignore(name, spinner);
  let createdPackageJson = await createPackageJson(name, spinner);
  let addedNpmPackages = await addNpmPackages(name, spinner);
  if (
    createdReadme.message &&
    createdGitignore.message &&
    createdPackageJson.message &&
    addedNpmPackages.message
  ) {
    return { message: true };
  } else {
    return { message: false };
  }
};
