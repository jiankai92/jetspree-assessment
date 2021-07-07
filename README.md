## JetSpree Assessment - Javascript CRUD APP
This folder consist of 2 parts, backend folder to provide and process submissions via API (Node + Express), As well as the frontend (React) to render said data.  

## Setting up Backend for the project
### Under the jetspree-assessment-backend folder
1. Run npm install to install the necessary packages
2. Setup your database credentials under the config/config.json file
3. Run `node_modules/.bin/sequelize db:migrate` to create the Users Table used to store and retrieve user data
4. Run `node app.js` to start the backend server

## Setting up frontend
### Under the jetspree-assessment-frontend folder
1. Run npm install to install the necessary packages
2. Run `npm start` to run the fronend server