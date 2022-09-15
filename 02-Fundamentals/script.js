////////////////////////////////////////
// ACTIVATING STRICT MODE

// Restricts and warns, preventing bugs; Always use
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

// Adds more warnings that js might not by default
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// const interface = "Audio";
// const private = "Parts";

////////////////////////////////////////
// FUNCTIONS

// A function is a block of code that can be used repeatedly
function logger() {
  console.log("My name is Dan the Man");
}

// call - run - invoke
logger();
logger();
logger();

function foodProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// console.log(foodProcessor(5, 0));
const appleJuice = foodProcessor(5,0);
console.log(appleJuice);
const appleOrangeJuice = foodProcessor(2, 4);
console.log(appleOrangeJuice);

////////////////////////////////////////
// FUNCTIONS DECLARATIONS VS EXPRESSIONS

// Function declaration
function ageCalc1(birthYear) {
  return 2022 - birthYear;
}
// call function using an argument
// you can call this function before declaring it!
const age1 = ageCalc1(1981);

// Function expression
// have to call the function after creating it
const ageCalc2 = function (birthYear) {
  return 2022 - birthYear;
}
const age2 = ageCalc2(1981);
console.log(age1, age2);

////////////////////////////////////////
// ARROW FUNCTIONS

// Function expression
const ageCalc2 = function (birthYear) {
  return 2022 - birthYear;
}
// Arrow function version = short-hand expression
const ageCalc3 = birthYear => 2022 - birthYear;

const age3 = ageCalc3(1981);
console.log(age3);

// multi-code arrow function
const yearsToRetire = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retireAge = 65 - age;
  // return retireAge;
  return `${firstName} retires in ${retireAge} years`
}
console.log(yearsToRetire(1981, "Dan"));
console.log(yearsToRetire(1984, "Kristy"));

// same as above, but in one line
const yearsToRetire2 = (birthYear, firstName) => `${firstName} retires in ${65 - (2022 - birthYear)} years`

console.log(yearsToRetire2(1981, "Dan"));
console.log(yearsToRetire2(1984, "Kristy"));
*/

////////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS

// const cutFruit = function (fruit) {
  //   return fruit * 4;
  // }
  // const cutFruit = fruit => fruit * 4;
  
  // function foodProcessor(apples, oranges) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// const foodProcessor = (apples, oranges) => `Juice with ${cutFruit(apples)} pieces of apple and ${cutFruit(oranges)} pieces of orange.`

// console.log(foodProcessor(1, 3));

