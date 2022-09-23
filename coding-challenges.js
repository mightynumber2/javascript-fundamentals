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

//Coding Challenge #3///////////////////
// 1.
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
console.log(tip);
// 2.
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

/////////////////////////////////////////
// JavaScript Fundamentals – Part 2

//Coding Challenge #1///////////////////
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// Data Tests
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
*/

//Coding Challenge #2///////////////////
// 1.
// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * .15
//   } else {
//     return bill * .20
//   }
// }
// ternary conditonal operator version of calcTip function
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
/*
// arrow function with ternary operator
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));
// 2.
const bills = [125, 555, 44];
// 3.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(bills, tips);
// 4.
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total); // 143.75, 666, 52.8

//Coding Challenge #3///////////////////

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.BMI = this.mass / this.height ** 2;
  }
};
// BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.BMI = this.mass / (this.height * this.height);
  }
};

console.log(mark.calcBMI(), john.calcBMI());
if (mark.BMI > john.BMI) {
  console.log(`${mark.fullName}'s BMI(${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
} else {
  console.log(`${john.fullName}'s BMI(${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];
console.log(bills);
const tips = [];
const totals = [];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.20;
  };
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum / arr.length;
}
console.log(calcAverage(totals));
*/

/////////////////////////////////////////
// DEVELOPER SKILLS & EDITOR SETUP

//Coding Challenge #1///////////////////
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// my almost-made-it version
function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}'C in ${i + 1} days ...`);
  }
}
printForecast(data1);
console.log('----------------------');
printForecast(data2);

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}'C in ${i + 1} days `;
  }
  console.log(str + '...');
}
printForecast(data1);
console.log('----------------------');
printForecast(data2);
*/

/////////////////////////////////////////
// JavaScript in the Browser: DOM and Events

//Re-do guess my number from scratch//
