//npmInstall
module.exports = async name => {
  let tba = { message: true };
  let tbd = await tba;
  console.log(tba);
  return tbd;
  // try {
  //   return { status: true };
  // } catch (e) {
  //   return { status: false };
  // }
};
