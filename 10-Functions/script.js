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

const phoenixAirlines = {
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