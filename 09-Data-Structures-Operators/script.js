'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

///////////////////////////////////////////////////// 
// STRING METHODS PRACTICE

const shorten = str => str.toUpperCase().slice(0, 3);


const formatFlights = str => {
  for (const row of str.split('+')) {
    const [status, from, to, time] = row.split(';');

    const output = `${status.startsWith('_Delayed') ? '🔴' : ''}${status.replaceAll('_', ' ')} from ${shorten(from)} to ${shorten(to)} (${time.replace(':', 'h')})`.padStart(45);

    console.log(output);
  }
}

formatFlights(flights);

// My baddie version
/* function formatFlights(str) {
  const strSplit = str.replaceAll('_', ' ').replaceAll(':', 'h').replaceAll('fao93766109', 'FAO').replaceAll('txl2133758440', 'TXL').replaceAll('bru0943384722', 'BRU').replaceAll('hel7439299980', 'HEL').replaceAll('lis2323639855', 'LIS').split('+');
  
  for (const [i, row] of strSplit.entries()) {
    let rowReplace = row.replace(';', ' from ').replace(';', ' to ').replace(';', ' (') + ')';

    if (rowReplace[3] == 'l') 
      rowReplace = ' '.repeat(i) + '🔴' + rowReplace;
    else if (rowReplace[3] == 'r') 
      rowReplace = ' '.repeat(12) + rowReplace;
    else 
      rowReplace = ' '.repeat(10) + rowReplace;
      
    console.log(rowReplace);
  }
}
formatFlights(flights); */

///////////////////////////////////////////////////// 
// STRING METHODS

/* const capitalizeNames = str => {
  const strSplit = str.split(' ');
  const strUpper = [];
  
  for (const word of strSplit) {
    // strUpper.push(word[0].toUpperCase() + word.slice(1))
    strUpper.push(word.replace(word[0], word[0].toUpperCase()))
  }
  console.log(strUpper.join(' '));
}
capitalizeNames('david lee roth the dragon');
capitalizeNames('dan the man lee volkswagon') */

/* const passenger = 'DaNbAs';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); */

/* const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // ES6: property names can be computed
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}; */

///////////////////////////////////////////////////// 
// MAP: ITERATION

// Create a map from an array
/* const question = new Map([
['question', 'What is the best programming language in the  world?'],
[1, 'C'],
[2, 'Java'],
[3, 'JavaScript'],
['correct', 3],
[true, 'Correct 🥂'],
[false, 'Incorrect!']
])
// Convert an object to a map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)
// Iterate over our question map
console.log(question.get('question'))
for (const [key, value] of question) {
  if (typeof key === 'number')
  console.log(`Answer: ${key}. ${value}?`)
}
// Get answer to quiz
const answer = Number(prompt('Your answer:'))
console.log(answer)
console.log(question.get(answer === question.get('correct')))
// Convert map to an array
console.log(question)
console.log([...question])
console.log(question.keys())
console.log([...question.keys()])
console.log(question.values())
console.log([...question.values()]) */

///////////////////////////////////////////////////// 
// ES6: MAP

// Maps are like objects but you can use any key-type
/* const pizzaShop = new Map();
pizzaShop.set('name', 'Dominos');
pizzaShop.set(7, 'Pepperoni Pizza');
console.log(pizzaShop.set(2, 'The Number Dos'));

pizzaShop
  .set('categories', ['Pizza', 'Breadsticks', 'Canoli', 'Beefaroni'])
  .set('open', 11)
  .set('close', 21)
  .set(true, 'We are open!')
  .set(false, 'We be closed');
  console.log(pizzaShop);

console.log(pizzaShop.get('name'));
console.log(pizzaShop.get(7));
console.log(pizzaShop.get(false));

let time = 12;
console.log(pizzaShop.get(time >= pizzaShop.get('open') && time <= pizzaShop.get('close')));

console.log(pizzaShop.has('categories'));
console.log(pizzaShop.has('7'));
pizzaShop.delete(2);
console.log(pizzaShop.size);
// pizzaShop.clear();
const arrKey = [1, 2];
pizzaShop.set(arrKey, 'This is an array');

console.log(pizzaShop.get(arrKey)); */

/* ///////////////////////////////////////////////////// 
// ES6: SETS

// Sets return an unordered list of UNIQUE elements
const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Rigatoni',
  'Pasta',
]);
console.log(ordersSet);
console.log(ordersSet.size);
ordersSet.add('Breadsticks');
ordersSet.delete('Pasta');
console.log(ordersSet);
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Breadsticks'));
// ordersSet.clear();
// console.log(ordersSet);

console.log(new Set('Danubist'));
console.log(new Set('Danubist').size);

for (const order of ordersSet) console.log(order);

const staff = ['Chef', 'Manager', 'Chef', 'Waitress', 'Waitress'];
console.log(staff);

let staffSet = new Set(staff);
console.log(staffSet);
staffSet = [...new Set(staff)];
console.log(staffSet);

console.log(new Set(['Waiter', 'Waiter', 'Chef', 'Cook', 'Chef', 'Cook']).size);
console.log(new Set('Danubis').size); */

