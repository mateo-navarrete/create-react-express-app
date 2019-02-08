FULL STACK APP:
```
https://github.com/new

mkdir REPO_NAME
cd REPO_NAME

echo "# REPO_NAME” >> README.md
git init
git add .
git commit -m “init commit"
git remote add origin https://github.com/NAME/REPO_NAME.git
git push -u origin master

npm init
touch .gitignore
=>NOTE: be sure to add /node_modules! & /FRONT|BACK_END_FOLDER/node_modules

express backend
npm install --prefix ./backend pg-promise

create-react-app frontend
npm install --prefix ./frontend axios

@/backend/bin/www => edit:
var port = normalizePort(process.env.PORT || '3001');
@/backend/package.json => edit: “start": "node ./bin/www" =>
"start": "supervisor ./bin/www"
=>be sure to: npm install supervisor -g => (only if haven’t already)

=>@/frontend/package.json => add:
"proxy": "http://localhost:3001"

cd backend
npm install
npm start
=> backend test => @chrome browser =>
http://localhost:3001/

control + c
cd ..
cd frontend
npm start
=> frontend test => auto opens @chrome browser =>
http://localhost:3000/

control + c
cd ..
npm install concurrently

=>@package.json => add to “scripts” :
"start": "concurrently --kill-others \"cd frontend && npm start\" \"cd backend && npm start\""

npm start
=>auto opens @chrome browser => http://localhost:3000/
=> backend test => @chrome browser =>  http://localhost:3001/ => refresh the page
```
