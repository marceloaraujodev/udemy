'use strict';

// // let hasDriversLicense = false;
// // const passTest = true;

// // if(passTest) hasDriversLicense = true;
// // if(hasDriversLicense) console.log('I can drive')

// function fruitProcessor (apples, oranges) {
// const recipe = `mix ${apples} apples and ${oranges} oranges`
// return recipe
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)
// const mixJuice = fruitProcessor(3, 4)
// console.log(mixJuice) 

// // FUNCTION DECLARATION VS EXPRESSION

// // Function declaration 

// function calcAge1(birthYear){
//   return 2023 - birthYear
// }

// const age1 = calcAge1(1991);
// console.log(age1)

// // Function expression

// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear
// }

// const age2 = calcAge2(1989);

//// Arrow Functions

// const calcAge3 = (birthYear) => 2023 - birthYear

// const age3 = calcAge3(2000);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`
// }

// const retirementAge = yearsUntilRetirement(1991, 'Jonas');
// console.log(retirementAge)



// // Functions calling functions

// function fruitCutter(fruit){
//     return fruit * 4
// }

// function fruitProcessor (apples, oranges) {
//     const applePieces = fruitCutter(apples)
//     const orangesPieces = fruitCutter(oranges)
        
//     const recipe = `mix ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`
//     return recipe
// }

// console.log(fruitProcessor(2, 3))



// const calcAge = function (birthYear){
//     return 2023 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if(retirement > 0){
//         return `${firstName} retires in ${retirement} years`
//     }else{
//         return `${firstName} is already Retired!`
//     }

// }

// console.log(yearsUntilRetirement(1945, 'Steve'))
// console.log(yearsUntilRetirement(1985, 'Paul'))


// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// // test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// // console.log('Dolfins:',scoreDolphins," Koalas:", scoreKoalas)

// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins >= avgKoalas * 2 ){
//         return `Dolphins wins with a score of ${avgDolphins} vs ${avgKoalas}`
//     }else if (avgKoalas >= avgDolphins * 2){
//         return `Koalas wins with a score of ${avgKoalas} vs ${avgDolphins}`
//     }else{
//         return 'No winners'
//     }
// }
// console.log(checkWinner(scoreDolphins, scoreKoalas))

// //test 2
// scoreDolphins = calcAverage(85, 54, 41)
// scoreKoalas = calcAverage(23,34,27)
// console.log(checkWinner(scoreDolphins, scoreKoalas))



// exercise array with years and want to calc some of the ages

// const calcAge = function (birthYear){
//     return 2023 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1]) //gets the last item

// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

// console.log(ages)

//// arrays 

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay')

// console.log(friends)
// console.log(newLength)

// friends.unshift('John')
// console.log(friends)

// console.log(friends.indexOf('John'), 'indexOf')
// console.log(friends.indexOf('Peter'), 'indexOf')

// console.log(friends.includes('Steven'), 'includes')
// console.log(friends.includes('Marc'), 'includes')

// if(friends.includes('Peter')){
//     console.log('You have a friend called Peter')
// }

//// exercise bills, tips and totals!-----------------------------------

// const bills = [125, 555, 44]
// // const tips = []
// const total = []

// function calcTip(amount){
//     if(amount >= 50 && amount <= 300) {
//         let tip = (15/100) * amount
//         tips.push(tip)
//         total.push(amount + tip)
//         return tip
//     } else{
//         let tip = (20/100) * amount
//         tips.push(tip)
//         total.push(amount + tip)
//         return tip
//     }
// }

// console.log(calcTip(bills[0]))
// console.log(calcTip(bills[1]))
// console.log(calcTip(bills[bills.length -1]))
// console.log('tips', tips)
// console.log('totals', total)

//teacher did it this way-----------------
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals)
// ------------------------------------------

// // Objects 

// const jonas = {
//     firstName: 'Jonas', 
//     lastName: 'Schmedtmann',
//     age: 2023 - 1987, // you can add expressions
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };


// console.log(jonas.lastName);
// console.log(jonas['lastName']) // We can use any expressiont here. I did not know you could get it this way!

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]) // Bracket Notation
// console.log(jonas['last' + nameKey])

// // console.log(jonas.'last' + nameKey) // this would not work thats why this is important! IMPORTANT

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

// // console.log(jonas[interestedIn]) // this would not be possible with the dot notation!

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn])
// }else{
//     console.log('Please enter one of the options given above. Watch your spelling!')
// }

// ADDING PROPERTIES TO THE OBJECT ---------

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasx'; // When calling using backets needs to use String inside the brackets! IMPORTANT******
// console.log(jonas)

//Challange need to get firstName numbr of friends and bestFried that is Michael

// console.log(`${jonas.firstName} has ${jonas['friends'].length} friends, and his best friend is called ${jonas['friends'][0]}`)

// Object Methods ------ functions attached to a method are called Methods

const jonas = {
    firstName: 'Jonas', 
    lastName: 'Schmedtmann',
    age: 2023 - 1987, // you can add expressions
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true, 
    calcAge: function (birthYear){
        return 2023 - birthYear
    }
};

console.log(jonas.calcAge(1988))
console.log(jonas['calcAge'](1988)) // calling using backets needs to be a string! IMPORTANT