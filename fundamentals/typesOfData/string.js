//STRINGS CAN BE ENCLOSED IN SINGLE QUOTES, DOUBLE QUOTES, OR BACKTICKS..
//EX..
// let single = 'single';
// let double = "double";
// let backticks = `backticks`;

//BACKTICKS ALLOW US TO EMBED ANY EXPRESSION INTO A STRING, INCLUDING FUNCTION CALLS..
//EX..
// function sum(a, b) {
//     return a + b;
// }

// alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


//BACKTICKS ALSO ALLOW A STRING TO SPAN MULTIPLE LINES..
//EX..
// let guestList = `Guests:
//     * John
//     * Pete
//     * Mary
// `;

// alert(guestList);

//SAME GUESTLIST BUT OLDSCHOOL WITH STANDARD QUOTES..
// '\n' means to create a new line..

// let guestList = "Guests:\n * John\n * Pete\n *Mary";

// alert(guestList);

//BELOW IS 'HELLO WORLD' WITH EACH WORD ON AN INDIVIDUAL LINE..
// THE FIRST WAY IS USING THE STANDARD QUOTES..
// alert("Hello\nWorld");

//THE SECOND WAY IS USING BACKTICKS..
// alert(`Hello
// World`);

//INSERTING AN APOSTROPHE OR QUOTE WITHIN A STRING..
// alert('I\'m the Walrus!');

//TO SHOW A BACKSLASH, WE MUST ESCAPE THE BACKSLASH SYMBOL WITH ITSELF..
// SOMETHING LESS CLEAR AS MUD..
//  EX..
// alert( `The backslash: \\` );


//USING '.LENGTH'
//ex..
// alert('moose'.length);
// alert(`My\n`.length);  //  '\n' is considered one character, this will output 3.

// '.LENGTH' IS A PROPERTY NOT A FUNCTION, SO '()' IS NOT NEEDED


//ACCESSING CHARACTERS..
//ex..
// let str = 'Hello';

//the first character..
// alert( str[0] ); //H
// alert( str.charAt(0) ); // H also

//the last character..
// alert( str[str.length - 1] ); //o

// let str = 'Hello';

// alert( str[1000] ); //undefined
// alert( str.charAt(1000) ); // '' (an empty string)

//LOOPING OVER CHARACTERS USING "FOR..OF"
//EX..
// for (let char of "Hello") {
//     alert(char); //H,e,l,l,o
// }

//STRINGS CANNOT BE CHANGED ..A NEW STRING MUST BE CREATED...
//EX..
// let str = 'Hi';

// str = 'h' + str[1]; //replace the string

// alert( str ); //hi


//CHANGING THE CASE..

//toLowerCase
// alert( 'Interface'.toLowerCase() ); //interface

//toUpperCase
// alert( 'Interface'.toUpperCase() ); //INTERFACE


//CHANGING A SINGLE CHARACTER..
// alert( 'Interface'[0].toLowerCase() ); // 'i'


//SEARCHING FOR A SUBSTRING..

//str.indexOf(substring, position);
//ex..
// let str = 'Widget with id';

// alert( str.indexOf('Widget') ); // 0, because Widget is at the beginning
// alert( str.indexOf('widget') ); // -1, case-sensitive..

// alert( str.indexOf('with') ); // returns 7 because the word 'with' starts at character 7.
// alert( str.indexOf('id') ); // 1, 'id' is found at the position 1. ..I do not understand why we get 1?


// let str = 'Widget with id';

// alert(str.indexOf('id', 2) ); // 12 , id begins at the position 12.


// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; //let's look for 'as'

// let pos = 0;
// while(true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;

//     alert( `Found at ${foundPos}` );
//     pos = foundPos + 1; // continue the search from the next position
// }

//A SHORTER VERSION OF ALGORITHM ABOVE..
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//     alert(pos);
// }

//CHECKING FOR WIDGET..
// let str = 'Widget with id';

// if(str.indexOf('Widget') != -1) {
//     alert('We found it'); 
// }

//USING THE '~' SIGN AS A SHORTCUT TO FIND A SUBSTRING..
// let str = "Widget";

