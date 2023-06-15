'use strict';


// const x = () => {
//     console.log(this)// arrows do not have its own this so it uses its parent
//   }
//   // x()
  
//   function z() {
//     let b = 5
//     console.log(this)
//   }
//   // z()
  
//   const jonas = {
//     year: 1991, 
//     calcAge: function () {
//       console.log(this)
//       console.log(this.year)
//     }
//   }
//   jonas.calcAge()
  
//   const matilda = {
//     year: 2017,
//   }
  
//   matilda.calcAge = jonas.calcAge // method borrowing !
//   // console.log(matilda)
//   matilda.calcAge() // prints the 2 logs from jonas since it was method borrow
  
//   const f = jonas.calcAge;
  
//   console.log(f)
  
//   f() // no owner of the f function now! So this becomes undefined!




// var firstName = 'Matilda' // by creating a var the var creates a window element. window.firstName exist now so its parent window now has a firstName - IMPORTANT





//   const jonas = {  // 4
//     firstName: 'jonas',
//     year: 1991, 
//     calcAge: function () {
//     //   console.log(this)
//       console.log(this.year);


            // solution 1
    //   const self = this // 5
    //   const isMillenial = function (){
    //     console.log(self) 
    //     console.log(self.year >= 1981 && self.year <= 1996)
    //   }
    
        // solution 2
//       const self = this 
//       const isMillenial = ()=>{
//         // console.log(this, 'with arrow') 
//         console.log(this.year >= 1981 && this.year <= 1996)
//       }
//       isMillenial()
//     },
//     greet: () =>{ // 3
//         // console.log(this)
//         console.log(`Hey  ${this.firstName}`)
//     }
//   }
//   jonas.greet()
//   jonas.calcAge()

//   const addExp = function (a, b) {
//     console.log(arguments)
//     return a + b
//   }
// // 7
//   addExp(2, 5)
//   addExp(2, 5, 6, 12)

//   var addArrow = (a, b) => a + b;

// let age = 30
// let oldAge = age
// age = 31

// // console.log(age)
// // console.log(oldAge)

// const me ={
//     name: 'jonas',
//     age: 30
// }

// const friend = me
// friend.age = 27 // IMPORTANT THIS CHANGES THE OBJECT

// console.log('friend', friend)
// console.log('Me', me)


// primitive types
let lastName = 'williams'
let oldLastName = lastName
lastName = 'davis'
// console.log(lastName, oldLastName)


// reference types
const jessica = {
    firstName: 'jessica', 
    lastName: 'williams',
    age: 27
}
const marriedJessica = jessica
marriedJessica.lastName = 'davis'
// console.log('before marriage:', jessica)
// console.log('after marriage: ', marriedJessica)


// copying object

const jessica2 = {
    firstName: 'jessica', 
    lastName: 'williams',
    age: 27,
    family: [ 'alice', 'bob']
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'davis'

jessicaCopy.family.push('mary')
jessicaCopy.family.push('john')

console.log('before marriage:', jessica2)
console.log('after marriage:', jessicaCopy)





































  

// //--------------------------SUBJECT: THIS - ARGUMENTS KEYWORDS------------------


// // 1  IMPORTANT  NEVER USE A ARROW FUNCTION AS A METHOD! To avoid conflicts with the this keyword

// // 2  IMPORTANT  inside a regular function call the this keyword is undefined! 

// // 3  IMPORTANT arrow function do not have its own THIS keyword. It would call its parent in the scope to use their 'this' keyword, which is the window and on window there is no fristName. **before var firstName is created

// // 4  IMPORTANT this is not a code block its a object literal! thats why the arrow function wont have this as a parent

// // 5  IMPORTANT setting self to this I'm outside the function so I can call self

// // 6  IMPORTANT on solution 2 using the we use arrow function that dont have its own this keyword, so it looks at its parent this keyword! While on solution 1 regular function have its own this keyword, making it us having to declare a new variable pointing to the parent element for the this keyword!

// // 7  IMPORTANT Arguments keyword its only available in regular functions

// // 8  IMPORTANT Reference values are: Array, Object and Functions, and are stored in the heap

// // 8  IMPORTANT Primitive values are Number, string, boolean, undefined symbol and bigIng and are store in the call stack









