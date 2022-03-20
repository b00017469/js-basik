const test1 = "abcdef";
const test2 = 123;
const test3 = true;
const test4 = {};
const test5 = [];
let test6;
const test7 = {"abcdef": 123};
const test8 = ["abcdef", 123];
function test9() {return "abcdef"}
let test10 = null;
let test11 = 0/0;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
console.log(typeof test11);

if (99 == "99") {
    console.log("A number equals a string!");
} else {
    console.log("No way a number equals a string");
}
function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}

const toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);
