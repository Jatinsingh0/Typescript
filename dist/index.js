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
country.forEach((i) => console.log(i));
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
async function resu() {
    const post = await uploadPosts("post");
    return post[3].desc;
}
const adds = (a, b) => {
    return (a + b);
};
adds(5, 10);
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
const product11 = ["Nokia", 2000, 10];
const product12 = ["samsung", 70000, 5];
const productss = (pro) => {
    const [product, price, quantity] = pro;
    console.log(`i need ${quantity} ${product} mobile phones of Rs${price} each.`);
};
productss(product11);
productss(product12);
// OOPS
class students {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const student1 = new students("Jatin Singh", 20, ["cricket", "business"]);
const student2 = new students("Virat kohli", 35, ["cricket", "travelling"]);
const student3 = new students("Anish singh thakur", 28, ["Trading stocks", "traveling"]);
const student4 = new students("Jonathan", 28, ["Gaming", "traveling"]);
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
const userInfo1 = {
    name: "jatin",
    age: 20,
    address: "najafgarh",
};
const india = {
    name: "viratKohli",
    mostFamous: "viratKohli",
    mostFollowers: "viratKohli",
    indiaKnownAs: "viratKohli",
};
const func11 = (a, b) => {
    return a * b;
};
console.log(func11(9, 7));
// Array
const arr10 = [1, 2, 3, 33, 22, 44, 43, 21];
const arr11 = ["jatin", "virat", "anish"];
const arr12 = 6777;
const book5 = {
    name: "New Trader Rich Trader",
    author: "Steve burns and Holly burns",
    price: 250,
};
const bookDetails = {
    name: "New Trader Rich Trader",
    author: "Steve burns and Holly burns",
    price: 250,
    published: 2003,
    pages: 278,
    quality: "premium"
};
// Rest operator
const funcRest = (...r) => {
    return r;
};
console.log(funcRest(12, 3, 43, 54, 23, 1, 232, 3, 43, 65, 768, 8));
// Class
class bikes {
    name;
    company;
    price;
    constructor(name, company, price) {
        this.name = name;
        this.company = company;
        this.price = price;
    }
}
const bike1 = new bikes("Ninja", "Yamaha", 7900000);
console.log(bike1);
// type assertion
// const btn = document.getElementById("btn") as HTMLElement;
// btn.onclick;
// const img = document.getElementById("myImg") as HTMLImageElement ;
// img.src;
const form = document.getElementById("myForm");
const formInput = document.querySelector("#formInput");
form.onsubmit = (e) => {
    e.preventDefault();
    const inputValue = Number(formInput.value);
    const h2 = document.createElement("h4");
    h2.textContent = String(inputValue + 10);
    const body = document.querySelector("body");
    body.append(h2);
};
// generics
const func21 = (n) => {
    return n;
};
const ans1 = func21("Jatin");
const ans2 = func21(21);
const ex = {
    name: "xyz",
    age: 18,
};
const exy = (info) => {
    return info;
};
const exyz = exy(ex);
exyz.age;
