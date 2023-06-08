// // Keyless Car program

// // let age = prompt("whats your age")

// //checkDriverAge()

// function checkDriverAge(){
//     if(Number(age) < 18){ 
//         alert('Sorry, you are too young to drive this car. Powering off')
//     }else if(Number(age) === 18){
//         alert('Congratulations on your first year of driving. Enjoy the ride!')
//     }else{
//         alert('Powering On. Enjoy the ride!')
//     }
// }

// let checkDriverAge2 = function (age) {
//     if(Number(age) < 18){ 
//         console.log('Sorry, you are too young to drive this car. Powering off')
//     }else if(Number(age) === 18){
//         console.log('Congratulations on your first year of driving. Enjoy the ride!')
//     }else{
//         console.log('Powering On. Enjoy the ride!')
//     }
// }

// //checkDriverAge2(92)

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.sort()
// // console.log(array)
// array.push('Kiwi')
// // console.log(array)
// // array.splice(0,1)
// const index = array.indexOf('Apples')
// const remove = array.splice(index, 1)
// // console.log(array)
// array.reverse()
// // console.log(array)

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// // console.log(array2[1][1])

// // *******************************************************

// const user1 = {
//     username: 'paul',
//     password: '123'
// }

// const newsfeed = [
//     {
//     username: 'paul',
//     timeline: 'tired today' 
// },{
//     username: 'peter',  
//     timeline:  'beautiful beach'
// },{
//     username: 'pean',  
//     timeline:  'great news comming'
// }
// ]

// const database = [
//     {
//         username: 'paul',
//         password: '123'
//     },
//     {
//         username: 'peter',
//         password: '456'
//     },
//     {
//         username: 'dan',
//         password: '4590'
//     },
//     {
//         username: 'jules',
//         password: '436'
//     }
// ]

// // const userNamePrompt = prompt("Whats your UserName?")
// // const passwordPrompt = prompt('Whats your password')

// // signIn(userNamePrompt, passwordPrompt)

// function signIn(username, password){

//     if(username === '' || password === '') {
//         console.log('Please enter a username and password')
//     }else{
//         let userFound = false; 
//         for (let i = 0; i < database.length; i++){
//             if(database[i].username === username && database[i].password === password){
//                 console.log('Logged in successfully')
//                 // userFound = true
//                 break;
//             }
//         }
//         if(!userFound){
//             // console.log(!userFound)
//             console.log('User not found')
//         }
//     }
// }

//         // when userFound not set to true and the code reaches the last if statement wich is if(!userFound) the value of this will be true the code will execute printing user not found. So the loop wil print logged in successfully then the last if statement if used !userFound will be true and also execute.printing the message that I dont want.


//         //  If I remove the ! the expression will be false since it is set as false and I havent changed in the loop. So when no user is found in the loop the code will reach the last if and the last if will still be be false and it wont execute the user not found message.

//         // So the creation of the userFound and setting it to false initially is what makes the code work. because when the user is found the userFound is reassigned to true, making it possible to last if statement work

//         // userFound now = true stops loop. reads last if (!userFound)= false and skips the code block.

// // other way of doing it 

//     // function isUserValid(username, password){
//     //     for (let i = 0; i < database.length; i++){
//     //         if(database[i].username === username && database[i].password === password){
//     //             return true
//     //         }
//     //     }
//     //     return false
//     // }

//     // function signIn(username, password){
//     //     if(isUserValid(username, password)){
//     //         console.log(newsfeed)
//     //     }else{
//     //         console.log("No user found")
//     //     }
//     // }

//     const obj = {
//         player: 'bobby',
//         experience: 100,
//         wizardLevel: false
//     }

//     // const player = obj.player
//     // console.log(player)
//     // const experience = obj.experience
//     // console.log(experience)
//     // let wizardLevel = obj.wizardLevel
//     // console.log(wizardLevel)

//     // *******instead of the above use the below! *********

//     const { player, experience } = obj;
//     // console.log(experience)
//     // console.log(player)


