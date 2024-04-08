//Brooklyn Little

// Mediator object
//mediator used to control button and menu
const Mediator = {
  menuToggle: document.querySelector('.toggle'),
  showcase: document.querySelector('.showcase'),


  init: function() {
    this.menuToggle.addEventListener('click', this.handleMenuToggle.bind(this));
  },

  handleMenuToggle: function() {
    this.menuToggle.classList.toggle('active');
    this.showcase.classList.toggle('active');
  }
};

document.addEventListener('DOMContentLoaded', function() {
  Mediator.init();
});


/*
const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })
*/

/*
document.getElementById("explore-button").addEventListener("click", function(){
    window.location.href = "booking_index.html";
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the login link element
  var loginLink = document.getElementById("login");

  // Attach a click event listener to the login link
  loginLink.addEventListener("click", function(event) {
      // Prevent the default action of following the link
      event.preventDefault();

      // Open the desired page
      window.location.href = "your_page_url.html";
  });
});
*/

