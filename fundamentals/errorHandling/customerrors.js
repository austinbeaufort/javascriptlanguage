// CUSTOM ERRORS, EXTENDING ERROR

// EXTENDING ERROR

// // PSEUDOCODE
// class Error {
//     constructor(message) {
//         this.message = message;
//         this.name = "Error";
//         this.stack = //<nested calls>;
//     }
// }

// // now lets inherit Validationerror from it:

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// function test() {
//     throw new ValidationError("Whoops!");
// }

// try {
//     test();
// } catch(err) {
//     alert(err.message); // WHOOPS
//     alert(err.name); // VALIDATIONERROR
// }



// FURTHER INHERITANCE

