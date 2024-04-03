document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to 'Book Now' buttons
    document.querySelectorAll('.book-now-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Validate form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            if (!name || !email) {
                alert('Please fill in all fields.');
                return;
            }
            // Assuming validation passes, proceed with booking logic (not fully implemented here)
            alert('Booking successful!');
        });
    });

    // Function to load customer reviews dynamically
    function loadReviews() {
        fetch('path/to/reviews.json')
            .then(response => response.json())
            .then(data => {
                const reviewsContainer = document.getElementById('reviews-container');
                data.reviews.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.className = 'review';
                    reviewElement.textContent = review.text;
                    reviewsContainer.appendChild(reviewElement);
                });
            })
            .catch(error => console.error('Error loading reviews:', error));
    }

    // Call loadReviews on page load
    loadReviews();
});

// Ensure to link this script properly in your index.html
// <script src="src/scripts.js"></script>
