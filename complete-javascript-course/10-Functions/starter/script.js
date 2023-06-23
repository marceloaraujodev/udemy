'use strict';

// const bookings = []

// // the default values can contains any expression in the parameters as below!---------

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
//   // ES6 you doit on the parameters
//   // ES5 way
//   // numPassengers = numPassengers || 1; // shortcircuiting!
//   // price = price || 199;

//   // create a object using enhanced object literal syntax---------
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


// const flight = 'LH234';
// const marcelo = {
//   name: 'Marcelo Araujo',
//   passport: 2345671
// }

// const  checkIn = function (flightNum, passenger){
//   flightNum = 'LH999';
//   passenger.name = 'Mr ' + passenger.name;

//   if(passenger.passport === 2345671){
//     alert('Check In')
//   }else{
//     alert('Wrong Passport Number')
//   }
// }

// checkIn(flight, marcelo)

// console.log(flight)
// console.log(marcelo)

//// Is the same as doing ...
// const flightNum = flight;
// const passenger = marcelo


// const newPassport = function (person){
//   person.passport = Math.trunc(Math.random() * 1000000)
// }

// newPassport(marcelo)
// checkIn(flight, marcelo)


// //This is a Call back function---------

// const oneWord = function (str){ 
//   return str.replace(/ /g, '').toLowerCase()
// }


// //This is a Call back function---------
// const upperFirstWord = function(str){  
//   const [first, ...others] = str.split(' ');
//  return [first.toUpperCase(), ...others].join(' ')
// }


// // Higher order function since it takes a function as a argument---------

// const transformer = function(str, fn){
//   console.log(`Original string: ${str}`)
//   console.log(`Transformed string: ${fn(str)}`)

//   console.log(`Transformed by: ${fn.name}`)
// }

// transformer('Javascript is the best', upperFirstWord)
// transformer('Javascript is the best', oneWord)



// const greet = function (greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`)
//   }
// }

// // const greeterHey = greet('Hey');

// greeterHey('Marcelo')
// greet('Hello')('Jonas')

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey')

// greeterHey('Marcelo')

// greet('Hello')('Marcelo')


// const lufthansa = {
//   airline: 'Luftansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//   }
// }

// lufthansa.book(239, 'Marcelo Araujo')
// lufthansa.book(635, 'Joe Smith')
// console.log(lufthansa)

// const eurowings = {
//   airline: 'EuroWings',
//   iataCode: 'EW',
//   bookings: []
// }

// // the code bellow copies the the function, however now book its just a regular function and on regular functions the this keyword is undefined! lufthansa.book is a method since is inside a object, the const below just copied a method to outside of the object becoming a regular function. At least on strict mode. To fixed this you have to tell JS where to look for the this Keyword. You can do that with the call(), apply() or bind() methods!

// const book = lufthansa.book;

// Does not work explanation above---------
// book(23, 'Sara Dane')

// // First argument points to where we want the this keyword to look for, then the other arguments---------

// book.call(eurowings, 23, 'Sara John')
// console.log(eurowings)

// book.call(lufthansa, 239, 'Mary Cooper')

// const swiss = {
//   airline: 'Swiss Air Line',
//   iataCode: 'LX',
//   bookings: []
// }

// book.call(swiss, 583, 'Struten kan')



// // The apply() method not used much anylonger---------

// const flightData = [583, 'George Cooper']
// book.apply(swiss, flightData)
// console.log(swiss)

// // below is the reason why! Just use the spread operator in the arguments!
// book.call(swiss, ...flightData)



//// The Bind() method---------

// // book.bind(eurowings) It will return a new function with the this keyword set to the eurowings

// const bookEW = book.bind(eurowings)
// const bookLH = book.bind(lufthansa)
// const bookLX = book.bind(swiss)

// bookEW(235, 'Steve Williams')


// // Set bookings for specific flights. Setting the second argument leaves just the name missing---------

// const bookEW23 = book.bind(eurowings, 23) 

// bookEW23('Marcelo Araujo')
// bookEW23('Mary Jane')



// Bind() with Event Listeners---------

// IMPORTANT In a event handler the this keyword always points to the element on wich that handler is attached to.

// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//   console.log(this)
//   this.planes++
//   console.log(this.planes)
// }
// lufthansa.buyPlane();

// Needs to use the bind() method because bind returns a new function, diffrente than the call() which calls a function.

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)) // From here wont work because of the this keyword that points to the element in the event handler!



//// Partial Application --------- 

// const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200))

// // The null below if for the this keyword, since it does not need it
// const addVAT = addTax.bind(null, 0.23) // same as below
// // addTax = value => value + value * 0.23;

// console.log(addVAT(100))
// console.log(addVAT(23))
// console.log(addVAT(100))


// const x = addVAT() 
// console.log(x


//// Creating a function that returns another function

// const x = function(rate){
//   return function (value) {
//     return value + value * rate
//   }
// }

// const addVAT2 = x(0.23)
// console.log(addVAT2(100))
// console.log(addVAT2(23))
















////                                    CODING CHALLENGE

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/


const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
       const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number) `))
       typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++

    this.displayResults()
    this.displayResults('string')
    // this.displayResults([5, 2, 3])
    },
    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers)
        }else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
}

/*
.bind will point the this keyword to the poll object
.call calls a function
.bind creates a new function thats why you can use it in the addeventlistener, since the second parameter is a function
.apply calls the specified function with a given this value, and arguments provided as an array (or an array-like object). */

document
.querySelector('.poll')
.addEventListener('click', poll.registerNewAnswer.bind(poll))

// [5, 2, 3]
// poll.displayResults.call({answers: [5, 2, 3]})