//     const arr = [1,2,10,16]
//     const doubleArr = []
//     const newArr = arr.forEach((element)=>{
//         doubleArr.push(element * 2)
//     })
// console.log('double', doubleArr)

// // map, filter, reduce

// // .map 
// // you will always need to return something
// const mapArray = arr.map((elem)=>{
//     return elem * 2
// })
// console.log('map', mapArray)

// // filter
// // always need to return something too!

// // const filterArr = arr.filter((ele)=>{
// //     return ele > 5
// // })
// const filterArr = arr.filter(ele => ele > 5)
// console.log('filter', filterArr)

// // reduce 
// // always need to return something too!

// const reduceArr = arr.reduce((accumulator, num)=>{
//     return accumulator + num
// }, 10)  // 0 is where we define the accumulator
// console.log('accumulator', reduceArr)

//*************************NOTES******* *

//REFERENCE TYPE--------------

// const object1 = { value: 10 }
// const object2 = object1
// const object3 = { value: 10}
// console.log(object1 === object2)
// console.log(object1 === object3)
// console.log(object1 === object2)
// object1.value = 15
// console.log(object2.value)
// console.log(object3.value)

// CONTEXT VS SCOPE---------------------

// //context refers to the left of the . and scope referes to the global
// // this.alert('hi') here this refers to the window object

// function a() {
//   console.log(this)
// }
// //a() // to the left of the dot is the window object try calling window.a()
// // window.a()

// const object4 = {
//   a: function(){
//     console.log(this)
//   }
// }
// object4.a() // to the left of the . is object4!

// INSTATIATION-------------------

// class Player {
//   constructor(name, type) {
//     console.log('player', this)
//     this.name = name;
//     this.type = type;
//   }
//   introduce(){ // this is a method
//     console.log(`Hi I am ${this.name}, I'm ${this.type}`)
//   }
// }

// class Wizard extends Player{
//   constructor(name, type){
//     // console.log('wizard', this) gets error because it needs to run super first
//     super(name, type)
//     console.log('wizard', this)
//   }
//   play() {
//     console.log(`weee I"m a ${this.type}`)
//   }
// }

// const wizard1 = new Wizard('Shelly', 'Healer') // this creates a new wizard that how simple class makes it to copy everything
// const wizard2 = new Wizard('Shawn', 'Dark Magic')

// // console.log(wizard1)

//************************LOOP THROUGH OBJECTS- .KEYS .VALUES .ENTRIES ES8 ************  
// Object.values
// Object.entries
// Object.keys

let obj = {
  username1: 'peter',
  username2: 'paul',
  username3: 'john'
}

//// Object.keys ----

// Object.keys(obj).forEach((key, index)=>{
//   console.log(key, obj[key])
// })

// // Object.values becomes easier!

// Object.values(obj).forEach((value => {
//   // console.log(value)
// }))

// //// Object.entries returns a array
// Object.entries(obj).forEach((value => {
//   // console.log(value)
// }))


// const detailedBasket = {
//   apples: 5,
//   oranges: 6,
//   pears: 8
// }

// // the for in lets you see the properties this is enumerating and no interating like the other loops
// for (item in detailedBasket){
//   console.log(item, detailedBasket[item]) // item gets the property, objname[item] gets the value

// }



////***************************ES2020********************** */

// BigInt
// Nullish Coalescing Operator ?? usefull where we would use ||
// Optional Chaining Operator ?.


////***************************ES2021********************** */

// .replaceAll(changethis, forthis)



////***************************ES2022********************** */

// .at()

// arr.at(-2) will get the second last item from the array instead of using arr.lenght - 2
//-1 will be the last and so on 




//************************EXERCISES********************************


// Complete the below questions using this array:
// const array = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
  
//   ];
  
//   //Create an array using forEach that has all the usernames with a "!" to each of the usernames
//   const newArr = []
//   array.forEach((ele)=>{
//     const { username } = ele
//     newArr.push(username + '!')
//   })
//   console.log(newArr)
  
  
//   //Create an array using map that has all the usernames with a "? to each of the usernames
//   const mapArray = array.map((ele)=>{
//     return ele.username + '?'
//   })
//   console.log(mapArray)
//   //Filter the array to only include users who are on team: red
// //   const filterArr = array.filter((user)=>{
// //     return user.team === 'red'
// //   })
// //   console.log(filterArr)

