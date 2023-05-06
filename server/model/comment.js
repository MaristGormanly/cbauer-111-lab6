class Comment {
    constructor(author, text) {
      this.author = author;
      this.text = text;
      this.timestamp = new Date();
    }
  }
  
  exports.createComment = function(author, text) {
    return new Comment(author, text);
  }