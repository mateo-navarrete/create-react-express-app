module.exports = (errMsg, exit) => {
  console.error('@ERR_CB', errMsg);
  exit && process.exit(1);
};
