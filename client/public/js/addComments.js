const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');
const commentInput = document.getElementById('comment-input');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const commentText = commentInput.value;
  if (commentText) {
    const comment = document.createElement('p');
    comment.textContent = commentText;
    commentsContainer.appendChild(comment);
    commentInput.value = '';
  }
});