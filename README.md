# create-react-express-app

---

# NOTE: NO LONGER MAINTAINED!
## MAY UPDATE SOMETIME IN THE FUTURE, BUT FOR NOW PLS DO NOT USE

--

## PRODUCTION READY for Mac Users

**_Windows Users please check the Github repo_**

---

## Install Instructions:

Navigate to your projects root directory:  
_(NOT your desktop)_  
`npm install -g create-react-express-app`

_NOTE:_

- This package expects to be installed globally so you can run the command anywhere:  
  `fullstack MY_FULLSTACK_APP_NAME`

- This package also expects the following packages to be installed globally as well:
  - [create-react-app](https://www.npmjs.com/package/create-react-app)
  - [express-generator](https://www.npmjs.com/package/express-generator)

**Be sure you have globally installed the required packages:**

---

**Backend Required Package:**  
`npm install express-generator -g`  
_This step can be skipped if [express-generator](https://www.npmjs.com/package/express-generator) is already installed globally_

---

**Frontend Required Package:**  
https://github.com/facebook/create-react-app  
_This step can be skipped if [create-react-app](https://www.npmjs.com/package/create-react-app) is already installed globally_

---

**TO BUILD APP:**  
`fullstack theNameOfMyNewFullstackAppGoesHere`

**TO DEPLOY DEV SERVER:**  
inside app folder =>  
`npm start`

// for example:

```
cd theNameOfMyNewFullstackAppGoesHere
npm start

```

// the app will automatically open on http://localhost:3000/  
// the backend express server can be viewed on http://localhost:3100/

---

**frontend @ http://localhost:3000/**  
**backend @ http://localhost:3100/**

---

NOTE:  
This package works as expected on Mac.

This package needs to be slightly refactored to have it work properly on Windows. Apologies.

Please see the repository for more details:  
[create-react-express-app](https://github.com/mateo-navarrete/create-react-express-app)

More features, including Windows support, coming soon!
