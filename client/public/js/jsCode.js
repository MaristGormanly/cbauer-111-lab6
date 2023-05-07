/* function to count and limit amount of characters typed */
var commentInput = document.getElementById('comment-input');
var commentCount = document.getElementById('count');
commentInput.addEventListener('input', function(e) {
    var count = commentInput.value.length;
    commentCount.value = count;
    if (count > 100) {
        commentInput.value = commentInput.value.slice(0, 100);
        commentCount.value = 100;
    }
});

/* for liking images and counting the amount of likes */
var likeButton = document.getElementById('like');
var likeCount = document.getElementById('likes');
likeButton.addEventListener('click', function(e) {
    likeCount.innerHTML = (Number(likeCount.innerHTML) + 1) + '';
});

/* for enlarging an image when clicked on */
var smallPic = document.getElementById('smallPic');
smallPic.addEventListener('click', function(e) {
    smallPic.style.transform = "scale(2)";
    smallPic.style.transition = "transform 0.25s ease";
});

/* resets enlarged image to original size */
var resetButton = document.getElementById('resetImg');
resetButton.addEventListener('click', function(e) {
    smallPic.style.transform = "scale(1)";
    smallPic.style.transition = "transform 0.25s ease";
});

// function for commenting
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments-container');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const commentText = commentInput.value;
    if (commentText) {
        const comment = document.createElement('p');
        comment.textContent = commentText;
        commentsContainer.appendChild(comment);
        commentInput.value = '';
        commentCount.value = 0;
    }
});