// if (~str.indexOf("Widget")) {
//     alert( 'Found it!' ); 
// }

//USING 'INCLUDES, 'STARTSWITH', AND 'ENDSWITH'
//str.includes(substring, position)
//ex..
// alert( "Widget with id".includes("Widget") ); // true

// alert( "Hello".includes("Bye") ); // false

//USING THE SECOND ARGUMENT IN 'INCLUDES'..
//EX..
// alert('Widget'.includes('id') ); // true

// alert('Widget'.includes('id', 3) ); //false, starts searching at position 3, AKA letter 'g' in 'Widget'.

//STARTSWITH..
// alert('Widget'.startsWith('Wid') ); //true

//ENDSWITH..
// alert('Widget'.endsWith('get') ); //true



//THREE WAYS TO GET A SUBSTRING
//1. SUBSTRING
//2.SUBSTR
//3.SLICE

//str.slice(start [,end]);

//ex..
// let str = 'stringify';
// alert( str.slice(0, 5) ); //does not include 5
// alert( str.slice(0, 1) ); // will only grab the first letter
// alert( str.slice(2) ); // goes to end of string if no 2nd argument is given.

//negative values count from the end of the string to slice..
// ex..
//starts with the 4th position from the right, ends with the 1st position from the right
// alert( str.slice(-4, -1) );


//str.substring(start [, end])
// let str = 'stringify';

//these are the same for substring..
// alert( str.substring(2, 6) ); //'ring'
// alert( str.substring(6, 2) ); //'ring'

//but not for slice..
// alert( str.slice(2, 6) ); //'ring'
// alert( str.slice(6, 2) ); // '' (an empty string)

//negative arguments are NOT SUPPORTED in substring.


//str.substr(start [, length])
//returns the part of the string from start, with the given length.
// allows us to specify the length of characters we want instead of the ending position.

// let str = 'stringify';
// alert( str.substr(2, 4) ); //ring, from the second position grabs 4 characters.

//the first argument may be negative to count from the end..
//alert( str.substr(-4, 2) ); //counts 4 back from the end, 'g', grabs 2 characters, 'g and i'.



//COMPARING STRINGS
//strings are typically compared character by character in alphabetical order.

// a lowercase letter is always greater than an uppercase letter..
// alert( 'a' > 'Z'); 


//str.codePointAt(pos)
//different case letters have different codes
// alert( 'z'.codePointAt(0) ); //122
// alert( 'Z'.codePointAt(0) ); //90

//String.fromCodePoint(code)
// creates a character by it's numeric code
//ex..
// alert( String.fromCodePoint(90) ); // Z

//LOOPING THE CODEPOINTS..
// let str = '';

// for (let i = 65; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }

// alert( str );



//WRITE A FUNCTION THAT RETURNS A STRING WITH UPPERCASED FIRST CHARACTER..
// function ucFirst(str) {
//     let properName = str[0].toUpperCase() + str.slice(1);
//     return properName;
// }

// alert( ucFirst('fred') );
// alert( ucFirst('janet') );
// alert( ucFirst('gertrude') );
// alert( ucFirst('henry') );




//CHECK FOR SPAM..  
// function checkSpam(str) {
//     if (~str.toLowerCase().indexOf('viagra') || ~str.toLowerCase().indexOf('xxx')) {
//         return true;
//     }
//     return false;
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free XXX') );
// alert( checkSpam('innocent rabbit') );
// alert( checkSpam('three blind mice') );
// alert( checkSpam('free xxxxx') );



//TRUNCATE THE TEXT..
// function truncate(str, maxlength) {
//     if(str.length > maxlength) {
//         return str.slice(0, maxlength -1) + '...';
//     }
//     return false;
// }

// alert( truncate('once upon a midnight dreary', 15) );
// alert( truncate('do you like green eggs and ham?', 9) );
// alert( truncate('to be or not to be, that is the question', 22) );



//EXTRACT THE MONEY..
// function extractCurrencyValue(str) {
//     return +(str.slice(1));
// }

// alert( extractCurrencyValue('$456') === 456);
// alert( extractCurrencyValue('$576543') === 576543);
// alert( extractCurrencyValue('$56') === 56);