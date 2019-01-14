// ARROW FUNCTIONS HAVE NO 'THIS'

// let group = {
//     title: 'our group',
//     students: ['john', 'pete', 'alice'],

//     showList() {
//         this.students.forEach(
//             student => alert(this.title + ': ' + student) // no error because this is not allowed in arrow functions and will look outside the function for 'this', in this case it's the object.
//         );
//     }
// };

// group.showList();


// ARROW FUNCTIONS CANNOT RUN WITH 'NEW'

// ARROW FUNCTIONS CANNOT BE USED AS CONSTRUCTORS

// ARROWS HAVE NO 'ARGUMENTS'

// function defer(f, ms) {
//     return function() {
//         setTimeout(() => f.apply(this, arguments), ms)
//     };
// }

// function sayHi(who) {
//     alert('Hello, ' + who);
// }

// let sayHiDeffered = defer(sayHi, 2000);
// sayHiDeffered('John'); // Hello, John after 2 seconds.