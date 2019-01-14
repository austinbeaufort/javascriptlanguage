// //id is a new symbol
// let id = Symbol();

// //id is a symbol with the description 'id'..
// // descriptions help with debugging
// let id = Symbol('id');

//two unique symbols with the same description
// let id1 = Symbol('id');
// let id2 = Symbol('id');

// alert(id1 == id2); //false

//SYMBOLS DO NOT AUTO CONVERT TO A STRING
// let id = Symbol('id');
// alert(id); //TypeError: Cannot convert a Symbol to a string.
// ; 
//TO SHOW A SYMBOL AS A STRING, WE MUST CALL '.TOSTRING()' ON IT ..
// let id = Symbol('id');
// alert(id.toString()) // Symbol(id), now it works.

//HIDDEN PROPERTIES OF SYMBOLS
// Symbols allow us to create 'hidden' properties of an object..
//   that no other part of code can access or overwrite by mistake..
//Ex..
// let user = {name: 'John'};
// let id = Symbol('id');

// user[id] = "ID Value";
// alert( user[id] ); // we can access the data using the symbol as the key.

//TO USE SYMBOLS IN AN OBJECT LITERAL, MAKE SQUARE BRACKETS..
//EX..
// let id = Symbol('id');

// let user = {
//     name: 'john',
//     age: 30,
//     [id]: 123
// };

// for (let key in user) {
//     alert(key);
// }

// // alert("Direct: " + user[id]); //direct access to the symbol.

// //OBJECT.ASSIGN COPIES BOTH STRING AND SYMBOL PROPERTIES
// let id = Symbol('id');
// let user = {
//     [id]: 123
// };

// let clone = Object.assign({}, user);

// alert( clone[id] ); //123