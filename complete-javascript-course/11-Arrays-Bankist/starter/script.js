'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES




/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e']

// // SLICE RETURNS A NEW ARRAY

// console.log(arr.slice(2))
// console.log(arr.slice(0,2))
// console.log(arr.slice(-2))
// console.log(arr.slice(-1))
// console.log(arr.slice(1, -2))
// console.log(arr.slice()) // shallow copy


// SPLICE - CHANGES ORIGINAL ARRAY - USED MOSTLY TO DELETE SOMETHINGS FROM THE ARRAY

// console.log(arr.splice(2))
// console.log(arr.splice(-1))
// console.log(arr.splice(1, 2))
// console.log(arr) // changed the original!


// REVERSE - MUTATES THE ORIGINAL ARRAY

// let arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2, 'original')
// console.log(arr2.reverse())
// console.log(arr2, 'mutated')
// arr2.reverse()

// // CONCAT

// const letters = arr.concat(arr2)
// console.log(letters)

// // JOIN 
// console.log(letters.join('-'))


// // THE AT METHOD
// const arr = [23, 11, 64]
// // console.log(arr.at(0))

// // getting last array element old vs .at()
// // console.log(arr[arr.length -1])
// // console.log(arr.slice(-1)[0])
// console.log(arr.at(-1))


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//// For Of
// for(const movement of movements){
//   movement < 0 ? console.log(`Withdraw of $${Math.abs(movement)}`) : console.log(`Deposit of $${movement}`)
// }

//// For Of with access to the indexes - The order of the the elements in the for of loop are Index, Element to be looped through

// for(const [i, movement] of movements.entries()){
//   console.log('Index:',i, 'Movement:',movement)
// }

//// Math.abs() removes the - of the number, will always return a positive number

//// For Loop
// for(let i = 0; i < movements.length; i++){
//   // console.log(movements[i])
//   if(movements[i] < 0){
//     console.log(`Withdraw of ${movements[i]}`)
//   }else{
//     console.log(`Deposit of ${movements[i]}`)
//   }
// }


//// For Each - 
//// IMPORTANT The forEach method calls the function example:
/* at index 
0: function(200) the value of the first index is passed so on and so forth
1: function(450)  
2: function(400)

IMPORTANT 
                      Everytime it is called it passes

1. The element being processed in the array
2. The index of the current element being processed in the array
3. The array the forEach method was called upon
The order of the parameters matter, first paramenter is the element, second is the index, third is the array
You cannot break out of a forEach Loop IMPORTANT when choosing which to use
*/
// movements.forEach((movement, index)=>{
//   // console.log(index + 1, movement)
//   movement < 0 ? console.log(`Movement ${index + 1}: Withdraw of $${Math.abs(movement)}`) : console.log(`Movement ${index + 1}: Deposit of $${movement}`)
// })



//// TITLE FOR EACH WITH MAPS AND SETS

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


// currencies.forEach((value, key, map)=>{
//   console.log(`${key}: ${value}`)
// })

// // SET

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
// console.log(currenciesUnique)

// currenciesUnique.forEach((value, _, map)=>{
//   console.log(`${value}: ${value}`)
// })