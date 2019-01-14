/* We have a 'user' object with it's properties and methods.

we want to make admin and guest slightly modified varients of it. 
we'd like to re-use what we have in 'user'.

PROTOTYPAL INHERITANCE is a language feature that helps in that. */



// [[PROTOTYPE]]    **** side note, __proto__ contains 2 underscores on each side XD (don't want anyone else to have to debug like i did XD ****

// In Javascript, objects have a special hidden property [[prototype]] that is either null or references
// another object. The referenced object is called a 'prototype'.

// when we want to read a property from object and it's missing,
// js automatically takes it from the prototype. This is called 'prototypical inheritance'. 

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;  // rabbit now has the eats property of true via it's prototype.

// __proto__ is a getter/setter for prototype.

// we can find both properties in rabbit now:
// alert( rabbit.eats ); // true
// alert( rabbit.jumps ); // true

// RABBIT INHERITS PROPERTIES FROM ANIMAL. / ANIMAL IS THE PROTOTYPE OF RABBIT.

// SO IF ANIMAL HAS A LOT OF USEFUL PROPERTIES AND METHODS, THEN THEY 
// BECOME AUTOMATICALLY AVAILABLE IN RABBIT. SUCH PROPERTIES ARE CALLED 'INHERITED.

// IF WE HAVE A METHOD IN ANIMAL, IT CAN BE CALLED ON RABBIT:

// let animal = {
//     eats: true,
//     walk() {
//         alert('Animal walk');
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// walk is taken from the prototype.
// rabbit.walk(); // Animal walk.
// alert( rabbit.eats );

// A LONGER PROTOTYPE CHAIN

// let animal = {
//     eats: true,
//     walk() {
//         alert('Animal walk');
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// };

// walk is taken from the prototype chain.

// longEar.walk();
// alert(longEar.jumps); // true (from rabbit)
// alert(longEar.eats); // true (from animal)


// Only Two limitations:

// 1. References cannot go in circles. 

// 2. Value of __proto__ can be either an object or null. All other values (like primitives) are ignored.

// An object may only inherit from one Prototype. 



// READ / WRITE RULES

// The prototype is only used for reading properties.

// For data properties, write / delete operations work directly with the object.

// let animal = {
//     eats: true,
//     walk() {
//         alert('animal walk'); // this method won't be used by rabbit
//     }
// };

// let rabbit = {
//     __proto__: animal  // inherits the 'walk' method from animal, but there is no assignment yet for 'walk'
// };

// rabbit.walk = function() {
//     alert('Rabbit! Bounce-bonce!');  // resets the walk method from animal to 'rabbit! bounce-bounce!'.
// };

// rabbit.walk(); // now rabbit has a walk method. // alerts 'Rabbit! Bounce-bounce!'
// animal.walk(); // alerts 'animal walk'


// let user = {
//     name: 'john',
//     surname: 'smith',

//     set fullName(value) {
//         [this.name, this.surname] = value.split(' ');
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };

// let admin = {
//     __proto__: user,
//     isAdmin: true
// };

// alert(admin.fullName); // John Smith

// // setter triggers!
// admin.fullName = 'Alice Cooper';

// alert(admin.fullName); // Alice Cooper.



// THE VALUE OF 'THIS'

// HERE'ANIMAL' REPRESENTS A 'METHOD STORAGE', AND 'RABBIT' MAKES USE OF IT.

// THE CALL RABBIT.SLEEP() SETS 'THIS.ISSLEEPING' ON THE 'RABBIT' OBJECT.


// animal has methods

// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             alert('I walk');
//         }
//     },

//     sleep() {
//         this.isSleeping = true;
//     }
// };

// let rabbit = {
//     name: 'White Rabbit',
//     __proto__: animal
// };


// rabbit.sleep();  // rabbit is now sleeping, is true.

// alert(rabbit.isSleeping); // true

// alert(animal.isSleeping); // undefined. (no such property in the prototype);



// ****** TASKS ******

// SEARCHING ALGORITHM

// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed
// };

// alert(pockets.money);
// alert(pockets.pillow);
// alert(bed.glasses);
// alert(table.glasses);



// WHY TWO HAMSTERS ARE FULL?

/* Instructions:
We have two hamsters: speedy and lazy inheriting from the general hamster object.
When we feed one of them, the other one is also full. Why? How to fix it? */

// let hamster = {
//     stomach: [],

//     eat(food) {
//         this.stomach.push(food);
//     }
// };

// let speedy = {
//     __proto__: hamster,
//     stomach: []
// };

// let lazy = {
//     __proto__: hamster,
//     stomach: []
// };

// // This one found the food

// speedy.eat('apple');
// alert(speedy.stomach); // apple

// // This one also found the food, why? fix please
// alert(lazy.stomach); // fixed!