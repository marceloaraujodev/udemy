'use strict';




// // Constructor Function
// const Person = function (firstName, birthYear){
//     // Instance Properties
//     this.firstName = firstName
//     this.birthYear = birthYear

//     //// Never create a method inside of a constructor function. Never do this. It will add the method to every object
//     // this.calcAge = function () {
//     //     console.log(2023 - birthYear)
//     // }

// }

// const jonas = new Person('Jonas', 1991)
// console.log(jonas)

// const matilda = new Person('Matilda', 1981)
// const jack = new Person('Jack', 1984)
// console.log(matilda)
// console.log(jack)



// console.log(jonas instanceof Person)


/*      👆   TITLE What happens when we use the new keyword calling the construction function?

1. A new Object {} is created
2. The this keyword will point to the newly created object.
3. The new Object is linked to prototype
4. function automatically return a empty object. */


// // Creating New Prototype method
// console.log('Person prototype', Person.prototype) // *1
// Person.prototype.calcAge = function () { 
//         console.log(2023 - this.birthYear)
//     }
// jonas.calcAge()
// console.log('The calc Function was not added here! If added to the constructor function, it would be. Uncomment on line 13 to see it', jonas)

// console.log('this is the prototype of jonas', jonas.__proto__)
// console.log(jonas.__proto__ === Person.prototype)
// console.log(Person.prototype.isPrototypeOf(jonas))
// console.log(Person.prototype.isPrototypeOf(Person))

// Person.prototype.species = 'Homo Sapiens'
// console.log(jonas.species)
// console.log(jonas.hasOwnProperty('firstName'))
// console.log(jonas.hasOwnProperty('species')) // its not in the jonas object, but it has access to it



// 👉 EVERY FUNCTION IN JS HAS A PROPERTY PROTOTYPE!!!!! THAT INCLUDES CONSTRUCTOR FUNCTIONS


// Every object that is created by certain construction function will get access to all the methods and properties that we defined on the constructions prototype properties


// 👉 Think of prototype as prototype of linked Objects to help ease the confusion.


// 👉 Person.prototype is actually not the Prototype of Person. It is what is going to be used as the prototype of all the objects that are created with the Person Construction Function.


// 👆 *1 by doing this instead inside of constructor function we only have one calcAge vs Many if this was added to the constructor. The constructor would add 1 calcAge to every person object.


// Any Object always has access to the methods and properties from its prototype. And the prototype of jonas and matilda is Person.prototype




//                                     TITLE OOP OBJECT ORIENTED PROGRAMING 

/* The 4 Funtamental OOP Principles

Abstraction: 
Ignoring or hiding detais that dont matter, allowing us to get an overview perspective of the thing we are implementing, instead of messing with details that dont really matter to our implementation.

Encapsulation:
Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API)

Inheritance:
Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allow us to reuse common logic and model real-world relationships.

Polymorphism:
A child class can overwrite a method it inherited from a parent class [its more complex then that, bu enough for our purposes]

------------------------------------------------------------------------------------

Instances - Instatiated from a class (NOT same as classes in Javascript), which functions like a blueprint. The classes here are just like a blue print, a model o how to create and pack the data


                                     TITLE  OOP in JS: Prototypes

prototypes contains methods

👉 object can access methods, objects are linked to a prototype object;

👉 Prototypalinheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype;

👉 Behavior is delegated to the linked prototype object.




                   TITLE 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT

1. Constructor functions:
👉 Technique to create objects from a function;
👉 This is how built-in objects like Arrays, Maps or Sets are actually implemented.       

2. ES6 Classes
👉 Modern alternative to constructor function syntax;
👉 'Sintactic sugar': Behind the scenes, ES6 classes work exaclty like constructor functions;
👉 ES6 classes do NOT behave like classes in 'classical OOP' 

3. Object.create()
👉 The easiest and most straightforward way of linking an object to a prototype object.
👉 However is not that used like the other 2 methods.




👉 Convention for OOP Constructor functions should start with a capital letter.
👉 Arrow functions do not work in Constructor functions for not having the this keyword
👉 Calling the Constructor function, you use the "new" keyword 👉 new FunctionName()



*/

