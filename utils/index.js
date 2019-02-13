const createFolders = require('./createFolders');
const isNameValid = require('./isNameValid');
const resolveParent = require('./resolveParent');
const resolveBackend = require('./resolveBackend');
const resolveFrontend = require('./resolveFrontend');
const { spinner } = require('./spinner');

module.exports = {
  createFolders,
  isNameValid,
  resolveParent,
  resolveBackend,
  resolveFrontend,
  spinner,
};
