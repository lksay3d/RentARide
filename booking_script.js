// Subject (renter)
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

  // Observer (user)
  class User {
    constructor(name) {
      this.name = name;
    }

    update(update) {
      console.log(`${this.name} received update: ${update}`);
      // Update UI to inform user about the booking
      const bookingUpdates = document.getElementById('booking-updates');
      bookingUpdates.innerHTML += `<p>${update}</p>`;
    }
  }

  // Instantiate Subject
  const bookingService = new BookingService();

  // Instantiate Observers
  const user1 = new User('John');
  const user2 = new User('Alice');

  // Register Observers
  bookingService.addObserver(user1);
  bookingService.addObserver(user2);

  // Simulate booking a car
  bookingService.bookCar('Blue BMW');