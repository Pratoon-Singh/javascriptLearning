console.log("This is Expression and Operators ");
// Lets say we write !true here ! is operator and true is operand and false will be our result.
/* Arithematic operators in javascript 
+ plus
- minus
% remider/modulus 
/ divide 
* multiplication
** exponential
++ increment
-- decrement

*/


// Lets see increment and decrement
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)
console.log("the value of a when called a++ : " + a++); // Result = 10 because first it shows the value of a and then increment.
a = 10
console.log("the value of  a when called ++a : " + ++a);// Result = 11 first it increment the value of a and then shows that in output

/*
Assignment Operators

= x=y
+= x = x+y
-= x = x-y
*= x = x*y
%= x = x%y
/= x = x/y
** x = x**y

*/
console.log("Assignment Operators");
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", a)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", a)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", a)
/*
Comaparison Operators 

== equal to 
!= not equal to 
=== equal value and type
!== not equal value or not equal type
> greater than 
< less than
>= greater than or equal to 
<= less than or equal to 
? ternery operator 

*/
console.log("Comparision Operators");

let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

/*
Logical Operators 

&& Logical and 
|| logical or 
! logical not 


apart from these we also have type and bitwise operators.
Bitwise operatiors perform bit by bit operations on numbers 


7+8 = 15 here 7 and 5 are operands and + is the operator and 15 is the result 
*/


// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)
