'use strict';


// Constructor Function
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
// // console.log(jonas)

// const matilda = new Person('Matilda', 1981)
// const jack = new Person('Jack', 1984)
// // console.log(matilda)
// // console.log(jack)

// // console.log(jonas instanceof Person)

// // Person.hey = function () {
// //     console.log('Hey there 🖐')
// //     // console.log(this)
// // }

// // Person.hey()
// // // jonas.hey()


/*      👆   TITLE What happens when we use the new keyword calling the construction function?

1. A new Object {} is created
2. The this keyword will point to the newly created object.
3. The new Object is linked to prototype
4. function automatically return a empty object.
 */


//// Creating New Prototype method
// // console.log('Person prototype', Person.prototype) // *1
// Person.prototype.calcAge = function () { 
//         console.log(2023 - this.birthYear)
//     }
// jonas.calcAge()
// // console.log('The calc Function was not added here! If added to the constructor function, it would be. Uncomment on line 13 to see it', jonas)

// // console.log('this is the prototype of jonas', jonas.__proto__)
// // console.log(jonas.__proto__ === Person.prototype)
// // console.log(Person.prototype.isPrototypeOf(jonas))
// // console.log(Person.prototype.isPrototypeOf(Person))

// Person.prototype.species = 'Homo Sapiens'
// // console.log(jonas.species)
// // console.log(jonas.hasOwnProperty('firstName'))
// // console.log(jonas.hasOwnProperty('species')) // its not in the jonas object, but it has access to it
// // console.log('Person.prototype', Person.prototype)
// // console.log(jonas.__proto__)
// // console.log(jonas.__proto__.__proto__)
// // console.log(Person.prototype.constructor)
// // console.dir(Person.prototype.constructor)


// 👉 EVERY FUNCTION IN JS HAS A PROPERTY PROTOTYPE!!!!! THAT INCLUDES CONSTRUCTOR FUNCTIONS


// Every object that is created by certain construction function will get access to all the methods and properties that we defined on the constructions prototype properties


// 👉 Think of prototype as prototype of linked Objects to help ease the confusion.


// 👉 Person.prototype is actually not the Prototype of Person. It is what is going to be used as the prototype of all the objects that are created with the Person Construction Function.


// 👆 *1 by doing this instead inside of constructor function we only have one calcAge vs Many if this was added to the constructor. The constructor would add 1 calcAge to every person object.


// Any Object always has access to the methods and properties from its prototype. And the prototype of jonas and matilda is Person.prototype


// When calling the jonas.calcAge() function JS cant find the calcAge function in the jonas Object {}, it is not there. So what happens in this situation is that when a property or a method cannot be found in a certain Object JS will look into its prototype and if you look Person.prototype, there it is. calcAge is there. The jonas Object Inherited the calcAge function from its prototype.



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



//                                               TITLE CLASSES 

// Class Expression:
// const PersonCl = class{}


// // Class Declaration:
// class PersonCl {
//   constructor(fullName, birthYear){
//     this.fullName = fullName;
//     this.birthYear = birthYear
//   }

//   // Instance methods  
//   // Methods go here inside class but outside constructor! They will be added to .prototype property. No commas separating the methods
//   calcAge() {
//     console.log(2023 - this.birthYear)
//   }

//   greet (){
//     console.log(`Hey ${this.fullName}`)
//   }

//   get age (){
//     return 2023 - this.birthYear
//   }
// // Set a property that already exist IMPORTANT
//   set fullName(name){
//     // console.log(name)
//     if(name.includes(' ')) this._fullName = name
//     else console.log(`${name} is not full name!`)
//   }

//   get fullName() {
//     return this._fullName
//   }

// // Static Method
//   static hey (){
//     console.log('Hey there 👋')
//     // console.log(this)
//   }

// }


// const jessica = new PersonCl('Jessica Davis', 1990)
// console.log(jessica)
// jessica.calcAge();
// console.log(jessica.age) // get method

