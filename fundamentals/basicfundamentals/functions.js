//BASIC FUNCTION
// function showMessage() {
//     alert("Howdy y'all!");
// }

// showMessage();  //CALLING THE FUNCTION

//LOCAL VARIABLES
//VARIABLES DECLARED INSIDE A FUNCTION ARE ONLY VISIBLE WITHIN THAT FUNCTION
// function showMessage() {
//     let message = "Hello, I'm Javascript"; //local variable
//     alert(message);
// }

// showMessage();
// alert(message); // this results in an error because message was declared inside the showMessage() function
//                 //and cannot be seen outside of that function.

//OUTER VARIABLES
//A function can access outer variables.
// let userName = 'John';

// function showMessage() {
//     let message = 'Hello, ' + userName;
//     alert(message);
// }

// showMessage(); //John is allowed to be pulled from outside the function inside, just not vice versa.


//The function has full access to the outer variable and can modify the variable if necessary.

// let userName = 'John';

// function showMessage() {
//     userName = 'Bob'; // changed the outer variable.

//     let message = "Hello, " + userName;
//     alert(message); //outputs the changed variable 'hello, Bob'.
// }

// alert(userName); //John before the function call below.

// showMessage();

// alert(userName); //Bob, the value was modified when the function was called.

//USING THE SAME-NAMED VARIABLE.


//THE DIFFERENCE BETWEEN THE ABOVE AND BELOW FUNCTION IS THE LOWER FUNCTION RE-DECLARES THE VARIABLE WITH 'LET USERNAME' WHICH ONLY CHANGES THE VALUE INSIDE THE FUNCTION.

// let userName = 'John';

// function showMessage() {
//     let userName = "Bob"; //declare a local variable.

//     let message = 'Hello, ' + userName; //Bob
//     alert(message);
// }
// //the function will create and use it's own username.
// showMessage();

// alert(userName); //John, unchanged, the function did not access the outer variable. 


//SHADOWING GLOBAL VARIABLES OCCURS WHEN  A VARIABLE WITH THE SAME NAME IS DECLARED INSIDE A LOCAL FUNCTION.
//MODERN CODE HAS FEW OR NO GLOBAL VARIABLES.


//PARAMETERS
// function showMessage(from, text) { //parameters also called functional arguments 'from, text' are passed to this function.
//     alert(from + ': ' + text);
// }

// showMessage('Ann', 'Hello!'); 
// showMessage('Ann', "What's up?");

//EXAMPLE 2
// function showMessage(from, text) {
//     from = '*' + from + '*'; //make from look nicer
//     alert(from + ': ' + text);
// }

// showMessage('ann', 'hey sup');

// let from = 'Ann';
// showMessage(from, "Hello"); // *Ann*: Hello

// //the value of 'from' is the same, the function modified a local copy
// alert(from);


//DEFAULT VALUES
// function showMessage(from, text = 'no text given') {
//     alert(from + ": " + text);
// }

// showMessage('Ann'); //Ann: no text given
// showMessage('Ann', 'where is my pizza?');

//EXAMPLE 2 PASSING A FUNCTION AS A DEFAULT VALUE

// function showMessage(from, text = hi()) {
//     alert(from + " " + text);
// }

// function hi() { //this function gets called inside of the showMessage function when no 2nd parameter is entered.
//     return 2 + 2;
// }

// showMessage('Ann'); //returns Ann 4
// showMessage('Ann', 'hi'); //returns 'Ann hi' because the default value for text / function does not kick in.


//RETURNING A VALUE
// function sum(a, b) {
//     return a + b;
// }

// let result = sum(1, 2);
// alert(result); //3

//once return is reached, function stops and value is returned to the calling code.

// function checkAge(age) {
//     if (age > 18) {
//           return true;
//     } else {
//         return confirm('Do you have permission from your parents?');
//     }
// }

// let age = prompt('How old are you?', 18);

// if (checkAge(age)) { // the function decides true or false based on the initial return value, or the return value from the confirm statement in 'else' above. accept would be true, cancel would be false.
//     alert('Access granted');
// } else {
//     alert('Access denied');
// }

// checkAge(19);

//USING RETURN WITHOUT A VALUE
// function showMovie(age) {
//     if (!checkAge(age)) {
//         return;
//     }
//     alert('Showing you the movie'); // (*)
//     // ...
// }

// showMovie(17);


//empty functions or empty returns give the value undefined.
//both of the following functions return the same values.

// function doNothing() {

// }

// function doNothing() {
//     return;
// }

// alert(doNothing()); // returns undefined.
// alert(doNothing() === undefined); //returns true because the function returns 'undefined';

//ALL THINGS BEING RETURNED MUST GO ON SAME LINE AS THE 'RETURN' KEYWORD.

//FUNCTION NAMING IDEAS
//get .. return a value
//calc .. calulate something
// create .. create something
// check .. check something and return a boolean, etc.

//NAMING EXAMPLES
//showMessage()
//getAge()
//calcSum()
//createForm()
//checkPermission()

//GENERAL RULE FOR CREATING FUNCTIONS IS 'ONE FUNCTION - ONE ACTION'
//two independent actions deserve two independent functions.

//functions should be short and do exactly one thing.

//BELOW ARE TWO WAYS TO WRITE THE SAME PRIMES TO THE VALUE 'N'.
//the first way shows one function total.
//the second way shows breaking up of the ideas into two functions for easier understanding.

//WAY #1

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
        
//         for(let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//         alert(i);
//     }
// }

//WAY #2  , this method is more self describing.

// function showPrimes(n) {
    
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;

//         alert(i); // a prime
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// showPrimes(23);


//REWRITING IF FUNCTION USING '?' AND THEN '||'

// function checkAge(age) {
//     return((age > 18) ? true : confirm('Do you have your parents permission?'));
// }

// function checkAge(age) {
//     return ((age > 18) || confirm('Do you have your parents permission?'));
// }

// checkAge(17);


//FUNCTION THAT RETURNS THE SMALLEST NUMBER
//SOLUTION #1
// function min(a, b) {
//     if (a < b) {
//         alert(a);
//     } else {
//         alert(b);
//     }
// }

//SOLUTION #2
// function min(a, b) {
//     return a < b ? a : b;
// }
// result = min(888, 777);
// alert(result);

// function pow() {
//     let x = +prompt('Enter a base Number');
//     let n = +prompt('Enter number to exponentiate by: ');
//     alert(x ** n);
// }

// pow();

// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result = result * x;
//     }

//     return result;
// }

// let x = prompt("x?", '');
// let n = prompt('n?', '');

// if (n < 1) {
//     alert(`Power ${n} is not supported,
//     use an integer greater than 0`);
// } else {
//     alert(pow(x, n));
// }

//POWER SOLUTION SIMPLIFIED.
// function pow(x, n) {
//     return x ** n;
// }

// let x = prompt('enter a base value');
// let n = prompt('enter an exponential value');

// if (n < 1) {
//     alert(`your number ${n} is not an integer greater than one, please try again`);
// } else {
//     alert(pow(x, n));
// }