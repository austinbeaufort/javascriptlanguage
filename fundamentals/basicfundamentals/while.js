//WHILE LOOP BACKWARDS
// let i = 3;
// while(i) {
//     alert(i);
//     i--;
// }

//SAME LOOP WITHOUT THE BRACKETS
// let i = 3;
// while (i) alert(i--);

//DO WHILE LOOPS
//'DO' LOOP WILL RUN FIRST BEFORE CHECKING THE 'WHILE' CONDITION. SO CODE GUARANTEED TO RUN AT LEAST ONCE.
// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

//FOR LOOPS
// for (let i = 0; i < 3; i++) {
//     alert(i);
// }

//IF DECLARING THE 'I' VARIABLE INSIDE THE FOR LOOP, REALIZE THE VARIABLE
//IS ONLY VISIBLE WITHIN THE LOOP, EXAMPLE BELOW.
// for (let i = 0; i < 3; i++) {
//     alert(i);
// }
// alert(i);

//IF VARIABLE IS DECLARED BEFORE THE FOR LOOP, THEN VARIABLE IS VISIBLE OUTSIDE THE LOOP
//IF VARIABLE IS DECLARED 'INSIDE' THE FOR LOOP, VARIABLE CANNOT BE SEEN OUTSIDE THE LOOP.

//IF VARIABLE ALREADY IS DECLARED, CAN REMOVE THE BEGIN PART OF LOOP
// let i = 0;
// for (; i < 3; i++) { //no need for beginning, variable declared in line above.
//     alert(i);
// }

//ANY PART OF THE FOR LOOP CAN BE REMOVED, BUT MUST PUT THE TWO ';;' OR ERROR WILL OCCUR.

//BREAKING THE LOOP
//THIS PROGRAM ADDS NUMBERS UNTIL NO INPUT IS ENTERED, LOOP THEN BREAKS IF NO VALUE '!VALUE' AND JUMPS TO CODE IMMEDIATELY FOLLOWING THE LOOP, IN THIS CAN AN ALERT.
// let sum = 0;

// while (true) {
//     let value = +prompt('Enter a number', ''); // '+prompt' is the same as (Number(prompt)); also, '' is used for internet explorer to not throw an error when running the prompt.

//     if (!value) break; //(*)

//     sum = sum + value;
// }

// alert('Sum: ' + sum);

//USING 'CONTINUE' IN A LOOP
// for (let i = 0; i < 10; i++) {

//     //if true skip the remaining part of the body
//     if (i % 2 == 0) continue;

//     alert(i); // will alert 1, 3, 5, 7, 9.
// }

//THE 'CONTINUE' FEATURE ALLOWS US TO DECREASE NESTING LEVELS OF LOOPS, WHICH ALLOWS FOR MORE CLEAN CODE.

// 'BREAK' AND 'CONTINUE' CANNOT BE USED WITH THE TERNARY OPERATOR '?'.

//FOR LOOP WITHOUT A CONTINUE;
// for (let i = 0; i < 10; i++) {

//     if (i % 2) {   //I % 2 WORKS BECAUSE 0 IS A FALSY VALUE, ANY NUMBER DIVISIBLE BY TWO IS 0 REMAINDER OR  FALSY. ANYTHING WITH REMAINDER 1 WILL ALERT.
//         alert(i);
//     }
// }

//NESTED FOR LOOPS
//LABELS ARE IDENTIFIERS WITH A COLON BEFORE A LOOP
// outer: for (let i = 0; i < 3; i++) { //FIRST ITERATION RUNS J LOOPS 0, 1, 2. THEN 2ND ITERATION RUNS ALL THREE LOOPS OF J AGAIN, SAME WITH THIRD.
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Value at coords (${i},${j})`);

//         if (!input) break outer; //BREAK OUTER BREAKS OUT OF THE OUTER LOOP AND GOES STRAIGHT TO ALERT('DONE') IF THERE IS NO INPUT.;
//     }
// }
// alert('Done!');

//CONTINUE CAN ALSO BE USED WITH A LABEL.
//LABELS MUST BE UPWARDS OF THEIR DIRECTIVES.

//USE FOR LOOP TO OUTPUT EVEN NUMBERS 2 TO 10.
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

//REWRITE THE FOR LOOP TO A WHILE LOOP
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}`);
// }

//MAKE SURE TO DECLARE THE VARIABLE BEFOREHAND IN A WHILE LOOP
// let i = 0;
// while (i < 3) {
//     alert(`number ${i}`);
//     i++;
// }

//PROMPT ALERT LOOP UNTIL USER ENTERS A NUMBER GREATER THAN 100

// let num;

// do {
//     num = prompt ("Enter a number greater than 100", 0);
// } while (num <=100 && num); //THE CHECK FOR NUM IS FALSE IF NO VALUE IS ENTERED OR EMPTY STRING, BECOMES FALSY OR NULL.
//                             //WHEN CANCEL IS PRESSED, THE VALUE 'NULL' IS RETURNED WHICH IS FALSY. 
// alert(`yay you did it! ${num} is greater than 100!`);

//SOLUTION FOR ALL PRIMES LESS THAN 100;
// let n = prompt('enter a number');
// alert(2);
// alert(3);
// alert(7);
// for (i = 2; i < n; i++) {
//     if (i % 2 == 0) continue;
//     if (i % 3 == 0) continue;
//     if (i % 5 == 0) continue;
//     if (i % 7 == 0) continue;
//     alert(i);
// }

//SOLUTION FOR INFINITE PRIMES UP TO THE VALUE X.
// let n = prompt('enter a number');

// nextPrime:
// for (let i = 2; i <= n; i++) { //for each i

//     for (let j = 2; j < i; j++) {  //look for a divisor
//         if (i % j == 0) continue nextPrime; //not a prime, go to next i
//     }
//     alert(i); //a prime
// }

// let n = prompt('enter a number to find primes up to that number');

// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     alert(i);
// }

// do {
//     num = prompt('enter a number greater than 100');
// } while (num < 100 && num);

// alert('yay you did it!');

//FINDING PRIME NUMBERS UP TO 'N'.
// function showPrimes(n) {

//     for(let i = 2; i < n; i++) {
//         if(!isPrime(i)) continue;

//         alert(i);
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// showPrimes(23);