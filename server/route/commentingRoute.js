let commentController = require('../controller/commentController');

console.log("[commentRoutes] initialized");

// require the express library
const express = require('express');
// create chainable route handlers for a path by using app.route()
const router = express.Router();

/* calls getAllComments() in commentController to return entire comments array as a json
list if a GET request is recieved on the /api/comment resource url. Also calls the
createComment() function if a POST request is recieved on the same url */
router.route('/')
  .get((req, res) => {
    commentController.getAllComments(req, res);
  })
  .post((req, res) => {
    commentController.saveComment(req, res);
  })
  .put((req, res) => {
    commentController.updateComment(req, res);
  });

/* route to call the getComment() function when the client sends a GET request to the
/api/comment/:index resource url (:index being a # representign an index of the comments
array for which we wish to query a comment) */
router.route('/:index')
    .get((req, res) => {
    commentController.getComment(req, res);
    })
    .patch((req, res) => {
        commentController.partialUpdateComment(req, res);
    })
    .delete((req, res) => {
        commentController.deleteComment(req, res);
    })
    .put((req, res) => {
        commentController.updateComment(req, res);
    });

/* adds the routes created in this file to exports so they're accessible 
in the files that require (import) it */
module.exports = router;