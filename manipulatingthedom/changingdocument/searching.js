// document.getElementById

// alert(elem);
// alert(window.elem);

// alert(window['elem-content']);

// let elem = 5;
// alert(elem) // 5, the variable overides the element.

// let elem = document.getElementById('elem');

// elem.style.background = 'orange';



// getElementsBy

// tag name
// let divs = document.getElementsByTagName('div');

// let inputs = table.getElementsByTagName('input');

// for (let input of inputs) {
//     alert( input.value + ': ' + input.checked );
// }




// querySelectorAll

// let elements = document.querySelectorAll('ul > li:last-child'); // gets last child of each ul.

// for (let elem of elements) {
//     alert(elem.innerHTML); // 'test', 'passed'
// }

// querySelector

// MATCHES

// the elem.matches(css) does not look for anything, it merely checks if elem 
// matches the given CSS-selector. It returns true or false.

// for (let elem of document.body.children) {
//     if (elem.matches('a[href$="zip"]')) {
//         alert("The archive reference: " + elem.href);
//     }
// }



// CLOSEST

// elem.closest looks the nearest ancestor that matches the CSS-selector. 
// The elem itself is also included in the search.

// let chapter = document.querySelector('.chapter');

// alert(chapter.closest('.book')); // UL
// alert(chapter.closest('.contents')); // DIV
// alert(chapter.closest('h1')); // null (because h1 is not an ancestor of chapter);



// LIVE COLLECTIONS

// ALL METHODS 'getElementsBy' RETURN A LIVE COLLECTION.

// IN CONTRAST, 'querySelectorAll' returns a static collection.
// if we use it instead, both our scripts output 1.


// 6 main methods to search for nodes in the DOM.
/*
getElementById
getElementsByName
getElementsByTagName
getElementsByClassName
querySelector
querySelectorAll
*/

// elemA.contains(elemB) returns true if elemB is inside of elemA