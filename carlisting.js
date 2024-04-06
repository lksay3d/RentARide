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
    // Here, you'd typically send the carListing to your backend server or manipulate it as needed.
    alert(`Car Listing Created: ${make} ${model} (${year}) at $${price}/day`);
}
