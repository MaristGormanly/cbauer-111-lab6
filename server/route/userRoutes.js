let userController = require('../controller/userController')

console.log("[userRoutes] initialized")

// this sets up the file to provide routing
// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
var router = express.Router();

/* calls getAllUsers() in userController to return entire users array as a json
list if a GET request is recieved on the /api/user resource url. Also calls the
saveUser() function if a POST request is recieved on the same url */
router.route('/')
    .get((req, res) => {
    userController.getAllUsers(req, res);
    })
    .post((req, res) => {
    userController.saveUser(req, res);
    }
);

/* route to call the getUser() function when the client sends a GET request to the
/api/user/:index resource url (:index being a # representign an index of the users
array for which we wish to query a user) */
router.route('/:index')
    .get((req, res) => {
    userController.getUser(req, res);
    }
);

/* adds the routes created in this file to exports so they're accessible 
in the files that require (import) it */
module.exports = router;