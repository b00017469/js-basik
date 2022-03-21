let passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evil", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "premium"} ];

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, printPassenger);

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evil");
}

function checkNotPaid(passenger){
    return (!passenger.paid);
}

function printPassenger (passenger) {
    let message = "Name: " +passenger.name;
    if (passenger.paid) {
        message = message + ", paid: yes";
    }else {
        message = message + ", paid: no";
    }
    console.log(message);
}

function processPassengers(passengers, testFunction){
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function createDrinkOrder(passenger) {
    let orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "coach"){
        orderFunction = function () {
            alert("Your choice is cola or water.");
        };
    } else {
        orderFunction = function () {
            alert("Would you like cola, water or wine?")
        }
    }
    return orderFunction;
}

function creatDinnerOrder (passenger) {
    let orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "coach"){
        orderFunction = function () {
            alert("Your choice is nut or сухарики).");
        };
    } else {
        orderFunction = function () {
            alert("Would you like закуски или сырная тарелка?")
        }
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
    //Предложить обед
    getDrinkOrderFunction();
    let getDinnerOrderFunction = creatDinnerOrder(passenger);
    getDinnerOrderFunction();
    //Предложить кино
    getDrinkOrderFunction();
    //Забрать мусор
}

function servePassengers (passengers){
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);
