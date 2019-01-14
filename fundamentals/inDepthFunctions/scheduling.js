// RUNNING A FUNCTION AT A GIVEN TIME LATER..

// TWO METHODS:

// 1. 'setTimeout' allows to run a function once after the interval of time.

// 2. 'setInterval' allows to run a function regularly with the interval between the runs.



// setTimeout

// EX..
// function sayHi() {
//     alert('Hi');
// }

// setTimeout(sayHi, 1000);

// With arguments..
// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
// }

// setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John (function, timer, argument, argument)

// ex..
// setTimeout(() => alert('Hello'), 1000); // takes the function directly also as shown.



// SET INTERVAL

// repeat with the interval of 2 seconds
// let timerId = setInterval( () => alert('tick'), 2000 ); 

// // after 5 seconds stop

// setTimeout( () => { clearInterval(timerId); alert('stop'); }, 5000);



// RECURSIVE setTimeout

// Two ways of running something regularly..
// One is setInterval, the other is a recursive setTimeout..

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimout( tick, 2000 );
// }, 2000);


// let i = 0;

// let start = Date.now();  //sets a frozen timestamp for now in miliseconds.

// function count() {

//     for (let j = 0; j < 1e9; j++) {
//         i++;
//     }

//     alert('Done in ' + (Date.now() - start) + 'ms');  //creates a new frozen timestamp for this moment, subtracts the initial timestamp to give us time taken to run the for loop in milliseconds.
// }

// count();  // Done in 2735 ms


//SAME FUNCTION, BUT SPLITTING THE JOB USING NESTED setTimeout:

// let i = 0;

// let start = Date.now(); // sets timestamp frozen as of right now.

// function count() {
//     do {
//         i++;
//     } while (i % 1e6 != 0); // counts to the given number. A number divided by itself is one and leaves no remainder. All numbers before the number / itself give decimals / fractions.

//     if (i == 1e9) {
//         alert ('Done in ' + (Date.now() - start) + 'ms');
//     } else {
//         setTimeout(count, 0); // schedule the new call.
//     }
// }

// count();


// TRADEOFF, CAN WORK WHILE PROCESSING, BUT TAKES ABOUT 6 SECONDS LONGER TO PROCESS.


// let start = Date.now(); // freezes timestamp for right now.
// let times = []; 

// setTimeout(function run() {
//     times.push(Date.now() - start); // remember delay from previous call.

//     if (start + 100 < Date.now()) alert(times);
//     else setTimeout(run, 0); // else re-schedule 
// })



// Allowing the browser to render



// ****** TASKS ******

// OUTPUT EVERY SECOND

/* Instructions
    Write a function printNumbers(from, to) 
    that outputs a number every second, starting from from and ending with to.
*/

// function printNumbers(from, to) {

//     let current = from;

//     let timerId = setInterval(function() {
//         alert(current);
        
//         if(current == to) {
//             clearInterval(timerId);
//         }

//         current++;
//     }, 1000);

// }

// ** 2nd Variation with Recursion

// function printNumbers(from, to) {

//     let current = from;

//     setTimeout(function rerun() {
//         alert(current);

//         if(current != to) {
//             setTimeout(rerun, 1000);
//         }
//         current++;

//     }, 1000)

// }

// printNumbers(3, 7);
// printNumbers(12, 23);



// REWRITE 'SETTIMEOUT' TO 'SETINTERVAL'

// let i = 0;

// let start = Date.now();  // FREEZES TIMESTAMP AT CURRENT MOMENT IN CODE IN 'MS'

// let timer = setInterval(count, 0);

// function count() {

//     for(let j = 0; j < 100000; j++) {
//         i++;
//     }

//     if (i == 1000000000) {
//         alert( 'Done in ' + (Date.now() - start) );
//         clearInterval(timer);
//     }

// }

// count();