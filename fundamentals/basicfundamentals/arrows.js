// function sayHi() {
//     alert('hello');
// }

// sayHi();

//ANOTHER WAY TO WRITE SAME FUNCTION

// let sayHi = function() {
//     alert('hello');
// };

// sayHi();

//SHOWING A FUNCTIONS CODE
// function sayHi() {
//     alert('hello');
// }

// alert(sayHi);

//COPYING A FUNCTION TO A NEW VARIABLE
// function sayHi() { //(1) create
//     alert('hello');
// }

// let func = sayHi;  // (2) copy

// func(); //Hello    // (3) run the copy
// sayHi(); //Hello   // The original still works too.

// IF USING A FUNCTION LIKE:
// LET SAYHI = FUNCTION () {} , THEN A ';' IS NEEDED AT END BECAUSE IT'S A STATEMENT

//IF USING A NORMAL FUNCTION..
//FUNCTION SAYHI() {} , THEN NO ';' IS NEEDED.


//CALLBACK FUNCTIONS
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert('you agreed');
// }

// function showCancel() {
//     alert('you canceled the execution');
// }

// //usage: functions showOk, showCancel are passed as agruments to ask.
// ask('Do you agree?', showOk, showCancel);

//SAME CODE USING ANNONYMOUS FUNCTIONS
//NOTE THAT THESE FUNCTIONS ARE ONLY AVAILABLE INSIDE THE ASK STATEMENT BECAUSE THEY ARE ANNONYMOUS AND LOCAL
// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     function() { alert('You agreed.'); },
//     function() { alert('You canceled the execution.'); }
// );


//FUNCTION DECLARATION
//this function is usable in the entire block of code above or below.
//JS looks at function declarations before the rest of the codeblock.
// function sum(a, b) {
//     return a + b;
// }

//FUNCTION EXPRESSION
//this function is only usable in code after it has been declared.
// let sum = function(a, b) {
//     return a + b;
// }

// sayHi('John'); //Hello, John
// //the above function call will run because the function declaration below is created before JS runs the script.
// function sayHi(name) { 
//     alert(`Hello, ${name}`);
// }


// sayHi('Jane'); //throws error, undefined.

// let sayHi = function(name) { //the above code will throw error. Callbacks for this function will only run
//     //after it's 'let declaration'.
//     alert(`Hello, ${name}`);
// }; // ';' needed for the statement declaration.


//IF FUNCTION IS DECLARED LOCALLY IT CANNOT BE SEEN OUTSIDE THE LOCAL CODE BLOCK. EXAMPLE..
// let age = prompt('what is your age?, 18');

// //conditionally declare a function
// if (age < 18) {

//     function welcome() {
//         alert('hello');
//     }

// } else {

//     function welcome() {
//         alert('greetings');
//     }

// }

// // ...use it later
// welcome(); //Error: welcome is not defined.


// let age = prompt('what is your age?', 18);

// let welcome;

// if (age < 18) {
//     welcome = function() {
//         alert('hello');
//     };

// } else {
//     welcome = function() {
//         alert('greetings');
//     };

// }

// welcome(); //ok

//SAME FUNCTION IN TERNARY FORM
// let age = prompt('what is your age?', 18);

// let welcome = (age < 18) ?
//     function() {alert('hello!'); } :  //annonymous function that are local to the statement.
//     function() {alert('greetings') };

// welcome();

//IT IS MOST COMMON TO USE A FUNCTION DECLARATION RATHER THAN A FUNCTION EXPRESSION.


//ARROW FUNCTIONS

//general syntax
// LET FUNC = (ARG1, ARG2, ...ARGN) => EXPRESSION

//example of original code..
// let sum = function(a, b) {
//     return a + b;
// };

//same code in arrow notation..
// let sum = (a, b) => a + b;  //the word 'return' can be ommitted.

// alert(sum(1, 2)); //3


//if there is only one argument parenthesis can be ommitted.

//with parenthesis example..
//let double = function(n) {
//     return n * 2;
// }

//without parenthesis example..
// let double = n => n * 2;

// alert(double(3)); //6


//IF NO ARGUMENTS, PARENTHESIS MUST BE PRESENT, BUT SHOULD BE EMPTY
//example..
// let sayHi = () => alert('Hello!');

// sayHi();


//ARROW FUNCTIONS CAN BE USED IN THE SAME WAY AS FUNCTION EXPRESSIONS.
// let age = prompt('what is your age?', 18);

// let welcome = (age < 18) ?
//     () => alert('hello') : //created an annonymous function using arrow notation.
//     () => alert('greetings');

// welcome(); 


//MULTILINE ARROW FUNCTIONS
//must enclose in curly braces and use normal return..
//example..
// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// };

// alert(sum(1, 2)); //3


//TASK 1 .. REWRITE WITH ARROW EXPRESSIONS

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask (
    "do you agree?",
    () => alert('you agreed'),
    () => alert('you canceled the execution')
);