////////////////////////////////////////
// REVIEWING FUNCTIONS
/*
const calcBirth = function (birthYear) {
  return 2022 - birthYear;
}

const yearsToRetire = function (birthYear, firstName) {
  const age = calcBirth(birthYear);
  const retireYears = 65 - age;

  if (retireYears > 0) {
    console.log(`${firstName} can retire in ${retireYears} more years`);
    return retireYears;
  } else {
    console.log(`${firstName} has already retired ${retireYears * -1} years ago!`)
    return -1;
  }
}

console.log(yearsToRetire(1950, "Dan"));
console.log(yearsToRetire(1984, "Kristy"));


////////////////////////////////////////
// INTRO TO ARRAYS

const friends1 = "Matthew";
const friends2 = "Ricky";
const friends3 = "Joe";

// the literal syntax
const friends = ["Matthew", "Ricky", "Joe"];
// console.log(friends);
// console.log(friends[1]);

// alt using the function
// const years = new Array(1981, 1984, 2006, 2022);
// console.log(years);
// console.log(years[2])
// console.log(years[years.length - 1]);
// Arrays are mutable and can be mutated
friends[2] = "Sam";
// console.log(friends);
// however, you cannot replace the entire array
//friends = ["John", "Candy"];
//friends = ["John", "Candy", "Man"];
//console.log(friends);

// Arrays accept expressions
const firstName = "Dan";
const birthYeah = 1981;
const dan = [firstName, "V", 2022 - birthYeah, "software engineer", friends];
// console.log(dan);
// console.log(dan[dan.length -2]);

// Exercise
const calcAge = function (birthYeah) {
  return 2022 - birthYeah;
} 
const years = [1981, 1984, 2006, 1958, 2001];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

////////////////////////////////////////
// BASIC ARRAY OPERATIONS (METHODS)

// add elements to an array
const friends = ["Matt", "Bone", "Sam"];
const newLength = friends.push("Leon"); // add to end
console.log(friends);
console.log(newLength);

friends.unshift("Albert"); // add to start
console.log(friends);

// remove elements from an array
friends.pop(); // remove last
const namePopped = friends.pop();
console.log(namePopped);
console.log(friends);

friends.shift(); // remove first
console.log(friends);

// find element's current position in array
console.log(friends.indexOf("Bone"));
console.log(friends.indexOf("Ricky"));
// conditional boolean method
friends.push(23); // uses strict equality
console.log(friends.includes("Bone"));
console.log(friends.includes("Ricky"));
console.log(friends.includes(23));

friends.includes("Ricky") ? console.log("You have a friend named Ricky") : console.log("You do not have Ricky as a friend");

////////////////////////////////////////
// INTRO TO OBJECTS

// arrays contain orderly values
const danArray = [
  "Dan",
  "V",
  2022 - 1981,
  "software engineer",
  ["Matt", "Bone", "Sam"]
];

// objects are unorderly and contain the names and values, or keys/values
const dan = {
  firstName: "Dan",
  lastName: "V",
  age: 2022 - 1981,
  job: "software engineer",
  friends: ["Matt", "Bone", "Sam"]
};
*/

////////////////////////////////////////
// Dot vs Bracket Notation
/*
const dan = {
  firstName: "Dan",
  lastName: "Volkswagon",
  age: 2022 - 1981,
  job: "software engineer",
  friends: ["Matt", "Bone", "Sam"]
};
// console.log(dan);

// console.log(dan.lastName);
// console.log(dan["lastName"]);

const nameKey = "Name";
// console.log(dan["first" + nameKey], dan["last" + nameKey] );

// const interestedIn = prompt("What do you want to know about Dan? Choose between firstName, lastName, age, job and friends");
// the object notion accepts expressions, unlike the dot
// console.log(dan.interestedIn); No worky
// console.log(dan[interestedIn]);

// if (dan[interestedIn]) {
//   console.log(dan[interestedIn]);
// } else {
//   console.log("That is not an option, try again...");
// }

// Add to objects
// dot notation
dan.location = "Arizona";
dan["twitter"] = "@vwagonforever";
// console.log(dan);

// Challenge
// "Dan has 3 friends, and his best friend is called Sam"
console.log(`${dan.firstName} has ${dan.friends.length} friends, and his best friend is called ${dan.friends[dan.friends.length - 1]}`);

////////////////////////////////////////
// Object Methods

const dan = {
  firstName: "Dan",
  lastName: "Volkswagon",
  birthYeah: 1981,
  job: "software engineer",
  friends: ["Matt", "Bone", "Sam"],
  hasDriversLicense: true,
  // Arrow functions can't use 'this' keyword!
  // calcAge: birthYeah => 2022 - birthYeah
  
  // calcAge: function () {
    //   return 2022 - this.birthYeah; // this object
    // }
    calcAge: function () {
      return this.age = 2022 - this.birthYeah;
    },
    
    getSummary: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    }
  };
  // The method must be called first in order to be defined!
  // console.log(dan.calcAge());
  
  // console.log(dan.age);
  // console.log(dan["age"]);
  
  // Challenge: write "getSummary" method
  // "Dan is a 41-year old software engineer, and he has a/no
  // driver's license"
  // dan.hasDriversLicense = false;
  console.log(dan.getSummary());
  */