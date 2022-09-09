// JAVASCRIPT FUNDAMENTALS - PART 1

// Lecture: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// let country = "United States";
// let continent = "North America";
let population = 332;

// 2. Log their values to the console
// console.log(country);
// console.log(continent);
// console.log(population);

// Lecture: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// let isIsland = false;
// let language;

// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Lecture: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
const language = "English";

// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
const isIsland = false;
const country = "The United States";
const continent = "North America";

// 3. Try to change one of the changed variables now, and observe what happens
// language = "Spanish";

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
console.log(population / 2);

// 2. Increase the population of your country by 1 and log the result to the console
population++;
console.log(population);

// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
console.log(population > 6);

// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
console.log(population < 33);

// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'
const description1 =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;
console.log(description1);
