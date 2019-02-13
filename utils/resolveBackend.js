// const value = await asyncFunction().catch(err => new Error(err));
// if (value instanceof Error)
//   return res.status(500).send("There was an error doing something");

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
