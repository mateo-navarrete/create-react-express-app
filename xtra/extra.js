var resolveAfter2Seconds = function () {
  console.log('starting slow promise');
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({ result: 20, resolved: true });
      console.log('slow promise is done');
    }, 2000);
  });
};

var resolveAfter1Second = function () {
  console.log('starting fast promise');
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({ result: 10, resolved: true });
      console.log('fast promise is done');
    }, 1000);
  });
};

var parallel = function () {
  console.log('==PARALLEL with Promise.then==');
  resolveAfter2Seconds().then(message => console.log(message));
  resolveAfter1Second().then(message => console.log(message));
};

// parallel();

const asyncTest = async () => {
  console.log('==PARALLEL with Promise.then==');
  await resolveAfter2Seconds().then(message => console.log(message, 'AT'));
  await resolveAfter1Second().then(message => console.log(message, 'AT'));
};

// asyncTest();

const concurrentStart = async () => {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds();
  // starts timer immediately
  const fast = resolveAfter1Second();
  let s = await slow;
  let f = await fast;
  if (s.resolved && f.resolved) {
    console.log(s, f);
  }
  // console.log(await slow);
  // console.log(await fast);
  // waits for slow to finish, even though fast is already done!
};

concurrentStart();

// const buildApp = () => {
//   if (isValidName()) {
//     createAppFolders().then(() => {
//       try {
//         buildFrontend()
//         .then(() => {
//           createReactApp()
//         }).then(()=>{
//           removeGit();
//         }).then(()=>{
//           addAxiosAndProxy();
//         });
//         });
//         let back = await buildBackend().then(() => {
//           createExpressApp(); //& npm install
//           addPgPSupervisorStartScript();
//           updateWWWPort();
//         });
//         let parent = buildParent().then(() => {
//           addPkgAndGitignore();
//           addConcurrently();
//         });
//         if (front.status && back.status && parent.status) {
//           console.log("complete!!!");
//         }
//       } catch (e) {
//         console.log("e", e);
//       }
//     });
//   } else {
//     console.log("err invalid name");
//   }
// };
