// PROPERTY FLAGS

// 3 SPECIAL PROPERTIES

// 1. WRITABLE - IF TRUE, CAN BE CHANGED, OTHERWISE IT'S READ-ONLY.
// 2. ENUMERABLE - IF TRUE, THEN LISTED IN LOOPS, OTHERWISE NOT LISTED.
// 3. CONFIGURABLE - IF TRUE, THE PROPERTY CAN BE DELETED AND THESE ATTRIBUTES CAN BE MODIFIED
//    OTHERWISE NOT.

// THE METHOD 'Object.getOwnPropertyDescriptor' ALLOWS TO QUERY THE FULL INFORMATION ABOUT A PROPERTY.

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

// let user = {
//     name: 'John'
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert( JSON.stringify(descriptor, null, 2) );


// TO CHANGE THE FLAGS, WE CAN USE 'Object.defineProperty'.

//syntax: Object.defineProperty(obj, propertyName, descriptor)


// let user = {};

// Object.defineProperty(user, "name", {
//     value: 'John'
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert( JSON.stringify(descriptor, null, 2) );


// READ-ONLY

// LET'S MAKE 'USER.NAME' READ-ONLY BY CHANGING THE WRITABLE FLAG..

// let user = {
//     name: 'John'
// };

// Object.defineProperty(user, 'name', {
//     writable: false
// });

// descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert( JSON.stringify(descriptor, null, 2) );

// user.name = "Pete"; // Error: Cannot assign to read-only property.


// HERE IS THE SAME OPERATION, BUT FOR THE CASE WHEN A PROPERTY DOESN'T EXIST:

// let user = {};

// Object.defineProperty(user, 'name', {
//     value: 'Pete',
//     // writable will automatically be set to false if not specified.
//     enumerable: true,
//     configurable: true
// });

// alert(user.name); //Pete
// user.name = 'Alice'; // Error, is not writable / changable.



// NON - ENUMERABLE

// let user = {
//     name: 'John',
//     toString() {
//         return this.name;
//     }
// };

// By default, both our properties are listed:
// for (let key in user) alert(key); // name, toString

// if we don't like that, we can set enumerable to false, then toString will not appear
// in the for..in loop

// Object.defineProperty(user, 'toString', {
//     enumerable: false
// });

// Now our toString disappears:
// for (let key in user) alert(key); // name

// non-enumerable properties are excluded from Object.keys();

// alert( Object.keys(user) ); // name



// NON - CONFIGURABLE

// the non-configurable flag (configurable: false) is sometimes preset for built-in objects and properties.

// a non-configurable property cannot be deleted for altered with defineProperty.

//ex..

// Math.PI is read-only, non-enumerable, and non-configurable.

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// alert( JSON.stringify( descriptor, null, 2 ) );

// a programmer is unable to change the value of Math.PI or overwrite it.

// Making a property non-configurable is a one-way street, we cannot change it back.


// here we are making user.name a forever sealed constant.

// let user = {};

// Object.defineProperty(user, 'name', {
//     value: 'John',
//     writeable: false,
//     configurable: false
// });

// won't be able to change user.name or it's flags.

// Object.defineProperty(user, 'name', { writable: true} ); // error, cannot redefine non-configurable property.

// flag violating actions are silently ignored in non-strict mode, no error or action will occur.



// OBJECT.DEFINEPROPERTIES

// allows us to define many properties at once.
// ex..

// Object.defineProperties(user, {
//     name: {value: 'John', writable: false},
//     surename: {value: 'Smith', writable: false},
//     // ...
// })



// Object.getOwnPropertyDescriptors

// To get all property descriptors at once.

// Together with Object.defineProperties it can be used as a 'flags-aware' way of cloning an object.
//ex..
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

// normal way, but won't copy the flags..
// for (let key in user) {
//     clone[key] = user[key]
// }