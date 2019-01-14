// JSON METHODS, toJSON

// one way to convert object to string.

// let user = {
//     name: 'John',
//     age: 30, 

//     toString() {
//         return `{name: "${this.name}", age: ${this.age}}`;
//     }
// };

// alert(user);



// JSON.STRINGIFY

// JSON.stringify to convert objects to JSON.
// JSON.parse to convert JSON back to an object.
//ex..

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };

// let json = JSON.stringify(student);

// alert(typeof json); //string
// alert(json);        // JSON encoded object


// STRINGS USE DOUBLE QUOTES. NO SINGLE QUOTES OR BACKTICKS IN JSON.

// SUPPORTED JSON TYPES:
/*
OBJECTS
ARRAYS
PRIMATIVES:
    STRINGS
    NUMBERS
    BOOLEAN VALUES
    NULL
*/

// // a number in JSON is just a number
// alert ( JSON.stringify(1) ); // 1

// // a string in JSON gets double quotes
// alert( JSON.stringify('test') ); // "test"

// alert( JSON.stringify(true) ); //true

// alert( JSON.stringify([1, 2, 3]) ); //[1, 2, 3]


// FUNCTIONS PROPERTIES (METHODS), SYMBOLIC PROPERTIES, AND PROPERTIES
// THAT STORE 'UNDEFINED' ARE SKIPPED BY JSON..

// NESTED OBJECTS ARE SUPPORTED ALSO..
// let meetup = {
//     title: 'Conference',
//     room: {
//         number: 23,
//         participants: ['john', 'ann']
//     }
// };

// alert( JSON.stringify(meetup) ); // works fine



// EXCLUDING AND TRANSFORMING: REPLACER

// full syntax: let json = JSON.stringify(value[, replacer, space]);



//FORMATTING: SPACER

// let user = {
//     name: 'John',
//     age: 25,
//     roles: {
//         isAdmin: false,
//         isEditor: true
//     }
// };

// alert(JSON.stringify(user, null, 2));



//CUSTOM 'toJSON'

// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     }
//   };
  
//   let meetup = {
//     title: "Conference",
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room
//   };

//   alert( JSON.stringify(room) ); // 23
//   alert( JSON.stringify(meetup) );



// JSON.parse

// stringified array
// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// alert( numbers );


// stringified nested objects
// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// user = JSON.parse(user);

// alert( user.friends[1] ); // 1



// USING REVIVER
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
// });

// alert( meetup.date.getDate() );


// let schedule = `{
//     "meetups": [
//       {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//       {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//     ]
//   }`;

//   schedule = JSON.parse(schedule, function(key, value) {
//       if (key == 'date') return new Date(value);
//       return value;
//   });

//   alert( schedule.meetups[1].date.getDate() ); //returns date on line 152



// ****** TASKS ******

// TURN OBJECT INTO JSON AND BACK

/* Instructions
Turn the user into JSON and then read it back into another variable.
*/

// let user = {
//     name: 'John Smith',
//     age: 35
// };

// user = JSON.stringify(user);
// alert( user );

// let newUserObject = JSON.parse(user);
// alert( newUserObject );



// EXCLUDE BACKREFERENCES

/* Instructions
Write replacer function to stringify everything, but remove properties that reference meetup:
*/

// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     occupiedBy: [{name: "John"}, {name: "Alice"}],
//     place: room
//   };
