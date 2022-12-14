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

// Re-do guess my number from scratch//
// completed in 05-Guess-My-Number/myScript.js

/////////////////////////////////////////
// Data Structures, Modern Operators and Strings

//Coding Challenge #1///////////////////

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

// Attempt 2
// 1. Create one player array for each team (variables 'players1' and'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
function printGoals(...players) {
  console.log(`${players.length} goals scored in total`);
}
printGoals(...game.scored);
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win'); */

/* //Coding Challenge #2///////////////////
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries())
console.log(`Goal ${i + 1}: ${player}`);

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) without destructuring the object
const oddsValues = Object.values(game.odds);
let average = 0;
for (const odd of oddsValues)
 average += odd; 
average /= oddsValues.length;
console.log (average);

// 3. Print the 3 odds to the console, but in a nice   formatted way, exactly like this: 
//   Odd of victory Bayern Munich: 1.33
//   Odd of draw: 3.25
//   Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 
const oddsEntries = Object.entries(game.odds);

for (const [name, odd] of oddsEntries) {
const nameStr = name === 'x' ? 'draw' : name === 'team1' ? 
game.team1 : game.team2
console.log(`Odd of victory ${nameStr}: ${odd}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

// scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
// 'Hummels'],

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
};
console.log(scorers);
 */

//Coding Challenge #3///////////////////

/* const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);
// 17, 19, 11, 14, 8, 1, 2, 4, 4, 12

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())]
console.log(events)

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64)
console.log(gameEvents)

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// const totalTime = [...gameEvents.keys()].pop(); 
const totalTime = [...gameEvents.keys()].pop(); 
console.log(`An event happened, on average, every ${Math.round(totalTime / gameEvents.size)} minutes`)
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
for (const [time, event] of gameEvents) {
  const half = time <= 45 ? 'FIRST' : 'SECOND'  
  console.log(`[${half} HALF] ${time}: ${event}`)
} */

//Coding Challenge #4///////////////////

/* underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure */

/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').onclick = toCamelCase;

function toCamelCase() {
  let input = document.querySelector('textarea');
  const rows = input.value.split('\n');
  
  for (const [i, word] of rows.entries()) {
    const[first, second] = word.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    const fullOutput = (`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    console.log(fullOutput);
  }
}; */

// Second attempt
/* underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure */

/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').onclick = camelCaseIt;

function camelCaseIt() {
  const input = document.querySelector('textarea');
  const inputRows = input.value.split('\n');
  
  for (let [i, row] of inputRows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first.toLowerCase()}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(output.padEnd(20) + '✅'.repeat(i + 1));
  }
} */

/////////////////////////////////////////
// A CLOSER LOOK AT FUNCTIONS

//Coding Challenge #1///////////////////

/* const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  };

//   Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.

// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:

//   1.1. Display a prompt window for the user to input the number of the
//   selected option. The prompt should look like this:
//   What is your favourite programming language?
//   0: JavaScript
//   1: Python
//   2: Rust
//   3: C++
//   (Write option number)

//   1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)

poll.registerNewAnswer = function() {
  const answer = +prompt(`${this.question}\n${this.options.join('\n')}`, '(Write option number)');
  
  if (answer < this.options.length) {
    alert(`You chose: ${answer}\nThanks!`);
    this.answers[answer]++;
  } else if (!+answer) {
    alert('That is not a number.\nTry again.');
  }
    else alert(`Sorry, "${answer}" is not one of the options.\nTry again.`);

  this.displayResults();
  this.displayResults('string');
};

// 2. Call this method whenever the user clicks the "Answer poll" button.
document.querySelector('.poll').onclick = poll.registerNewAnswer.bind(poll);

// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
poll.displayResults = function(type = 'array') {
  type === 'string' ? console.log(`Poll results are ${String(this.answers)}`) : console.log(this.answers);
};

// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.

// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
poll.displayResults.call({answers: [5, 2, 3]});
poll.displayResults.call({answers: [5, 2, 3]}, 'string');

// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1] */

//Coding Challenge #2///////////////////

// This is more of a thinking challenge than a coding challenge �
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!

// 2. And now explain to yourself (or someone around you) why this worked! Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.

// An IIFE is called immediately and long 'gone'.
/*  (function () {
 const header = document.querySelector('h1');
 header.style.color = 'red';
// But this call-back/event-handler function still has the closure with the variables of the IIFE when it was created, forever
 document.body.onclick = function() {
  header.style.color = 'blue';
 }; 
 })(); */

 /////////////////////////////////////////
// WORKING WITH ARRAYS

//Coding Challenge #1///////////////////

/* const checkDogs = function(dogsJulia, dogsKate) {
  const dogsMinusCatsCombined = dogsJulia.slice(1, -2).concat(dogsKate);

  console.log(dogsMinusCatsCombined);

  dogsMinusCatsCombined.forEach((dog, i) => console.log(`Dog number ${i + 1} is ${dog < 3 ? 'still a puppy 🐶' : 'an adult 🐕‍🦺'}`));
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]); */

//Coding Challenge #2///////////////////

/* const calcAverageHumanAge = function(ages) {
  const mapHumanAges = ages
  .map(age => age <= 2 ? 2 * age : 16 + age * 4);
  console.log(mapHumanAges);
  const filterAges = mapHumanAges
  .filter(age => age >= 18);
  console.log(filterAges);
  const reduceAges = filterAges
  .reduce((acc, cur) => acc + cur) / filterAges.length;
  console.log(reduceAges);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); */

//Coding Challenge #3///////////////////

/* const calcAverageHumanAge = ages => ages
  .map(age => age <= 2 ? 2 * age : 16 + age * 4)
  .filter(age => age >= 18)
  .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); */

//Coding Challenge #4///////////////////

/* const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];

// 1. 
dogs.forEach(obj => obj.recommendedFood = Math.round(obj.weight ** 0.75 * 28));
console.log('1.', dogs);

// 2.
const sarahsDog = dogs.find(obj => obj.owners.includes('Sarah'));
console.log('2.', sarahsDog);
console.log(`Sarah's dog is eating too ${sarahsDog.curFood > sarahsDog.recommendedFood ? 'much' : 'little'}`);

// 3.
const fatDogOwners = dogs
  .filter(obj => obj.curFood > obj.recommendedFood)
  .flatMap(obj => obj.owners);
  console.log('3. Fat dog owners:', fatDogOwners);

const slimDogOwners = dogs
  .filter(obj => obj.curFood < obj.recommendedFood)
  .flatMap(obj => obj.owners);
  console.log('Slim dog owners:', slimDogOwners); */

  /* const [fatDogOwners, slimDogOwners] = dogs
    .reduce((acc, cur) => {
      cur.curFood > cur.recommendedFood ? acc[0].push(cur.owners) : acc[1].push(cur.owners)
      return acc;
    }, [[], []]);
  console.log('3.', fatDogOwners.flat(), slimDogOwners.flat()); */
    
/* // 4    
console.log(`4. ${fatDogOwners.join(' and ')}'s dogs eat too much!`)
console.log(`${slimDogOwners.join(' and ')}'s dogs eat too little!`)

// 5
const exactlyFood = dogs.some(obj => obj.curFood === obj.recommendedFood);
console.log('5.', exactlyFood);

// 6
const okayAmtFood = checkDogs => checkDogs.curFood > checkDogs.recommendedFood * 0.90 && checkDogs.curFood < checkDogs.recommendedFood * 1.10;
console.log('6.', okayAmtFood(dogs));

// 7
const getOkayAmt = dogs
  .filter(okayAmtFood);
console.log('7.', getOkayAmt);

// 8
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log('8.', dogsCopy); */