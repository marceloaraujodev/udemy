'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-06-28T17:01:17.194Z',
    '2023-06-30T23:36:17.929Z',
    '2023-07-01T23:08:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-06-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
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

// FORMATING DATES
const formatMovementsDate = (date, locale) => {
  const calcdaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))

  const daysPassed = calcdaysPassed (new Date(), date)

  if(daysPassed === 0) return 'Today'
  if(daysPassed === 1) return 'Yesterday'
  if(daysPassed <= 7) return `${daysPassed} days ago`

  const day = `${date.getDate()}`.padStart(2,'0')
  const month = `${date.getMonth() + 1}`.padStart(2, 0)
  const year = date.getFullYear()
  
  return new Intl.DateTimeFormat(locale).format(date)
}


// FORMATING CURRENCY
const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value)
}


// Individual movements in the statement
// sort set to false by default in the parameter
const displayMovements = function(acc, sort = false){
  containerMovements.innerHTML = '';

  // wanna copy the movements array to sort it since the sort method changes the array
  const movs = sort ? acc.movements.slice().sort((a,b) => a - b) : acc.movements

  movs.forEach((mov, i) => {
  const type = mov > 0 ? 'deposit' : 'withdrawal'

  const date = new Date(acc.movementsDates[i])
  const displayDate = formatMovementsDate(date, acc.locale)

  const formattedMov = formatCur(mov, acc.locale, acc.currency)
  

  const html = `  
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i +  1} ${type}</div>
    <div class="movements__date">${displayDate}</div> 
    <div class="movements__value">${formattedMov}</div>
  </div>`

  containerMovements.insertAdjacentHTML('afterbegin', html)

 });
}


// Display Balance 
const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency)
}


// Display Summary bottom
const calcDisplaySummary = function (acc){ 
  const incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency)

  const out = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency)

  const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => (deposit * acc.interestRate) / 100 )
  .filter((int, i, arr) =>{
    // console.log(arr)
    return int >= 1
  })
  .reduce((acc, interest) => acc += interest, 0)
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)
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
      displayMovements(acc)
      //Display balance
      calcDisplayBalance(acc)
      //Display summary
      calcDisplaySummary(acc)
}


const startLogOutTimer = function () {

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0')
    const sec = String(time % 60).padStart(2, '0')
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}` 

    // When 0 seconds, stop timer and log out user
    if(time === 0 ){
      clearInterval(timer)
      labelWelcome.textContent = 'Log in to get started'
      containerApp.style.opacity = 0
    }
        // Decrease 1 second
        time--

  }

  // set time to 5 minutes
 let time = 120

  // call the timer every second
  tick()
  const timer = setInterval(tick, 1000)
  // returns timer to check is there is another timer running, they run separattly for each account
  return timer
}


//Event Handlers 
let currentAccount, timer;
//----------Remove when finished
// FAKE ALWAYS LOGGED IN - remove it to test logging in - leave it to work on interface
// currentAccount = account1
// updateUI(currentAccount)
// containerApp.style.opacity = 100



//// Experimenting with API
////----- Timbe below Current Balance
// const now = new Date()
// const options = {
//  hour: 'numeric',
//  minute: 'numeric',
//  day: 'numeric',
//  month: 'long',
//  year: 'numeric',
//  weekday: 'long'
// }
// // const locale = navigator.language
// // can change the 'pt-BR' on the new Intl.DateTimeFormat as a parameter
// labelDate.textContent = new Intl.DateTimeFormat('pt-BR', options).format(now)

//--------------------------

//// LOGIN AND DISPLAY ACCOUNTS
// ? the optional chaining in the btnLogin, first checks if the current account exists, if it doesnt the rest of the code will not run. If it does exist it will go to the pin ...
btnLogin.addEventListener('click', (e)=>{
  e.preventDefault()

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)


  if(currentAccount?.pin === +inputLoginPin.value){
    // display UI and Welcome msg
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = '100'


    // Create and displaying date - day/month/year
    const now = new Date()
    const options = {
     hour: 'numeric',
     minute: 'numeric',
     day: 'numeric',
     month: 'numeric',
     year: 'numeric',
    //  weekday: 'long'
    }
    const locale = navigator.language
    // can change the 'pt-BR' on the new Intl.DateTimeFormat as a parameter
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)

    /* Show compared to above how much simplier it got with the Intl.DateTimeFormat
    // const now = new Date()
    // const day = `${now.getDate()}`.padStart(2,'0')
    // const month = `${now.getMonth() + 1}`.padStart(2, 0)
    // const year = now.getFullYear()
    // const hour = `${now.getHours()}`.padStart(2, 0)
    // const min = `${now.getMinutes()}`.padStart(2, 0)
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`
    */


    //clear input fields // assignment operator works from right to left
    inputLoginUsername.value = inputLoginPin.value = '';
    //makes field looses its focus
    inputLoginPin.blur();

    // Starts logout timer and checks if there is timer running for another user, is so it will clear the timer for the other user and restart the timer for the new user logging in.
    if(timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount)
  }
})

