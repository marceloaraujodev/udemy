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

  order: function(starterIndex, mainIndex){
    // console.log(this)
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]

  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  }
};


////                           TITLE LOGICAL ASSIGNMENT OPERATORS

const rest1 ={
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
}

const rest2 ={
  name: 'La Piazza',
  owner: 'Giovani Rossi'
}

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10
// rest1.numGuests  ||= 10 // same as above!
// rest2.numGuests  ||= 10 // same as above!

// Nullish assignment operator
// rest1.numGuests  ??= 10 
// rest2.numGuests  ??= 10 

// // Logical 

// rest2.owner = rest2.owner && '<ANONYMOUS>'


// console.log(rest1)
// console.log(rest2)





////                                 TITLE || && Operators

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

const add = function (...numbers) {
  // console.log(numbers)
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
    console.log(sum)
  }
}

// add(2, 3)
// add(5, 3, 7, 2)
// add(8, 2, 5, 3, 2, 1, 4)

const x = [23, 5, 7];
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


// // Destructuring Objects
const {name, openingHours, categories} = restaurant
// console.log(name, openingHours, categories)

// // If we want the properties names to be different than the variables names IMPORTANT 6
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
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














// // 1 IMPORTANT those constants will be the value of each array item! The array is preserved

// // 2 IMPORTANT we dont need let or const just to reasign the variables in the destructuring method!

// // 3 IMPORTANT Destructuring Arrays we use [] 

// // 4 IMPORTANT Destructuring Objects we use {} 

// // 5 IMPORTANT Destructuring Objects the order is irrelevant

// // 6 IMPORTANT If we want the properties names to be different than the variables names

// // 7 IMPORTANT Default value can be assigned at the distructuring. It will be applied if arguments havent been passed

// // 8 IMPORTANT the REST operator must be the last so it can collect the rest of the data.


// ------------------------------SUBJECT: || && OPERATORS --------------------------------------------

// // 1 IMPORTANT (short-circuit evaluation means if the first value is a thruthy value it will immiattly return the thruthy value and the other operand will not be evaluated)

// // 2 IMPORTANT The && operator is only true if all the operands are true. When the first operatorand is thruthy it will only print the second operand, since it still needs to confirm the second operand so on and so forth.

// // 3 IMPORTANT The nullish operator works with the principle of null values, only 'null' and 'undefined' values will short-circuit the operand










