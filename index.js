"use strict";
// Type Annotation
const str1 = "jatin singh";
const str2 = "virat kohli";
const areEqual = (str1 === str2) ? "true" : "false";
console.log(areEqual);
// Boolean and Bigint Types
let hasStarted = true;
hasStarted = false;
const isEven = (a) => {
    return a % 2 === 0 ? "true" : "false";
};
console.log(isEven(7));
// BigInt
let bigNumber = 900719925474099251n;
console.log("big" + bigNumber);
let anotherNum = BigInt("90071992547409925199");
console.log("another" + anotherNum);
let sum = bigNumber + anotherNum;
console.log("final" + sum);
// ANY and UNKNOWN TYPES
let num;
num = "jatin";
num = true;
num = 89;
// UNKNOWN  this is much safer.
let digit;
digit = "jatin singh";
digit = true;
const najafgarh = {
    captain: "Jatin singh",
    bowler: 5,
    batsman: 6,
};
const book = {
    name: "New trader Rich trader",
    pages: 375,
    price: 200,
    duration: 1,
};
const printID = (id) => {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
};
printID("jatin");
function getFirstThree(x) {
    console.log(x.slice(0, 3));
}
getFirstThree("Jatin Singh");
getFirstThree([1, 2, 3, 4, 5, 6]);
// for of,  for in loop
let arr1 = [1, 2, 3, 4];
for (const index in arr1) {
    console.log(index);
}
for (const val of arr1) {
    console.log(val);
}
// for each
let country = ["India", "Australia", "England", "New Zeland"];
country.forEach((i) => { console.log(i); });
// Generics
// - Generics defines Function type automatically just use any letter in arrow bracket after functoin Name. Like below example.
function logAnyThing(par) {
    return par;
}
logAnyThing([3, 3, 4, 5]);
const uploadPosts = async (path) => {
    const res = await fetch(`https://json.com/${path}`);
    return res.json();
};
async function result() {
    const users = await uploadPosts("users");
    return users[0].age;
}
// map function
const numbers = [2, 3, 4, 5, 6, 7];
const doubleData = numbers.map((curVal) => {
    return curVal * 2;
});
console.log(doubleData);
// Converting numbers into STRING
const numberToString = numbers.map((curVal) => curVal.toString());
console.log(numberToString);
// Filter method
// Finding Even numbers
const fil = [2, 3, 4, 5, 6, 7, 88, 8];
const findEven = fil.filter((curElm) => {
    return curElm % 2 === 0;
});
console.log(findEven);
// Finding numbers greater than 4
const aboveFour = fil.filter((curElm) => curElm > 4);
console.log(aboveFour);
// finding max value of the array;
const anum = [2, 4, 56, 4, 3, 3, 44, 32, 20];
const findMaxValue = (anum) => {
    if (anum.length === 0) {
        throw new Error("Array is empty");
    }
    let maxi = anum[0];
    for (let i = 1; i < anum.length; i++) {
        if (anum[i] > maxi) {
            maxi = anum[i];
        }
    }
    return maxi;
};
console.log(findMaxValue(anum));
// Objects
const person = {
    name: "Jatin",
    age: 20,
    profession: "circket",
    address: {
        city: "Delhi",
        country: "India"
    },
};
console.log(person.name);
const product = {
    name: "cricket Bat",
    price: 14999,
    quantity: 10,
    brand: "MRF",
};
console.log(product.name + product.brand);
const person1 = {
    name: "virat kohli",
    age: 35,
    profession: "cricket",
    address: {
        city: "Mumbai",
        country: "India",
    },
};
console.log(person1.name + " " + person1.address.country);
const person2 = {
    name: "Kane williamson",
    age: 34,
    profession: "cricket",
    address: {
        city: "Tauranga",
        country: "New Zeland",
    },
};
console.log(person2.name + " " + person2.address.country);
const person3 = {
    name: "Dale steyn",
    age: 38,
    profession: "cricket",
    address: {
        city: "Phalaborwa",
        country: "South Africa"
    }
};
console.log(person3.name + " " + person3.address.country);
// calculating the total price of product quantity
const product1 = {
    name: "Laptop",
    price: 40000,
    quantity: 9,
};
const claculateTotalPrice = () => {
    return product1.price * product1.quantity;
};
console.log(claculateTotalPrice());
const add = (a, b) => {
    return a + b;
};
const sub = (x, Y) => x - Y;
const multiply = (p, q) => {
    return p * q;
};
console.log(add(5, 4));
console.log(sub(9, 4));
console.log(multiply(3, 10));
// Enums 
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
const defining = (value) => {
    switch (value) {
        case Direction.up:
            return console.log("Moving up");
            break;
        case Direction.down:
            return console.log("Moving Down");
            break;
        case Direction.left:
            return console.log("Moving left");
            break;
        case Direction.right:
            return console.log("Moving right");
            break;
        default:
            return console.log("Unknown value provided");
    }
};
defining(Direction.up);
defining(Direction.left);
defining(Direction.right);
