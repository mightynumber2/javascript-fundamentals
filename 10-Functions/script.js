'use strict';

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 150 * numPassengers) {  
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings[0] = booking;
};

createBooking('AZ519', undefined,);
console.log(bookings);