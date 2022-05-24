# Solutions for Part 3 exercises

In this part our focus shifts towards the backend, that is, towards implementing functionality on the server side of the stack. We will implement a simple REST API in Node.js by using the Express library, and the application's data will be stored in a MongoDB database. At the end of this part, we will deploy a `phonebook` application to the internet.

## Phonebook API

In this exercise, we implemented a fullstack phonebook app with a backend written in Node.js and a frontend in react.js. The data are saved in a mongodb database and the app is deployed on heroku at the following URL.

- https://fso2022-phonebook.herokuapp.com/

### Start the application locally

To start an application:

```bash
# Install dependancies
$ npm install

# create a .env file and put there the MONGODB_URI for connecting to your mongodb database
$ echo "MONGODB_URI=<YOUR-MONGODB-URI>" > .env

# Start the application
$ npm run dev
```

You can then access the app on : http://localhost:3001/
