'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split('+'))

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

  order: function (starterIndex, mainIndex) {
    // console.log(this)
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////           TITLE STRINGS------------------------------------

// const airline = 'TAP Air Portugal'
// const plane = 'A320'

// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log('B737'[0])
// console.log(airline.length)
// console.log('B737'.length)

// //// String Methods    - They will always return a new modified string

// console.log(airline.indexOf('r')) // return first appearence
// console.log(airline.lastIndexOf('r')) // return the last appearence
// console.log(airline.indexOf('portugal')) // case sensitive, when dont exist returns -1

// //// Extracting part of a string

// console.log(airline.slice(4)) // counts from 0 when reach 4 will remove it. It doesnt change the original
// console.log(airline.slice(4, 7))
// console.log(airline.slice(0, airline.indexOf(' ')))
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)) // since count is from 0 will add the space + 1 eliminates!
// console.log(airline.slice(-2)) // with negative values will start from the end
// console.log(airline.slice(1, -1))

// const checkMiddleSeat = function(seat){
//   // B and E are middle seats small planes
//   const s = seat.slice(-1)

//   if(s === 'B' || s === 'C'){
//     console.log('You have a middle seat')
//   }
//   else if(s === 'A' || s ==='J'){
//     console.log('You have a window')
//   }else{
//     console.log('You have a Aisle')
//   }
// }

// checkMiddleSeat('3A')
// checkMiddleSeat('3C')
// checkMiddleSeat('3F')

//// Fix capitalization in a Passegers name

// const passenger = 'mArcelo'

// function correctName(passeger){
//   const passegerToLowerCase = passenger.toLocaleLowerCase()
//   const passegerCorrect = passenger[0].toLocaleUpperCase() + passegerToLowerCase.slice(1)
//   return passegerCorrect
// }

// console.log(correctName(passenger))

//// Comparing emails

// const email = 'hello@marcelo.com'
// const loginEmail = '  Hello@marcelo.coM \n'
// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim()

// all in  one line
// const normalizedEmail = loginEmail.toLocaleLowerCase().trim()
// console.log(normalizedEmail)
// console.log(email === normalizedEmail)

// function checkEmails(email){
//   // checks email in the data base agains loginEmail entered
//   const loginEmail = '  Hello@marcelo.coM \n'
//   const fixedEmail = loginEmail.toLocaleLowerCase().trim()
//   return email === fixedEmail ? true : false
// }

// console.log(checkEmails(email))

//// Replacing
// const priceGB = '€288,97'
// const priceUs = priceGB.replace('€', '$').replace(',', '.')
// console.log(priceUs)

// const announcement = 'All passagenr come to boarding door 23. Boarding at door 23!'
// // console.log(announcement.replace('door', 'gate').replace('door', 'gate'))
// console.log(announcement.replaceAll(/door/g, 'gate')) //regex
// // console.log(announcement.replaceAll('door', 'gate'))

//// Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'))
// console.log(plane.includes('boeing'))
// console.log(plane.startsWith('Air'))

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//   console.log('Part of the NEW Airbus family')
// }

//// Practice exercise
// const checkBaggage = function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')){
//     console.log('Those items are not allowed')
//   }else{
//     console.log('Welcome aboard!')
//   }
// }
// checkBaggage('I have a laptop, some food and a pocket knife')
// checkBaggage('Socks and a camera')
// checkBaggage('Got some snacks and a gun for protection')

//// The slipt

// console.log('a+very+nice+string'.split('+'))
// console.log('Marcelo Araujo'.split(' '))

// const [firstName, lastName] = 'Marcelo Araujo'.split(' ');

// // Printing Passegers name

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
// // console.log(newName)

// const capitalizeName = function(name){
//  const names = name.split(' ') // creates an array with each item after ' '
//  const namesUpper = []

// // isolates the first letter of each name on the array. Makes it uppercase
//  for(const firstL of names){ // loops through each name firstL[0] = first letter then removes it and pushes to namesUpper
//   namesUpper.push(firstL[0].toUpperCase() + firstL.slice(1))
//   // namesUpper.push(firstL.replace(firstL[0], firstL[0].toUpperCase())) // this does the same thing
//  }
//  console.log(namesUpper.join(' '))
// }
// // capitalizeName('marcelo araujo') // this is what is passed
// // console.log('marcelo'.slice(1))
// capitalizeName('jessica ann smith davis')
// capitalizeName('marcelo araujo')