/* const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    // ES6: property names can be computed
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhancement allows us to easily insert external objects
  openingHours,

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  
  orderDelivery: function({starterIndex = 3, mainIndex = 2, time = 1800, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} hours for ${address}`);
  },
  
  // ES6 way of handling inner-object functions
  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta coming up! using ${ing1}, ${ing2}, and ${ing3}!`)
  },
  
  orderPizza(mainIng, ...otherIngs) {
    mainIng = mainIng.charAt(0).toUpperCase() + mainIng.slice(1);
    if (otherIngs == 0) {
      console.log(`${mainIng} pizza ordered!`);
    } else {
      console.log(`${mainIng} pizza ordered with ${otherIngs}!`)
    }
  }
}; */
/* ///////////////////////////////////////////////////// 
// LOOPING OBJECTS

// Object.keys for property names
const properties = Object.keys(openingHours);

let startStr = `We are open ${properties.length} of the week: `

for (const days of properties)
startStr += `${days}  `;
console.log(startStr);

// Object.values for property values
const values = Object.values(openingHours);
console.log(values);

// Object.entries for entire keys + values
const entries = Object.entries(openingHours);
console.log(entries);

// Use all 3 methods together by destructuring the value object
// [key, value]
for (const [key, {open, close}] of entries) 
console.log(`On ${key}, we open at ${open} and close at ${close}`);
 */
/* // Optional chaining ES2020
console.log(restaurant.openingHours?.mon?.open);

for (const days of weekdays) {
const checkOpen = restaurant.openingHours[days]?.open ?? 'closed';
console.log(`On ${days}, we open at ${checkOpen}.`);
}
// Methods
console.log(restaurant.order?.(2, 2) ?? 'Method does not exist');
console.log(restaurant.orderDominos?.('Pepperoni', 'Pineapples', 'Ham') ?? 'Method does not exist');

// Arrays
const users = [{name: 'Dan'}, {email: 'DanVickers@gmail.com'}];

console.log(users[0]?.name ?? 'Array value does not exist');
// is equivalent to:
if (users[1]) 
console.log(users[1].email); 
else console.log('Array value does not exist'); */

/* ///////////////////////////////////////////////////// 
// THE FOR-OF LOOP

// Grab all menu items through destructuring using the spread operator
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// Use for-of loop to log each item of the menu array
for (const item of menu) console.log(item);
// Get index and value for each element using the array's entries method--old way
for (const item of menu.entries()) 
console.log(`${item[0] + 1} ${item[1]}`);
console.log([...menu.entries()]);
// New way by destructuring item
for (const [i, value] of menu.entries())
console.log(`${i + 1}: ${value}`); */

/* // OR assignment operator
const restUno = {
  name: 'China King',
  numGuests: 0,
};
// API calls with unknown properties
const restDos = {
  name: 'Big Wa\'s',
  owner: 'Big MacDonald',
}; */
// setting defaults with OR
// restUno.numGuests = restUno.numGuests || 10;
// restDos.numGuests = restDos.numGuests || 10;
// Or assignment version
/* restUno.numGuests ||= 10;
restDos.numGuests ||= 10;
console.log(restUno);
console.log(restDos); */
// Using Nullish (null/undefined = falsy) truthy = 0's or ''
/* restUno.numGuests ??= 10;
restDos.numGuests ??= 10;
console.log(restUno);
console.log(restDos); */
// AND assignment operators to return first falsy or last truthy
// restDos.owner = restDos.owner && '<ANONYMOUS>';
// restUno.owner = restUno.owner && '<ANONYMOUS>';
// restDos.owner &&= '<ANONYMOUS>';
// restUno.owner &&= '<ANONYMOUS>';
// console.log(restDos);
// console.log(restUno);

/* // NULLISH operator ?? only includes null/defined as falsy values, not 0 or ''
restaurant.numGuests = 0; // truthy only with NULLISH

const guestsOR = restaurant.numGuests || 10;
console.log(guestsOR); // 10

const guestsNULLISH = restaurant.numGuests ?? 10;
console.log(guestsNULLISH); // 0 */

// Short-circuit version

