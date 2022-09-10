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
*/

// Data 1
let markWeight1 = 78;
const markHeight1 = 1.69;
let johnWeight1 = 92;
const johnHeight1 = 1.95;

console.log("Mark's D-1 BMI: " + markWeight1 / markHeight1 ** 2);
console.log("John's D-1 BMI: " + johnWeight1 / (johnHeight1 * johnHeight1));

let markHigherBMI =
  markWeight1 / markHeight1 ** 2 > johnWeight1 / johnHeight1 ** 2;
console.log(markHigherBMI);

// Data 2
let markWeight2 = 95;
const markHeight2 = 1.88;
let johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI = markWeight2 / markHeight2 ** 2;
const johnBMI = johnWeight2 / (johnHeight2 * johnHeight2);

console.log("Mark's D-2 BMI: " + markBMI);
console.log("John's D-2 BMI: " + johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
