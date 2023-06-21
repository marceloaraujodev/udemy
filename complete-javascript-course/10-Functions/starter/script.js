'use strict';

const bookings = []

// the default values can contains any expression in the parameters as below!

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
  // ES6 you doit on the parameters
  // ES5 way
  // numPassengers = numPassengers || 1; // shortcircuiting!
  // price = price || 199;

  // create a object using enhanced object literal syntax
  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking)
  bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 5)
createBooking('LH121', '150', '$1000.00')
createBooking('LH445', '190', '$1500.00')