/* // Short-circuiting with || can use and return ANY data type, and it returns the FIRST TRUTHY value or last falsy
// useful for setting default values
console.log('------OR------')
console.log('' || 'Dan');
console.log(3 || 'Viktor');
console.log(false || true);
// returns the last falsy in this case: null
console.log(undefined || null);
console.log('' || false || undefined || 'Dan' || true || 'dog');

restaurant.numGuests = 30; // makes truthy unless = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// Short-circuit version
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Short-circuiting with && returns the first falsy or the last truthy
console.log('------AND------')
console.log(null && 'Dan');
console.log(3 && 'Viktor');
console.log(false && true);
console.log(undefined && null);
console.log(3 && 'Dan' && true && 'dog');

if (restaurant.orderPizza) {
  restaurant.orderPizza('pepperoni', 'mushrooms', 'pineapple');
}
// AND executes the last truthy operant
restaurant.order(2, 1) && restaurant.orderPizza('anchovies', 'garlic', 'butter'); */
/* restaurant.orderPizza('pepperoni', 'mushroom', 'olives', 'green peppers');
// 1. Destructuring use of REST
// REST does the opposite of spread
// SPREAD is on the right of the assignment
const arr = [1, 2, ...[3, 4]];
// REST is on the left and must be used last, in order to collect the 'rest' of the elements
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);
// REST and SPREAD used together: REST with variables and SPREAD with values
// REST operator ignores skipped elements
// unlike spread, REST can only be used once, at the end
const [main1, , main2, ...restOfMenu] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(main1, main2, restOfMenu);
// REST in objects
const {thu, fri, ...weekend} = restaurant.openingHours;
console.log(weekend);

// 2. REST in Functions used as parameters
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) 
    sum += numbers[i];
  console.log(sum);
}

add(1, 2, 2, 2, 2, 2);
// Spread version
const G = [7, 7, 7]
add(G[0], G[1], G[2]);
add(...G); */

/* // The Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// Spread the existing array into individal values
const betterNewArr = [1, 2, ...arr];
console.log(betterNewArr);
console.log(...betterNewArr);
//Add a new food item to mainMenu
const newMainMenu = [...restaurant.mainMenu, 'Ravioli'];
console.log(newMainMenu);
console.log(...newMainMenu);
//Copy arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// Join the 2 menu arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// Iterables: arrays, strings, maps, and sets. Not objects.
const str = 'Daniel';
console.log(...str); // yes
// console.log(`${...str} is a software engineer`); // no
// Use spread operator to pass into function arguments
// const ingredients = [prompt('Give me ingredient 1:'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// old way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// new way
// restaurant.orderPasta(...ingredients);
// Spread ALLOWED in objects since ES2018
const newRestaurant = {founder: 'Danny Boy',...restaurant, founded: 1981};
console.log(newRestaurant);
const restaurantCopy = {...restaurant};
restaurantCopy.location = "1998 W Caballo Estates #35";
console.log(restaurantCopy.location);
console.log(restaurant.location); */

// Object destructuring

// When destructuring, order does not matter in objects!
/* restaurant.orderDelivery({
  time: 2200,
  address: '1155 W Cababi St.',
  starterIndex: 2,
  mainIndex: 0
});
// Less properties to allow defaults to kick-in
restaurant.orderDelivery({
  address: '1155 W Cababi St.',
})

// Use object property names as variables
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
// Or assign variables names to properties
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Assigning defaults is useful for API calls, where we cannot know exaclty how many properties are in an object
const {menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 6;
let b = 66;
// Need parethensis around curly braces to make it work
const obj = {a: 7, b: 77, c: 777};
({a, b} = obj);
console.log(a, b);

// Assigning to nested objects
const {fri: {open, close}} = openingHours;
console.log(open, close);
const {fri: {open: o, close: c,}} = openingHours;
console.log(o, c); */

/* // Array destructure practice

// Old way to destructure with variables
const cat1 = restaurant.categories[0];
const cat2 = restaurant.categories[1];
const cat3 = restaurant.categories[2];
// console.log(cat1, cat2, cat3);

// Das new way
let [catUno, catDos, catTres] = restaurant.categories;
// console.log(catUno, catDos, catTres);
// Reassignment
[catUno, catDos] = [catDos, catUno];
// console.log(catUno, catDos, catTres); 

// Destructuring 2 values returned from an array's function
const [secondary, main] = restaurant.order(2, 0);
// console.log(secondary + ', ' + main);

// Destructuring nested arrays
const nestedArray = ['Rice', 'Gum', 'Fish', ['Chopsticks', 'Fork', 'Spork']];
// Skipping values while destructuring
const [prima, , secta, utensils] = nestedArray;
console.log(prima, secta, utensils);
const [ , una, , [c, f, ,]] = nestedArray;
console.log(una, c, f);

// Setting default values for arrays with unknown value amounts; useful when using APIs
const [x = 1, y = 1, z = 1, v = 1] = [8, 9];
console.log(x, y, z, v);
// show array values, when values run out, use default values */