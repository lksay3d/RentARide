class CarBuilder {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.year = null;
        this.price = null;
        this.color = null;
    }

    setYear(year) {
        this.year = year;
        return this; // Return the object itself for chaining
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    setColor(color){
        this.color = color;
        return this;
    }

    build() {
        return new CarListing(this);
    }
}

class CarListing {
    constructor(builder) {
        this.make = builder.make;
        this.model = builder.model;
        this.year = builder.year;
        this.price = builder.price;
        this.color = builder.color;
    }
}

let carListings = [];
let editMode = false;
let editIndex = -1;

function displayCarListings(){
    const listingsElement = document.getElementById('listings');
    listingsElement.innerHTML = '';

    carListings.forEach((listing, index) => {
        const li = document.createElement('li');

        li.textContent = `${listing.make} ${listing.model} - ${listing.color} (${listing.year}) - $${listing.price}/day`;

        const editButton = document.createElement('button');

        editButton.textContent = 'Edit';
        editButton.onclick = () => editListing(index);

        li.appendChild(editButton);

        listingsElement.appendChild(li);

    });
}


function clearForm(){
    document.getElementById('make').value = '';
    document.getElementById('model').value = '';
    document.getElementById('year').value = '';
    document.getElementById('price').value = '';
    document.getElementById('color').value = '';
    
}

function editListing(index){
    editMode = true;
    editIndex = index;

    const listing = carListings[index];

    document.getElementById('make').value = listing.make;
    document.getElementById('model').value = listing.model;
    document.getElementById('year').value = listing.year;
    document.getElementById('price').value = listing.price;
    document.getElementById('color').value = listing.color;

}

function initDefaultCars(){
    const defaultCars = [
        new CarBuilder("Ford", "Pickup").setYear(2020).setPrice("250").setColor("Gray").build(),
        new CarBuilder("BMW", "Sedan").setYear(2018).setPrice("175").setColor("Blue").build(),
        new CarBuilder("Jeep", "Wrangler").setYear(2019).setPrice("200").setColor("White").build(),

    ];

    carListings = [...defaultCars];
    displayCarListings();
}

document.addEventListener('DOMContentLoaded', initDefaultCars);


function submitForm() {
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const color = document.getElementById('color').value;
    

    if(editMode){
        const listing = carListings[editIndex];

        listing.make = make;
        listing.model = model;
        listing.year = year;
        listing.price = price;
        listing.color = color;

        editMode = false;
        editIndex = -1;
    }

    else{
        const carListing = new CarBuilder(make, model)
                                .setYear(year)
                                .setPrice(price)
                                .setColor(color)
                                .build();
        carListings.push(carListing);
    }

    displayCarListings();

    clearForm();
}