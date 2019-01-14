// 2 TYPES OF PROPERTIES..

// 1. DATA PROPERTIES
// 2. ACCESSOR PROPERTIES


// GETTERS AND SETTERS

// Accessor properties are represented by 'getter' and 'setter' methods. In an 
// object literal they are denoted by get and set:

// let user = {
//     name: 'John',
//     surname: 'Smith',

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };

// alert(user.fullName) // John Smith


// set fullname is executed with the given value.
// user.fullName = 'Alice Cooper';
// alert(user.name) // Alice
// alert(user.surname); // Cooper
// alert(user.fullName) // Alice Cooper

// Accessor properties are only accessible with get/set



// ACCESSOR DESCRIPTORS

// for accessor properties, there is no value and writable, but instead there are get and set functions.

// an accessor descriptor may have.. get, set, enumerable, and configurable.

// for instance, to craete an accessor fullName with defineProperty,
// we can pass a descriptor with get and set

// let user = {
//     name: 'John',
//     surname: 'Smith'
// };

// Object.defineProperty(user, 'fullName', {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },

//     set(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// });

// alert(user.fullName); // John Smith
// for (let key in user) alert(key); // name, surname, since fullName is an accessor property, it won't appear in the alert, only data properties will.

//SMARTER GETTERS AND SETTERS

// Getters and Setters can be used as wrappers over 'real' property values to gain more control over them.

// for instance, if we want to forbid too short names for user, we can store 'name', 
// in a special property _name and filter assignments in the setter.


// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         if (value.length < 4) {
//             alert('Name is too short, need at least 4 characters');
//             return;
//         }
//         this._name = value;
//     }
// };

// user.name = 'Pete';
// alert(user.name); // Pete

// user.name = 'Tim'; // Name is too short, need at least 4 characters.


// properties starting with "_" are internal and should not be touched from the outside.



// USING FOR COMPATIBILITY

// GETTERS AND SETTERS ALLOW TO TAKE CONTROL OVER A 'NORMAL' DATA PROPERTY AND TWEAK IT AT ANY MOMENT.

// FOR INSTANCE, WE STARTED IMPLEMENTING USER OBJECTS USING DATA PROPERTIES 'NAME' AND 'AGE':

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let john = new User('John', 25);

// alert( john.name ); 
// alert( john.age );

// but sooner or later, things may change. Instead of 'age' we may decide to store birthday,
// because it's more precise and convenient.

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     // age is calculated from the current date and birthday
//     Object.defineProperty(this, 'age', {
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         }
//     });
// }

// let john = new User('John', new Date(1992, 6, 1));

// alert(john.name);
// alert(john.age); // age now works.
// alert(john.birthday);