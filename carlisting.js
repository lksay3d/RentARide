class CarBuilder {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.year = null;
        this.price = null;
    }

    setYear(year) {
        this.year = year;
        return this; // Return the object itself for chaining
    }

    setPrice(price) {
        this.price = price;
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
    }
}

let carListings = [];

function submitForm() {
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    const carListing = new CarBuilder(make, model)
                            .setYear(year)
                            .setPrice(price)
                            .build();

    console.log(carListing);
    alert(`Car Listing Created: ${make} ${model} (${year}) at $${price}/day`);

    carListings.push(carListing);
    displayCarListings();

    function displayCarListings(){
        const listingsElement = document.getElementById('listings');
        listingsElement.innerHTML = '';

        carListings.forEach((listing, index) => {
            const li = document.createElement('li');

            li.textContent = `${listing.make} ${listing.model} (${listing.year}) - $${listing.price}/day`;

            const editButton = document.createElement('button');

            editButton.textContent = 'Edit';
            editButton.onclick = () => editListing(index);

            li.appendChild(editButton);

            listingsElement.appendChild(li);

        });
    }

    function editListing(index){
        const listing = carListings[index];

        document.getElementById('make').value = listing.make;
        document.getElementById('model').value = listing.model;
        document.getElementById('year').value = listing.year;
        document.getElementById('price').value = listing.price;

    }

}
