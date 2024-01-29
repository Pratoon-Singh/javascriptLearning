
// Q1 use logical operators to see the age is in between 10 and 20 

let age2 = 15;
let age = prompt(" Enter your age ");
age = Number.parseInt(age);
if(age>=10 || age <=20){
    console.log("Your age is : " + age   );
    alert("Your age is : " + age   );
}else {
    alert("Not in Between 10 and 20 ")
    console.log("Not in Between 10 and 20 ");
}

// Q2 write a javascript program to check the number is divisible by 2 and 3?

let number = 18;
console.log(number%2)
if (number %2 == 0 && number%3 == 0){
    console.log("Your number is divisible by 2 and 3 ");
}else {console.log("It is not divisble")};

console.log((number %2==0 && number %3 == 0)? "Divisible":"Not Divisible")

// Q3 write a javascript program to check the number is divisible by 2 or 3?

let number2 = 20;
console.log(number2%2)
if (number2 %2==0||number2 %3 == 0){
    console.log("Your number is divisible by 2 or 3 ");
}else {console.log("It is not divisble")};

console.log((number %2==0||number %3 == 0)? "Divisible":"Not Divisible")
