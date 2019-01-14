// FUNCTIONAL CLASS PATTERN

// has to do with creating code templates.

//THE CONSTRUCTOR FUNCTION BELOW CAN BE CONSIDERED A CLASS ACCORDING TO THE DEFINITION.

// function User(name) {
//     this.sayHi = function() {
//         alert(name);
//     };
// }

// let user = new User('John');
// user.sayHi(); // John

// ex..

// function User(name, birthday) {
//     //only visible from other methods inside User
//     function calcAge() {
//         return new Date().getFullYear() - birthday.getFullYear();
//     }

//     this.sayHi = function() {
//         alert(`${name}, age: ${calcAge()}`);
//     };
// }

// let user = new User('John', new Date(2000, 0, 1));

// user.sayHi(); // John, age: 19



// FACTORY CLASS PATTERN

// WE CAN CREATE A CLASS WITHOUT USING NEW AT ALL.

// function User(name, birthday) {
//     // only visible from other methods inside User
//     function calcAge() {
//         return new Date().getFullYear() - birthday.getFullYear();
//     }

//     return {
//         sayHi() {
//             alert(`${name}, age: ${calcAge()}`);
//         }
//     };
// }

// let user = User('John', new Date(2000, 0, 1));
// user.sayHi(); // John, age: 19



//PROTOTYPE-BASED CLASSES

// most important, generally the best. 
// functional and factory class patterns are rarely used in practice.

// function User(name, birthday) {
//     this._name = name;
//     this._birthday = birthday;
// }

// User.prototype._calcAge = function() {
//     return new Date().getFullYear() - this._birthday.getFullYear();
// };

// User.prototype.sayHi = function() {
//     alert(`${this._name}, age: ${this._calcAge()}`);
// };

// let user = new User('John', new Date(2000, 0, 1));

// user.sayHi(); // John, age: 19

// USING AN '_' AS A PREFIX USUALLY MEANS 'TRY NOT TO TOUCH'

// PROTOTYPE CLASSES PATTERN ADVANTAGES:

// IN THE FUNCTIONAL PATTERN, EACH OBJECT HAS IT'S OWN COPY OF EVERY METHOD. 

// IN THE PROTOTYPAL PATTERN, ALL METHODS ARE IN USER.prototype THAT IS SHARED
// BETWEEN ALL USER OBJECTS. AN OBJECT ITSELF ONLY STORES DATA.

// THE PROTOTYPAL PATTERN IS MORE MEMORY EFFICIENT. 



// PROTOTYPE-BASED INHERITANCE FOR CLASSES

// let's say we have two prototype-based classes.

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype.jump = function() {
//     alert(`${this.name} jumps!`);
// };

// let rabbit = new Rabbit('My rabbit');


// animal
// function Animal(name) {
//     this.name = name;
// }

// // all animals can eat, right?
// Animal.prototype.eat = function() {
//     alert(`${this.name} eats.`);
// };

// //Same Rabbit as before..
// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype.jump = function() {
//     alert(`${this.name} jumps!`);
// };

// // set up the inheritance chain..
// Rabbit.prototype.__proto__ = Animal.prototype; 

// let rabbit = new Rabbit('White Rabbit');

// rabbit.eat() // White rabbit eats.
// rabbit.jump() // White rabbit jumps!

// IN GENERAL..
// METHODS ARE STORED IN CLASS.PROTOTYPE
// PROTOTYPES INHERIT FROM EACH OTHER

