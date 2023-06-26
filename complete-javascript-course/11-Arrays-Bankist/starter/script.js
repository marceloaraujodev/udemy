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

// Individual movements in the statement
const displayMovements = function(movements){
  containerMovements.innerHTML = '';
 movements.forEach((mov, i) => {
  const type = mov > 0 ? 'deposit' : 'withdrawal'

  const html = `  
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i +  1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>`

  containerMovements.insertAdjacentHTML('afterbegin', html)

 });
}
displayMovements(account1.movements)


// Display Balance
const calcDisplayBalance = function(movement){
  const balance = movement.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${balance} EUR`
}
calcDisplayBalance(account1.movements)



//Creates user names
const createUserNames = function (accounts){

  accounts.forEach((account)=>{ // account refers to each seperate accounts item from the array accounts!
    account.username = account.owner // it says that username is the same as owner then modifies everything
    .toLocaleLowerCase()
    .split(' ')
    .map( word => word[0] )
    .join('') 
  })
  // console.log(account1)
}

createUserNames(accounts)
// console.log(accounts)


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




////                                          TITLE  MAP - FILTER - REDUCE

/*
 IMPORTANT THE MAP METHOD returns a new array with the results of applying an operation on all original array elements

 IMPORTANT THE FILTER METHOD returns a new array containing the array elements that passed a specified test condition
 
  IMPORTANT THE REDUCE METHOD boils all array elements down to one single value (adding all elements together)

*/

//// MAP --

// const eurToUsd = 1.1;


// const movementsUSD = movements.map((mov)=>{
//   // return 23 // just to see that it returns an array with the same amount of elements
//  return mov * eurToUsd
// })
// const movementsUSD = movements.map(mov => mov * eurToUsd) // cleaning using arrow function

// console.log(movements)
// console.log(movementsUSD)

// const movementsDescriptions = movements.map((mov, i) => 
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// )// one line does not need return statement

// console.log(movementsDescriptions)



//// Filter --

// const deposits = movements.filter( mov=> mov > 0)
// // only elements that are true to this condition mov > 0 will return in the new deposits array
// console.log('movements', movements)
// console.log('deposits array', deposits)

// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals)

// const depositsFor = []
// for (const mov of movements){
//   mov > 0 ? depositsFor.push(mov) : undefined
// }
// console.log('With the for of loop', depositsFor)


// //// Reduce --
// // the 0 there is the initial accumulator variable
// const balance = movements.reduce((acc, current, index)=> acc + current, 0)
// console.log(balance)


//// Maximum value of the movements array using Reduce

// const maxMov = movements.reduce((acc, current)=>{
//   return acc < current ? acc = current : acc
// }, movements[0])
// console.log(maxMov)



// // CODING CHALLENGE  1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const dogsJulia = [3, 5, 2, 12, 7]
// const dogsKate = [4, 1, 15, 8, 3]

// function checkDogs(julia, kate){
//   // const juliaNew = julia.slice(1, 3) I did it like this
//   const juliaNew = julia.slice() // using splice
//   juliaNew.splice(0, 1) // removes the first item
//   juliaNew.splice(-2) // removes the last 2
//   // console.log(juliaNew)
//   // const all = [...juliaNew, ...kate] // I didt 
//   const all = juliaNew.concat(kate) // with the concat method since is array lessons
//   console.log(all)

//   all.forEach((dog, i)=>{
//    console.log(dog < 3 ? `Dog number ${i + 1} is an Puppy` : `Dog number ${i + 1} is an Adult`)
//   })
// }

// checkDogs(dogsJulia, dogsKate)


// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

// function calcAverageHumanAge(ages){
//  const humanAges =  ages.map((age) => age <= 2 ? age * 2 : 16 + age * 4);

//   const filtered = humanAges.filter(humanAge => humanAge > 18)
//   // console.log(filtered)
//   const averageAge = filtered.reduce((acc, current) =>  acc + current / filtered.length, 0)
//   return averageAge
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))