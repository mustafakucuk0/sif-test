document.addEventListener('DOMContentLoaded', function() {
    const bookNowButtons = document.querySelectorAll('.book-now-btn');
    bookNowButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const form = document.querySelector('#bookingForm');
            if (validateForm(form)) {
                // Process booking here
                alert('Booking successful!');
            }
        });
    });

    function validateForm(form) {
        // Basic validation example
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        if (!name || !email) {
            alert('Please fill in all fields.');
            return false;
        }
        return true;
    }

    function loadReviews() {
        fetch('reviews.json')
            .then(response => response.json())
            .then(data => {
                const reviewsContainer = document.querySelector('#reviewsContainer');
                data.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.className = 'review';
                    reviewElement.innerHTML = `<h5>${review.author}</h5><p>${review.content}</p>`;
                    reviewsContainer.appendChild(reviewElement);
                });
            })
            .catch(error => console.error('Error loading reviews:', error));
    }

    loadReviews();
});