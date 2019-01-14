// CLASS INHERITANCE, SUPER

// CLASSES CAN EXTEND ONE ANOTHER. THERE'S A NICE SYNTAX, 
// TECHNICALLY BASED ON THE PROTOTYPAL INHERITANCE.

// TO INHERIT FROM ANOTHER CLASS, WE SHOULD SPECIFY 'EXTENDS' AND THE PARENT
// CLASS BEFORE THE BRACKETS.

// HERE RABBIT INHERITS FROM ANIMAL:

// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed += speed;
//         alert(`${this.name} runs with speed ${this.speed}`);
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stopped.`);
//     }

// }

// Inherit from Animal

// class Rabbit extends Animal {   // now Rabbit is a class, but prototypes animal.prototype by extension.
//     hide() {
//         alert(`${this.name} hides!`);
//     }
// }

// let rabbit = new Rabbit('White Rabbit');

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!

// NOW RABBIT HAS ACCESS BOTH TO ITS OWN METHODS AND THE METHODS FROM ANIMAL.

// ANY EXPRESSION IS ALLOWED AFTER 'EXTENDS'
// CLASS SYNTAX ALLOWS TO SPECIFY NOT JUST A CLASS, BUT ANY EXPRESSION AFTER 'EXTENDS'.

// FOR INSTANCE, A FUNCTION CALL THAT GENERATES THE PARENT CLASS:

// function f(phrase) {
//     return class {
//         sayHi() {
//             alert(phrase);
//         }
//     }
// }

// class User extends f('Hello') {} // User is now a class, but empty, inherits all traits from 'f'.

// new User().sayHi() // Hello



// OVERRIDING A METHOD

// 'SUPER' KEYWORD ALLOWS US TO EXTEND / TWEAK METHODS OF PARENT PROTOTYPES FOR NEW CONSTRUCTS.

// super.method(...) to call a parent method.
// super(...) to call a parent constructor. (inside the constructor only)

// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed += speed;
//         alert(`${this.name} runs with speed ${this.speed}`);
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stopped.`);
//     }
// }

// class Rabbit extends Animal { // creating a new class Rabbit that prototypes class Animal
//     hide() {
//         alert(`${this.name} hides!`);
//     }

//     stop() {
//         super.stop(); // call parent stop
//         this.hide(); // and then hide.
//     }
// }

// let rabbit = new Rabbit('Bugs Bunny');

// rabbit.run(5); // Bugs Bunny runs with speed 5.
// rabbit.stop(); // Bugs Bunny stopped. Bugs Bunny hides!



// OVERRIDING CONSTRUCTOR

// ADDING A CUSTOM CONSTRUCTOR TO RABBIT.

// class Rabbit extends Animal {

//     constructor(name, earLength) {
//         this.speed = 0;
//         super(name);
//         this.earLength = earLength;
//     }
// }

// let rabbit = new Rabbit('Bugs Bunny', 10); // Error: this is not defined.



// SUPER INTERNALS, [[HomeObject]]

// WHEN A FUNCTION IS SPECIFIED AS A CLASS OR OBJECT METHOD, IT'S [[HOMEOBJECT]] 
// PROPERTY BECOMES THAT OBJECT.

// [[HOMEOBJECT]] IS ONLY USED FOR CALLING PARENT METHODS IN 'SUPER' TO RESOLVE
// THE PROTOTYPE. SO IT DOESN'T BREAK COMPATIBILITY.

// let animal = {
//     name: 'Animal',
//     eat() {  // [[HomeObject]] == animal.
//         alert(`${this.name} eats.`);
//     }
// };

// let rabbit = {
//     __proto__: animal,
//     name: "Rabbit",
//     eat() {     // [[HomeObject]] == rabbit
//         super.eat();
//     }
// };

// let longEar = {
//     __proto__: rabbit,
//     name: "Long Ear",
//     eat() {     // [[HomeObject]] == longEar
//         super.eat();
//     }
// };

// longEar.eat() // Long Ear eats.



// STATIC METHODS AND INHERITANCE

// THE 'CLASS' SYNTAX SUPPORTS INHERITANCE FOR STATIC PROPERTIES TOO.



// NATIVES ARE EXTENDABLE

// BUILT-IN CLASSES LIKE ARRAY, MAP AND OTHERS ARE EXTENDABLE ALSO.

// FOR INSTANCE, HERE 'POWERARRAY' INHERITS FROM THE NATIVE 'ARRAY':

// add one more method to it..
// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty()); // false

// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr); // 10, 50
// alert(filteredArr.isEmpty()); // false

// BUILT-IN METHODS LIKE FILTER, MAP, AND OTHERS RETURN NEW OBJECTS OF EXACTLY THE INHERITED TYPE.
// THEY RELY ON THE CONSTRUCTOR PROPERTY TO DO SO.