//// Padding a String.

// const message = 'Go to gate 23!'
// console.log(message.padStart(25, '+'))
// console.log(message.padStart(25, '+').padEnd(35, '+'))
// console.log('joe'.padStart(25, '+'))

//// Real world example of Padding  --- Credit Card Last 4 numbers showing

// const maskCreditCard = function (number){
//   const str = String(number) // number + '' would also work
//   const last4 = str.slice(-4)
//   // const last4Showing = last4.padStart(16, '*') // instead of this just return
//   // console.log(last4Showing)
//   return last4.padStart(str.length, '*')
// }

// console.log(maskCreditCard(1205554424569087))
// console.log(maskCreditCard(78904534))

//// Repeat

// const message2 = 'BAd Weather... All Departures Delayed...'
// console.log(message2.repeat(5))

// const planesInLine = function (n){
//   console.log(`There are ${n} planes inline ${'✈'.repeat(n)}`)
// }

// planesInLine(5)
// planesInLine(15)
// planesInLine(25)










// Coding Challenge #4

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea');
// const btn = document.querySelector('button');
// btn.textContent = 'click';
// // console.log(text)

// btn.addEventListener('click', () => {
//   convert(text.value);
// });

// function convert(word) {
//   const rows = word.split('\n')
  
// for(const [i, row] of rows.entries()){
//     const [first, second] = row.toLowerCase().trim().split('_')
//     const output = `${first}${second.replace(second[0],
//     second[0].toUpperCase()
    
//     )}`;
//     console.log(`${output.padEnd(20,)}${'✅'.repeat(i + 1)}`)
// }
// }


////---------------------------------------------------------------------------

////            TITLE MAPS ------------
/// Setting a new Map

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, "Firenze, Italy")
// rest.set(2, 'Lisbon, Portugal')
// console.log(rest)

//// Adding new elements to a map

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'We are open :D')
// .set(false, 'We are Closed :(')

//// Getting elements from a Map.

//// IMPORTANT The data type of the key matters. Below 👇, true has to be the value, not a string!
// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest.get(1))

// //// Using boolean on maps ex

// const time = 21
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

// //// Methods

// console.log(rest.has('categories'))
// rest.delete(2)
// // rest.clear()
// console.log(rest)
// // console.log(rest.size)

//// Using Arrays and Objects as Map keys
//// rest.set([1,2], 'Test') This would create the Array as a Map key. However read below 👇

////IMPORTANT
//// Getting the data from that Array
//// * First you would have to create a variable with the array. This is due to the way js processes the heap and the stack, otherwise [1, 2] and [1,2], in the memory would point to two different memory addresses in the js engine. The line below shows

// console.log([1,2] === [1,2] ? 'yes' : 'no they are not the same since they are different addresses on memory')

// const arr = [1,2] // *
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest)

// // console.log(rest.get([1,2])) // To consolelog this wouldnt work. You would have to create a const above *
// //// and then consolelog like below
// console.log(rest.get(arr))

//// POPULATING A NEW MAP EASIER FOR LOTS OF DATA AT ONCE THAN .SET() METHOD

// const question = new Map([
//   ['Question', 'Whats the best Programing Leanguage?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again']
// ])
// console.log(question)
// console.log(question.get('correct'))

//// Convert Object to Map

// console.log(Object.entries(restaurant.openingHours))
// const hoursMap = new Map(Object.entries(restaurant.openingHours))
// console.log(hoursMap)

//// ITERATION ON MAP

//// Quiz App example
// console.log('--', question.get('Question'))
// for(const [key, value] of question){
//   if(typeof key === 'number'){
//     console.log(`Answer ${key}: ${value}`)
//   }
// }

// const answer = Number(prompt('Your Answer'))
// console.log(answer)

// answer === question.get('correct') ? console.log(question.get(true)) : console.log(question.get(false))
// or
// if(answer === question.get('correct')){
//   console.log(question.get(true))
// }else{
//  console.log(question.get(false))
// }

//// Convert Map to Array
// console.log([...question])
// console.log([...question.entries()]) // spread into the array
// console.log(question.keys())
// console.log(question.values())

