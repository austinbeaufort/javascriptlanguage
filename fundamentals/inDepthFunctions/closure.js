// ****** CLOSURE ******

// let name = 'John';

// function sayHi() {
//     alert( 'Hi, ' + name);
// }

// name = 'Pete';

// sayHi();  // Pete



// function makeWorker() {
//     let name = "Pete";

//     return function() {
//         alert(name);
//     };
// }

// let name = 'John';

// //create a function
// let work = makeWorker();

// work(); // Pete



// LEXICAL ENVIRONMENT

// A VARIABLE IS A PROPERTY OF A SPECIAL INTERNAL OBJECT, ASSOCIATED WITH
// THE CURRENTLY WORKING BLOCK/FUNCTION/SCRIPT.

// WORKING WITH VARIABLES IS ACTUALLY WORKING WITH PROPERTIES OF THAT OBJECT.



// FUNCTION DECLARATION

// FUNCTIONS ARE PROCESSED WHEN THE ENVIRONMENT IS CREATED
// 'LET' VARIABLES ARE WHEN EXECUTION REACHES THEM.

// WHEN CODE WANTS TO ACCESS A VARIABLE - IT IS FIRST SEARCHED FOR IN THE INNER LEXICAL ENVIRONMENT,
// THEN IN THE OUTER ONE, THEN THE MORE OUTER ONE, AND SO ON UNTIL THE END OF THE CHAIN.

// A FUNCTION GETS OUTER VARIABLES AS THEY ARE NOW. IT USES THE MOST RECENT VALUES.

// A NEW FUNCTION LEXICAL ENVIRNMENT IS CREATED EACH TIME A FUNCTION RUNS.

// EACH FUNCTION CALL HAS IT'S OWN UNIQUE LEXICAL ENVIRONMENT.



// NESTED FUNCTIONS

// function sayHiBye(firstName, lastName) {

//     //helper nested function to use below
//     function getFullName() {
//         return firstName + " " + lastName;
//     }

//     alert( 'Hello, ' + getFullName() );
//     alert( 'Bye, ' + getFullName() );
// }

// sayHiBye('Fred', 'Rogers');


// EXAMPLE WITH CONSTRUCTOR FUNCTION

// function User(name) {

//     this.sayHi = function() {
//         alert(name);
//     }
// }

// let user = new User('John');
// user.sayHi();


// AN EXAMPLE WITH RETURNING A FUNCTION

// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++; // has access to the outer counter.
//     }
// }

// let counter = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1
// alert( counter() ); // 2



// ENVIRONMENTS IN DETAIL



// CODE BLOCKS AND LOOPS, IIFE

// LEXICAL ENVIRONMENTS ALSO EXIST FOR CODEBLOCKS. THEY ARE CREATED WHEN A CODEBLOCK
// RUNS AND CONTAIN BLOCK-LOCAL VARIABLES. HERE ARE A COUPLE OF EXAMPLES.



// IF

// let phrase = 'Hello';

// if (true) {
//     let user = 'John';

//     alert( `${phrase}, ${user}`);
// }

// alert(user);



// FOR, WHILE

// FOR A LOOP, EVERY ITERATION HAS A SEPERATE LEXICAL ENVIRONMENT.
// IF A VARIABLE IS DECLARED IN 'FOR', THEN IT IS ALSO LOCAL TO THAT LEXICAL ENVIRONMENT.

// CODE BLOCKS

// WE CAN USE A 'BARE' CODE BLOCK TO ISOLATE VARIABLES INTO THE LOCAL SCOPE.

// IF WE CREATE A GLOBAL VARIABLE IN ONE SCRIPT, IT BECOMES AVAILABLE TO OTHERS.
// COULD BECOME A SOURCE OF CONFLICT IF TRYING TO DECLARE SAME VARIABLE IN DIFFERENT SCRIPT GLOBALLY.

// {
//     //do some job with local variables that should not be seen outside
    
//     let message = 'hello';

//     alert(message); // hello
// }

// alert(message) // Error: message not defined


// IFFE

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
//..in old scripts, we can find IFFE's invoked to keep code hidden from global scope

// (function() {
//     let message = 'hello';

//     alert(message); // Hello
// })();



// GARBAGE COLLECTION

// REAL-LIFE OPTIMIZATIONS


// ****** TASKS ******

// SUM WITH CLOSURES

/* Instructions
Write function sum that works like this: sum(a)(b) = a+b.
*/

// function sum(a) {
//     return function(b) {
//         return (a + b);
//     }
// }


// alert( sum(5)(3) );



// FILTER THROUGH FUNCTION

/* Instructions
Make a set of “ready to use” filters:
inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.
*/
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {

//     let newArr = [];
//     arr.forEach(function(num) {
//         if (num <= b & num >= a) {
//             newArr.push(num);
//         }
//     });
//     alert ( newArr );
// }

// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     }
// }


// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2



// SORT BY FIELD  ..Definitely needed help with this one.. will return to it to try again.

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
// }


// users.sort(byField('name'));
// users.forEach(user => alert(user.name)); // Ann, John, Pete

// users.sort(byField('age'));
// users.forEach(user => alert(user.name)); // Pete, Ann, John
