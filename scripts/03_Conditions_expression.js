/*
Conditional expression 

promt takes input on the other hand alert tells you a pop  up on browser 

a = Number.parseInt(a); // Converting the string to a number it is also called as typecasting



*** Ternery operator ***

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), 
then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. 

condition ? exprIfTrue : exprIfFalse


*/



// let a = prompt("Hey whats you age?");
// a = Number.parseInt(a); // Converting the string to a number
// if(a<0){
//   alert("This is an invalid age");
// }
// else if(a<9){
//   alert("You are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//   alert("You are a kid and you can think of driving after 18");
// }
// else{
//   alert("You can now drive as you are above 18");
// }
// console.log("Done")
// // ternery operator 

// let b  = prompt("Apna age batao ")

// b = Number.parseInt(b);
// console.log((b<18? alert("nhi chala sakte") :alert("daba ke chalao yaar")))


// Switch Case Example
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);