////            TITLE SET ----------------------

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet)
// console.log(ordersSet.size)
// console.log(ordersSet.has('Pizza'))
// console.log(ordersSet.has('Bread'))
// ordersSet.add('Garlic Bread')
// ordersSet.add('Garlic Bread')
// ordersSet.delete('Risotto')
// // ordersSet.clear()
// console.log(ordersSet)
// // console.log(ordersSet[0]) // it doenst work. You cant get items of a set!

// for(const order of ordersSet)console.log(order)

// ////Real world example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // const staffUnique = new Set(staff)
// const staffUnique = [...new Set(staff)] // creating an array from a set! IMPORTANT
// console.log(staffUnique)

// console.log(new Set('marcelo').size)

////            TITLE LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES

//// Property NAMES:
//   const properties = Object.keys(restaurant.openingHours);
//   console.log(properties)

//   let openStr = `We are open on ${properties.length} days:`

//   for (const day of Object.keys(restaurant.openingHours)){
//     openStr += ` ${day}, `
//   }
// console.log(openStr)

//// Property VALUES:
// const values = Object.values(restaurant.openingHours)
// console.log(values)

//// LOOP Entire Object with .entries()

// const entries = Object.entries(restaurant.openingHours)

// console.log('Entries', entries)

//// looking at the return entries we know the sccond item in the array is a object so destructure it immidiately
//// if the object only had key and value you would do just [key, value] since the object in the example has 2 properties inside you do it as it is below.
// for(const [day, {open, close}] of entries){
//   console.log(`On ${day} we open at ${open} and close at ${close}`)
// }

//// IMPORTANT TITLE        WICH DATA STRUCTURE TO USE?

//// Sources of Data
//// 1. From the program itself: Data directley in the source code (e.g. status msgs)
//// 2. From the UI: Data from the user or data wriatten in the DOM (e.g tasks in todo app)
//// 3. From external sources: Data fetched for example from web API (e.g recipe objects)

//// For simple list use: Arrays or Sets
//// For Key/Value Pairs: Objects or Maps

//// With key/value pairs we have a way of describing the values
//// With Arrays we just have the values without descriptions

////              TITLE     ARRAYS VS SETS            IMPORTANT

//// TITLE Arrays used when:

//// When you need ordered list of values (might contains duplicates)
//// When you need to Manipulate data

//// TITLE Sets used when:

//// When you need to work with unique values
//// When high performance is really important
//// To remove duplicates

////                TITLE   OBJECT VS MAPS            IMPORTANT

////  TITLE Objects used when:

//// More traditional key/value
//// Easier to write and access values with . and []
//// When you need to include functions (methods)
//// When working with JSON (can convert to map)

////  TITLE Maps used when:

//// Better performance
//// Keys can have any data type
//// Easy to iterate
//// Easy to compute size
//// When you simply need to map key to values
//// When you need keys that are not strings

//// ------------------------------------------------------------------------------------

////                        TITLE OPTIONAL CHAINING ?.

// only if the property before the ? exist it will read from there if not undefined will be returned
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours.fri?.open)
// console.log(restaurant.openingHours?.mon?.open)

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// for (const day of days){
//   console.log(day)
//   let open = restaurant.openingHours[day]?.open ?? 'closed'
//     if(open === 'closed') {
//       console.log(`On ${day}, we are ${open}`)
//     }else{
//       console.log(`On ${day}, we are open at ${open || '24hrs'}`)
//     }
// }

//// On Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist')

// //// On Arrays
// const users = [
// {
//   name: 'Jonas',
//   email: 'xx@xx.com'
// }
// ]
// //// if exists will return name if not will return string with user array empty
// console.log(users[0]?.name ?? 'User array empty')
// // console.log(users[0]?.time ?? 'User array empty')

// if (users.length > 0) console.log(users[0].name)
// else console.log('User array empty')

// //                            TITLE FOR OF LOOP

// // With the for of loop you can use continue and break!       IMPORTANT  1

// const menu = [...restaurant.starterMenu, ... restaurant.mainMenu]

// // for(const item of menu) console.log(item); // no code block need it when its only one statement to execute

// //                                                            IMPORTANT 2
// // for(const item of menu.entries()){
// //   console.log(item)
// //   // console.log(`${item[0] + 1}: ${item[1]}`)
// // }
// ////                                                          IMPORTANT 3

// //// using destructuring at the beginning
// for(const [i, element] of menu.entries()){
//   console.log(`${i + 1}: ${element}`)
// }

