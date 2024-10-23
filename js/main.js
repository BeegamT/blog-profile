// Get all like buttons
const likeButtons = document.querySelectorAll('.like-button');

// Attach event listeners to each button
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the post ID from the data attribute
        const postId = this.getAttribute('data-postid');
        
        // Find the span that holds the like count
        const likeCountSpan = document.getElementById(`like-count-${postId}`);
        
        // Update the like count
        let currentCount = parseInt(likeCountSpan.textContent);
        likeCountSpan.textContent = currentCount + 1;
    });
});
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Thank you for contacting me, ' + name + '! I will get back to you soon.');
        // Code to handle form submission
    }
});
