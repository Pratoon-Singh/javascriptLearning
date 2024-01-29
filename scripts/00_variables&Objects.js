/*
Primitive Data types are set of basic data types in java script
There are 7 types of primitive data types:-
Number 
null 
string 
symbol 
boolean
bigint
undefined
*/
let a = 1;
let b = null ;
let c= "string";
let d = Symbol("This is a symbol");
let e = false;
let f = BigInt("567");
let g = undefined;

console.log(a,b,c, d, e, f);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));


/*
Objects in java script is defined as given below 
In Python its called as dictionary in java its called as map and in javaScript its called as Objects 
Objects has key : value and are declared inside curly braces.
Objects is a non primitive data type in javascript


Ques :-  Write a java program to create an object of students having name ,phonenumber and marks 
*/
const student = { 
    firstName : "Pratoon",
    phoneNumber : 7905607604,
    marks : 90
}

console.log(student);

// for (let i of [a,b,c,d,e,f,g]){
//     console.log(typeof(i));
// }