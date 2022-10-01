'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = 3, mainIndex = 2, time = 1800, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} hours for ${address}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Pasta coming up! using ${ing1}, ${ing2}, and ${ing3}!`)
  },

  orderPizza: function(mainIng, ...otherIngs) {
    mainIng = mainIng.charAt(0).toUpperCase() + mainIng.slice(1);
    if (otherIngs == 0) {
      console.log(`${mainIng} pizza ordered!`);
    } else {
      console.log(`${mainIng} pizza ordered with ${otherIngs}!`)
    }
  }
};

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