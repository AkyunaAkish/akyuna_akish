# APDP Web Application

#### Technologies Used
```
React + 
Redux + 
React-router 4 + 
Redux-Form 6 + 
SCSS + 
Webpack 2 +
NodeJS +
ExpressJS +
KnexJS + 
PostgreSQL
```

### Setup instructions(Windows): 

* https://betsol.atlassian.net/wiki/spaces/AWA/pages/108298241/Setting+up+the+APDP+Web+Application+on+your+Machine+Windows

### Setup instructions(Mac): 

* View the README.md file in the following boilerplate: https://github.com/AkyunaAkish/react-redux-node-express-todo-list-boilerplate

#### Refer to the following repo for a full working CRUD application using the current technology stack of this repo:

* https://github.com/AkyunaAkish/react-redux-node-express-todo-list-boilerplate

#### To create new database table:

```
$ knex migrate:make table_name
```

* Then go to your projects migrations folder, open the file and create the schema with KnexJS(refer to knexjs.org and/or the migrations folder in the boilerplate: https://github.com/AkyunaAkish/react-redux-node-express-todo-list-boilerplate)

* Once you have created the schema apply it to your database specified in your .env file(DATABASE_URL=postgres://localhost/apdp is the database that will be modified when running the app locally): 

```
$ knex migrate:latest
```

#### To Run the app after setup:

* One command line window/tab will run:

```
$ npm run client
```

* Another command line window/tab will run:

```
$ npm run server
```

* View the app while running locally on http://localhost:8080
