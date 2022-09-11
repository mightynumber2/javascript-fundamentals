/////////////////////////////////////////
// JavaScript Fundamentals – Part 1

//Coding Challenge #1///////////////////
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

GOOD LUCK � 

// Data 1
let markWeight1 = 78;
const markHeight1 = 1.69;
let johnWeight1 = 92;
const johnHeight1 = 1.95;

// console.log("Mark's D-1 BMI: " + markWeight1 / markHeight1 ** 2);
// console.log("John's D-1 BMI: " + johnWeight1 / (johnHeight1 * johnHeight1));

let markHigherBMI =
markWeight1 / markHeight1 ** 2 > johnWeight1 / johnHeight1 ** 2;
// console.log(markHigherBMI);

// Data 2
let markWeight2 = 95;
const markHeight2 = 1.88;
let johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI = markWeight2 / markHeight2 ** 2;
const johnBMI = johnWeight2 / (johnHeight2 * johnHeight2);

// console.log("Mark's D-2 BMI: " + markBMI);
// console.log("John's D-2 BMI: " + johnBMI);

markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
*/

/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �

GOOD LUCK � 

// For Data 2
// 1.
if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}
// 2.
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
*/

//Coding Challenge #3///////////////////

// 1.
/*
const dolphins = 98 //(96 + 108 + 89) / 3;
console.log(dolphins);
const koalas = 96 //(88 + 91 + 110) / 3;
console.log(koalas);
// 2.
if (dolphins > koalas) {
  console.log("Dolphins are the winners!");
} else if (dolphins === koalas) {
  console.log("We have a draw 😲")
} else {
  console.log("Koalas are the winners!");
}
// 3-4. Bonus 1 & 2:
const dolphins = 103 //103 (97 + 112 + 101) / 3;
console.log(dolphins);
const koalas = 109 //109 (109 + 95 + 123) / 3;
console.log(koalas);

if (dolphins > koalas && dolphins >= 100) {
  console.log("Dolphins are the winners!");
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
  console.log("We have a draw 😲");
} else if (koalas >= 100) {
  console.log("Koalas are the winners!");
} else {
  console.log("We have no winners!");
}
*/
