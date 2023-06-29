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
// sort set to false by default in the parameter
const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';

  // wanna copy the movements array to sort it since the sort method changes the array
  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements

  movs.forEach((mov, i) => {
  const type = mov > 0 ? 'deposit' : 'withdrawal'

  const html = `  
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i +  1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`

  containerMovements.insertAdjacentHTML('afterbegin', html)

 });
}


// Display Balance 
const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance} €`
}


// Display Summary bottom
const calcDisplaySummary = function (acc){ 
  const incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€`

  const out = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)} €` // Math.abs removes the negative sign 

  const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => (deposit * acc.interestRate) / 100 )
  .filter((int, i, arr) =>{
    // console.log(arr)
    return int >= 1
  })
  .reduce((acc, interest) => acc += interest, 0)
  labelSumInterest.textContent = `${interest} €`
}


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

function updateUI(acc){
      //Display movements
      displayMovements(acc.movements)
      //Display balance
      calcDisplayBalance(acc)
      //Display summary
      calcDisplaySummary(acc)
}


//Event Handlers 
let currentAccount;


//// LOGIN AND DISPLAY ACCOUNTS
// ? the optional chaining in the btnLogin, first checks if the current account exists, if it doesnt the rest of the code will not run. If it does exist it will go to the pin ...
btnLogin.addEventListener('click', (e)=>{
  e.preventDefault()

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)


  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // display UI and Welcome msg
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = '100'

    //clear input fields // assignment operator works from right to left
    inputLoginUsername.value = inputLoginPin.value = '';
    //makes field looses its focus
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount)
  }
})

//// The preventDefault is need so it wont reload the page! 
btnTransfer.addEventListener('click', (e)=>{
  e.preventDefault()
  const amount =  Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value) 
  inputTransferTo.value = inputTransferAmount.value = ''; // assignment goes right to left can 2 in 1!

  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username){
    //doing the transfer
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)
    console.log('Transfer valid')
    updateUI(currentAccount)
  }

})


btnLoan.addEventListener('click', (e)=>{
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // add positive movement
    currentAccount.movements.push(amount)
    // Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''
})


//// Close Account
btnClose.addEventListener('click', (e)=>{
  e.preventDefault()
  
  
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    // Delete Account
    accounts.splice(index, 1)
    // Hide UI
    containerApp.style.opacity = 0
  }
  inputClosePin.value = inputCloseUsername.value = ''
})

//// State Variable to be used to sort the array!
let sorted = false

// activates the sorted button
btnSort.addEventListener('click', (e)=>{
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})










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




////                                 TITLE  MAP - FILTER - REDUCE - FIND

/*
 IMPORTANT THE MAP METHOD returns a new array with the results of applying an operation on all original array elements

 IMPORTANT THE FILTER METHOD returns a new array containing the array elements that passed a specified test condition
 
 IMPORTANT THE REDUCE METHOD boils all array elements down to one single value (adding all elements together)
 
 IMPORTANT THE FIND METHOD retrieves the first item, that passes the condition, from the array
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



////                                  TITLE CHAINING METHODS -

const eurToUsd = 1.1;

//// The filter returns a array with positive values, looks fro true or false values that passe a condition
//// The map returns a new array with the values of a applied condition
//// The reduce returns one value.
//// Everytime it returns a new array you can chain methods

// const totalDepositsUSD = movements
// .filter((mov) => mov > 0)
// .map((mov) => mov * eurToUsd)
// .reduce((acc, currentMovement) => acc + currentMovement, 0)

// console.log(totalDepositsUSD)

////                          TITLE DEBBUGING THE CHAINING METHOD

//// If a mistake was made on the filter method, below is how I could debugged it. Console log it the array after each method to see what the error whas and where it happened

// console.log(movements)
// const totalDepositsUSD = movements
// .filter((mov) => mov < 0)
// .map((mov, i, arr) => {
//   console.log(arr)
//   return mov * eurToUsd
// })
// .reduce((acc, currentMovement) => acc + currentMovement, 0)

// console.log(totalDepositsUSD)






////                                       TITLE  FIND METHOD

// const firstWithdrawal = movements.find(mov => mov < 0)

// console.log(movements)
// console.log(firstWithdrawal)

// console.log(accounts)

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account)

// for (const acc of accounts){
//   // console.log(acc)
//   if(acc.owner === 'Jessica Davis'){
//     console.log(acc)
//   }else{
//     undefined
//   }
// }



////                                 TITLE  SOME AND EVERY METHODS

// console.log(movements)

// // INCLUDES CHECKS FOR EQUALITY
// console.log(movements.includes(-130))

// // SOME: CHECKS FOR A CONDITION
// const anyDeposits = movements.some( mov => mov > 5000)
// console.log(anyDeposits)


// EVERY: RETURNS TRUE ONLY IF ALL ELEMENTS PASSES THE TEST

// console.log(movements.every(mov => mov > 0 ))
// console.log(account4.movements.every(mov => mov > 0 ))


// SEPARETE CALL BACK FUNCTION 

// const deposit = mov => mov > 0
// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))



////                                 TITLE  FLAT AND FLATMAP

//// .Flat()
// const arr = [[1,2,3], [4,5,6], 7, 8]
// console.log(arr.flat())

// const arrDeep = [[[1,2],3], [4,[5,6]], 7, 8]

// console.log(arrDeep.flat(2))


// const accountMovements = accounts.map(acc => acc.movements)
// console.log(accountMovements)
// const allMovements = accountMovements.flat()
// console.log(allMovements)
// // const overAllBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
// console.log(overAllBalance)

// // Chaining all Together

// const overAllBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
// console.log(overAllBalance)


////.FlatMap - Only goes 1 level deep if need more use separete map() then flat()

// const overAllBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
// console.log(overAllBalance)




////                                 TITLE  SORTING ARRAYS

// The sort method mutates the array be carefull IMPORTANT

const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
// console.log(owners.sort())
// console.log(owners) // 

// Numbers
// console.log(movements)
// console.log(movements.sort()) // it sorts based on strings not on numbers

// return < 0, A, B (Keep Order)
// return > 0, B, A (Switch Order)

// // Ascending
// movements.sort((a, b)=>{
//   if(a > b){
//     return 1;
//   }
//   if(a < b){
//     return -1;
//   }
// })
// console.log(movements)

// it doesnt have to be 1 it can be anything > then 0 thats why a - b works its not about the number its about positive or negative! 0 will remain the same
// movements.sort((a, b) => a - b)
// console.log(movements)

// // Descending
// movements.sort((a, b)=>{
//   if(a > b){
//     return -1;
//   }
//   if(a < b){
//     return 1;
//   }
// })
// console.log(movements)

// movements.sort((a, b) => b - a)
// console.log(movements)



////                            TITLE  MORE WAYS OF CREATING AND FILLING ARRAY


// // IMPORTANT The new Array() with only one parameter that is a number creates a weird behaviour


// const arr = [1, 2, 3, 4, 5, 6, 7,]

// // EMPTY ARRAYS + FILL METHOD
// const x = new Array(7) 
// console.log(x, 'one parameter being a number exemption')

// x.fill(1, 3, 5) // Fill with one ate index 3, you can especified a end parameter as well.
// x.fill(1) // This mutates the array. Turn on and off to see it
// console.log(x)

// arr.fill(23, 4, 6)
// console.log(arr, 'arr.fill(23, 4, 6)')

// // ARRAY.from -- if we want to recreate the arr Array

// const y = Array.from({length: 7}, () => 1) // Notice its Array.from with Capital A and not array.from! This is a Array constructor

// console.log(y, 'Array.from()')

// const z = Array.from({length: 7}, (_, i) => i + 1) // ***
// console.log(z)

// // *** The call back function its exaclty like the one in a map method on a empty array. IMPORTANT REMEMBER THE ORDER OF THE  PARAMETER? element,index, array! So if only the index is going to be used you have to signal the first parameter as not used but you have to have a first parameter otherwise the second parameter becomes the first. _ = ele , i = index so if its only one parameter i = curr then i would be undefined and then undefined + 1 = NaN. With 2 parameter would be curr = undefined, i = 0, i + 1 = 1. Then I would be able to be counted even though the curr its not used. 


// const dice100 = Array.from({length: 100}, (_, i) => i + Math.floor(Math.random() * 100) + 1)
// // console.log(dice100)



// Converting a NodeList into a Array to be able to use Reduce or Map methods with it!
// labelBalance.addEventListener('click', ()=>{

//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')))
//   console.log(movementsUI)
// })





////                            TITLE  WHICH ARRAY METHOD TO USE?

////                                        IMPORTANT


/*                                          What do I want?
                                    TITLE TO MUTATE ORIGINAL ARRAY

Add to original array:
.push (end)
.unshift (start)

Remove from original:
.pop (end)
.shift (start)
.splice (any)

Others:
.reverse
.sort
.fill
--------------------------------------------------------------------------------------------------

                                    TITLE A NEW ARRAY 
Computed from original:
.map (loop)

Filtered using condition:
.filter

Portion of original:
.slice

Adding orginal to other:
.concat

Flattening the original:
.flat
.flatMap


--------------------------------------------------------------------------------------------------
                                    TITLE AN ARRAY INDEX

Based on value:
.indexOf

Based on test Condition:
.findIndex

AN ARRAY ELEMENT

Based on Test Condition:
.find

--------------------------------------------------------------------------------------------------
                                    TITLE KNOW IF ARRAY INCLUDES

Based on value:
.includes

Based on test condition:
.some
.every

A NEW STRING

Based on separator string:
.join
--------------------------------------------------------------------------------------------------
                                    TITLE TO TRANSFORM THE VALUE

Based on accumulator:
.reduce

-Returns a single value of any type, number, string, boolean or even an array or object                                    
--------------------------------------------------------------------------------------------------

                                    TITLE TO JUST LOOP

Based on callback:
.forEach

-Does not create a new array, just loops over it                                    
--------------------------------------------------------------------------------------------------
*/

































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




/* Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


// function calcAverageHumanAge(ages){
//  const humanAges =  ages
//  .map((age) => age <= 2 ? age * 2 : 16 + age * 4)
//  .filter(humanAge => humanAge >= 18)
//  .reduce((acc, current, i, arr) =>  acc + current / arr.length, 0)
//    return humanAges
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))


// ---------- Practice

// 1. Gets all the deposits adds them all into one array, filter just the positive values and then adds them all together for the full balance of the bank

// const bankDepositSum = accounts.flatMap((acc) => acc.movements)
// .filter(mov => mov > 0)
// .reduce((acc, mov) => mov + acc, 0)
// console.log(bankDepositSum)


// 2. How many deposits have there being in the bank with at least 1000 

// const deposits1kM = accounts.flatMap((acc)=> acc.movements).filter((mov) => mov >= 1000).length
// console.log(deposits1kM)

// same as 2 using reduce 

// const deposit1kReduceT = accounts.flatMap((acc)=> acc.movements).reduce((acc, current)=> current >= 1000 ? acc + 1 : acc, 0)
// console.log(deposit1kReduceT)

// const deposit1kReduce = accounts.flatMap((acc)=> acc.movements).reduce((acc, current)=>{
//  if(current >= 1000){
//   acc = acc + 1
//  }
//  return acc
// }, 0)
// console.log(deposit1kReduce)


// IMPORTANT Watch out for the ++

// Prefixed ++ operator

// let a = 10
// console.log(a++) // prints 10! The ++ does it job but it will only print the right result after this line!
// console.log(a) // prints 11! 

// there is a fixer for that ++ before the variable will fix it
// console.log(++a) // prints 10! The ++ does it job but it will only print the right result after this line!

//// 3. Create a object that have the sums of deposits and withdrawals

// const sums = accounts.flatMap((acc)=> acc.movements).reduce((sums, cur) => {
//   //  cur > 0 ? sums.deposits += cur : sums.widthrawals += cur

//   sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur // same as above but with the []notation!
//    return sums
// }, {deposits: 0, widthrawals: 0})

// console.log(sums)


// 4. 
// const convertTitleCase = function(title){
//   const capitalize = str => str[0].toUpperCase() + str.slice(1)
//   const exception = ['a','and', 'an', 'the', 'but', 'or', 'on', 'in', 'with']

//   const titleCase = title.toLocaleLowerCase().split(' ')
//   .map((word) => exception.includes(word) ? word : capitalize(word))
//   .join(' ')
//   return capitalize(titleCase)
// }

// console.log(convertTitleCase('This is a Nice Title'))
// console.log(convertTitleCase('This is a LONG title but not too lOng'))
// console.log(convertTitleCase('and here is another title with an EXAMPLE'))

// // ** thats what that code means in plain englsih. If the current word is included in the exception array then simply return that word. If not then captilize the first letter of the current word!

// function capitalize1 (str){
  
//   return str[0].toUpperCase() + str.slice(1)
// } 
// console.log(capitalize1('test'))



// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/