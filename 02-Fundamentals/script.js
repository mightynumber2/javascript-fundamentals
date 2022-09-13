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