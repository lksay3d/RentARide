// Subject (owner)
// Define BookingService class
class BookingService {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(update) {
    this.observers.forEach(observer => observer.update(update));
  }

  // Simulate booking a car
  bookCar(car) {
    const bookingDetails = `Booked ${car} successfully.`;
    this.notifyObservers(bookingDetails);
  }
}

// Define User class
class User {
  constructor(name) {
    this.name = name;
  }

  update(update) {
    console.log(`${this.name} received update: ${update}`);
    // Update UI to inform user about the booking
    const bookingUpdates = document.getElementById('booking-updates');
    if (bookingUpdates) {
      bookingUpdates.innerHTML += `<p>${update}</p>`;
    }
  }
}

// Instantiate BookingService
const bookingService = new BookingService();

// Instantiate Users
const user1 = new User('John');
const user2 = new User('Alice');

// Register Users as Observers
bookingService.addObserver(user1);
bookingService.addObserver(user2);

// Simulate booking a car
bookingService.bookCar('Blue BMW');

// Event listener for button click
document.getElementById("submit-button").addEventListener("click", function(event) {
  event.preventDefault();
  // Redirect to the payment screen
  window.location.href = "pay_index.html";
});

// Update booking info
bookingService.addObserver({
  update: function(update) {
    // Update UI with booking info
    const bookingUpdates = document.getElementById('booking-updates');
    if (bookingUpdates) {
      bookingUpdates.innerHTML += `<p>${update}</p>`;
    }
  }
});