//// TRANSFER
//// The preventDefault is need so it wont reload the page! 
btnTransfer.addEventListener('click', (e)=>{
  e.preventDefault()
  const amount = +inputTransferAmount.value
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value) 
  inputTransferTo.value = inputTransferAmount.value = ''; // assignment goes right to left can 2 in 1!

  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username){

    //doing the transfer
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI 
    updateUI(currentAccount)

    // Reset Timer
    clearInterval(timer)
    timer = startLogOutTimer()
  }

})

// LOAN
btnLoan.addEventListener('click', (e)=>{
  e.preventDefault()
  const amount = Math.floor(inputLoanAmount.value)

  setTimeout(()=> {
    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){

      // add positive movement
      currentAccount.movements.push(amount)
  
      // Loan Date
        currentAccount.movementsDates.push(new Date().toISOString())
  
      // Update UI
      updateUI(currentAccount)

      // Reset Timer
      clearInterval(timer)
      timer = startLogOutTimer()
    }
  }, 2500)

  inputLoanAmount.value = ''
})


//// Close Account
btnClose.addEventListener('click', (e)=>{
  e.preventDefault()
  
  
  if(inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin){
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
  displayMovements(currentAccount, !sorted)
  sorted = !sorted
})





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


//// Parsing

//// Parse accepts 2 parameters the second being radix its the base of the numeral system we are using, We should pass 10 most of the time. Binary system would be something else. 
//// String needs to start with a number to be converted correctly

// console.log(Number.parseInt('30px', 10)) 
// console.log(Number.parseInt('e23', 10))  


// console.log(Number.parseInt(' 2.5rem'))  
// console.log(Number.parseFloat(' 2.5rem'))  

//// They are global function so, the syntax below works as well - OldSchool way
// console.log(parseFloat(' 2.5rem'))  

//// isNaN - Check if value is not a number

// console.log(Number.isNaN(20))
// console.log(Number.isNaN('20'))
// console.log(Number.isNaN(+'20x')) // Not a number , true

//// Checking if value is a Number
// console.log(Number.isFinite(20))
// console.log(Number.isFinite('20'))
// console.log(Number.isFinite(+'20x'))
// console.log(Number.isFinite(23 / 0))

// console.log(Number.isInteger(23))
// console.log(Number.isInteger(23.0))
// console.log(Number.isInteger(23 / 0)) // This return Infinity so not a number

//// IMPORTANT The ParsFloat should be the go to, to read values coming out of CSS
// console.log(Number.parseFloat(' 2.5rem'))  


//// Generating min max number

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) 
// console.log(randomInt(1, 5))


//// Rounding Integers

// console.log(Math.trunc(23.3))

// console.log(Math.round(26.5))
// console.log(Math.round(26.4))

// console.log(Math.trunc(-23.3)) // Trunc just cuts the decimal
// console.log(Math.floor(-23.3)) // Rounds down to the right number value even if its negative

//// Rounding Decimals 

// toFixed always returns a string and not a number IMPORTANT
// console.log((2.7).toFixed(0))
// console.log((2.7).toFixed(3))
// console.log(+(2.345).toFixed(2))

// const isEven = n => n % 2 === 0

// console.log(isEven(23))
// console.log(isEven(20))
// console.log(isEven(522))

//// If need to do every nth time is a good idea to use the reminder!

// labelBalance.addEventListener('click', ()=>{

//   [...document.querySelectorAll('.movements__row')].forEach((row, i) =>{ 
//     // 0, 2, 4, 6
//     if(i % 2 === 0){
//       row.style.backgroundColor = 'gray'
//     }
//     // 0, 3, 6, 9
//     if(i % 3 === 0){
//       row.style.backgroundColor = 'lightblue'
//     }
//   })
// })


// console.log(Number('23.5'))
// console.log(Number('23.555.00'))


// // BigInt
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(typeof 90071992547409915n, 90071992547409915n)
// console.log(1000000000000000000000000000000000000000000n)

// console.log(10n / 3n) // bitInts cuts decimal on division 
// console.log(10 / 3)

//// Creating a date

// const now = new Date() 
// console.log(now)

// console.log(new Date('Sat Jul 01 2023 14:35:07'))
// console.log(new Date('Dec 24, 2023'))

// console.log(account1.movementsDates[0])

//  const future = new Date(2037, 10, 19, 15, 23)
//  console.log(+future)

//  const calcdaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)


//  const days1 = calcdaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4)) 
//  console.log(days1)





// const num = 3888764.23

// const options = {
//   style: 'currency',
//   unit: 'celsius', 
//   currency: 'BRL',
//   // useGrouping: true
// }

// console.log('US:' , new Intl.NumberFormat('en-US', options).format(num))
// console.log('BR:', new Intl.NumberFormat('pt-BR', options).format(num))
// console.log('GER:', new Intl.NumberFormat('de-DE', options).format(num))

// // SetTimeout
// const ingredients = ['olives', 'cheese']

// const pizzaTimer = setTimeout((ing1, ing2)=>{
//   console.log(`Here is your ${ing1} and ${ing2} pizza 🍕`)  
// }, 3000, ...ingredients)
// console.log('waiting for the pizza')

// if(ingredients.includes('spinach')) clearTimeout(pizzaTimer)


// SetInterval

// const timerClock = setInterval(() => {
//   const now = new Date()
//   const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
//   }
//   // console.log(new Intl.DateTimeFormat('pt-BR', options).format(now))
//   // console.log(now)
// }, 1000)

