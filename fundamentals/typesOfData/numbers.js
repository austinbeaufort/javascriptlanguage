// FOR LARGE NUMBERS 'e' IS USED IN PLACE OF ZEROS..
//EX..
// let billion = 1000000000
// let billion = 1e9;
// alert(billion);

//EX2..
// let sevenBillion = 7300000000
// let sevenBillion = 7.3e9
// alert(sevenBillion);

//'e' MULTIPLIES THE NUMBER BY 1 WITH THE GIVEN ZEROES COUNT
//ex..

// 1e3 = 1 * 1000 = 1000
// 1.23e6 = 1.23 * 1000000 = 1230000

//MICROSECONDS
// let ms = 0.000001;
//same as
// let ms = 1e-6;
// alert(ms);

//EX2..
// 1e-3 = 1 / 1000 = 0.001

// 1.23e-6 = 1.23 / 1000000 = 0.00000123

//HEX, BINARY, AND OCTAL NUMBERS

//HEXADECIMAL
// alert(0xff);
// alert(0xFF); //CASE DOES NOT MATTER

//BINARY
// alert(0b11111111);

//OCTAL
// alert(0o377);

//TOSTRING(BASE);
//RETURNS A STRING REPRESENTATION OF THE NUMBER IN THE NUMERAL SYSTEM WITH THE GIVEN BASE..
//EX..
// let num = 255;

// alert( num.toString(16) ); //ff
// alert( num.toString(2) ); //11111111

// BASE 16 IS USED FOR HEX COLORS, CHARACTER ENCODING DIGITS ARE 0-9 AND A-F

// BASE 2 IS FOR DEBUGGING AND BITWISE OPERATIONS, DIGITS 0 AND 1

// BASE 36 IS THE MAXIMUM, DIGITS ARE 0-9 AND A-Z. 

//ROUNDING

//BUILT IN ROUNDING FUNCTIONS..

//MATH.FLOOR ROUNDS DOWN..
// alert(Math.floor(3.2));
// alert(Math.floor(7.7));

//MATH.CEIL ROUNDS UP..
// alert(Math.ceil(3.2));
// alert(Math.ceil(7.7));

//MATH.ROUND WORKS AS NORMAL ROUNDING..
// alert(Math.round(3.5));
// alert(Math.round(3.2));
// alert(Math.round(7.7));

//MATH.TRUNC REMOVES ANYTHING AFTER THE DECIMAL POINT WITHOUT ROUNDING..
// alert(Math.trunc(3.2));
// alert(Math.trunc(6.6));
// alert(Math.trunc(7.7));

//WAYS TO ROUND TO THE 'nth' DECIMAL POINT..
// let num = 1.23456;
// alert(Math.floor(num * 100) / 100); 

//TOFIXED.. 
//rounds the number to 'n' digits and returns a string representation of the result..
//ex..
// let  num = 12.34
// alert(num.toFixed(1)); // '12.3'

//IF DECIMAL IS SHORTER THAN REQUIRED WITH 'TOFIXED', DECIMALS ARE APPENDED TO THE END..
// let num = 12.34;
// alert( num.toFixed(5) ); //'12.34000' ..added zeros to make five decimal digits.

//BEWARE OF IMPERCISION WITH DECIMALS...
// alert(0.1 + 0.2 == 0.3); //false 
//FIND THE IMPERCISION IN THE CONSOLE.LOG PRINT OUT..
// console.log(0.1 + 0.2);
//THIS OCCURS BECAUSE 0.1 AND 0.2 ARE UNENDING FRACTIONS IN BINARY FORM..

//EX2..
// alert( 0.1.toFixed(20) );
//WHEN SUMMING 0.1 AND 0.2 THE PERCISION LOSSES ADD UP..

//USING 'TOFIXED' TO ROUND DECIMALS TO AN APPROPRIATE AMOUNT FIXES THE ERROR if fewer 
//decimal places are needed..
//EX..
// let sum = 0.1 + 0.2;
// alert( sum.toFixed(2) ); // '0.30' ..string

//same example but as a number return...
// let sum = 0.1 + 0.2;
// alert( +sum.toFixed(2) ); //0.30

//another strange example..
// 



//TESTS 'isFinite' AND 'isNaN' 
// alert(isNaN(NaN)); //true
// alert( isNaN('str') ); //true

//NaN is unique and does not equal anything..including itself..
// alert( NaN === NaN); //false

//isFinite..converts argument to a number..
// alert(isFinite('15') ); //true
// alert( isFinite('str') ); //false
// alert( isFinite(Inifinity) ); //false

//USING 'ISFINITE' TO VALIDATE IF A STRING VALUE IS A REGULAR NUMBER..
// let num = +prompt('Enter a number', '');
// alert(isFinite(num));



//PARSEINT AND PARSEFLOAT
//numeric conversion using '+' and Number() is strict. 
//if a value is not exactly a number it fails..
//ex..
// alert( + '100px'); //NaN

//parseInt and parseFloat fix this problem..
//ex..
// alert( parseInt('100px') ); //100
// alert( parseFloat('12.5em') ); //12.5

// alert( parseInt('12.3') ); //12
// alert( parseFloat('12.3.4') ); //12.3 ..the second point stops the reading

//OTHER MATH FUNCTIONS..
// alert( Math.random() ); 

// alert( Math.max(3, 8, 9, 100, 4) );

// alert ( Math.min(-4, 77, -55, 3) );

// alert( Math.pow(3, 4) );


//CREATE A SCRIPT THAT ADDS TWO NUMBERS AND THEN SHOWS THEIR SUMS..
// let val1 = +prompt('enter a number', '0');
// let val2 = +prompt('enter a second number', '0');

// alert(val1 + val2);


//REPEAT UNTIL THE INPUT IS A NUMBER..
// function readNumber() {
//     let num;

//     do {
//         num = prompt('Enter a number please?', 0);
//     } while ( !isFinite(num) );

//     if (num === null || num === '') return null;

//     return +num;
// }

// alert(`Read: ${readNumber()}`);


//REPEAT UNTIL INPUT IS A NUMBER REDO..

// function readNumber() {
//     let num;

//     do {
//         num = prompt('Please please enter an actual number..');
//     } while( !isFinite(num) );

//     if (num === null || num === '') {
//         return null;
//     }

//     return +num;
// }

// alert(`Read: ${readNumber()}`);


//A random integer from min to max..
// function random(min, max) {
//     return Math.random() * (max - min) + min;
// }

// alert(random(1, 7));


//A RANDOM INTEGER FROM MIN TO MAX..
// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// alert( randomInteger(1, 7) );