// console.log(jessica.__proto__ === PersonCl.prototype)

//// Works the same as inside the class above!
// PersonCl.prototype.greet = function(){
//   console.log(`Hey ${this.firstName}`)
// }

// jessica.greet()



// // 1. Classes are not hoisted.
// // 2. Class are first-class citizens
// // 3. Classes are executed in strict mode.

// const walter = new PersonCl('Walter White', 1965)
// console.log(walter) // open and look at _fullName and fullName - click on (...)
// console.log(walter.fullName) // this is possible because of the get and set on line 172

// PersonCl.hey()


//                                             TITLE GETTERS AND SETTERS


// const account = {
//     owner: 'jonas', 
//     _movements: [200, 530, 440, 120],

//     get latest() {
//         return this.movements.slice(-1).pop()
//     },

//     set latest (mov) {
//         this.movements.push(mov)
//     }

// }

// console.log(account.latest)
// account.latest = 50
// console.log(account.movements)


/* 
👉 Notice that its used like a property and not like calling a function.
👉 A getter must have exactly zero parameters.
👉 The set needs exactly one parameter
👉 Notice how the set syntax is different, it is used to assign 
*/


/*                               TITLE Setting a property that already exist.

👉 Will have to use the underscore ex: this._variableName (this.fullName in this case)
👉 Will have to create the get method and return this._variableName so it can be used with the variable  name (fullName). Ex: jessica.fullName. So the actual property will still be _variableName, but It will also be computed variableName without the underscore!
*/



//                                       TITLE STATIC METHOD

// 👉 .from method is only available on the constructor Array.from and not on the array it self
// 👉 Number.parseFloat(12) is only available on the constructor and not on numbers you cant wright 12.parseFloat. Thats what it means


//                                       TITLE OBJECT.CREATE()

// const PersonProto = {
//     calcAge() {
//         console.log(`${this.firstName} age is ${2023 - this.birthYear} y/o`)
//       },

//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//       }
// }

// const steven = Object.create(PersonProto)

// console.log(steven)
// steven.firstName = 'Steven';
// steven.birthYear = 1989;
// // console.log(steven)
// steven.calcAge()


// const sarah = Object.create(PersonProto)
// sarah.init('Sarah', 1975)
// sarah.calcAge()





//                    TITLE INHERITANCE BETWEEN 'CLASSES, NOT THE class VariableName' 



// const Person1 = function (firstName, birthYear){
//     // Instance Properties
//     this.firstName = firstName
//     this.birthYear = birthYear
// }

// Person1.prototype.calcAge = function () { 
//     console.log(2023 - this.birthYear)
// }

// // constructor function
// const Student = function (firstName, birthYear, course){
//     Person1.call(this, firstName, birthYear)
//     this.course = course
// }

// // Linking prototypes
// Student.prototype = Object.create(Person1.prototype) // returns a empty object.
// Student.prototype.constructor = Student

// // Student Method
// Student.prototype.introduce = function (){
//     console.log(`My name is ${this.firstName} and I'm studing ${this.course}`)
// }

// const mike = new Student('Mike', 2000, 'Computer Science')
// console.log(mike)
// mike.introduce()
// mike.calcAge()

// // The prototype chain below!
// console.log(mike.__proto__)
// console.log(mike.__proto__.__proto__)
// console.log(mike.__proto__.__proto__.__proto__)
// console.log(mike.__proto__.__proto__.__proto__.__proto__)

// console.dir(Student.prototype.constructor)

