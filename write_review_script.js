//Brooklyn Little

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("review-form");
    const returnToReviewsBtn = document.getElementById("return-to-reviews");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const reviewText = document.getElementById("review-text").value;
      const rating = document.querySelectorAll(".star.checked").length;
  
      // Add the new review to local storage
      const review = { text: reviewText, rating: rating };
      const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
      reviews.push(review);
      localStorage.setItem("reviews", JSON.stringify(reviews));
  
      // Redirect to the reviews page
      window.location.href = "review_index.html";
    });
  
    returnToReviewsBtn.addEventListener("click", function() {
      window.location.href = "review_index.html";
    });
  
    const stars = document.querySelectorAll(".star");
    stars.forEach(function(star) {
      star.addEventListener("click", function() {
        stars.forEach(function(s) {
          if (s === star || s.previousElementSibling === star) {
            s.classList.toggle("checked");
          }
        });
      });
    });
  });
  