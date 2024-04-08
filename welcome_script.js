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

