"use strict";

// let user = {
//     name: 'greg',
//     age: 77
// };

// user.sayHi = function() {
//     alert('Hello');
// };

// user.sayHi();

//A FUNCTION THAT IS THE PROPERTY OF AN OBJECT IS CALLED IT'S METHOD.
//Method shorthand..
//ex..

//these objects do the same..
// let user = {
//     sayHi: function() {
//         alert('hello');
//     }
// };

// //method shorthand looks better, right?
// let user = {
//     sayHi() {
//         alert('hello');
//     }
// };

//TO ACCESS THE OBJECT, A METHOD CAN USE THE 'THIS' KEYWORD..
// let user = {
//     name: 'john',
//     age: 30,

//     sayHi() {
//         alert(this.name); //could be replaced with (user.name);
//         alert(this.age);  //could be replaced with (user.age);
//     }

// };

// user.sayHi(); // john , 30.

//IF WE DECIDE TO COPY THE OBJECT REFERENCE TO ANOTHER VARIABLE OR COPY THE OBJECT..
// ENTIRELY, FOR EXAMPLE LET ADMIN = USER. THEN (USER.NAME AND USER.AGE) WOULD THROW AN ERROR..
//   BECAUSE IT IS REFERENCING THE ADMIN OBJECT..
//    THAT IS WHY USING 'THIS' (THIS.NAME) AND (THIS.AGE) IS IMPORTANT

// THE 'THIS' KEYWORD IS NOT BOUND AND CAN BE USED IN ANY FUNCTION

//THE VALUE OF THE KEYWORD 'THIS' IS EVALUATED DURING RUN TIME AND CAN BE ANYTING
//EX..

// let user = {name: 'John'};
// let admin = {name: 'Admin'};

// function sayHi() {
//     alert( this.name );
// }

// // USING THE SAME FUNCTION IN TWO DIFFERENT OBJECTS..
// user.f = sayHi;
// console.log(user);
// admin.f = sayHi;
// console.log(admin);

// user.f(); //make sure to put the () for functions..
// admin.f();

// let user = {
//     name: 'john',
//     go: function() {
//         alert(this.name)
//     }
// };

// user.go() //John

//EXPLAIN THE VALUE OF THIS

// let obj, method;

// obj = {
//     go: function() {
//         alert(this);
//     }
// };

// obj.go(); // [object Object]

// (obj.go)(); // [object Object]

// (method = obj.go)(); //undefined

// (obj.go || obj.stop)(); // undefined


let calculator = {  //---------------------------------------------------------------------->
    
    read() {
        this.val1 = +prompt('please enter your first number', 0);
        this.val2 = +prompt('please enter your second number', 0);
    },

    sum() {
        return this.val1 + this.val2;
    },

    mul() {
        return this.val1 * this.val2;
    },

    subtract() {
        return this.val1 - this.val2;
    },

    divide() {
        return this.val1 / this.val2;
    },

    remainder() {
        return this.val1 % this.val2;
    }
};


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
alert( calculator.subtract() );
alert( calculator.divide() );
alert( calculator.remainder() );