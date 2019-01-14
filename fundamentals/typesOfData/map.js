//MAP, SET, WEAKMAP, AND WEAKSET

//MAP
// Map is a collection of keyed data items, just like Object.
// Objects allow only string keys.
// Map allows keys of any type.
//ex..
// let map = new Map();

// map.set('1', 'str1'); //a string key
// map.set(1, 'num1');   //a numeric key
// map.set(true, 'bool1'); //a boolean key

// alert( map.get(1) );    // 'num1'
// alert( map.get('1') );  // 'str1'
// alert( map.get(true) ); // 'bool1'
// alert( map.size );      // 3


// ****** MAP CAN ALSO USE OBJECTS AS KEYS*******

// let john = { name: 'John' };

// //for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john Object is the key for the map
// visitsCountMap.set(john, 123);

// alert( visitsCountMap.get(john) );


//MAP FROM OBJECT
//array of [key, value] pairs
// let map = new Map([
//     ['1', 'str1'],
//     [1, 'num1'],
//     [true, 'bool1']
// ]);

// let map = new Map(Object.entries({
//     name: 'john',
//     age: 30
// }));



//ITERATION OVER MAP
//3 methods
// 1. map.keys() returns an iterable for keys
// 2. map.values() returns an iterable for values
// 3. map.entries() returns an iterable for entries.
//ex..
// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ]);

// //iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
//     alert(vegetable);
// }

// //iterate over values (amounts)
// for (let amount of recipeMap.values()) {
//     alert(amount);
// }

// //iterate over [key, value] entries
// for (let entry of recipeMap) {
//     alert(entry);
// }

//MAP HAS A BUILT IN 'FOREACH' METHOD, SIMILAR TO AN ARRAY
// recipeMap.forEach( (value, key, map) => {
//     alert(`${key}: ${value}`);
// })



// *** SET ***

// A Set is a collection of values, where each may only occur once.


// //counting each visitor only once!
// let set = new Set();

// let john = { name: 'John'};
// let pete = { name: 'Pete'};
// let mary = { name: 'Mary'};

// //visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// //set keeps only unique values
// alert( set.size ); // 3

// for (let user of set) {
//     alert(user.name);
// }



// //ITERATION OVER SET
// //We can loop over a set either with for..of or using forEach:

// let set = new Set(['oranges', 'apples', 'bananas']);

// for (let value of set) alert(value);

// // the same with forEach:
// set.forEach((value) => {
//     alert(value);
// })



//WEAKMAP AND WEAKSET
// WeakSet is a special kind of Set that does not prevent JavaScript from removing it's items from memory.
// WeakMap is same thing for Map.

//KEYS IN WEAKMAPS MUST BE OBJECTS
//ex..
// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, 'ok');

//in a weakmap if no other references relate to object besides the map key, object will be removed,
// ex..
// let john = { name: 'john' };

// let weakMap = new WeakMap();
// weakMap.set(john);

// john = null // overwrite the reference object and john is removed from memory.

// //using WeakMap to get rid of unecessary information
// let john = { name: 'John' };

// let visitsCountMap = new WeakMap();

// visitsCountMap.set(john, 123);

// // now john leaves, we don't need him anymore
// john = null;

// there are no references except WeakMap,
// so the object is removed both from the memory and from visitsCountMap automatically

//WEAKSET
// let messages = [
//     {text: 'hello', from: 'john'},
//     {text: 'how goes?', from: 'john'},
//     {text: 'see you soon', from: 'alice'}
// ];

// //fill it with array elements (3 items)
// let unreadSet = new WeakSet(messages);

// //use unreadSet to see whether a message is unread
// alert( unreadSet.has(messages[1]) ); // true

// //remove it from the set after reading
// unreadSet.delete(messages[1]); //true

// //when we shift our message history, the set is cleaned up automatically.
// messages.shift();
// alert(messages); // shows 2 objects



// ****** TASKS *******

//FILTER UNIQUE ARRAY MEMBERS

// let arr = [];

// function unique(dataSet) {
//     let set = new Set();
//     dataSet.forEach((str) => {
//         set.add(str);
//     });
     
//     arr = Array.from(set);
    
//     return arr;
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) );



//FILTER ANAGRAMS  
//this first was my attempt, i got it correct, but the words are sorted in order XD 
//correct solution will be below my attempt..
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// let secondArr = [];
// let thirdArr = [];
// let cleanArr = [];

// function aclean(dataSet) {
    
//     for (let i = 0; i < dataSet.length; i++) {
//         let lowerStr = dataSet[i].toLowerCase();
//         let newStr = lowerStr.split('');
//         newStr.sort();
//         secondArr.push(newStr);
//     }

//     for (let i = 0; i < secondArr.length; i++) {
//         let newWord = secondArr[i].join('');
//         thirdArr.push(newWord);
//     }

//     let set = new Set();
//     thirdArr.forEach((item) => {
//         set.add(item);
//     });

//     cleanArr = Array.from(set);

//     console.log(cleanArr);

// }

// aclean(arr);


//correct solution..
// function aclean(dataSet) {
//     let map = new Map();

//     for (let word of dataSet) {
//         let sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);    //stores each key value pair as ('sorted word', 'original word');
//     }
//     return Array.from(map.values());
// }
    
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert( aclean(arr) );