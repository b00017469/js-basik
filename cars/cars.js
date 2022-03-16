let chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

let worthALook = prequal(taxi);

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
    } else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

function makeCar() {
    let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ["red", "blue", "tan", "yellow", "white"];
    let convertible = [true, false];
    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 5) + 1;
    let rand6 = Math.floor(Math.random() * 2);
    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    };
    return car;
}
function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}
let carToSell = makeCar();
displayCar(carToSell);

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();
taxi.start();
taxi.drive();
taxi.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop();