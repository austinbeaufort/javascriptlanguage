// DATE AND TIME    

//CREATE A DATE OBJECT FOR CURRENT DATE AND TIME
// let now = new Date();
// alert(now);


// //CREATE A DATE OBJECT WITH THE TIME EQUAL TO NUMBER OF MILLISECONDS PASSED AFTER JAN 1ST 1970.
// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );

// //now add 24 hours
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// alert(Jan02_1970);

// new Date(datestring)
// let date = new Date("2017-01-26");
// alert( date );

//new Date
// let date = new Date(2011, 0, 1);
// alert( date );

//millisecond percision
// let date = new Date (2011, 0, 1, 2, 3, 4, 567);
// alert( date );



//ACCESS DATE COMPONENTS

/* 
getFullYear()
getMonth() 0-11
getDate()
getHours(), getMinutes(), getSeconds(), getMilliseconds()
getDay() //gets day of the week. 0-Sunday 6-Saturday
*/

//CHECKING TIME ZONE
// let date = new Date();
// alert( date.getHours() );
// alert( date.getUTCHours() );

//getTime()
// alert( date.getTime() ); // number of milliseconds passed from jan1st 1970, approx. 1547052484441 seconds!

//getTimezoneOffset()
//returns the difference between local and UTC time zone in minutes..
// alert( new Date().getTimezoneOffset() );



//SETTING DATE COMPONENTS

/* METHODS ALLOW TO SET DATE/TIME COMPONENTS..

setFullYear(year[, month, date])
setMonth(month [,date])
setDate(date)
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [,ms])
setMilliseconds(ms)
setTime(milliseconds) //sets the whole date by milliseconds
*/

//ex..
// let today = new Date();

// today.setHours(0);
// alert(today); //hour changed to zero, everything else remains the same.


// today.setHours(0, 0, 0, 0);
// alert(today); // still today, but hours, minutes, seconds, and ms are all set to 0.



// AUTOCORRECTION

//autocorrect auto-adjusts our date for out of date values.. ex..

// let date = new Date(2013, 0, 32); // 32 Jan 2013??????
// alert(date); // is 1st Feb 2013!

//INCREASING FEBRUARY 28TH BY TWO DAYS.. XD

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2); //adds two days to current date 28.
// alert( date ); //1st March 2016

// get the date for 70 seconds after now..
// let date = new Date();
// date.setSeconds(date.getSeconds() + 70); //gets current seconds and adds 70 seconds. Alerts date 70 seconds to the future.
// alert ( date );

//WE CAN ALSO SET ZERO OR NEGATIVE VALUES
// let date = new Date(2016, 0, 2);
// date.setDate(1); 
// alert( date );

// date.setDate(0); // first day of month minus one day, alerts last day of previous month.
// alert (date);



// DATE TO NUMBER, DATE DIFFERENCE

/* when a date is converted to a number, it becomes the timestamp */
//ex..
// let date = new Date();
// alert(+date);           //both alerts show # of ms since Jan 1 1970.
// alert(date.getTime());

// DATES CAN BE SUBTRACTED, THE RESULT IS THEIR DIFFERENCE IN MILLISECONDS.
// CAN BE USED FOR TIME MEASUREMENTS.

// let start = new Date(); //start counting

//do the job
// for (let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i;
// }

// let end = new Date(); //done

// alert( `The loop took ${end - start} ms`);



// DATE.NOW()

// let start = Date.now();

// for (let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i;
//   }

// let end = Date.now(); 

// alert( `The loop took ${end - start} ms` );



// BENCHMARKING



// DATE.PARSE FROM A STRING

// The method Date.parse(str) can read a date from a string..
// but the string format must be YYYY-MM-DD 

//ex..
// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// alert(ms); // (timestamp in ms);

//then we can create a new Date object from the timestamp..
// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
// alert(date);



// ****** TASKS ******

// CREATE A DATE

/* Instructions:
Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
*/

// let date = new Date(2012, 01, 20, 3, 12);
// alert(date);



// SHOW A WEEKDAY

/* Instructions
Write a function getWeekDay(date) to show the weekday
in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
*/

// function getWeekDay(newDate) {

//     let theDay = newDate.getDay();
    
//     switch(theDay) {
//         case 0:
//             alert('SU');
//             break;
//         case 1:
//             alert('MO');
//             break;
//         case 2: 
//             alert('TU');
//             break;
//         case 3:
//             alert('WE');
//             break;
//         case 4:
//             alert('TH');
//             break;
//         case 5:
//             alert('FR');
//             break;
//         case 6:
//             alert('SA');
//             break;
//     }
// }

// let date = new Date();
// getWeekDay(date);
// let oldDate = new Date(2012, 0, 3);
// getWeekDay(oldDate);



// EUROPEAN WEEKDAY

/* Instructions
European countries have days of week starting with Monday 
(number 1), then Tuesday (number 2) and till Sunday (number 7).
 Write a function getLocalDay(date) that returns the “European” 
 day of week for date.
 */

// function getLocalDay(newDate) {
//     dateArr = [7, 1, 2, 3, 4, 5, 6];

//     return dateArr[newDate.getDay()];

// }

// let date = new Date(2012, 0, 1);
// alert( getLocalDay(date) );



//WHICH DAY OF THE MONTH WAS MANY DAYS AGO?

/* Instructions
Create a function getDateAgo(date, days) to return the day of month days ago from the date.
For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and 
getDateAgo(new Date(), 2) should be 18th.
Should also work over months/years reliably:
P.S. The function should not modify the given date.
*/

// function getDateAgo(date, days) {

//     let datems = date.getTime();
//     days = days * 24 * 60 * 60 * 1000;
//     let newDate = new Date(datems - days);
//     return newDate;

// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); 
// alert( getDateAgo(date, 2) ); 
// alert( getDateAgo(date, 365) ); 



// LAST DAY OF MONTH?

/* Instructions
Write a function getLastDayOfMonth(year, month) that returns the last day of month.
 Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
 */

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }

// //created a new date that passed in the year and month, took the month to the 
// //following month, and subtracted one day by plugging in 0 for the day parameter.

// alert( getLastDayOfMonth(2012, 0) ); 
// alert( getLastDayOfMonth(2012, 1) ); 
// alert( getLastDayOfMonth(2013, 1) ); 



// HOW MANY SECONDS HAVE PASSED TODAY?

/* Instructions
Write a function getSecondsToday() that returns the number of seconds
from the beginning of today. The function should work in any day. That is, 
it should not have a hard-coded value of “today”.
*/

// function getSecondsToday() {
//     let todaysYear = new Date().getFullYear();
//     let todaysMonth = new Date().getMonth();
//     let todaysDay = new Date().getDate();

//     let todaysDate = new Date().getTime();
//     let beginning = new Date(todaysYear, todaysMonth, todaysDay, 0, 0, 0, 0).getTime();

//     return((todaysDate - beginning) / 1000);
// }

// alert( getSecondsToday()) ;



// HOW MANY SECONDS TILL TOMORROW?

/* Instructions
Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
P.S. The function should work at any day, the “today” is not hardcoded.
*/

// function getSecondsToTomorrow() {

//     let dateNow = new Date().getTime();
    
//     let tonightYear = new Date().getFullYear();
//     let tonightMonth = new Date().getMonth();
//     let tonightDay = new Date().getDate();

//     let midnightTonight = new Date(tonightYear, tonightMonth, tonightDay + 1, 0, 0, 0, 0).getTime();

//     return Math.round(((midnightTonight - dateNow) / 1000));

// }

// alert( getSecondsToTomorrow() );



