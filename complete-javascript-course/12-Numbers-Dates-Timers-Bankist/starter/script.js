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
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
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
    '2020-04-10T14:43:26.374Z',
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
