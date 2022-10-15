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

///////////////////////////////////////////
// FUNCTIONS RETURNING FUNCTIONS

document.body.addEventListener('click', high5);
['Dan', 'Jonas', 'Leon', 'Colt'].forEach(high5); */

const greet = greeting => name =>
  console.log(`${greeting} ${name}`);

greet('Hello')('Dan');
