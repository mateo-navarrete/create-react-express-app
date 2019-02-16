const {
  createFolders,
  isNameValid,
  resolveParent,
  // resolveBackend,
  // resolveFrontend,
  spinner,
} = require('../utils/setup');

module.exports = async name => {
  const isValid = isNameValid(name, spinner);
  if (isValid.message) {
    name = isValid.name;
    const createdFolders = createFolders(name, spinner);
    if (createdFolders.message) {
      // console.log(createFolders);
      let parent = resolveParent(name, spinner);
      // let backend = resolveBackend(name, spinner);
      // let frontend = resolveFrontend(name, spinner);
      let p = await parent;
      // let be = await backend;
      // let fe = await frontend;
      if (
        p.message
        // && be.message
        // && fe.message
      ) {
        console.log(`----------------------------------------`);
        console.log();
        console.log(
          'COMPLETE!!!',
          p,
          // be
          // fe,
        );
        console.log();
      } else {
        console.log(new Error('Unable to create app.'));
      }
    } else {
      console.log(new Error('Unable to create required folders.'));
    }
  } else {
    console.log(new Error('Unable to validate app name.'));
  }
};

// module.exports = async name => {
//   try {
//     let isValid = await isNameValid(name, spinner);
//     if (isValid.status) {
//       name = isValid.name;
//       let createdFolders = await createFolders(name, spinner);
//       if (createdFolders.status) {
//         try {
//           let parent = resolveParent(name, spinner);
//           let frontend = resolveFrontend(name, spinner);
//           let backend = resolveBackend(name, spinner);
//           let p = await parent;
//           let fe = await frontend;
//           let be = await backend;
//           if (p.status && fe.status && be.status) {
//             console.log("COMPLETE!!!", p, fe, be);
//           } else {
//             throw new Error("[ ERROR ] : @code[4]");
//           }
//         } catch (e) {
//           throw new Error("[ ERROR ] : @code[3]");
//           console.log(e);
//         }
//       } else {
//         throw new Error("[ ERROR ] : @code[2]");
//       }
//     } else {
//       throw new Error("[ ERROR ] : @code[1]");
//     }
//   } catch (e) {
//     spinner.fail("[ ERROR ] : @code[0]");
//     console.log(e);
//     process.exit(1);
//   }
// };
