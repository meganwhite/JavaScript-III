/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding: In the global scope, the object "this" refers to is the console
* 2. Implicit binding: When a function follows a dot, "this" refers to the object before the dot
* 3. New binding: When a constructor function (a function that returns an object) is used, "this" refers to the instance of the object created and returned by the constructor function
* 4. Explicit binding: When "apply" or "call" is used, "this" is explicitly given an object to reference
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sum(num1, num2) {
    console.log(this);
    return num1 + num2;
}

sum(4,5);

// Principle 2

// code example for Implicit Binding

const intro = {
    greeting: "Hello!",
    speak: function(city, state) {
        console.log(`${this.greeting} I live in ${city}, ${state}`);
    }
}

intro.speak('Boston','Massachusetts');

// Principle 3

// code example for New Binding

function MenuItem(name,price) {
    this.name = name;
    this.price = price;
    this.report = function(){
        console.log(`A ${this.name} costs ${this.price}`);
    }
}

const pizza = new MenuItem('pizza','$12');
pizza.report();

// Principle 4

// code example for Explicit Binding

const me = {
    name: 'Megan',
    age: 26,
    city: 'Boston'
}

const favoriteBooks = ['Kafka on the Shore','Micromotives and Macrobehavior','The Phantom Tollbooth'];

function bio(book1,book2,book3){
    console.log(`My name is ${this.name}, and I am ${this.age} years old. I live in ${this.city} and like to read. My favorite books 
    are ${book1}, ${book2}, and ${book3}`)
}

bio.call(me,...favoriteBooks);