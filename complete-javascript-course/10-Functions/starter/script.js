'use strict';

// const bookings = []

// // the default values can contains any expression in the parameters as below!

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
//   // ES6 you doit on the parameters
//   // ES5 way
//   // numPassengers = numPassengers || 1; // shortcircuiting!
//   // price = price || 199;

//   // create a object using enhanced object literal syntax
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking)
//   bookings.push(booking)
// }

// createBooking('LH123')
// createBooking('LH123', 5)
// createBooking('LH121', '150', '$1000.00')
// createBooking('LH445', '190', '$1500.00')


const flight = 'LH234';
const marcelo = {
  name: 'Marcelo Araujo',
  passport: 2345671
}

const  checkIn = function (flightNum, passenger){
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;

  if(passenger.passport === 2345671){
    alert('Check In')
  }else{
    alert('Wrong Passport Number')
  }
}

// checkIn(flight, marcelo)

// console.log(flight)
// console.log(marcelo)

//// Is the same as doing ...
const flightNum = flight;
const passenger = marcelo


const newPassport = function (person){
  person.passport = Math.trunc(Math.random() * 1000000)
}

// newPassport(marcelo)
// checkIn(flight, marcelo)

