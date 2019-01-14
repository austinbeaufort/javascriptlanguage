//array.push(items) adds items to end
//array.pop() extracts item from end
//array.shift() extracts item from beginning
//array.unshift(items) adds items to beginning

//ADD / REMOVE ITEMS

//SPLICE
//delete an item from array..
// let arr = ['i', 'go', 'home'];

// delete arr[1]; //remove 'go'

// alert( arr[1] ); //undefined

// //now arr = ['i', , 'home'];
// alert( arr.length ); //3

//..THE ABOVE WAS NOT BEST WAY..

//..BEST WAY IS ARR.SPLICE(STR)

//THE SYNTAX.. arr.splice(index [, deleteCount, elem1, ..., elemN]);

//DELETING USING ARR.SPLICE
// let arr = ['i', 'study', 'javascript'];

// arr.splice(1, 1); //from index 1, remove 1 element

// alert( arr );

//DELETE AND REPLACE..
// let arr = ['i', 'study', 'javascript', 'right', 'now'];

//remove 3 first elements and replace them with another 2
// arr.splice(0, 3, "Let's", 'dance');

// alert( arr );

//can assign removed elements to a variable..
// let arr = ['i', 'study', 'javascript', 'right', 'now'];

//remove 2 first elements
// let removed = arr.splice(0, 2);

// alert( removed );

//can also insert elements without removing elements..
// let arr = ['i', 'study', 'javascript'];

//from index 2
// delete 0
// then insert 'complex' and 'language'

// arr.splice(2, 0, 'complex', 'language'); //javascript gets pushed out of 2 spot and to spot 4.

// alert( arr );

//NEGATIVE INDEXES ARE ALLOWED..
// let arr = [1, 2, 5];

//from index -1 (one step from end)
//delete 0 elements,
//then insert 3 and 4.

// arr.splice(-1, 0, 3, 4);

// alert ( arr );

//SLICE
//syntax: arr.slice(start, end);

//it returns a new array containing all items from start to end, not including end.
//works same as str.slice();
//ex..
// let str = 'test';
// let arr = ['t', 'e', 's', 't'];

// alert( str.slice(1, 3) ); //es
// alert( arr.slice(1, 3) ); //e, s

// alert( str.slice( -2) ); //st
// alert( arr.slice(-2) ); //s, t

//CONCAT
//arr.concat joins the array with other arrays or items

//syntax: arr.concat(arg1, arg2, ...argN);

//ex..
// let arr = [1, 2];

//merge arr with [3, 4]
// alert( arr.concat([3, 4]) ); //1, 2, 3, 4

//merge arr with [3, 4] and [5, 6]
// alert( arr.concat([3, 4], [5, 6]) );

//merge arr with [3, 4], then add values 5, 6
// alert( arr.concat([3, 4], 5, 6) );

//objects added as a whole, arrays are spread

// let arr = [1, 2];

// let arrayLike = {
//     0: 'something',
//     length: 1
// };

// alert( arr.concat(arrayLike) ); //1, 2, [object Object];

//this can be fixed with adding following property to the object..
//[Symbol.isConcatSpreadable]: true

// let arr = [1, 2];

// let arrayLike = {
//     0: 'something',
//     1: 'else',
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };

// alert( arr.concat(arrayLike) ); //1, 2, something, else



//ITERATE: FOREACH
//arr.forEach allows to run a function for every element of array.

//syntax: 
// arr.forEach(function(item, index, array) {
    // ... do something
// });

//showing each element of an array..
// ['bilbo', 'gandalf', 'nazgul'].forEach(alert);

// ['bilbo', 'gandalf', 'nazgul'].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
// });



//SEARCHING IN ARRAY
//indexOf .. arr.indexOf(item, from)

//lastIndexOf .. arr.lastIndexOf(item, from)

//includes .. arr.includes(item, from)

//ex..
// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); //position 1
// alert( arr.indexOf(false) ); //position 2
// alert( arr.indexOf(null) ); //not found, -1
// alert( arr.includes(1) ); // 1 is an element, true


//find and findIndex
/*syntax: 
let result = arr.find(function(item, index, array) {
    should return true if item is what we are looking for
});
*/

// let users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Pete'},
//     {id: 3, name: 'Mary'}
// ];

// let user = users.find(item => item.id == 1);

// alert(user.name);


//FILTER METHOD
// let users = [
//     {id: 1, name: 'john'},
//     {id: 2, name: 'pete'},
//     {id: 3, name: 'mary'}
// ];

//returns array of the first two users
// let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.length);



//TRANSFORM AN ARRAY

//map
// let lengths = ['bilbo', 'gandalf', 'nazgul'].map(item => item.length);
// alert( lengths ); //5, 7, 6 ..returns length of characters in word.


//sort(fn)
//arr.sort sorts the array *in place*

// let arr = [1, 2, 15];

//the method reorders the content of arr (and returns it)
// arr.sort();

// alert( arr ); // 1, 15, 2 
// it does this because the numbers were converted to strings..

//how to fix the problem..
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [ 1, 2, 15 ];

// arr.sort(compareNumeric);

// alert(arr); //1, 2, 15


//same sorting method but shorter..
// let arr = [1, 2, 15];

// arr.sort(function(a, b) {return a - b});  //even shorter with arrow.. arr.sort( (a, b) => a - b);

// alert(arr);


//reverse
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// alert ( arr );

//SPLIT AND JOIN