// // below is the way that I was looking for!

//   const filterArr = array.filter((user) => {
//     return user.team === 'red';
//   })
//   .map((user) => {
//     return user.username;
//   });

// console.log('red team users', filterArr);




  //Find out the total score of all users using reduce
  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  // const arrayNum = [1, 2, 4, 5, 8, 9];
  // const newArray = arrayNum.map((num, i) => {
  // 	console.log(num, i);
  // 	alert(num);
  // 	return num * 2;
  // })
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  

  // Solve the below questions:

// // #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1],[2],[3],[[[4]]],[[[5]]]]

// // console.log(array.flat(2))


// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

// // /*Number 1 */ console.log(greeting.flatMap(x => x.join(' ')))

// // /*Number 2*/ greeting.flatMap(e =>{ return e.join(' ')})
// // to print!
// // console.log( greeting.flatMap(e =>{ return e.join(' ')}))

// //#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

// // console.log(greeting.flatMap(e=>e.join(' ')).join(''))
// // console.log(greeting.flatMap((e)=>{console.log(e)})) // The map loops through each item in the array then flat, flats by 1 level!
// // const g = [1, 3, 6]
// // console.log(g.join(' '))

// //#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// // console.log(trapped.flat(25))



// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

// // console.log(userEmail3.trimStart())

// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const updatedUsers = Object.entries(users)
// // console.log(updatedUsers)

// //#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const x = updatedUsers.map((user)=>[user[0] + ' ' + 'do nothing', user[1] * 2])
// console.log(x)
// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }



////**********ADVANCED LOOPS********************************************************* */

// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 1000
// }

// //1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// //2
// basket.forEach(item => {
//   console.log(item);
// })

// for (item in detailedBasket) {
//   console.log(item);
// }

// for (item of basket) {
//   console.log(item);
// }



// // Question #1:
// // create a function called biggestNumberInArray() that takes
// // an array as a parameter and returns the biggest number.
// // biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// // Use at least 3 different types of javascript loops to write this:
// const array = [-1,0,3,100, 99, 2, 99] // should return 100
// const array2 = ['a', 3, 4, 2] // should return 4
// const array3 = [] // should return 0

// function biggestNumberInArray(arr) {
//   const largestNum = arr.reduce((a, b)=>{
//     return Math.max(a,b)})
//   return largestNum
// }
// // console.log(biggestNumberInArray(array))
// function biggestNumberInArray2(arr) {
//   let largestNum = array2[0]
//   for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     if(arr[i] > largestNum ){
//       largestNum = arr[i] 
//     }
//   }
//   // console.log(largestNum, 'maior')
//   return largestNum
// }
// // console.log(biggestNumberInArray2(array2))

// function biggestNumberInArray3(arr) {
//   let heighest = 0 
//   for(item of arr){
//     if(item > heighest){
//       heighest = item
//     }
//   }
// }
// // console.log(biggestNumberInArray3(array3))

// // Question #2:
// // Write a function checkBasket() that lets you know if the item is in the basket or not
// amazonBasket = {
//   glasses: 1,
//   books: 2,
//   floss: 100
// }

// // for(item in amazonBasket){
// //   // console.log(item, amazonBasket[item])
// //   if (item == 'floss' || item == 'books'){
// //     console.log(item, amazonBasket[item])
// //   }
// // }


// function checkBasket(basket, lookingFor) {
//   for(item in basket){
//     // console.log(item, amazonBasket[item])
//     if (item == 'floss'){
//       console.log(`${lookingFor} is in your basket and the quantity is`, `${amazonBasket[item]} items`)
//     }
//     if(item === 'books'){
//       console.log(`${item} is in your basket and the quantity is`, `${amazonBasket[item]} items`)
//     }
//   }
// }
// checkBasket(amazonBasket, 'floss')