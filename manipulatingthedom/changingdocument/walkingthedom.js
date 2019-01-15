// WALKING THE DOM

// ALL OPERATIONS ON THE DOM START WITH THE DOCUMENT OBJECT. 
// FROM IT WE CAN ACCESS ANY NODE.

// ON TOP: DOCUMENT ELEMENT AND BODY

// <html> = document.documentElement

// <body> = document.body

// <head> = document.head

// 'null' means doesn't exist, or 'no such node.'



// Children: childNodes, firstChild, lastChild

// Child Nodes: elements that are direct children.

// Descendants: all elements that are nested in the given one.

// the childNodes collection provides access to all child nodes,
// including text nodes.

// PROPERTIES 'firstChild' and 'lastChild' give fast access to the first and last children.

// IF THERE ARE CHILDNODES, THEN THE FOLLOWING IS ALWAYS TRUE:
// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild// 

// elem.hasChildNodes() checks whether there are any child nodes.


// DOM COLLECTIONS

// childNodes looks like an array. But actually it's not an array, but rather a collection
// a collection is a special array-like iterable object.

// we can use for..of to iterate over it:

// for (let node of document.body.childNodes) {
//     alert(node);
// }

// ARRAY METHODS WON'T WORK BECAUSE A COLLECTION IS NOT AN ARRAY
// alert(document.body.childNodes.filter); // undefined, there is no filter method.

// WE CAN GET AROUND THIS BY USING ARRAY.FROM TO CREATE A REAL ARRAY FROM THE COLLECTION IF WE WANT ARRAY METHODS.
//ex..
// alert( Array.from(document.body.childNodes).filter );

// DOM COLLECTIONS ARE READ-ONLY

// DOM COLLECTIONS ARE LIVE

// DON'T USE FOR..IN TO LOOP OVER COLLECTIONS, ONLY USE *****FOR...OF*****



// SIBLINGS AND THE PARENT

// SIBLINGS ARE NODES THAT ARE CHILDREN OF THE SAME PARENT.
// FOR EXAMPLE, <BODY> AND <HEAD> TAGS ARE SIBLINGS.
// <BODY> IS SAID TO BE THE 'NEXT' OR 'RIGHT' SIBLING OF <HEAD>
// <HEAD> IS SAID TO BE THE 'PREVIOUS' OR 'LEFT' SIBLING OF <BODY>

// THE PARENT IS AVAILABLE AS 'parentNode'.

// the next node in the same parent (next sibling) is 'nextSibling',
// and the previous is 'previousSibling'

// parent of <body> is <html>
// alert( document.body.parentNode === document.documentElement ); // true

// after <head> goes <body>
// alert( document.head.nextSibling ); // HTMLBodyElement

// before <body> goes <head>
// alert( document.body.previousSibling ); // HTMLHeadElement



// ELEMENT ONLY NAVIGATION

// new links to get only elements

// children - only the child element nodes.
// firstElementChild, lastElementChild.
// previousElementSibling, nextElementSibling.
// parentElement.



// MORE LINKS: TABLES

// tables support these links:

/*
table.rows
table.caption/tHead/tFoot
table.tBodies
tbody.rows
tr.cells
tr.sectionRowIndex
tr.rowIndex
tr.cellIndex
*/


// alert( table.rows[0].cells[1].innerHTML ) // two

// alert( document.body.children[1].children[1] );