const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const execFile = promisify(require('child_process').execFile);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

module.exports = { fs, path, execFile, readFile, writeFile };