//TAKING A STRING AND CONVERTING IT TO AN ARRAY FOR USE..

// let names = 'bilbo, gandalf, nazgul';

// let arr = names.split(', ');

// alert( arr );

// for (let name of arr) {
//     alert( `A message to ${name}.` );
// }


//SPLIT INTO LETTERS
// let str = 'test';
// alert( str.split('') ); //t,e,s,t


//JOIN
// let arr = ['bilbo', 'gandalf', 'nazgul'];

// let str = arr.join(';');

// alert( str );


//REDUCE / REDUCERIGHT

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert( result );

//arr.reduceRight goes from right to left.



//ARRAY.ISARRAY
//determine if a value is an array..
// alert(Array.isArray( {} ) ); //false , it's an object
// alert(Array.isArray( [] ) ); //true, it's an array



// MOST METHODS SUPPORT 'THISARG'


// TASKS

// CONVERT DASHES TO CAMELCASE

// function camelize(str) {
//     let arr = str.split('-');
//     let firstWord = arr[0];
//     let newPhrase = firstWord;

//     for (let i = 1; i < arr.length; i++) {
//         let word = arr[i];
//         let capLetter = word.slice(0, 1).toUpperCase();
//         let endWord = word.slice(1);
//         let newWord = capLetter + endWord;
//         newPhrase += newWord;
//     }
//     alert(newPhrase);
// }

// camelize('three-blind-mice');
// camelize('to-be-or-not-to-be?');
// camelize('background-color');
// camelize('list-style-image');



// FILTER RANGE //Should not modify original array, create a new array.

// function filterRange(arr, a, b) {

//     let filteredArr = [];

//     arr.forEach(function(item) {
//         if (item >= a && item <= b) {
//         filteredArr.push(item);
//         }
//     });

//     console.log(filteredArr);
//     alert(filteredArr);

// }
// test1 for filterRange();
// let myArray = [5, 3, 8, 1];
// filterRange(myArray, 1, 4);
// test2 for filterRange();
// let secondArray = [100, 62, 4, 3, 22, 77];
// filterRange(secondArray, 15, 80);



// FILTER RANGE 'IN PLACE' //Should only modify original array and NOT create new array.

// function filterRangeInPLace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             // alert(arr); // Un-comment this line to see array changing item by item.
//         }
//     }
//     alert( arr );
// }

// test1
// let myArr = [5, 3, 8, 1];
// filterRangeInPLace(myArr, 1, 4);

// test2
// let secondArr = [22, 56, 3, 45, 101, 77];
// filterRangeInPLace(secondArr, 23, 99);



// SORT IN REVERSE ORDER
// let arr = [5, 2, 1, -10, 8];

// arr.sort(function(a, b) {
//     return b - a; //compares and orders each set of 2 numbers a and b.
// });

// alert(arr);



// COPY AND SORT ARRAY

// let myArr = ['HTML', 'JavaScript', 'CSS'];
// let secondArr = ['mooseDroppings', 'aardvarks', 'cowbell', 'pigs'];

// function copySorted(arr) {
//     let copyArr = arr.slice(0);
//     copyArr.sort();
//     alert(copyArr);
//     alert(arr);
// }

// copySorted(myArr);
// copySorted(secondArr);



//CREATE AN EXTENDABLE CALCULATOR
//NEED TO REDO, NEEDED HELP..
//STILL BROKEN, WILL RETURN TO THIS PROBLEM..

// function Calculator() {
    
//     let methods = {

//         '-': (a, b) => a - b
//         },

//         '+': (a, b) => a + b

//         }

//     }

//     this.calculate = function(str) {

//         let split = str.split(' ');
//         a = +split[0];
//         op = split[1];
//         b = split[2]
//     }

//         if (!methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return methods[op](a, b);
//     }

//     this.addMethod = function(name, func) {
//         methods[name] = func;

// }

// let calc = new Calculator;

// alert( calc.calculate('3 + 7') );



// //MAP TO NAMES
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name);
// let ages = users.map(item => item.age);

// alert( names );
// alert( ages );



//MAP TO OBJECTS
// let john = { name: 'John', surname: 'Smith', id: 1 };
// let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
// let mary = { name: 'Mary', surname: 'Key', id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(item => ({fullName: item.name + ' ' + item.surname, id: item.id}) );

// for (let i = 0; i < usersMapped.length; i++) {
//     alert(usersMapped[i].id);
//     alert(usersMapped[i].fullName);
// }



//SORT OBJECTS
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };

// let arr = [ john, pete, mary ];

// function sortByName(users) {
//    users.sort(function(a, b) {
//        if (a.name > b.name) {
//            return 1
//        } else {
//            return -1
//        }
//    });
// }

// sortByName(arr);

// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i].name);
// }



//GET AVERAGE AGE
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 29 };

// function getAverageAge(users) {
//     let ageArr = users.map(item => item.age);
    
//     let sum = 0;

//     for (let i = 0; i < ageArr.length; i++) {
//         sum = sum + ageArr[i];
//     }
//     let average = sum / ageArr.length;
//     return average;
// }

// let arr = [ john, pete, mary ];
// alert ( getAverageAge(arr) );



//FILTER UNIQUE ARRAY MEMEBERS

// function unique(arr) {

//     let result = [];

//     for (let string of arr) {

//         if( !result.includes(string) ) {
//             result.push(string);
//         }
//     }
//     return result;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) );
