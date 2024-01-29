// Practice Set 
// Q1 Create a string vaariable and add a integer variable to it 

let name = "Pratoon";
let marks = 89;

let concatinatedValue = name + marks;
console.log(concatinatedValue);
/*
Whenever the String and number is added using + operater it is concatinated meaning it will be added as one whole string.
 Output For the above will be :- Pratoon89 
 The Type of The Output will be string. 
*/

// Q2 Get the type of variable that is having a sum of name and marks using typeof. 
console.log(typeof(concatinatedValue));
// the type of name is string

// Q3 Create a const object in javascript can you chnage it to hold a number later
const obj = {
    name : "Pratoon",
    section : 1,
    isPrinciple : false
}
//obj = 56;  This will throw error as refrence cannot be defined again.

// Q4 Try to add a new key to the previous object you created

obj['name']= "Peter Griffin"
obj['schoolName']= "Little Flower House"
console.log(obj);
/*
Tip to replicate the line in vs code  windows alt+shift+downArrow in mac option + shift + downArrow

 We can add new key and values to a const object as  the refrence is p
 ointing to a object in a memory and we can change the value
 of any key in the objects as shown above
*/ 

// Q5 Write a java Script program to create a word meaning dictionary.

const dict = {
  Abnegation: {
    definition: "Renunciation of a belief or doctrine, Denial",
    sentence:
      " Monks practice abnegation of the material aspects of human life.",
  },
  Aggrandize: {
    definition: "To enhance power, wealth, or status",
    sentence:
      " A generous grant, enabled the library to significantly aggrandize its collection of books on tape.",
  },
  Fatuous: {
    definition: "Devoid of intelligence",
    sentence:
      "Ignoring the avalanche warnings, the fatuous skiers continued on their course",
  },
  Gratuitous: {
    definition: "Uncalled for or unwarranted",
    sentence: "The film was criticized for its gratuitous violence.",
  },
  Iconoclast: {
    definition: "Someone who criticizes or attacks cherished ideas and beliefs",
    sentence:
      "Notorious as an iconoclast, that music critic isn’t afraid to go after sacred cows",
  },
};

console.log(dict.Abnegation.definition);
console.log(dict.Abnegation.sentence);
console.log("-----------------------------");
console.log(dict['Fatuous']['definition']);
console.log(dict['Fatuous']['sentence']);

