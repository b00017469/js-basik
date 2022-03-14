function bark(name, weight) {
    if (weight > 20) {
        console.log(name + "says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}
bark("rover", 20);
bark("july", -1);
bark("dino", 0, 0);
bark("fido", "21");
bark("lady", 10);
bark("wolf", 21);

