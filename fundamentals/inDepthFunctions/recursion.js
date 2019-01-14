// RECURSION AND STACK

//ITERATIVE THINKING FOR POWER PROBLEM
// function pow(x, n) {
//     let result = 1;

//     //multiply result by x n times in the loop
//     for (let i = 0; i < n; i++) {
//         result = result * x;
//     }
    
//     return result;
// }

// alert( pow(3, 4) ); 


//RECURSIVE THINKING FOR POWER PROBLEM
// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// A SIMPLER REWRITE..
// function pow(x, n) {
//     return(n == 1) ? x : (x * pow(x, n - 1));
// }

// alert( pow(3, 4) );



//RECURSIVE TRAVERSALS

// let company = {
//     sales: [{
//         name: 'John',
//         salary: 1000
//     }, {
//         name: 'Alice',
//         salary: 600
//     }],

//     development: {
//         sites: [{
//             name: 'Peter',
//             salary: 2000
//         }, {
//             name: 'Alex',
//             salary: 1800
//         }],

//         internals: [{
//             name: 'Jack',
//             salary: 1300
//         }]
//     }
// };

// function sumSalaries(department) {
//     if (Array.isArray(department)) { // case 1
//         return department.reduce((prev, current) => prev + current.salary, 0);  //sum the array
//     } else {  // case 2
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum = sum + sumSalaries(subdep); // recursively calls for subdepartments, sums the results.
//         }
//         return sum;
//     }
// }

// alert( sumSalaries(company) );



// RECURSIVE STRUCTURES

// Linked List -- AN OBJECT WITH VALUE, AND 'NEXT' PROPERTY
//EX..
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };



// ****** TASKS ******

// SUM ALL NUMBERS TILL THE GIVEN ONE

/* Instructions
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
Make 3 solution variants:
Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
*/

// ** Loop **
// function sumTo(n) {
    
//     let sum = 0;

//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// alert( sumTo(4) );

// ** Recursion ** 
// function sumTo(n) {
//     if(n === 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }

// alert( sumTo(100) );

// **Arithmetic Progression Formula **
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }

// alert( sumTo(100) );



// CALCULATE FACTORIAL USING RECURSION

/* Instructions
The task is to write a function factorial(n) that calculates n! using recursive calls.
*/

// function factorial(n) {
//     if (n === 1) {
//         return n;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// alert( factorial(5) );



