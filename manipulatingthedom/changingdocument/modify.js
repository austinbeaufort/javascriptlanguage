// CRETING AN ELEMENT

// 2 METHODS

// let div = document.createElement('div');

// let textNode = document.createTextNode('here i am');

// CREATING THE MESSAGE





// INSERTION METHODS

// BEST WAYS:
// node.append - appends at end.
// node.prepend - insert nodes into beginning.
// node.before - insert nodes before the node.
// node.after - insert nodes after the node.
// node.replaceWith - replaces 'node' with the given nodes.


// elem.inserAdjacentHTML(where, html);

// specifications
// 'beforebegin' - before the elem.
// 'afterbegin' - at the beginning.
// 'beforeend' - at the end.
// 'afterend' - after the elem.



// CLONING NODES: CLONENODE

// inserting similar messages

// elem.cloneNode(true) creates a 'deep' clone of the element- with all 
// attributes and subelements.

// elem.cloneNode(false) - the clone is made without child elements.



// REMOVAL METHODS

// parentElem.removeChild(node)
// node.remove() => use this one, removes node from it's place.

// all insertion methods automatically remove the node from the old place.

// let ul = document.createElement('ul');
// document.body.append(ul);

// while(true) {
//     let data = prompt('Enter a list item');

//     if (data == null) {
//         break;
//     }
//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }


// let data = {
//     "Fish": {
//       "trout": {},
//       "salmon": {}
//     },
  
//     "Tree": {
//       "Huge": {
//         "sequoia": {},
//         "oak": {}
//       },
//       "Flowering": {
//         "redbud": {},
//         "magnolia": {}
//       }
//     }
//   };

// function createTree(container, obj) {
//     container.append(createTreeDom(obj));
// }

// function createTreeDom(obj) {
//     if(!Object.keys(obj).length) return;

//     let ul = document.createElement('ul');

//     for(let key in obj) {
//         let li = document.createElement('li');
//         li.innerHTML = key;

//         let childrenUl = createTreeDom(obj[key]);
//         if(childrenUl) {
//             li.append(childrenUl);
//         }
//         ul.append(li);
//     }
//     return ul;
// }

// let container = document.getElementById('container');
// createTree(container, data);


