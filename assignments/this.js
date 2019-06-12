/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding - 
* 2. Implicit Binding - 
* 3. New binding - 
* 4. Explicit binding - 
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
  sayHello: function(name) {
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