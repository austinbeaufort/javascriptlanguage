// OTHER METHODS OF PROTOTYPES

/*
Object.create(proto[, descriptors]) - creates an empty object 
with given proto as [[prototype]] and optional property descriptors.

Object.getPrototypeOf(obj) - returns the [[prototype]] of obj.

Object.setPrototypeOf(obj, proto) - sets the [[prototype]] of obj to proto.
*/
//ex..

// let animal = {
//     eats: true
// };

// // create a new object with animal as a prototype..

// // rabbit = {
// //     __proto__: animal
// // };

// let rabbit = Object.create(animal);

// alert( rabbit.eats );
// alert(Object.getPrototypeOf(rabbit) === animal); // true

// Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit from 'animal' object to {} (empty) object.


// Object.create has an optional second argument: property descriptors that we can add to the new object.

// let animal = {
//     eats: true
// };

// let rabbit = Object.create(animal, { // creates rabbit with 'animal' methods, adds it's own 
//     jumps: {                        // 'jumps' property set to the value of true.
//         value: true
//     }
// });

// alert(rabbit.jumps); // true


// *******************************************
// FULLY IDENTICAL SHALLOW CLONE OF OBJ..
// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// *******************************************