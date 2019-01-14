// let year = prompt('In which year was ECMAscript-2015 specification published?') 

//PASSING A PRE-EVALUATED BOOLEAN VALUE TO IF.
// let cond = (year == 2015);
// if(cond) {
//     alert("That's correct!");
//     alert("You're so smart!");
// }

// if (year == 2015) {
//     alert("That's correct!");
//     alert("You're so smart!");
// }

//IF AND ELSE
// if (year == 2015) {
//     alert('You guessed it right!');
// } else {
//     alert('How can you be so wrong?');
// }

//ELSE IF
// let year = prompt('In which year was ECMAscript-2015 specification published?') 

// if(year < 2015) {
//     alert('Too early...');
// } else if (year > 2015) {
//     alert('Too late...');
// } else {
//     alert('Exactly!');
// }

//TERNARY OPERATOR
//NORMAL CONDITIONAL STATEMENT
// let accessAllowed;
// let age = prompt('How old are you', '');

// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// alert(accessAllowed);

//NOW WITH TERNARY OPERATOR.
// let accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed);

//COMPARISON ALREADY RETURNS TRUE/FALSE SO STATEMENT CAN BE REWRITTEN AS:
// let accessAllowed = age > 18;
// alert(accessAllowed);


//MULTIPLE TERNARY OPERATORS
// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello!' :
//     (age < 100) ? 'Greetings!' :
//     'What an unusual age!';

// alert(message);

//NON-TRADITIONAL USE OF '?' NOT USED MUCH.
// let company = prompt('Which company created JavaScript?', '');
// (company == 'Netscape') ?
//     alert('Right!') : alert ('Wrong.');

//GUESSING GAME.
// let guess = prompt('What is the "official" name of JavaScript?');

// let answer = (guess == "ECMAScript") ? 'Right' : "Didn't know? ECMAScript!";

// alert(answer);

//SHOW THE SIGN
// let myNum = Number(prompt('Enter a Number'));

// if (myNum > 0) {
//     alert(1);
// } else if (myNum < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

//TERNARY STYLE
// let solution = (myNum > 0) ? '1' :
//     (myNum < 0) ? '-1' :
//     '0';

// alert(solution);

//USERLOGIN
// let userLogin = prompt("Who's there?");
//     if (userLogin == "Admin") {
//         let passCode = prompt('Password?');
//             if(passCode =="TheMaster") {
//                 alert('Welcome!');
//             } else if (passCode == '') {
//                 alert('Canceled.');
//             } else if (passCode == null) {
//                 alert('Canceled.');
//             } else {
//                 alert('Wrong password');
//             }
//     } else if (userLogin == '') {
//         alert('Canceled.');
//     } else if (userLogin == null) {
//         alert('Canceled.');
//     } else {
//         alert("I don't know you");
//     }

//REVISED LOGIN USING 'OR' LOGICAL OPERATOR TO SIMPLIFY CODE
// let userLogin = prompt("Who's there?");
//     if (userLogin == "Admin") {
//         let passCode = prompt('Password?');
//             if(passCode =="TheMaster") {
//                 alert('Welcome!');
//             } else if (passCode == '' || passCode == null) {
//                 alert('Canceled.');
//             } else {
//                 alert('Wrong password');
//             }
//     } else if (userLogin == '' || userLogin == null) {
//         alert('Canceled.');
//     } else {
//         alert("I don't know you");
//     }


//TERNARY LOGIN
let login = prompt('who are you?');
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';
    
alert(message);