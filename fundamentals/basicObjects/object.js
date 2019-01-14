"use strict";

// //OBJECT LITERAL
// let user = {  //an object
//     name: 'John', //by key 'name' store value 'John'
//     age: 30       //by key 'age' store value '30'
// };

//GET FIELDS / VALUES OF THE OBJECT
// alert(user.name); //John
// alert(user.age); //30

//ADDING A VALUE
//user.isAdmin = true;
// alert(user.isAdmin);

//DELETING A VALUE / PROPERTY
// delete user.age;
// console.log(user);

//USING MULTIWORD PROPERTY NAMES IN AN OBJECT
// let user = {
//     name: 'John',
//     age: 30,
//     'likes birds': true //multiword property name must be quoted
// };
// console.log(user);

//LAST PROPERTY IN LIST MAY END WITH A COMMA KNOWN AS A 'HANGING OR TRAILING' COMMA.
//MAKES IT EASIER TO ADD, MOVE, AND REMOVE PROPERTIES LATER.
//EX..
// let user = {
//     name: 'john',
//     age: 30, //hanging comma.
// };
// console.log(user);

//MULTIWORD PROPERTIES OF AN OBJECT CANNOT BE FOUND WITH 'USER.LIKES BIRDS' ... WILL RESULT 'ERROR'
//MUST USE BRACKET NOTATION FOR MULTIWORD PROPERTIES.
//EX..
// let user = {};

// //set
// user['likes birds'] = true;

// //get
// alert(user['likes birds']); //true

// //delete
// delete user['likes birds'];

// let user = {
//     name: 'john',
//     age: 30
// };

// let key = prompt('What do you want to know about the user?', 'name');

// //access by variable
// alert( user[key] ); // entering the key will output the stored value.
// // ex.. if name is entered as the key, output will be 'john'
// // ex.. if age is entered as the key, output will be 30


//COMPUTED PROPERTIES
// let fruit = prompt ('Which fruit to buy?', 'apple');

// let bag = {
//     [fruit]: 5, //the name of the property is taken from the variable fruit
// };

// console.log(bag);

// let fruit = prompt('what fruit do you wish to buy?', 'apple');
// let bag = {
//     [fruit + 'Computers']: 5 
// }

// console.log(bag);

//IN GENERAL USE THE '.' FOR SIMPLE PROPERTY IDEAS
// USE THE '[]' BRACKETS FOR MORE COMPLEX PROPERTY IDEAS

//RESERVED WORDS ARE ALLOWED AS PROPERTY NAMES
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3,
// };
// alert( obj.for + obj.let + obj.return ); //6


//PROPERTY VALUE SHORTHAND
// function makeUser (name, age) {
//     return {
//         name: name,
//         age: age
//     };
// }

// let user = makeUser('John', 30);
// // alert(user.name); //John

// console.log(user);

//SHORTERERER HAND
// function makeUser(name, age, car) {
//     return {
//         name,
//         age,
//         car
//     };
// }

// let user = makeUser('pete', 22, 'chevy');
// console.log(user);

//EXISTENCE CHECK

// let user = {};

// alert( user.noSuchProperty === undefined ); //true means 'no such property'

//USE 'IN' TO CHECK FOR EXISTENCE OF A PROPERTY
//EX..
// let user = {
//     name: 'Avril',
//     age: 22
// };

// alert( 'age' in user ); // true, user.age exists
// alert( 'blablabla' in user ) //fale, user.blablabla does not exist

//THE 'FOR...IN...LOOP'

// let user = {
//     name: 'Matilda',
//     age: 99,
//     isAdmin: true
// };

// for(let key in user) {
//     //keys
//     console.log( key ); //name, age, isAdmin
//     //values for the keys
//     console.log( user[key]); // Matilda, 99, true
// }


//ORDERED LIKE AN OBJECT
//integer properties are sorted, others appear in creation order
//ex..
// let codes = {
//     '49': 'Germany',
//     '41': 'Switzerland',
//     '44': 'Great Britain',
//     '1': 'USA'
// };

// for(let code in codes) {
//     console.log(code);
// }


// let user = {
//     name: 'John',
//     surname: 'Smith'
// };

// user.age = 25; // add one more

// //non-integer properties are listed in the creation order
// for (let prop in user) {
//     console.log(prop); // name, surname, age
//     console.log(user[prop]) //john, smith, 25
// }

//TO MAKE THE CODES FROM BEFORE NON-INTEGER AND APPEAR IN ORDER OF ASSIGNMENT,
//ADD THE '+' SIGN IN FRONT OF THE DIGITS.
//EX..
// let codes = {
//     '+49': 'Germany',
//     '+41': 'Switzerland',
//     '+44': 'Great Britain',
//     '+1': 'USA'
// };

// for (let key in codes) {
//     console.log( +key ); //49, 41, 44, 1
// }
   
