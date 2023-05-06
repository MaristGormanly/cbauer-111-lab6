let comment = require('../model/comment');

console.log("[commentController] initialized")

// create an array to hold the created comments
let comments = [];

// creating comments
let comment1 = comment.createComment("John", "Hello World");
let comment2 = comment.createComment("Sarah", "Nice post!");
let comment3 = comment.createComment("Jack", "Thanks for sharing");
let comment4 = comment.createComment("Alice", "I enjoyed reading this");

// adding the comments to the array
comments.push(comment1);
comments.push(comment2);
comments.push(comment3);
comments.push(comment4);

/* retrieve the comment in the :index parameter of the request and return as json,
lets us return 1 comment from the array based on the parameter passed in the url*/
exports.getComment = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(comments[req.params.index]);
}

// save a comment by using POST method of the /api/comment resource url
exports.saveComment = (req, res) => {
    let newComment = comment.createComment(req.body.author, req.body.text);
    comments.push(newComment);
    res.setHeader('Content-Type', 'application/json');
    res.send(comments);
}

/* send entire comments array as the body of the response as json 
(function will be called when the API call to query and return all comments is called) 
function should be at bottom of controller file */
exports.getAllComments = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(comments);
}

// Update a comment by using PUT method of the /api/comment/:index resource url
exports.updateComment = (req, res) => {
    const index = req.params.index;
    comments[index] = comment.createComment(req.body.author, req.body.text);
    res.setHeader('Content-Type', 'application/json');
    res.send(comments[index]);
}

// Partially update a comment by using PATCH method of the /api/comment/:index resource url
exports.partialUpdateComment = (req, res) => {
    console.log('Request body:', req.body);
    const index = req.params.index;
    const { author, text } = req.body;
    if (author) {
      comments[index].author = author;
    }
    if (text) {
      comments[index].text = text;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(comments[index]);
}

// Delete a comment by using DELETE method of the /api/comment/:index resource url
exports.deleteComment = (req, res) => {
    const index = req.params.index;
    const deletedComment = comments.splice(index, 1)[0];
    res.setHeader('Content-Type', 'application/json');
    res.send(deletedComment);
}