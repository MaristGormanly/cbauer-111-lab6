let user = require('../model/user');

console.log("[userController] initialized")

// create an array to hold the created users
let users = [];

// creating users
let christian = user.createUser("Christian", "Bauer");
let hank = user.createUser("Hank", "Hill");
let titan = user.createUser("Titan", "Warrior");
let daquavious = user.createUser("Daquavious", "Bingleton");

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
    let newUser = user.createUser(req.body.firstName, req.body.lastName);
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

// Update a user by using PUT method of the /api/user/:index resource url
exports.updateUser = (req, res) => {
    const index = req.params.index;
    users[index] = user.createUser(req.body.firstName, req.body.lastName);
    res.setHeader('Content-Type', 'application/json');
    res.send(users[index]);
  }
  
  // Partially update a user by using PATCH method of the /api/user/:index resource url
exports.partialUpdateUser = (req, res) => {
    console.log('Request body:', req.body);
    const index = req.params.index;
    const { firstName, lastName } = req.body;
    if (firstName) {
      users[index].firstName = firstName;
    }
    if (lastName) {
      users[index].lastName = lastName;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(users[index]);
  }
  
  // Delete a user by using DELETE method of the /api/user/:index resource url
  exports.deleteUser = (req, res) => {
    const index = req.params.index;
    const deletedUser = users.splice(index, 1)[0];
    res.setHeader('Content-Type', 'application/json');
    res.send(deletedUser);
  }
