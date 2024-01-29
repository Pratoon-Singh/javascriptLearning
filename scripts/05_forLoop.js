/*
The for lop in javascript is same as java it takes three aruguntes one the decleration of variable and starting position
the Other is till where it should go and the last is how to increment or decrement the value of i .

the for loop only goes til i-1 for example i<10 the value of i will be from 0 to 9 "Not till 10 " 

*/

console.log("The table of 2");
console.log("Basic for loop ");
for (let i = 0;i<10;i++){
    console.log("2 x " + i + " = " + 2*i);
}


console.log("Factorial of number ");

const num = 4;
let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact*i
    }
    console.log(`The factorial of ${num} is ${fact}.`);



    let obj = {
        harry: 90,
        shubh: 45,
        shivika: 56,
        ritika: 57,
        shiv: 23
      }
      
      // For in loop
      for (let a in obj) {
        console.log("Marks of " + a + " are " + obj[a])
      }
      
      // For of loop
      for (let b of "Harry") {
        console.log(b)
      }

    const numberArray  = [1,2,3,4,5,6,7,8,9,10];

    for (number of numberArray){
    number*2;
    console.log("2 x "+ number +" = "+ number*2);
}

