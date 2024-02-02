/*
Q1 find marks of students in oobjects using for loop 
Q2 same but with for in loop
Q3 write a program where it prints try again till users enter correct number?
Q4 write a function to find mean of 5 numbers
*/


let students = {
    harry : 78,
    gwen:89,
    charles:67,
    lewis: 74
}

console.log("Using normal for loop");
for (let i = 0; i < Object.keys(students).length; i++) {
    console.log(Object.keys(students)[i] + " is having  "+ students[Object.keys(students)[i]] + " marks in Maths");
}

console.log("Using for in loop");
for (let a in students) {
    console.log("Marks of "+ a + "is "+ students[a])
}


const correctNumber =(n) =>{

    if(Number.parseInt(n)==12){
        // console.log("Correct Number");
        return ("Correct Number");
    }
    else{
        // console.log("Try Again");
        return ("Try Again");
    }
}


console.log(correctNumber(12));

const mean = ( a, b,c,d,e)=> {

    return (a+b+c+d+e)/5
}



console.log(mean(5,7,2,6,9));

