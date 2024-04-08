//Leia Kamal Sayed

document.addEventListener('DOMContentLoaded', () => {
    displayCurrentRental();
    displayPastRentals();
});

function displayCurrentRental(){
    const currentRental = {
        make: 'BMW',
        model: 'Sedan',
        color: 'Blue',
        year: 2018,
        price: 175,
        date: 'April 5, 2024'
    };

    const currentRentalElement = document.getElementById('currentRentals');

    let li = document.createElement('li');
    li.textContent = `Make: ${currentRental.make}, Model: ${currentRental.model}, Color: ${currentRental.color}, Year: ${currentRental.year}, Price: $${currentRental.price}/day, Date: ${currentRental.date}`;
    currentRentalElement.appendChild(li);
}

function displayPastRentals(){
    const pastRentals = [
        {
            make: 'Ford',
            model: 'Pickup',
            color: 'Gray',
            year: 2020,
            price: 250,
            date: 'March 12, 2023'
        },

        {
            make: 'Jeep',
            model: 'Wrangler',
            color: 'White',
            year: 2019,
            price: 200,
            date: 'July 22, 2022'
        }
    ];

    const pastRentalsElement = document.getElementById('pastRentals');
    pastRentals.forEach(rental => {
        let li = document.createElement('li');
        li.textContent = `Make: ${rental.make}, Model: ${rental.model}, Color: ${rental.color}, Year: ${rental.year}, Price: $${rental.price}/day, Date: ${rental.date}`;
        pastRentalsElement.appendChild(li);
    });
}