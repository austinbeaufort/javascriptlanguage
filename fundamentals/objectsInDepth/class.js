// THE 'CLASS' SYNTAX ALLOWS TO DEFINE PROTOTYPE-BASED CLASSES WITH A CLEAN, 
// NICE LOOKING SYNTAX.

//THE 'CLASS' SYNTAX

// prototype-based class User:
// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHi = function() {
//     alert(this.name);
// }

// let user = new User('john');
// user.sayHi();


// THE SAME USING 'CLASS' Syntax

// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         alert(this.name);
//     }

// }

// let user = new User('John');
// user.sayHi();

// METHODS IN A 'CLASS' *DO NOT* HAVE COMMAS BETWEEN THEM.

// CLASS USER DOES 2 THINGS.
/*
1. Declares a variable User that references the function named 'constructor'
2. Puts methods listed in the definition into User.prototype. 
    Here, it includes sayHi and constructor.
*/


// GETTERS / SETTERS

// Classes may also include getters/setters. 

// class User {
//     constructor(name) {
//         // invokes the setter
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length < 4) {
//             alert("Name is too short.");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User('John');
// alert(user.name); // John

// user2 = new User('Tim');


// ONLY METHODS

// UNLIKE OBJECT LITERALS, NO PROPERTY:VALUE ASSIGNMENTS ARE ALLOWED INSIDE CLASS. 
// THERE MAY ONLY BE METHODS, GETTERS, AND SETTERS.

// IF WE REALLY NEED TO PUT A NON-FUNCTION VALUE INTO A PROTOTYPE, THEN WE CAN 
// ALTER PROTOTYPE MANUALLY.

// class User {}

// User.prototype.test = 5;

// alert( new User().test ); // 5

// AN IN-CLASS ALTERNATIVE IS TO USE A GETTER:

// class User {
//     get test() {
//         return 5;
//     }
// }

// alert( new User().test ); // 5

// THE GETTER VARIANT IS ACTUALLY A BIT SLOWER.



// CLASS EXPRESSION

// JUST LIKE FUNCTIONS, CLASSES CAN BE DEFINED INSIDE ANOTEHR EXPRESSION,
// PASSED AROUND, RETURNED, ETC.
// EX..

// function makeClass(phrase) {
//     // declare a class and return it
//     return class {
//         sayHi() {
//             alert(phrase);
//         };
//     }
// }

// let User = makeClass('Hello');
// new User().sayHi(); // Hello



// STATIC METHODS

// We can also assign methods to the class function, not to it's 'prototype'.
// Such methods are caled 'static.'

// class User {
//     static staticMethod() {
//         alert(this === User);
//     }
// }

// User.staticMethod(); // true

// USUALLY STATIC METHODS ARE USED TO IMPLEMENT FUNCTIONS THAT BELONG TO THE CLASS,
// BUT NOT TO ANY PARTICULAR OBJECT OF IT..

// FOR INSTANCE, WE HAVE 'ARTICLE' OBJECTS AND NEED A FUNCTION TO COMPARE
// THEM. THE NATURAL CHOICE WOULD BE ARTICLE.COMPARE, LIKE THIS:

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date;
//     }
// }

// // usage

// let articles = [
//     new Article('Mind', new Date(2016, 1, 1)),
//     new Article('Body', new Date(2016, 0, 1)),
//     new Article('JavaScript', new Date(2016, 11, 1))
// ];

// articles.sort(Article.compare);

// alert( articles[0].title ) // Body



// Imagine we need a few ways to create an article:
// 1. Create by given parameters( title, date, etc.)
// 2. Create an empty article with today's date.
// 3. ...

// The first way can be implemented by constructor. And for the second one
// we can make a static method of the class.

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static createTodays() {
//         // remember, this = Article
//         return new this("Today's digest", new Date());
//     }
// }

// let article = Article.createTodays();

// alert( article.title ); // Today's digest.