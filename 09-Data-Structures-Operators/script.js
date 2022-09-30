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
  }
};


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