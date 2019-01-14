//&& OPERATOR WILL RETURN THE FIRST FALSY VALLUE.
// alert(1 && 0); //RETURNS 0;
// alert(1 && 5); //RETURNS 5;
// alert(null && 5); //returns null;
// alert(0 && 'no matter what'); //returns 0;\

// //null is returned.
// alert(1 && 2 && null && 3);

// //last value returned when all values truthy.
// alert(1 && 2 && 3);

// //ANOTHER WAY TO WRITE AN 'IF' STATEMENT.
// let x = 1;
// (x > 0) && alert('Greater than zero!');

// alert(!true); //returns false.
// alert(!!null); //returns false. Negates the negation.

// alert(Boolean('non-empty string')); //returns true.
// alert(Boolean(null)); //returns false.

// let age = 16

// if (age <= 14 || age >= 90) {
//     alert('good age range');
// }

let age = 16;

if (age >= 14 || age <= 90) {
    alert('crazyAge');
}