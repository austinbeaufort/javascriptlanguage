// DOM NODE CLASSES

// ALL CLASSES OF DOM NODES FORM A SINGLE HIERARCHY

// EACH DOM NODE BELONGS TO THE CORRESPONDING BUILT-IN CLASS.

// THE ROOT OF THE HIERARCHY IS 'EventTarget', THAT IS INHERITED BY 'NODE', 
// AND OTHER DOM NODES INHERIT FROM IT.

// THE FULL SET OF PROPERTIES AND  METHODS OF A GIVEN NODE COMES AS THE 
// RESULT OF THE INHERITANCE.

// alert( document.body.constructor.name ); // HTMLBodyElement
// alert( document.body );

// WE CAN USE 'instanceof' TO CHECK THE INHERITANCE

// alert( document.body instanceof HTMLBodyElement );
// alert( document.body instanceof HTMLElement );
// alert( document.body instanceof Element );
// alert( document.body instanceof Node );
// alert( document.body instanceof EventTarget);


// DOM NODES ARE REGULAR JAVASCRIPT OBJECTS.
// THEY USE PROTOTYPE-BASED CLASSES FOR INHERITANCE.

// console.dir(elem) shows the element as a DOM object, good to explore it's properties.

// console.dir(document.body);



// THE 'nodeType' PROPERTY

// PROVIDES AN OLD-FASHIONED WAY TO GET THE 'TYPE' OF A DOM NODE.

// IT HAS A NUMERIC VALUE:

// elem.nodeType == 1 for element nodes,
// elem.nodeType == 3 for text nodes,
// elem.nodeType = 9 for the document object.

// let elem = document.body;

// alert(elem.nodeType); // 1 => element

// alert(elem.firstChild.nodeType); // 3 => text

// // for the document object, the type is 9
// alert( document.nodeType ); // 9



// TAG: nodeName and tagName

// alert( document.body.nodeName ); // BODY
// alert( document.body.tagName ); // BODY

// tagName property exists for only element nodes.

// nodeName is defined for any Node:
// for elements it means the same as tagName
// for other node types, it has a string with the node type.



// INNERHTML: THE CONTENTS

// ALLOWS US TO GET THE HTML INSIDE THE ELEMENT AS A STRING.

// WE CAN ALSO MODIFY IT. POWERFUL WAY TO CHANGE THE PAGE.

// alert( document.body.innerHTML );
// document.body.innerHTML = 'The new BODY!'; // REPLACES IT
// alert( document.body.innerHTML );

// INNERHTML += DOES A FULL OVERWRITE



// OUTERHTML: FULL HTML OF THE ELEMENT

// THE OUTERHTML PROPOERTY CONTAINS THE FULL HTML OF THE ELEMENT.
// IT'S LIKE THE INNERHTML PLUS THE ELEMENT ITSELF.

// alert(elem.outerHTML);

// BEWARE: UNLIKE INNERHTML, WRITING TO OUTERHTML DOES NOT CHANGE THE ELEMENT.
// INSTEAD, IT REPLACES IT AS A WHOLE IN THE OUTER CONTEXT.

// let div = document.querySelector('div');
// div.outerHTML = '<p>a new element!</p>';

// alert(div.outerHTML); // the div is still the same? but the outer context in the browser has changed..