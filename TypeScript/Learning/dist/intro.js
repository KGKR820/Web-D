"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 9;
console.log(x);
let y = 920;
y.toFixed();
console.log(y);
let Name = "Kirby";
console.log(Name);
Name = Name.toUpperCase();
console.log(Name);
function status(Name, age, present) {
    console.log(`Name:${Name}`);
    console.log(`Age:${age}`);
    console.log(`Present:${present}`);
}
status("Kirby", 200, true);
function add(Num1, Num2) {
    return Num1 + Num2;
}
console.log(add(2, 11));
function print(data) {
    console.log(`Name:${data.name}`);
    console.log(`Age:${data.age}`);
    console.log(`Alive:${data.alive}`);
}
print({ name: "Kirby", age: 200, alive: true });
const Powers = [];
Powers.push("Fire");
console.log(Powers);
let w = 9; // ⚠️Remember you cannot use stringonly[toLowerCase()...] or numonly[*,/...] fns on W
w = "nine";
const array = ["Hi Guys", 90];
console.log(array);
let choose; // choose can only be 1,2,3
choose = 1;
choose = 2;
let Tupil;
Tupil = ["Tulip", 80, true];
console.log("Tupil");
Tupil.push(9000); // push,.. [array opern] break the Tupils prop
class User {
    constructor(email, age) {
        this.email = email;
        this.age = age;
    }
}
const Ramu = new User("Ramu", 35);
console.log("Ramu");
console.log(9);
