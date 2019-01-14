// MIXINS

// A MIXIN IS A CLASS THAT CONTAINS METHODS FOR USE BY OTHER CLASSES WITHOUT HAVING TO BE
// THE PARENT CLASS OF THOSE OTHER CLASSES.

// A MIXIN PROVIDES METHODS THAT IMPLEMENT A CERTAIN BEHAVIOR, BUT WE DO NOT
// USE IT ALONE, WE USE IT TO ADD THE BEHAVIOR TO OTHER CLASSES.



// A MIXIN EXAMPLE

// HERE THE MIXIN 'SAYHIMIXIN' IS USED TO ADD SOME 'SPEECH' FOR 'USER'

// mixin
// let sayHiMixin = {
    
//     sayHi() {
//         alert(`Hello ${this.name}!`);
//     },

//     sayBye() {
//         alert(`Bye ${this.name}`);
//     }

// };

// // usage:

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // copy the methods
// Object.assign(User.prototype, sayHiMixin);

// // now User can say hi

// let user = new User("Dude").sayHi() // Hello Dude!


// MIXINS CAN MAKE USE OF INHERITANCE INSIDE THEMSELVES.
// FOR INSTANCE, HERE 'sayHiMixin' INHERITS FROM 'sayMixin'

// let sayMixin = {
//     say(phrase) {
//         alert(phrase);
//     }
// };

// let sayHiMixin = {
//     __proto__: sayMixin,

//     sayHi() {
//         // call parent method
//         super.say(`Hello ${this.name}!`);
//     },

//     sayBye() {
//         super.say(`Bye ${this.name}`);
//     }
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // copy the methods
// Object.assign(User.prototype, sayHiMixin);

// // new User can say hi

// new User("Dude").sayHi(); // Hello Dude!



// EVENT MIXIN

// let eventMixin = {
//     // subscribe to event, usage:
//     // menu.on('select', function(item) {...})

//     on(eventName, handler) {
//         if(!this._eventHandlers) this._eventHandlers = {};
//         if(!this._eventHandlers[eventName]) {
//             this._eventHandlers[eventName] = [];
//         }
//         this._eventHandlers[eventName].push(handler);
//     },

//     //Cancel the subscription, usage:
//     // menu.off('select', handler)

//     off(eventName, handler) {
//         let handlers = this._eventHandlers && this._eventHandlers[eventName];
//         if(!handlers) return;
//         for (let i = 0; i < handlers.length; i++) {
//             if (handlers[i] === handler) {
//                 handlers.splice(i--, 1);
//             }
//         }
//     },

//     // Generate the event and attach the data to it
//     // this.trigger('select', data1, data2);

//     trigger(eventName, ...args) {
//         if (!this._eventHandlers || !this._eventHandlers[eventName]) {
//             return; // no handlers for that event.
//         }

//         // call the handlers
//         this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
//     }
// };

// // there are 3 methods
// // 1. .on(eventName, handler) - assigns function handler to run when the even with the name happens.
// // The handlers are stored in the _eventsHandler property.

// // 2. .off , removes teh function from the handlers list.

// // 3. .trigger, generates the event: all assigned handlers are called and args are passed 
// // as arguments to them.

// // Usage

// // Make a class
// class Menu {
//     chose(value) {
//         this.trigger('select', value);
//     }
// }
// // Add the mixin
// Object.assign(Menu.prototype, eventMixin);

// let menu = new Menu();

// // call the handler on selection:
// menu.on('select', value => alert(`Value selected: ${value}`));

// // triggers the event => shows Value to selected: 123
// menu.choose('123'); //values selected