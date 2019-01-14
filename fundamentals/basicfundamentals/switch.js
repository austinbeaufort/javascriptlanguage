//BASIC SWITCH STATEMENT
// let a = 2 + 2;

// switch (a) {
//     case 3:
//         alert('Too small');
//         break;
//     case 4:
//         alert('Exactly');
//         break;
//     case 5:
//         alert('Too Large');
//         break;
//     default:
//         alert("I don't know such values");
// }

//ANY EXPRESSION CAN BE A SWITCH CASE ARGUMENT
// let a = "1";
// let b = 0;
// switch (+a) {
//     case b + 1:
//         alert('this runs, because +a is 1, exactly equals b + 1');
//         break;
    
//     default:
//         alert('this doesn\'t run');
// }

//CASES CAN BE GROUPED
// let a = 2 + 2;

// switch (a) {
//     case 4:
//         alert('Right!');
//         break;

//     case 3:
//     case 5:
//         alert('Wrong!');
//         alert('Why don\'t you take a math class?');
//         break;
    
//     default:
//     alert('the result is strange. really.');
// }

//THE EQUALITY CHECK IN SWITCH / CASE IS ALWAYS STRICT, SO 'TYPEOF' MATTERS.
// let arg = prompt('Enter a value?');
// switch (arg) {
//     case '0':    //GROUPING CASES
//     case '1':
//         alert('One or Zero');
//         break;
    
//     case '2':
//         alert('Two');
//         break;
    
//     case 3:     //CASE 3 NEVER EXECUTES BECAUSE IT IS A NUMBER INSTEAD OF A STRING. THE INITIAL PROMPT VALUE YIELDED A STRING. WOULD NEED TO CONVERT THE PROMPT TO A NUMBER TO CHECK CASE FOR NUMBERS.
//         alert('never executes!');
//         break;
//     default:
//     alert('an unknown value');
// }


//CONVERT SWITCH/CASE TO IF/ELSE STATEMENT
// let browser = prompt('What browser are you using?');

// if (browser == 'Edge') {
//     alert("You've got the Edge");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope this page looks ok..');
// }

//CONVERTING IF/ELSE TO SWITCH/CASE
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert('pick a different number');
}