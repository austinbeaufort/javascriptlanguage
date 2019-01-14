//TWO WAYS TO CREATE AN EMPTY ARRAY..
// let arr = new Array();
// let arr = [];

//ARRAY WITH ELEMENTS..
// let fruits = ['Apple', 'Orange', 'Plum'];
// alert( fruits[0] );
// alert( fruits[1] );
// alert( fruits[2] );

//REPLACING PLUM..
// fruits[2] = 'Pear';
// for (i = 0; i < fruits.length; i++) {
//     alert( fruits[i] );
// }

//ADDING A NEW ELEMENT..
// fruits[3] = 'Lemon';
// for (i = 0; i < fruits.length; i++) {
//     alert( fruits[i] );
// }

//TOTAL ELEMENTS IN ARRAY IS IT'S LENGTH..
// alert( fruits.length );

//USING ALERT TO SHOW ENTIRE ARRAY AT ONCE..
// alert( fruits );

//ARRAYS CAN STORE ANY TYPE OF ELEMENTS..
//mix of values..
//ex..
// let arr = ['Apple', { name: 'John' }, true, function() { alert('hello'); } ];

//ARRAYS MAY END WITH TRAILING COMMAS.. EASIER TO INSERT/REMOVE ITEMS WITH TRAILING COMMA..
// let fruits = [
//     'apple',
//     'orange',
//     'plum',
// ];

//IN A 'QUEUE' ELEMENTS ARE FETCHED FROM BEGINNING OR ADDED TO END..

//'PUSH' APPENDS ELEMENT TO END OF ARRAY
//'SHIFT' TAKES ELEMENT FROM BEGINNING OF ARRAY

//IN A 'STACK' ELEMENTS ARE FETCHED FROM END OR ADDED TO END..

//'PUSH' APPENDS AN ELEMENT TO END OF ARRAY
//'POP' TAKE AN ELEMENT FROM END OF ARRAY

//JAVASCRIPT ARRAYS WORK BOTH AS A QUEUE AND A STACK..
// ELEMENTS CAN BE TAKEN OR ADDED TO THE BEGINNING AND END OF AN ARRAY..

//METHODS TO WORK WITH END OF ARRAY..
// 'POP' 
// let fruits = ['apple', 'orange', 'pear'];
// fruits.pop();
// alert ( fruits );


// 'PUSH'

// let fruits = ['apple', 'orange'];

// fruits.push('pear');

// alert( fruits );

//METHODS TO WORK WITH BEGINNING OF ARRAY..
// 'SHIFT'
// let fruits = ['apple', 'orange', 'pear'];
// fruits.shift(); //removes apple
// alert( fruits );

// 'UNSHIFT'
// let fruits = ['orange', 'pear'];
// fruits.unshift('apple');
// alert( fruits ); //apple added to beginning of array

//'PUSH' AND 'UNSHIFT' CAN ADD MULTIPLE ELEMENTS AT ONCE..
// let fruits = ['apple'];

// fruits.push('orange', 'peach'); //adds to end
// fruits.unshift('pineapple', 'lemon') //adds to beginning

// alert( fruits );



//INTERNALS

//ARRAYS ARE OBJECTS AND BEHAVE LIKE OBJECTS..
//ex..
// let fruits = ['banana'];

// let arr = fruits; //copy by reference (two variables reference the same array)

// alert( fruits );
// alert( arr );
// alert( arr === fruits );

// arr.push('pear'); //modify the array by reference. 
//(remember only one array but two reference points, one box, two keys)
// alert ( arr );
// alert ( fruits );

//ARRAYS ARE BEST USED WITH 'ORDERED DATA'



//PERFORMANCE

//'push' and 'pop' are fast
//'shift' and 'unshift' are slow

//'SHIFT' DOES 3 THINGS..
// 1. REMOVES ELEMENT WITH INDEX 0
// 2. MOVE ALL ELEMENTS TO THE LEFT, RENUMBER THEM FROM INDEX 1 TO 0, 2 TO 1, ETC..
// 3. UPDATE THE LENGTH PROPERTY

//'UNSHIFT WORKS IN A SIMILAR WAY EXCEPT ADDS AN ELEMENT TO THE ARRAY



//LOOPS WITH ARRAYS

// let arr = ['apple', 'orange', 'pear'];

// for (let i = 0; i < arr.length; i++) {
//     alert ( arr[i] );
// }

//'for..of' loop

//iterates over array elements..
// let fruits = ['apple', 'orange', 'plum'];

// for (let fruit of fruits) {
//     alert( fruit );
// }

//TRUNCATING ARRAYS..
// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; //truncate to 2 elements
// alert ( arr );

// arr.length = 5; //return length back
// alert( arr );  //the values do not return..


//BEST WAY TO CLEAR AN ARRAY..
// arr.length = 0;
// alert( arr );



//MULTIDIMENSIONAL ARRAYS

//ARRAYS CAN HAVE ITEMS THAT ARE ALSO ARRAYS. CAN HELP STORE MATRICES..

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// alert( matrix[2][0] );



//TOSTRING

//ARRAYS HAVE THEIR OWN 'toString' METHOD
//EX..
// let arr = [1, 2, 3];

// alert ( arr ); //1, 2, 3

// alert( String(arr) === '1,2,3' );




//ARRAY OPERATIONS
// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// alert( styles );
// styles[Math.floor(styles.length / 2)] = 'Classics';
// alert( styles );
// alert( styles.shift() );
// styles.unshift('Rap', 'Reggae');
// alert( styles );




//SUM INPUT NUMBERS

// function sumInput() {

//     arr = [];

//     while (true) {
        
//         let num = prompt('Enter a value to be added to the sum');

//         if ( num === '' || num === null || !isFinite(num) ) break;

//         arr.push(+num);

//     }

//    let sum = 0;
   
//    for (let number of arr) {
//         sum = sum + number;
//    }

//    return sum;

// }


// alert( sumInput() );



//A MAXIMAL SUBARRAY
//HAD A  DIFFUCULT TIME UNDERSTANDING THIS ONE AT FIRST..

// function getMaxSubSum(arr) {

//     let maxSum = 0; // if we take no elements, zero will be returned

//     for (let i = 0; i < arr.length; i ++) {
//         let sumFixedStart = 0;
//         for (let j = i; j < arr.length; j++) {
//             sumFixedStart += arr[j];
//             maxSum = Math.max(maxSum, sumFixedStart);
//         }
//     }

//     return maxSum;
// }


// alert( getMaxSubSum([-1, 2, 3, -9]) );
// alert( getMaxSubSum([100, 99, -20, 1]) );