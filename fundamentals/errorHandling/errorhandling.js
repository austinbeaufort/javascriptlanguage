// there is a syntax construct 'try...catch' that allows
// to catch errors, and, instead of dying, do something more reasonable.

// the 'try...catch' syntax
// two main blocks:

// try {
//     // code...
// } catch(err) {
//     // error handling
// }

// an error instide the 'try' block does not kill the script:
// we have a chance to handle it in catch.

// an errorless example: 

// try {
//     alert('start of try runs'); 

//     alert('end of try runs');
// } catch(err) {
//     alert('Catch is ignored, because no erros')
// }

// alert('then execution continues');

// AN EXAMPLE WITH ERROR

// try {
//     alert('Start of try runs');

//     lalala; // error, variable is not defined!

//     alert('End of try (never reached) ');

// } catch(err) {

//     alert('Error has occured!');
// }

// alert('...Then execution continues');

// try...catch only works for runtime errors

// try... catch works synchronously
// if an exception happens in 'scheduled' code like 'setTimeout', then try...catch won't catch it.

// to catch an exception inside a scheduled function,
// try... catch must be inside that function



// ERROR OBJECT

// WHEN AN ERROR OCCURS, JAVASCRIPT GENERATES AN OBJECT CONTAINING THE DETAILS ABOUT IT. 
// THE OBJECT IS THEN PASSED AS AN ARGUMENT TO 'CATCH':

// try {
//     // ...
// } catch(err) { // <-- the 'error object', could use another word instead of err

// }
// for all built-in errors, the error object inside 'catch' has three main properties:
// 1. 'name'. Error name. For an undefined variable that's 'reference error'.
// 2. 'message', textual message about error details.
// 3. 'stack', current call stack.

// For instance:

// try {
//     lalala; // error, variable is not defined.
// } catch(err) {
//     alert(err.name); // reference error
//     alert(err.message); // lalala is not defined
//     alert(err.stack); // Referenceerror: lalala is not defined at..
// }



// USING 'TRY...CATCH'

// let json = '{"name":"John", "age": 30}'; // data from the server

// let user = JSON.parse(json); // convert the text representation to JS object.

// // now user is an object with properties from the string

// alert( user.name );
// alert( user.age );



// THROWING OUR OWN ERRORS

// 'throw' operator
// the throw operator generates an error
// the syntax is:

// throw <error object>

// JavaScript has many built-in constructors for standard errors:
// Error, SyntaxError, ReferenceError, TypeError, etc.
// we can use them to create error objects as well.

// let error = new Error(message);

// for built in errors, the 'name' property is exactly the name of the constructor. 
// and 'message' is taken from the argument.
// ex..
// let error = new Error('Things happen o_O');

// alert(error.name); // Error
// alert(error.message) // Things happen o_O

// try {
//     JSON.parse("{bad json o_O}");
// } catch(e) {
//     alert(e.name); // SyntaxError
//     alert(e.message); // Unexpected token o in JSON at position 0
// }

//USERS MUST HAVE A NAME, LETS THROW AN ERROR
// let json = '{"age": 30}'; // incomplete data, no name

// try {
//     let user = JSON.parse(json); // <-- no errors

//     if(!user.name) {
//         throw new SyntaxError('Incomplete data: no name'); // jumps from here to catch with the error.
//     }

//     alert( user.name );
// } catch(e) {
//     alert( 'JSON Error: ' + e.message ); // JSON Error: Incomplete data: no name.
// }



// RETHROWING

// Catch should only process errors that it knows and 'rethrow' all others.

// BELOW WE 'RETHROW' SO 'CATCH' ONLY HANDLES 'SYNTAXERROR'
// function readData() {
//     let json = '{ "age": 30 }'; // incomplete data
    
//     try {
    
//         let user = JSON.parse(json);

//         if (!user.name) {
//             throw new SyntaxError("Incomplete data: no name");
//         }

//         blabla(); // unexpected error

//         alert( user.name );

//     } catch(e) {

//         if (e.name == "SyntaxError") {
//             alert("JSON Error: " + e.message);
//         } else {
//             throw e; // rethrow
//         }
//     }
// }


// try {
//     readData();
// } catch(e) {
//     alert( 'Exernal catch got: ' + e); // caught it!
// }



// TRY... CATCH... FINALLY

// try {
//     alert('try');
//     if (confirm('Make an error?')) BAD_CODE();
// } catch(e) {
//     alert('catch');
// } finally {
//     alert('finally');
// }


// let num = +prompt("Enter a positive integer number?", 35);

// let diff, result; // declaring two variables on same line.

// function fib(n) {
//     if (n < 0 || Math.trunc(n) != n) {  // Math.trunc changes decimal to counting number.
//         throw new Error("Must not be negative, and also an integer.");
//     }
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();  // returns a timestamp in 'ms'

// try {
//     result = fib(num);
// } catch(e) {
//     result = 0;
// } finally {
//     diff = Date.now() - start;
// }

// alert(result || "error occured");

// alert( `execution took ${diff}ms`);



// GLOBAL CATCH

