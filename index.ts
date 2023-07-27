// Type Annotation
const str1: string = "jatin singh";
const str2: string = "virat kohli";
const areEqual: string = (str1 === str2) ? "true" : "false" ;
console.log(areEqual);

// Boolean and Bigint Types
let hasStarted:boolean = true;
hasStarted = false;
const isEven=(a:number)=>{
    return a%2 === 0 ?  "true" : "false";
}
console.log(isEven(7));


// BigInt
let bigNumber:bigint = 900719925474099251n;
console.log("big"+bigNumber);

let anotherNum = BigInt("90071992547409925199");
console.log("another"+anotherNum);

let sum = bigNumber + anotherNum ;
console.log("final"+sum)


// ANY and UNKNOWN TYPES
let num:any;
num = "jatin";
num = true;
num = 89;


// UNKNOWN  this is much safer.
let digit:unknown;
digit = "jatin singh";
digit = true;


// Interfaces

interface team {
    captain: string;
    bowler: number;
    batsman: number;
}

const najafgarh: team = {
   captain: "Jatin singh",
   bowler: 5,
   batsman: 6,
}

interface Ebook {
    name: string;
    pages: number;
    price: number;
}

interface audiobook extends Ebook {
    duration: number | string;
}

const book: audiobook = {
  name: "New trader Rich trader",
  pages: 375,
  price: 200,
  duration: 1,

}


type ID = number | string;

const printID = (id: ID) => {
    if(typeof id==="string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id)
    }
}

printID("jatin");


function getFirstThree(x: string | number[]){
    console.log(x.slice(0,3));
}
getFirstThree("Jatin Singh");
getFirstThree([1,2,3,4,5,6]);



// for of,  for in loop
let arr1 = [1,2,3,4];

for(const index in arr1){
    console.log(index);
}

for(const val of arr1){
    console.log(val);
}


// for each

let country: string[] = ["India", "Australia", "England", "New Zeland"]

country.forEach((i)=>{console.log(i)});



// Generics
// - Generics defines Function type automatically just use any letter in arrow bracket after functoin Name. Like below example.


function logAnyThing<A>(par: A): A{
  return par;
}

logAnyThing([3,3,4,5])


interface Iposts {
    id: number;
    desc: string;
    country: string;
}

interface Iusers {
    Name: string;
    id: number;
    age: number;
}


const uploadPosts = async<T>(path: string): Promise<T> => {
    const res = await fetch(`https://json.com/${path}`)
    return res.json();

};

async function result(){
    const users = await uploadPosts<Iusers[]>("users")
    return users[0].age
}


// map function

const numbers:number[] = [2,3,4,5,6,7];

const doubleData = numbers.map((curVal:number)=>{
     return curVal * 2 ;
})
console.log(doubleData);

// Converting numbers into STRING

const numberToString: string[] = numbers.map((curVal:number) =>  curVal.toString() );
console.log(numberToString);


// Filter method
// Finding Even numbers

const fil = [2,3,4,5,6,7,88,8];

const findEven:number[] = fil.filter((curElm:number)=>{
    return curElm % 2 === 0;
});

console.log(findEven);

// Finding numbers greater than 4
const aboveFour:number[] = fil.filter((curElm:number)=> curElm > 4);
console.log(aboveFour)



// finding max value of the array;

const anum = [2,4,56,4,3,3,44,32,20];

const findMaxValue = (anum:number[]) =>  {
    if(anum.length === 0){
       throw new Error("Array is empty");
    }

    let maxi = anum[0];
    for(let i=1; i<anum.length; i++){
         if(anum[i]>maxi){
           maxi = anum[i]
         }
    }
    return maxi;
}
console.log(findMaxValue(anum))


// Objects

const person: {
    name: string;
    age: number;
    profession: string;
    address: {
        city: string;
        country: string;
    }
} = {
    name: "Jatin",
    age: 20,
    profession: "circket",
    address: {
        city: "Delhi",
        country:"India"
    },
}
console.log(person.name);

const product:{
    name: string;
    price: number;
    quantity: number;
    brand: string;

} = {
    name: "cricket Bat",
    price: 14999,
    quantity: 10,
    brand: "MRF",
}
console.log(product.name + product.brand)
// you have to use (type Alias), when you have multiple objects with the same properties. just made one type alias according to to your objects and use that into multiple object. examples

type Personss = {              // this is Type Alias
    name: string;
    age: number;
    profession: string;
    address: {
        city: string;
        country: string;
    }
}
const person1: Personss = {
    name: "virat kohli",
    age: 35,
    profession: "cricket",
    address: {
        city: "Mumbai",
        country: "India",
    },
}
console.log(person1.name +" " +  person1.address.country);

const person2: Personss = {
    name: "Kane williamson",
    age: 34,
    profession: "cricket",
    address: {
        city: "Tauranga",
        country: "New Zeland",
    },
}
console.log(person2.name  +" " + person2.address.country)

const person3: Personss = {
    name: "Dale steyn",
    age: 38,
    profession: "cricket",
    address: {
        city: "Phalaborwa",
        country: "South Africa"
    }
}
console.log(person3.name  +" " + person3.address.country )


// calculating the total price of product quantity
 const product1 :{
        name: string;
        price: number;
        quantity: number;
    } = {
    name: "Laptop",
    price: 40000,
    quantity: 9,
}

const claculateTotalPrice = (): number => {
    return product1.price*product1.quantity
}
console.log(claculateTotalPrice());