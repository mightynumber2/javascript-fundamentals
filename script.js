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
  */

/*
const birthYear = 1981;
if (birthYear <= 2000) {
  let century = 20;
  console.log(century);
} else {
  let century = 21;
  console.log(century);
}

const birthYear = 1981;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

////////////////////////////////
// TYPE CONVERSION AND COERCION

// Type Conversion
const inputYear = "1981";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Dan"));
console.log(typeof NaN);

console.log(String(41), 41);

// Type Coercion
// + converts to string
console.log("I am " + 41 + " years old"); // num to string
console.log("41" + "10" + 3); // 41103, num to string
// converts to num
console.log("41" - "10" - 3); // 28, string to num
console.log("41" * 3); // 123, string to num
console.log("41" / "10"); // 4.1, string to num

let n = "1" + 1; // "11"
n = n - 1; // "11" - 1 = 11 - 1
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // 9 + "5" = "95"
console.log("10" - "4" - "3" - 2 + "5"); // 1 + "5" = "15"

////////////////////////////////
// TRUTHY AND FALSY VALUES

// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Dan"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("Get a job, bum!");
}

let height;
if (height) {
  console.log("Yay! Height is defined!");
} else {
  console.log("Height is UNDEFINED!");
}

////////////////////////////////
// EQUALITY OPERATORS == VS ===

const age = 18;
// strict equality operator, no type coercion
if (age === 18) console.log("You just became an adult :D (strict)");

const ageString = "18";
//  AVOID loose equality operator, yes type coercion
if (ageString == 18)
console.log(
  "You just became an adult :D (loose - has weird rules that can introduct hard-to-track bugs)"
  );
  
  // ==
  const favorite = prompt("What is your favorite number (loose)?");
  console.log(favorite);
  console.log(typeof favorite);
  
  if (favorite == 7) console.log("Great! That's God's number (loose)");
  
  // === using Number function
  const favoriteNum = Number(prompt("What is your favorite number?"));
  console.log(favoriteNum);
  console.log(typeof favoriteNum);
  
  // Check several conditions before the final else-block
  if (favoriteNum === 7) {
    console.log("Great! That's God's number");
  } else if (favoriteNum === 41) {
    console.log("Awesome! That's my age");
  } else if (favoriteNum === 16) {
    console.log("Neat! That's my son's age");
  } else {
    console.log("You didn't enter 7, 41, or 16 💩");
  }
  
  // Does not equal or different operator, !== strict, != loose
  if (favoriteNum !== 7) console.log("Why not try 7?");


////////////////////////////////
// LOGICAL OPERATORS

const hasDriversLicense = true;
const hasGoodVision = false;
const hasGlasses = true;
// And operator, both must be true
console.log(hasDriversLicense && hasGoodVision);
// Or operator, only one must be true
console.log(hasDriversLicense || hasGoodVision);
// Not is inverted
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Bebop is able to drive");
// } else if (hasDriversLicense && hasGlasses) {
//   console.log("Bebop can still drive");
// } else {
//   console.log("Someone else should drive...");
// }

if (hasDriversLicense && hasGoodVision || hasGlasses) {
  console.log("Bebop is able to drive");
} else {
  console.log("Someone else should drive...");
}
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Bebop is able to drive")
} else {
  console.log("Someone else should drive")
}

////////////////////////////////
// THE SWITCH STATEMENT

// Alt way of handling complex if/else statements
// with more--but less repetitive--code 
const day = "monday";

switch (day) {
  case 'monday': // day === 'monday'; strict
    console.log("Morning javascript on udemy");
    console.log("Do Insanity workout");
    break;
  case 'tuesday':
    console.log("Attend 100devs class");
    break;
  case 'wednesday':
  case 'thursday':
    console.log("More udemy javascript and 100devs");
    break;
  case 'friday':
    console.log("Start work on wife's college homework");
    break;
  case 'saturday':
  case 'sunday':
    console.log("Rest as God commanded, but also do some more college homework");
    break;
  default:
    console.log("Not a valid day!");
}
// More popular if/else version constains repetitive code
const day = "monday";

if (day === "monday") {
  console.log("Morning javascript on udemy");
  console.log("Do Insanity workout");
} else if (day === "tuesday") {
  console.log("Attend 100devs class");
} else if (day === "wednesday" || day === "thursday") {
  console.log("More udemy javascript and 100devs");
} else if (day === "friday") {
  console.log("Start work on wife's college homework");
} else if (day === "saturday" || day === "sunday" ) {
  console.log("Rest as God commanded, but also do some more college homework");
} else {
  console.log("Not a valid day!");
}

////////////////////////////////
// STATEMENTS AND EXPRESSIONS

// Expressions are code that cough up a value
3 + 4
1991
"Danny"

// Statements do not give a value, but a declaration and/or an action
// a complete sentence
if (3 / 4) {}

switch (day) {}
*/