/*                                                  IMPORTANT 

👉 This is a Regular function call.  greet("John"); 

👉 In a regular function call, the this keyword is set to undefined. And thats why this will not work! Person1.call(firstName, birthYear). Does not work. Instead do this
Person1.call(this, firstName, birthYear) 👉 Will manually set the this keyword from Person1 to be the same this keyword in the Student function.

👉 Linking Student Class to the Person Class: Student.prototype = Object.create(Person1.prototype) will return a empty object. Then you can add methods to the Student.prototype

👉 To correctly link the classes you have to 
1. Create the Student Constructor function
2. Add Student.prototype = Object.create(Person1.prototype) below the Student Constructor function

IMPORTANT

👉 Using Object.create will set the Student.prototype.constructor to be Person1. Fixing this problem:
Student.prototype.constructor = Student!
*/



//                     TITLE INHERITANCE BETWEEN 'CLASSES': ES6 CLASSES

  //   class PersonCl {
  //   constructor(fullName, birthYear){
  //     this.fullName = fullName;
  //     this.birthYear = birthYear
  //   }
  
  //   // Instance methods  
  //   // Methods go here inside class but outside constructor! They will be added to .prototype property. No commas separating the methods
  //   calcAge() {
  //     console.log(2023 - this.birthYear)
  //   }
  
  //   greet (){
  //     console.log(`Hey ${this.fullName}`)
  //   }
  
  //   get age (){
  //     return 2023 - this.birthYear
  //   }
  // // Set a property that already exist IMPORTANT
  //   set fullName(name){
  //     // console.log(name)
  //     if(name.includes(' ')) this._fullName = name
  //     else console.log(`${name} is not full name!`)
  //   }
  
  //   get fullName() {
  //     return this._fullName
  //   }
  
  // // Static Method
  //   static hey (){
  //     console.log('Hey there 👋')
  //     // console.log(this)
  //   }
  
  // }


  /*                                                 TITLE ES6 CLASSES

  👉 Extendes PersonCl will link to prototypes behind the scenes without us having to think about it.
  👉 Instead of using PersonCl.call(this, firstName, birthYear) like in constructor functions, just super() is used.
  👉 Just pass the parameter from the PersonCl constructor to the super()
  👉 If you dont need new properties you dont even need to write the constructor function
  */

  // class StudentCl extends PersonCl{
  //   constructor(fullName, birthYear, course){
  //     super(fullName, birthYear)
  //     this.course = course; 
  //   }

  //   introduce = function (){
  //   console.log(`My name is ${this.fullName} and I'm studing ${this.course}`)
  //   }

  //   calcAge() {
  //     console.log(`I'm ${2023 - this.birthYear} years old, but as a student I feel more like ${2023 - this.birthYear + 10}`)
  //   }
  // }

  // // const martha = new StudentCl('Martha Jones', 2005)
  // const martha = new StudentCl('Martha Jones', 2000, 'Computer Science')
  // console.log(martha)

  // martha.introduce()
  // martha.calcAge()





  //                         TITLE INHERITANCE BETWEEN 'CLASSES': OBJECT.CREATE


// const PersonProto = {
//     calcAge() {
//         console.log(`${this.firstName} age is ${2023 - this.birthYear} y/o`)
//       },

//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//       }
// }

// const steven = Object.create(PersonProto)

// const StudentProto = Object.create(PersonProto) // // Basically at this poit, StudentProto is a empty Object with 2 methods that are inherited from PersonProto. The methods are calcAge and init.

// // New Method that will overwrite the one that exist on PersonProto
// StudentProto.init = function(firstName, birthYear, course){
//   PersonProto.init.call(this, firstName, birthYear)
//     this.course = course;
// }

// // New Method that will overwrite the one that exist on PersonProto
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I'm studing ${this.course}`)
// }