//COPYING A PRIMATIVE
//EX..
// let message = 'psssst....wassup?';
// let phrase = message;
// console.log(message); //both message and phrase now log same 'psssst....wassup?'
// console.log(phrase);

//IN AN OBJECT, THE VARIABLE DOES NOT STORE THE OBJECT, BUT RATHER A REFERENCE TO THE OBJECT..
//OR IT'S 'ADDRESS IN MEMORY'.

// let user = {
//     name: 'John'
// };

//WHEN AN OBJECT VARIABLE IS COPIED, THE REFERENCE IS COPIED, THE OBJECT..
//IS NOT DUPLICATED

// let user = {name: 'John'};

// let admin = user; //copies the reference
// //I CAN NOW MANIPULATE THE OBJECT FROM REFERENCING USER.NAME OR ADMIN.NAME
// //IT'S LIKE HAVING A SAFE WITH TWO KEYS THAT WILL BOTH OPEN THE CONTENTS INSIDE.

// admin.name = 'pete';

// alert(user.name); //'pete', changes are seen from the user reference.


//COMPARISON BY REFERENCE
//Two objects are equal only if they are the same object

// let a = {};
// let b = a; //copy the reference

// alert( a == b ); // true, both variables reference the same object
// alert( a === b ); //true

//two independent objects that are not equal, even though they are both empty..
//ex..
// let a = {};
// let b = {}; //two independent objects

// alert(a == b); //false


//AN OBJECT DECLARED AS A 'CONST' **CAN** BE CHANGED
//EX..
// const user = {
//     name: 'Frank'
// };

// user.age = 25; // (*)

// alert(user.age); // 25

//CLONING AND MERGING, OBJECT.ASSIGN
//How to truely copy an object..
//EX..
// let user = {
//     name: 'Frank',
//     age: 30,
// };

// let clone = {}; //the new empty object

// //let's copy all user properties into it..
// for (let key in user) {
//     clone[key] = user[key];
// }

// //now clone is a fully independent clone..
// clone.name = 'Pete'; //chnaged data in it.

// console.log(user);
// console.log(clone);


//MERGING MULTIPLE OBJECTS INTO ONE
// let user = {name: 'John'};

// console.log(user);

// let permissions1 = {canView: true};
// let permissions2 = {canEdit: true};

// //copies all properties from permissions 1 and permissions2 into user..
// Object.assign(user, permissions1, permissions2);

// console.log(user);

//WE CAN USE OBJECT.ASSIGN TO REPLACE THE LOOP FOR SIMPLE CLONING..

// let user = {
//     name: 'John',
//     age: 30
// };

// let clone = Object.assign({}, user);

// clone.name = 'Nagini';
// clone.age = 167;

// console.log(user);
// console.log(clone);

// KEYS / PROPERTIES CAN BE REFERENCE TO OTHER OBJECTS, NESTED OBJECTS..
// NOT ALL OBJECT PROPERTIES ARE PRIMATIVE..
//EX..
// let user = {
//     name: 'John',
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// alert( user.sizes.height ); // 182

//EXERCISE ONE.. HELLO, OBJECT..
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// console.log(user);

// user.name = 'Pete';
// console.log(user);

// delete user.name;
// console.log(user);


//EXERCISE TWO.. CHECK FOR EMPTINESS..

// function isEmpty(obj) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             return false;
//         }
//         return true;
//     }
// }



// let schedule = {};
// console.log(schedule);
// console.log( isEmpty(schedule) );

// schedule.name = '6th grade';
// console.log(schedule);
// console.log( isEmpty(schedule) );


// ***CORRECT VERSION 1***

// let schedule = {};

// console.log(schedule);
// alert( Object.keys(schedule).length == 0 );

// schedule.name = '6th grade orientation';
// console.log(schedule);
// alert( Object.keys(schedule).length == 0 );


// ***CORRECT VERSION 2***

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// console.log( isEmpty(schedule) );

// schedule.name = '6th grade orientation';
// console.log( isEmpty(schedule) );


// //EXAMPLE 3 SUM OBJECT PROPERTIES..
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// //SOLUTION 1
// // let sum = salaries.John + salaries.Ann + salaries.Pete;
// // if (Object.keys(salaries).length == 0) {
// //     return 0;
// // }
// // console.log(sum);

// //BETTER SOLUTION *** SOLUTION FOR OBJECT OF ANY LENGTH
// let sum = 0;
// for (let key in salaries) {
//     sum = sum + salaries[key];
// }
// console.log(sum);


//EXAMPLE 4 MULTIPLY NUMERIC PROPERTIES BY 2..

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My Menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if(typeof obj[key] === 'number') {
//          obj[key] *= 2;
//         }
//     }
//     return obj;
// }

// console.log(menu);
// console.log(multiplyNumeric(menu));