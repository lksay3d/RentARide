//Brooklyn Little

document.addEventListener("DOMContentLoaded", function() {
  const reviewsContainer = document.getElementById("reviews");

  // Retrieve reviews from local storage
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Display reviews on the page
  reviews.forEach(function(review) {
    addReview(review.text, review.rating);
  });

  // Function to add a new review to the reviews container
  function addReview(reviewText, rating) {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");
    reviewDiv.innerHTML = `
      <div class="user-info">
        <img src="user-avatar.jpg" alt="User Avatar">
        <p><strong>Anonymous</strong></p>
      </div>
      <p class="review-text">${reviewText}</p>
      <div class="rating">
        <p>Your Rating:</p>
        <div class="stars">
          ${getStarRatingHTML(rating)}
        </div>
      </div>
    `;
    reviewsContainer.appendChild(reviewDiv);
  }

  // Function to generate HTML for star rating
  function getStarRatingHTML(rating) {
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starsHTML += `<span class="star checked">&#9733;</span>`;
      } else {
        starsHTML += `<span class="star">&#9733;</span>`;
      }
    }
    return starsHTML;
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const leaveReviewBtn = document.querySelector(".leave-review-btn");
  leaveReviewBtn.addEventListener("click", function() {
    window.location.href = "write_review_index.html"; 
  });
});



/*
document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll(".review");
    reviews.forEach(review => {
      const rating = parseInt(review.dataset.rating);
      const ratingMessage = review.querySelector(".rating-message");
      rate(rating, ratingMessage);
    });
  });
  
  function rate(rating, ratingMessage) {
    highlightStars(rating, ratingMessage);
  }
  
  function highlightStars(count, ratingMessage) {
    const stars = ratingMessage.previousElementSibling.querySelectorAll(".star");
    stars.forEach((star, index) => {
      if (index < count) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    const leaveReviewBtn = document.querySelector(".leave-review-btn");
    leaveReviewBtn.addEventListener("click", function() {
      window.location.href = "write_review_index.html"; 
    });
  });
  */
  