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

const gameEvents = new Map([
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
}