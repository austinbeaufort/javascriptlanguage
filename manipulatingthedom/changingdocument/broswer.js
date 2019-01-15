// A HOST ENVIRONMENT PROVIDES PLATFORM-SPECIFIC OBJECTS AND FUNCTIONS
// ADDITIONAL TO THE LANGUAGE CORE.

// IN BROWSER..

// 'ROOT' OBJECT CALLED 'WINDOW'. 2 ROLES:
// 1. GLOBAL OBJECT FOR JAVASCRIPT CODE.
// 2. REPRESENTS THE 'BROWSER WINDOW' AND PROVIDES METHODS TO CONTROL IT.

// HERE WE USE IT AS A GLOBAL OBJECT..
// function sayHi() {
//     alert('Hello');
// }

// global function are accessible as properties of window.
// window.sayHi();

// here we use it as a browser window, to see the inner height..
// alert( window.innerHeight ); // changes based on size of current browser window.



// DOCUMENT OBJECT MODEL (DOM)

// change background color to red
// document.body.style.background = "orange";

// change it back after 1 second..
// setTimeout(() => document.body.style.background = "", 1000);


// BROWSER OBJECT MODEL (BOM)

// additional objects provided by the browser to work with everything except the document.

// navigator object
// location object
// here's how we can use the location object:

// alert(location.href) // shows current URL

// if(confirm("Go to wikipedia?")) {
//     location.href = "https://wikipedia.org"; // redirect.
// }

// FUNCTIONS 'ALERT/CONFIRM/PROMPT' ARE A PART OF THE BOM.
// THEY REPRESENT PURE BROWSER WAYS OF COMMUNICATING WITH THE USER.