// const jay = Object.create(StudentProto)
// jay.init('Jay', 2003, 'Computer Science')
// console.log(jay)
// jay.introduce()
// jay.calcAge()




  ////                               TITLE OTHER CLASS EXAMPLES 
  ////                                             &
  ////     TITLE ENCAPSULATION: PRIVATE CLASS - PROTECTED PROPERTIES AND METHODS - DATA PROTECTION


  class Account {
    // 1. Public field (instances), need semi colens, looks like a variable but no need to declare. They are the same as this._movements but stay outside of the constructor
    locale = navigator.language; 
    

    // 2. Private fields (instances): You can make properties really not accessible from the outside
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
      // Protected property uses _ in front of the variable and is just a convention
      // this.#movements = [];
      // this.locale = navigator.language;
      // console.log(`Thanks for opening an account, ${owner}!`)
    }

    // Public Interface
    // 3. Public Methods
    getMovements(){
      return this.#movements
    }

    deposit(val) {
      this.#movements.push(val)
    }
    // My initial thought was to remove the val from the array, however we need to track all the values, so push a negative value into the movements array!
    withdraw(val) {
      this.deposit(-val)
    }

    requestLoan(val){
      if(this._approveLoan(val)){
        this.deposit(val)
        // console.log(`Loan Approved`)
      }
    }

    // 4. Private Methods - Not yet implemented - Uses # using _ here because its not implemented
    _approveLoan(val){
      return true
    }

  }


const acc1 = new Account('Jonas', 'EUR', 1111)

acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(1000)
console.log(acc1.getMovements())


console.log(acc1)
// console.log(acc1.#pin) // not supposed to be accessible
// console.log(acc1.#movements) // throws a error, that is right not supposed to be acceptible


  

// 👉 Protected property uses _ in front of the variable and is just a convention

// 👉 1. Public fields: Public field, need semi colens, looks like a variable but no need to declare. It will be present at all instaces that we are creating through the class. They are NOT on the PROTOTYPE. They are the same as this._movements but stay outside of the constructor IMPORTANT

// 👉 2. Private fields: Use # in front of the variable goes below public field outside constructor. They are instaces not prototypes

// 👉 3. Public methods: Its basically all the methods

// 👉 4. Private methods: Not yet implemented




































// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.acelerate = function () {
  this.speed += 10
  console.log(`This ${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`This ${this.make} is breaking and now its at ${this.speed} km/h`)
}

const bmw = new Car('BMW', 120)
console.log(bmw)
bmw.acelerate()
bmw.acelerate()

bmw.brake() */

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/


// const Car {
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     acelerate() {
//         this.speed += 10
//         console.log(`This ${this.make} is going at ${this.speed} km/h`)
//     }

//     brake(){
//         this.speed -= 5
//         console.log(`This ${this.make} is breaking and now its at ${this.speed} km/h`)
//     }

//     get speedUS() {
//         return this.speed / 1.6
//       }
      
//       set speedUS(speed) {
//         this.speed = speed * 1.6;
//       }

// }

// const ford = new Car('Ford', 120)
// console.log(ford.speedUS, 'mph')
// ford.acelerate()
// ford.acelerate()
// ford.brake()
// ford.speedUS = 50
// console.log(ford)


// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


// // Constructor function
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// // Method
// Car.prototype.acelerate = function () {
//   this.speed += 10
//   console.log(`This ${this.make} is going at ${this.speed} km/h`)
// }

// // Method
// Car.prototype.brake = function () {
//   this.speed -= 5
//   console.log(`This ${this.make} is breaking and now its at ${this.speed} km/h`)
// }

// // Constructor function
// const EV = function (make, speed, charge){
//   Car.call(this, make, speed, charge)
//   this.charge = charge
// }
// // console.log(Car.prototype)

// // Linking the EV to the Car 'Class'
// EV.prototype = Object.create(Car.prototype)  // Prototypes are the mechanism by which JavaScript objects inherit features from one another

// // Method
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo
// }

// Method
// EV.prototype.acelerate = function (){
//   this.speed += 20;
//   this.charge --;
//   console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`)

// }

// const tesla = new EV ('Tesla', 120, 23)
// tesla.chargeBattery(90)
// console.log(tesla)
// tesla.brake()
// tesla.acelerate() // EV acelerate was used instead of the Car acelerate method!