let user = require('../model/user')

console.log("[userController] initialized")

// create an array to hold the created users
let users = [];

// creating users
let christian = User.createUser("Christian", "Bauer");
let hank = User.createUser("Hank", "Hill");
let titan = User.createUser("Titan", "Warrior");
let daquavious = User.createUser("Daquavious", "Bingleton");

// adding the users to the array
users.push(christian);
users.push(hank);
users.push(titan);
users.push(daquavious);

/* retrieve the user in the :index parameter of the request and return as json,
lets us return 1 user from the array based on the parameter passed in the url*/
exports.getUser = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(users[req.params.index]);
}

// save a user by using POST method of the /api/user resource url
exports.saveUser = (req, res) => {
    let newUser = User.createUser(req.body.firstName, req.body.lastName);
    users.push(newUser);
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
}

/* send entire users array as the body of the response as json 
(function will be called when the API call to query and reutrn all users is called) 
function should be at bottom of controller file */
exports.getAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
}

