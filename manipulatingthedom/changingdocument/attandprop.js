// DOM PROPERTIES

// DOM NODES ARE REGULAR JAVASCRIPT OBJECTS.

// document.body.myData = {
//     name: 'Caesar',
//     title: 'Imerator'
// };

// alert(document.body.myData.title);


// document.body.sayTagName = function() {
//     alert(this.tagName);
// };

// document.body.sayTagName();


// WE CAN ADD NEW METHODS TO ALL ELEMENTS BY MODIFYING THEIR PROTOTYPES

// Element.prototype.sayHi = function() {
//     alert(`Hello, I'm ${this.tagName}`);
// };

// document.documentElement.sayHi(); 
// document.body.sayHi();

// DOM PROPERTIES AND METHODS CAN HAVE ANY VALUE.



// HTML ATTRIBUTES

// elem.hasAttribute(name)
// elem.getAttribute(name)
// elem.setAttribute(name, value)
// elem.removeAttribute(name)

// alert( elem.getAttribute('About') );

// elem.setAttribute('Test', 123); 

// alert( elem.outerHTML ); 

// for (let attr of elem.attributes) {
//     alert(`${attr.name} = ${attr.value}`);
// }

// attributes are iterable and have attributes.name and attributes.value properties.



// PROPERTY-ATTRIBUTE SYNCHRONIZATION

// let input = document.querySelector('input');

// // attribute => property
// input.setAttribute('id', 'id');
// alert(input.id);

// // property => attribute
// input.id = 'newId';
// alert(input.getAttribute('id'));

// for (let attr of input.attributes) {
//     alert(attr.name + " " + attr.value);
// }



// DOM PROPERTIES ARE TYPED

// alert(input.getAttribute('checked')); // empty string. is a boolean value, not a string.
// alert(input.checked); // the property value is: true;



// NON-STANDARD ATTRIBUTES, DATASET

// USING 'data-' IS A SAFE WAY OF NAMING CUSTOM ATTRIBUTES

// let myString = 'the cat :// fast';

// if (myString.includes('://')) {
//     alert(myString);
// }


// getAttribute('href') pulls the value from the 'href' attribute.
