// REST PARAMETERS

//A FUNCTION CAN BE CALLED WITH ANY NUMBER OF ARGUMENTS.

// function sumAll(...args) { // takes as many arguments as you give it.
//     let sum = 0;

//     for (let item of args) {
//         sum = sum + item;
//     }
//     return sum;
// }

// alert( sumAll(1) ); 
// alert( sumAll(1, 2) );
// alert( sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9) );



//HERE THE FIRST TWO ARGUMENTS GO INTO VARIABLES AND THE REST GO INTO 'TITLES' ARRAY

// function showName(firstName, lastName, ...titles) {
//     alert( firstName + ' ' + lastName ); // Julius Caesar

//     // the rest go into titles array
//     // i.e. titles = ['Consul', 'Imperator']
//     alert( titles[0] );
//     alert( titles[1] );
//     alert( titles.length );
// }

// showName("Julius", "Caesar", "Consul", "Imperator");

//THE REST PARAMETERS MUST BE AT THE END



// THE 'ARGUMENTS' VARIABLE

//There is also a special array-like object named arguments that contains all arguments by their index.

// function showName() {
//     alert( arguments.length );
//     alert( arguments[0] );
//     alert( arguments[1]);

// // The argument variable is iterable.
//     for (let arg of arguments) {
//         alert(arg);
//     }
// }

// showName('Julius', 'Caesar');
// showName('Ilya');

//ARROW FUNCTIONS DO NOT HAVE THEIR OWN 'THIS' OR SPECIAL 'ARGUMENTS'.



//SPREAD OPERATOR

// alert ( Math.max(3, 5, 1) ); // 5

// let arr = [3, 5, 1];

// alert( Math.max(arr) ); //NaN , was expecting a group of arguments, not an array.

// alert( Math.max(...arr) ); 5 // spread turns array into arguments.

// We can pas multiple iterables this way:
// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// alert( Math.max(...arr1, ...arr2) ); // 8

// We can combine the spread operator with normal values.

// alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// Spread operator can be used to merge arrays.

// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];

// let merged = [0, ...arr, 2, ...arr2];

// alert(merged); // 0, 3, 5, 1, 2, 8, 9, 15

//WE CAN USE THE SPREAD OPERATOR TO TURN THE STRING INTO AN ARRAY OF CHARACTERS.
// let str = 'hello';
// alert( [...str] );

// let str = 'hello';
// alert( Array.from(str) ); // h, e, l, l, o


// Array.from works on array-likes and iterables
// spread operator only on iterables