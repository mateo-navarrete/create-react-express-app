const createFolders = require('./createFolders');
const isNameValid = require('./isNameValid');
// const resolveBackend = require('./resolveBackend');
// const resolveFrontend = require('./resolveFrontend');
const resolveParent = require('./resolveParent');
const { spinner } = require('./spinner');

module.exports = {
  createFolders,
  isNameValid,
  // resolveBackend,
  // resolveFrontend,
  resolveParent,
  spinner,
};