////                           TITLE LOGICAL ASSIGNMENT OPERATORS

// const rest1 ={
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// }

// const rest2 ={
//   name: 'La Piazza',
//   owner: 'Giovani Rossi'
// }

//OR assignment operator
////if numGuests exist make it equal to numGuests if not set it to 10
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10
// rest1.numGuests  ||= 10 // same as above!
// rest2.numGuests  ||= 10 // same as above!

//// Nullish assignment operator (null or undefined)
//// if numGuest is null or undefined it will set it to 10 if not it wont do anything
// rest1.numGuests  ??= 10
// rest2.numGuests  ??= 10

// // Logical

// rest2.owner = rest2.owner && '<ANONYMOUS>'

//// AND assignment operator IMPORTANT
//// below it will set owner to anonymous if owner prop exists
// rest1.owner = rest1.owner && 'ANONYMOUS' // will show owner: undefined
// rest2.owner = rest2.owner && 'ANONYMOUS'
// rest1.owner &&= 'ANONYMOUS' // wont show owner: undefined
// rest2.owner &&= 'ANONYMOUS'

// console.log('Rest 1:', rest1)
// console.log('Rest 2:', rest2)

////                                 TITLE ||, && Operators

////Use ANY data type, return ANY data type, short-circuiting IMPORTANT 9

// console.log(3 || 'Jonas')
// console.log('' || 'Jonas')
// console.log(true || 0 )
// console.log(undefined || null)

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//// Assigining value with the || operand and making use of short-circuiting
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1)

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2)

//// The && operator does the oposite of the || operator it short-circuit when the first operand is falsy!
//// The && operator is only true if all the operands are true. When the first operatorand is thruthy it will only print the second operand, since it still needs to confirm the second operand so on and so forth.
//// IMPORTANT 10

// console.log(0 && 'Jonas')
// console.log(7 && 'Jonas')
// console.log('Hello' && 23 && null && 'Jonas')

// //Pratical example, check if orderPizza exist
// if(restaurant.orderPizza){
//   restaurant.orderPizza('calling with the if', 'mushroom', 'tomatos')
// }

// // It checks if the orderPizza property exist then if it does executes
// restaurant.orderPizza && restaurant.orderPizza('olives', 'cheese')

////                                    TITLE NULLISH COALESING OPERATOR ??
//// The nullish operator works with the principle of null values, only null values will short-circuit the operand

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1)

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect)

// //                               TITLE The Spread Operator

//// Without the spread
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
//with the spread
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//// Copy Array
// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy)

//// join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu)

// const str = 'marcelo';
// const letters = [...str]
// console.log(letters)
// console.log(...str)

//// Real world example
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 2?')];
// console.log(ingredients)

// restaurant.orderPasta(...ingredients)

//// Objects with the Spread Operator
// const newRestaurant = {...restaurant, founder: 'Guisppe', foundedIn: 1998}
// console.log(newRestaurant)
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurant.name, '/', restaurantCopy.name)

////                                TITLE - REST - OPERATOR - Destructuring

//// SPREAD, because its on the RIGHT side of the = IMPORTANT
// const arr = [1,2, ...[3,4]]

//// REST OPERATOR, because its on the left side of the =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others)

//// 8
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood)

//// REST with Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays)

////                                      TITLE REST in Functions

// const add = function (...numbers) {
//   // console.log(numbers)
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
//     console.log(sum)
//   }
// }

// add(2, 3)
// add(5, 3, 7, 2)
// add(8, 2, 5, 3, 2, 1, 4)

// const x = [23, 5, 7];
// add(...x)

// restaurant.orderPizza('mushroom', 'onions', 'olives', 'spinach')
// restaurant.orderPizza('mushrrom')

// //                                   TITLE Destructuring arrays IMPORTANT

// const arr = [2, 3,4]

// //This is not a array this is a destructuring assingment
// const [x, y, z] = arr //1
// console.log(x, y, z)
// console.log(arr)

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

//// Destructuring Switching variables

// const temp = main
// main = secondary
// secondary = main
// console.log(main, secondary) // what was italian is now vegetarian and what was vegatarian is now italian

//// With Destructuring

//// we dont need let or const just to reasign the variables in the destructuring method! IMPORTANT 2
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function with destructuring
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)

// // Nested Array Destructuring

// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested
// const [i, , [j, k]] = nested
// // console.log(i, j)
// console.log(i, j, k)

// // Default values IMPORTANT 7

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // TITLE Destructuring Objects
// const {name, openingHours, categories} = restaurant
// console.log(name, openingHours, categories)

// // If we want the properties names to be different than the variables names IMPORTANT 6
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
// console.log(restaurantName, hours, tags)

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: '55 el point st',
//   starterIndex: 1
// })

// // Seting default values.  IMPORTANT
// const { menu = [], starterMenu: starters = []} = restaurant
// console.log(menu, starters)

// // Mutating variables in Objects
// let a = 111;
// let b = 999;
// const obj = {a:23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a, b);

// // Destructuring Nested Objects Syntax    IMPORTANT
// console.log(openingHours)
// const {fri} = openingHours;
// const {fri: {open, close}} = openingHours;
// const {fri: {open: o, close: c}} = openingHours;
// console.log();

////----------------------------------------------

// // 1 IMPORTANT those constants will be the value of each array item! The array is preserved

// // 2 IMPORTANT we dont need let or const just to reasign the variables in the destructuring method!

// // 3 IMPORTANT Destructuring Arrays we use []

// // 4 IMPORTANT Destructuring Objects we use {}

// // 5 IMPORTANT Destructuring Objects the order is irrelevant

// // 6 IMPORTANT If we want the properties names to be different than the variables names

// // 7 IMPORTANT Default value can be assigned at the distructuring. It will be applied if arguments havent been passed

// // 8 IMPORTANT the REST operator must be the last so it can collect the rest of the data.

// ------------------------------SUBJECT: ||, &&, ?? OPERATORS --------------------------------------------

// // 1 IMPORTANT (short-circuit evaluation means if the first value is a thruthy value it will immiattly return the thruthy value and the other operand will not be evaluated)

// // 2 IMPORTANT The && operator is only true if all the operands are true. When the first operatorand is thruthy it will only print the second operand, since it still needs to confirm the second operand so on and so forth.

// // 3 IMPORTANT The nullish operator works with the principle of null values, only 'null' and 'undefined' values will short-circuit the operand

// // 4 IMPORTANT The &&= does is assigns a value to a variable if is currently thruthy

//// ------------------------------SUBJECT: FOR OF LOOP --------------------------------------------
//// 1 IMPORTANT With the for of loop you can use continue and break!

//// 2 IMPORTANT To get the index in the for of loop you need to use the .entries() method

//// 3 IMPORTANT each item in the for of loop is returned as an array. giving the possibility to destructure the item at the very beginning

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const [...allPlayers] = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {
  odds: { team1, x: draw, team2 },
} = game;

function printGoals(...players) {
  players.forEach(e => {
    console.log(e);
  });
  console.log(`${players.length} goals were scored`);
  // team1 < team2 ? console.log('Team 1 is more likely to win') : console.log('Team 2 is more likely to win')
  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likely to win');
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals(...game.scored)

// console.log(game.odds)

// for(const [i, player] of game.scored.entries()){
//   console.log(`Gol ${i + 1}: ${player}`)
// }

// const scorers = {};
// console.log(game.scored)
// for (const player of game.scored){
//   if(scorers[player]){
//     scorers[player] += 1;
//   }else{
//     scorers[player] = 1
//   }
// }
// console.log(scorers)

// const values = Object.values(game.odds)
// // console.log(v)
// let total = 0;
// let average;
// for(const value of values){
//   total += value
//   average = total / values.length
// }
// console.log('The average odd for a win is: ', average)

// const odds = Object.entries(game.odds)
// console.log(odds)
// for (const [team, odd] of odds){
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`)
// }

// const scorers = {
//   name: 'goals'
// }

// console.log(game.scores)
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())]
// console.log(events)

// gameEvents.delete(64)
// console.log(gameEvents)

// const time = [...gameEvents.keys()].pop() // turn gameEvents keys into an array to access items
// // console.log(time.pop()) // gets the last item from array
// console.log(`A event happened, on average, every: ${time / gameEvents.size} minutes`)

// for(const [timeOfEvent, event] of gameEvents){
//   let firstHalf = 45;
//   timeOfEvent <= firstHalf ? console.log(`[firstHalf] ${timeOfEvent}: ${event}`) :  console.log(`[secondHalf] ${timeOfEvent}: ${event}`)
// }
