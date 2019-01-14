// IN JAVASCRIPT, FUNCTIONS ARE A 'TYPE' OF OBJECT.

// FUNCTIONS ARE SIMILAR TO CALLABLE, ACTION OBJECTS.




// THE NAME PROPERTY
// a function's name is accessible as the 'name' property..
// function sayHi() {
//     alert('hi');
// }

// alert(sayHi.name); // sayHi

// OBJECT METHODS HAVE NAMES TOO..

// let user = {

//     sayHi() {
//         alert('hi');
//     },

//     sayBye: function() {
//         alert('bye');
//     }
// }

// alert( user.sayHi.name ); // sayHi
// alert( user.sayBye.name ); // sayBye



// THE 'LENGTH' PROPERTY WILL RETURN THE NUMBER OF FUNCTION PARAMETERS
// ex..
// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}

// alert(f1.length); // 1
// alert(f2.length); // 2
// // REST PARAMETERS ARE NOT COUNTED
// alert(many.length); // 2



// CUSTOM PROPERTIES

// We can add our own properties to functions.

// function sayHi() {
//     alert('hi');

// // let's count how many times we run
//     sayHi.counter ++;
// }
// sayHi.counter = 0; // initial value

//     sayHi(); // Hi
//     sayHi(); // Hi

//     alert( `Called ${sayHi.counter} times`); // Called 2 times.


// * A property IS NOT a variable.

// function makeCounter() {
//     // instead of:
//     // let count = 0

//     function counter() {
//         return counter.count++;
//     };

//     counter.count = 0;

//     return counter;
// }

// let counter = makeCounter();
// alert( counter() ); // 0
// alert( counter() ); // 1



// NAMED FUNCTION EXPRESSIONS 'NFE'

// ORDINARY..
// let sayHi = function(who) {
//     alert(`Hello, ${who}`);
// };

// sayHi('Fred');

// ADD A NAME TO IT..
// let sayHi = function func(who) {
//     alert(`Hello, ${who}`);
// }

// sayHi('Fred');

// adding the name 'func' to the above function allows:
// 1. It allows the function to reference itself internally.
// 2. It is not visible outside of the function.

// For instance, the function sayHi below calls itself again with "Guest" if no who is provided:

// let sayHi = function func(who) {
//     if(who) {
//         alert(`Hello, ${who}`);
//     } else {
//         func('Guest'); // use func to re-call itself.
//     }
// };

// sayHi('fred'); // Hello, fred
// sayHi(); // Hello, Guest


// INTERNAL FUNCTION NAMES CAN ONLY BE USED IN FUNCTION EXPRESSIONS AND NOT FUNCTION DECLARATIONS.
// IF AN INTERNAL NAME IS NEEDED, USE A FUNCTION EXPRESSION.



// ****** TASKS ******

// SET AND DECREASE FOR COUNTER

/* Instructions
// Modify the code of makeCounter() so that the counter can also decrease and set the number:
*/

// function makeCounter() {
//     let count = 0
  
//     function counter() {
//       return count++;
//     };

//     counter.set = value => count = value;

//     counter.decrease = () => count--;
  
//     return counter;
//   }
  
//   let counter = makeCounter();
//   alert( counter() ); // 0
//   alert( counter() ); // 1
//   alert( counter.set(7) ); // 7
//   alert( counter.set(3) ); // 3



// SUM WITH AN ARBITRARY AMOUNT OF BRACKETS  // completed with assistance, will need to redo by myself.

// function sum(a) {
//     let currentSum = a;

//     function f(b) {
//         currentSum = currentSum + b;
//         return f;
//     }

//     f.toString = function() {
//         return currentSum;
//     };

//     return f;
// }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15