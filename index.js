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
