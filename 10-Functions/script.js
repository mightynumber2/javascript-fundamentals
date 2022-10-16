'use strict';

///////////////////////////////////////////
// MORE FUNCTIONS

// Default parameters
/* const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 150 * numPassengers) {  
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings[0] = booking;
};

createBooking('AZ519', undefined,);
console.log(bookings); */

///////////////////////////////////////////
// HIGHER-ORDER FUNCTIONS

// First-class/call-back functions
/* const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}
console.log(oneWord('JavaScript is the best!'));

const firstUpperCase = str => {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};
console.log(firstUpperCase('JavaScript is the best!'));

// Higher-order function
const transform = function(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}
transform('JavaScript is the best!', firstUpperCase);

// Callback using the DOM
const high5 = function() {
  console.log('✋');
};

document.body.addEventListener('click', high5);
['Dan', 'Jonas', 'Leon', 'Colt'].forEach(high5); */

///////////////////////////////////////////
// FUNCTIONS RETURNING FUNCTIONS

/* const greet = greeting => name =>
  console.log(`${greeting} ${name}`);

greet('Hello')('Dan'); */

///////////////////////////////////////////
// THE CALL AND APPLY METHODS

/* const phoenixAirlines = {
  airline: 'Phoenix Airlines',
  iataCode: 'PH',
  bookings: [],
  book(flightNum, name) {
    console.log(`Booked ${name} for ${this.airline} flight: ${this.iataCode + flightNum}`);

    this.bookings.push( {flight: this.iataCode + flightNum, name});
  }
};
phoenixAirlines.book(316, 'Dan Volks');
phoenixAirlines.book(316, 'Teggy Bear');
console.log(phoenixAirlines.bookings);

// Use the function's call method to reassign 'this'
const louisianaAir = {
  airline: 'Louisiana Air',
  iataCode: 'LA',
  bookings: []
};

const book = phoenixAirlines.book;
book.call(louisianaAir, 237, 'Kerry Brown');
console.log(louisianaAir.bookings);
book.call(phoenixAirlines, 477, 'Bebop Rhee');
console.log(phoenixAirlines.bookings);
// from an array
const passenger52 = [215, 'Mary Walker'];
book.call(louisianaAir, ...passenger52);
console.log(louisianaAir.bookings);

// Apply method; apply takes an array 'as is'
const passenger53 = [215, 'Tay Walker'];
book.apply(louisianaAir, passenger53);
console.log(louisianaAir.bookings);

// The bind method binds 'this' to a new keyword and returns a new function that will always use this new keyword
const bookLA = book.bind(louisianaAir);
const bookPH = book.bind(phoenixAirlines);
bookLA(444, 'Jeff Young');
bookPH(315, 'Quigey Bear');
// Bind() can bind multiple function arguments
// known as partial application when setting parts of the arguments beforehand
const bookLA_313 = book.bind(louisianaAir, 313);
bookLA_313('Natalie Portman'); 
bookLA_313('Jose Canseco'); 
console.log(louisianaAir.bookings);
// with Event Listeners
louisianaAir.planes = 150;
louisianaAir.buyPlanes = function() {
  this.planes++;
  console.log(this.planes);
};
console.log(louisianaAir);
// we use bind instead of call, because bind creates a copy of the buyPlanes function with a preset value, while the call method invokes the function immediately
document.querySelector('.buy').addEventListener('click', louisianaAir.buyPlanes.bind(louisianaAir));
// Partial Application (presetting) using bind
const addTax = (rate, value) => value + value * rate;
console.log(addTax(.15, 100));
// use null if 'this' or an argument is not applicable
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Practice: add VAT using a function to return a function
// const addTaxRate = rate => {
//   return function(value) {
//     return value + value * rate;
//   };
// };
const addTaxRate = rate => value => value + value * rate;
const addVAT2 = addTaxRate(0.23);
// console.log(addTaxRate(0.23)(100));
console.log(addVAT2(100)); */

// Constructor conversion
/* function MakeAirline(airline, iataCode,) {
  this.airline = airline,
  this.iataCode = iataCode,
  this.bookings = [],
  this.book = function(flightNum, name) {
    console.log(`Booked ${name} for ${this.airline} flight: ${this.iataCode + flightNum}`);

    this.bookings.push( {flight: this.iataCode + flightNum, name});
  }
};

const newOrleansAir = new MakeAirline('New Orleans Air', 'NO');
console.log(newOrleansAir);
newOrleansAir.book(322, 'John Mclane');
console.log(newOrleansAir.bookings); */

///////////////////////////////////////////
// MORE CLOSURE EXAMPLES

/* const boardPassengers = function(n, wait) {
  const perGroup = n / 3;

  setTimeout(function() {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups of ${perGroup} passengers`)
  }, wait * 1000);

  console.log(`Will be boarding in ${wait} seconds!`);
}
// Closures have priority over global scope
const perGroup = 500;
boardPassengers(150, 15); */