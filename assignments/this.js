/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window/Global binding - Binds "this" to the console object.
* 2. Implicit Binding - Binds "this" to the object that is proceeded by a . and a function.
* 3. New binding - Binds object to constructor function using "new"
* 4. Explicit binding - Happens when .call(), .apply(), or .bind() are used on a function. It is explicit because you need to explicitly pass in a "this" context.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

someGreeting = function(name) {
  return "Window/Global Binding: Hello my name is " + this;
}
console.log(someGreeting("Justin"));

// Principle 2
// code example for Implicit Binding
const myObject = {
  name: 'Justin',
  sayHello: function() {
    console.log("Implicit Binding: Hello my name is " + this.name);
  }
}

myObject.sayHello('Justin');

// Principle 3
// code example for New Binding

function AnotherPerson(person) {
  this.sayHello = "Hello ";
  this.name = person;
  this.greet = function() {
    console.log("New Binding: " + this.sayHello + this.name); // 'this' will be binded to whatever we throw in as an argument to AnotherPerson
  }
  this.explicitGreet = function() {
    console.log("Explicit Binding: " + this.sayHello + this.name);
  }
}

const justin = new AnotherPerson('Justin');
const xavier = new AnotherPerson('Xavier');
justin.greet();

// Principle 4
// code example for Explicit Binding

justin.explicitGreet.call(xavier);