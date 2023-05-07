class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// adding to exports array to make values accessible where user.js file is used
exports.createUser = function(firstName, lastName) {
    return new User(firstName, lastName)
}