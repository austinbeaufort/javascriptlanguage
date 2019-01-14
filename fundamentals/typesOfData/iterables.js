//ITERABLES

// let range = {
//     from: 1,
//     to: 5
// }

// for (let num of range) {
//     console.log(num);
// }  //RANGE IS NOT ITERABLE.. :(


//Symbol.iterator is a built in symbol just for making items iterable
let range = {
    from: 1,
    to: 5
}

// //1. call to for..of initially calls this
// range[Symbol.iterator] = function() {

//     //...it returns the iterator object:
//     //2. Onward, for..of works only with this iterator, asking it for next values

//     return {
//         current: this.from,
//         last: this.to,

//         //3. next() is called on each iteration by the for..of loop
//         next() {
//             //4. it shoudl return the value as an object
//             if (this.currrent <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return {done: true };
//             }
//         }
//     };
// };

// //now it works!
// for (let num of range) {
//     alert(num);
// }