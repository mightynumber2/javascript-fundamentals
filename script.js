/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Dan");
console.log(41);

let firstName = "Dan";

console.log(firstName);
console.log("is");
console.log(js);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 41);
console.log(typeof "Dan");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1981;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// Let - is a dynamic variable that can mutate and is not the best var declaration, as it can "dynamically" introduce bugs--LOL
let age = 40;
age = 41;

// Const is a static var--the most reliable and safe way to use var. It cannot mutate.
const birthYear = 1981;

// Var is the outdated and similar version of let.
var job = "unemployed";
job = "web developer";

// You can also assign a var without declaring it! It's assigned globally?, and it's not a good idea.

lastName = "Humperdink";
console.log(lastName);

////////////////////////////////
// BASIC OPERATORS

//Math operators
const year = 2022;
const ageDan = year - 1981;
const ageJonas = year - 1991;
console.log(ageDan, ageJonas);

console.log(ageDan * 2, ageDan / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Concantenate or join vars using the + operator
const firstName = "Dan";
const lastName = "V";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageDan > ageJonas); // >, <, >=, <=
console.log(ageJonas >= 18); // At least 18?

const isOfAge = ageJonas >= 18;

console.log(year - 1981 > year - 1991);

// Precedence
const year = 2022;
const ageDan = year - 1981;
const ageJonas = year - 1991;

console.log(year - 1981 > year - 1991);

// You can assign mutliple vars at once!
let x, y; // undefined

// Subtraction has higher precedence
// assignment operators go right-to-left
x = y = 25 - 10 - 5; // in order: 10, y = 10, x = 10
console.log(x, y);

// wrong: const avgAge = ageDan + ageJonas / 2;
const avgAge = (ageDan + ageJonas) / 2;
console.log(ageDan, ageJonas, avgAge);

////////////////////////////////
// STRINGS AND TEMPLATE LITERALS

const firstName = 'Dan';
const job = 'software engineer';
const birthYear = 1981;
const year = 2022;

const dan =
"I'm " + firstName + ', a ' + (year - birthYear) + '-year-old ' + job;
console.log(dan);

console.log('String with \n\
multiple \n\
lines');

// Template literal version
const danNew = `I'm ${firstName}, a ${year - birthYear}-year-old ${job}!`;
console.log(danNew);

console.log(`String with
multiple
lines
thanks to
template literal`);
*/

////////////////////////////////
// IF/ELSE STATEMENTS

const age = 16;
// A control structure
if (age >= 18) {
  console.log("Bebop can go for his driver's license 🚙");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Bebop cannot go for his driver's license for another ${yearsLeft} years 😪`
  );
}

/*
const birthYear = 1981;
if (birthYear <= 2000) {
  let century = 20;
  console.log(century);
} else {
  let century = 21;
  console.log(century);
}
*/

const birthYear = 1981;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
