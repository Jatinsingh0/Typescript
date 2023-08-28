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

country.forEach((i)=> console.log(i));



// Generics
// - Generics defines Function type automatically just use any letter in arrow bracket after functoin Name. Like below example.


function logAnyThing<T>(par: T): T{
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


const adds = <T extends number>(a: T, b: T): T => {
  return (a + b) as T ;
}   

adds(5,10);


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


// call signature -  used to define the type of a function. Call Signatures describe the shape of a function by specifying the types of its parameters and return value. 
type MathOperation = (a:number, b:number) => number;

const add: MathOperation = (a,b) => {
    return a + b
};
const sub: MathOperation = (x,Y) => x - Y;

const multiply: MathOperation = (p, q) => {
     return p * q;
}

console.log(add(5,4));
console.log(sub(9,4));
console.log(multiply(3,10));



// Enums 
enum Direction {
    up,
    down,
    left,
    right,
}

const defining = (value: Direction) => {
    switch(value){
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
}

defining(Direction.up);
defining(Direction.left);
defining(Direction.right);


// Tuples -
// A tuple is a data structure that allows you to store a fixed-size collection of elements of different types
// Tuples are particularly useful when you want to represent a fixed-size collection of values with different data types.
type productInfo = readonly [string, number, number];   //Tuple

const product11: productInfo  = ["Nokia", 2000, 10];
const product12: productInfo = ["samsung", 70000, 5];

const productss = (pro: productInfo) => {
    const[product, price, quantity] = pro;
    console.log(`i need ${quantity} ${product} mobile phones of Rs${price} each.`)
}

productss(product11);
productss(product12)



// OOPS
class students {                  //Shorthand properties
    constructor(
        public name: string,
        public age: number,
        protected hobbies: string[],
    ){}
}

const student1: students = new students("Jatin Singh", 20, ["cricket", "business"]);
const student2: students = new students("Virat kohli", 35, ["cricket", "travelling"]);
const student3: students = new students("Anish singh thakur", 28, ["Trading stocks", "traveling"]);
const student4: students = new students("Jonathan", 28, ["Gaming", "traveling"]);


console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);


// type Alias
type userinfo = {
  name: string;
  age: number;
  address: string;
};

const userInfo1: userinfo = {
 name: "jatin",
 age: 20,
 address: "najafgarh",
}

const india : {
    name: string;
    mostFamous: string;
    mostFollowers: string;
    indiaKnownAs: string;
    } = {
        name: "viratKohli",
        mostFamous: "viratKohli",
        mostFollowers: "viratKohli",
        indiaKnownAs: "viratKohli",
    }

    // function defining
    type funcType = (a:number , b:number) => number;
    const func11: funcType = (a, b) => {
        return a*b;
    }
    console.log(func11(9, 7));
    


// Array
const arr10: number[] = [1,2,3,33,22,44,43,21];
const arr11: string[] = ["jatin", "virat", "anish"];
const arr12: string | number = 6777;

// interface
interface book5 {
  name: string;
  author: string;
  price: number;
}

const book5:book5 = {
    name: "New Trader Rich Trader",
    author: "Steve burns and Holly burns",
    price: 250,
  }
interface bestAuthor extends book5 {
  published: number;
  pages: number;
  quality: string;
}

const bookDetails: bestAuthor = {
    name: "New Trader Rich Trader",
    author: "Steve burns and Holly burns",
    price: 250,
    published: 2003,
    pages: 278,
    quality: "premium"
}


// Rest operator
const funcRest = (...r:number[]) => {
    return r
}
console.log(funcRest(12,3,43,54,23,1,232,3,43,65,768,8));


// Class
class bikes  {
    constructor(
        public name: string,
        public company: string,
        public price: number,
    ){}
}

const bike1:bikes = new bikes("Ninja", "Yamaha", 7900000);
console.log(bike1)