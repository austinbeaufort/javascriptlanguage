// CLASS CHECKING: 'instanceof'

// THE 'instanceof' OPERATOR ALLOWS TO CHECK WHETHER AN OBJECT BELONGS TO A 
// CERTAIN CLASS. 

// HERE WE'LL USE IT FOR BUILDING A POLYMORPHIC FUNCTION, 
// THE ONE THAT TREATS ARGUMENTS DIFFERENTLY DEPENDING ON THEIR TYPE.


// THE 'instanceof' OPERATOR

// the syntax is..
// obj instanceof Class
// ex..
// class Rabbit {}

// let rabbit = new Rabbit();

// is it an object of Rabbit class?
// alert( rabbit instanceof Rabbit); // true


// IT ALSO WORKS WITH CONSTRUCTOR FUNCTIONS.

// instead of class..
// function Rabbit() {}

// alert( new Rabbit() instanceof Rabbit) ;

// AND WITH BUILT-IN CLASSES LIKE 'ARRAY':

// let arr = [1, 2, 3];
// alert( arr instanceof Array) // true
// alert( arr instanceof Object) // true


// The 'instanceof' operator examines the prototype chain for the check.

// ASSUME THAT ANYTHING THAT 'CANEAT' IS AN ANIMAL:
// class Animal {
//     static [Symbol.hasInstance](obj) {
//         if (obj.canEat) return true;
//     }
// }

// let obj = { canEat: true };
// alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called.



// BONUS: OBJECT 'toString' FOR THE TYPE

// let obj = {};

// alert(obj); // [object, Object]
// alert(obj.toString()); // the same

// copy toString method into a variable for convenience..
// let objectToString = Object.prototype.toString;

// // what type is this?
// let arr = [];

// alert( objectToString.call(arr) ); // [object, Array]


// Symbol.toStringTag

// let user = {
//     [Symbol.toStringTag]: "User"
// };

// alert( {}.toString.call(user) ); // [object User]