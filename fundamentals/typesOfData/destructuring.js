// DESTRUCTURING ASSIGNMENT IS A SPECIAL SYNTAX THAT ALLOWS US 
// TO UNPACK ARRAYS OR OBJECTS INTO A BUNCH OF VARIABLES.

//EX..
// let arr = ['Ilya', 'Kantor'];

//destructuring assignment
// let [firstName, surname] = arr;

// alert(firstName); //Ilya
// alert(surname); //Kantor

// let [firstName, surname] = 'Ilya Kantor'.split(' '); //splits string into array, then into individual variables.

// alert(firstName);
// alert(surname);

//UNWANTED ARRAY ELEMENTS CAN BE THROWN AWAY VIA EXTRA COMMA..
//ex..
//first and second elements are not needed
// let [, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

// alert(title);


//WORKS WITH ANY ITERABLE ON RIGHT SIDE
// let [a, b, c] = 'abc';
// alert(a);
// alert(b);
// alert(c);

// let [one, two, three] = new Set([1, 2, 3]);


//ASSIGN TO ANYTHING AT THE LEFT SIDE
// let user = {};
// [user.name, user.surname] = 'Ilya Kantor'.split(' ');

// alert(user.name); //Ilya


// //LOOPING WITH .ENTRIES()
// let user = {
//     name: "John",
//     age: 30
//   };

// //loop over keys and values
// for (let [key, value] of Object.entries(user)) {
//     alert(`${key}:${value}`); // name:John, age:30
// }


//SAME FOR MAP
// let user = new Map();
// user.set('name', 'John');
// user.set('age', '30');

// for (let [key, value] of user.entries()) {
//     alert(`${key}:${value}`);
// }


//THE REST '...'
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(name1);
// alert(name2);

// alert(rest[0]); //Consul
// alert(rest[1]); //of the Roman Republic
// alert(rest.length); //2


//DEFAULT VALUES
// let [firstName, surname] = [];

// alert(firstName); // undefined

//can provide a default value to replace any missing value.
// ex..
// let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];

// alert(name); // Julius (from array)
// alert(surname); // Anonymous (default used, no value exists)

//default values can be more complex expressions or function calls also..
// let [name = prompt('name?'), surname = prompt('surname?')] = ['Julius'];

// alert(name); // Julius (from array)
// alert(surname) // whatever prompt gets..



// OBJECT DESTRUCTURING
// ex..
// let options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// };

// let {title, width, height} = options;

//this works too
// let {title, width, height} = { title: 'Menu', width: 100, height: 200 };

// alert(title);
// alert(width);
// alert(height);

//to assign a property to a variable with a different name if assigning entire object as whole..
// let {width: w, height: h, title} = options

// alert(title);
// alert(w);
// alert(h);

//for missing properties we can set the value..
// let options = {
//     title: 'Menu'
// };

// let {width = 100, height = 200, title} = options;

// alert(title);
// alert(width);
// alert(height);

//DEFAULT VALUES CAN BE ANY EXPRESSION OR FUNCTION..
// let options = {
//     title: 'Menu'
// };

// let {width = prompt('width?'), title = prompt('title?')} = options;

// alert(title); //Menu
// alert(width); // no value, so default prompts for a value.


//COMBINING RENAMING VARIABLES WITH ASSIGNING VARIABLES VALUES THAT HAVE NONE.

// let options = {
//     title: 'Menu'
// };

// let {width: w = 100, height: h = 200, title} = options;

// alert(title);
// alert(w);
// alert(h);


// THE REST OPERATOR
// let options = {
//     title: 'Menu',
//     height: 200,
//     width: 100
// };

// let {title, ...rest} = options;

// now title = "Menu", rest = {height: 200, width: 100};
// alert(rest.height);
// alert(rest.width);



//NESTED DESTRUCTURING
//ex..this may bet a bit messy..

// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ['cake', 'donut'],
//     extra: true  // we will not be destructuring the extra
// }

//destructuring assignment on multiple lines for clarity..
// let {
//     size: {
//         width,
//         height
//     },
//     items: [item1, item2],
//     title = 'Menu' //not present in the object, added, but as a default value.
// } = options;


// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200
// alert(item1);  // Cake
// alert(item2);  // Donut



//SMART FUNCTION PARAMETERS

// //we pass object to function
// let options = {
//     title: 'My menu',
//     items: ['Item1', 'Item2']
// };

// // ...and it immediately expands it to variables
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     alert( `${title} ${width} ${height}` ); //My Menu, 200, 100
//     alert( items ); // Item1, Item2
// }

// showMenu(options);


//ANOTHER WAY..
// let options = {
//     title: 'My menu',
//     items: ['Item1', 'Item2']
// };

// function showMenu({                    //223 to 228 is the PARAMETER
//     title = 'Untitled',
//     width: w = 100, //width goes to w
//     height: h = 200, // height goes to h
//     items: [item1, item2]
// }) {                                   //FUNCTION STUFF STARTS HERE #TECHNICALTERMS
//     alert( `${title} ${w} ${h}` ); 
//     alert( item1 );
//     alert( item2 );
// }

// showMenu(options);



// ****** TASKS ******

//DESTRUCTURING AN OBJECT

// let user = {
//     name: 'John',
//     years: 30
// };

// let { name, years: age, isAdmin = false} = user;

// alert( name );
// alert( age );
// alert( isAdmin );



//THE MAXIMAL SALARY 

// let salaries = {
//     'John': 100,
//     'Pete': 300,
//     'Mary': 250
// };

// function topSalary(salaries) {
   
//     let highestSalary = 0;
//     let maxName = null;

//     for(let [name, salary] of Object.entries(salaries)) {
//         if (highestSalary < salary) {
//             highestSalary = salary;
//             maxName = name;
//         }
//     }
//     return maxName;
// }

// alert( topSalary(salaries) );

/* notes on exercise above. Came very close to solving this on my own, 
could not figure out how to return the Name.

I learned that for (let _____  of ______ ) can intake object key/value pairs
in place of just the item. That made finding a solution easier.