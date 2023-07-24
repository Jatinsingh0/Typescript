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