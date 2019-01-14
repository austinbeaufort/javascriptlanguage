// NATIVE PROTOTYPES

// OBJECT.PROTOTYPE

// Object.prototype properties contain:
/* new Object = {
    prototype: {
        constructor: Object,
        toString: function,
        ...
};  */


// OTHER BUILT-IN PROTOTYPES
/*
Other built-in objects such as Array, Date, Function and others also 
keep methods in prototypes.

if we create an array [1, 2, 3], the default ' new Array() ' constructor is used internally..
So the array data is written into the new object, and Array.prototype becomes its prototype and
provides methods. 

All build-in prototypes have Object.prototype on the top. */



// PRIMITIVES

// WHEN TRYING TO ACCESS A PRIMITIVE'S PROPERTIES, A TEMPORARY WRAPPER OBJECT IS CREATED, 
/*
String
Number 
Boolean

Methods of these objects also reside in prototypes, available as:
String.prototype
Number.prototype
Boolean.prototype
*/



// CHANGING NATIVE PROTOTYPES

// Native prototypes can be modified. For instance, if we add a method to String.prototype, 
// it becomes available to all strings..

// String.prototype.show = function() {
//     alert(this);
// };

// 'BOOM!'.show(); // BOOM!



// BORROWING FROM PROTOTYPES

