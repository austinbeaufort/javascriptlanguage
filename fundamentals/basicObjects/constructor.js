//USING A CONSTRUCTOR FUNCTION

// function User(name) {  // ---------------------------------------------------------->
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User('Jack');
// let user2 = new User('Cindy');
// let user3 = new User('Leroy');


// alert(user.name); //Jack
// alert(user.isAdmin); //false

// console.log(user);
// console.log(user2);
// console.log(user3);


//METHODS IN CONSTRUCTOR FUNCTIONS..
// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         alert( 'My name is: ' + this.name );
//     };
// }

// let john = new User('John');

// john.sayHi(); // My name is: John


//CONSTRUCTOR FUNCTION CALCULATOR ------------------------------------------------------------------------->
// function Calculator(val1, val2) { 
    
//     this.read = function() {
//         this.val1 = +prompt('Enter a value', 0);
//         this.val2 = +prompt('Enter another value', 0);
//     }

//     this.sum = function() {
//         return this.val1 + this.val2;
//     }

//     this.mul = function () {
//         return this.val1 * this.val2;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( 'Sum=' + calculator.sum() );
// alert( 'Mul=' + calculator.mul() );

//CREATING AN ACCUMULATING VALUE WITH CONSTRUCTOR FUNCTION.. -------------------------------------------->
// function Accumulator(startingValue) {

//     this.value = startingValue;
    
//     this.read = function() {
//         this.newValue = +prompt('Enter a new value!');
//         this.value = this.value + this.newValue;
//     }

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

