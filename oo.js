//'use strict';
var Person = function (firstName) {
    this.firstName = firstName;
}

Person.prototype.SayHello = function () {
    console.log("Hello, I'm " + this.firstName);
}

Person.prototype.walk = function () {
    console.log("I'm walking");
}

function Student(firstName, subject) {
    Person.call(this, firstName);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype); //new Person();
Student.prototype.constructor = Student;

// Replace the "sayHello" method
Student.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
};

// Add a "sayGoodBye" method
Student.prototype.sayGoodBye = function () {
    console.log("Goodbye!");
};

var person1 = new Person('Rajesh');
var person2 = new Person('jella');
var helloFunction = person1.SayHello;

person1.SayHello();
person2.SayHello();
helloFunction();

console.log(helloFunction === person1.SayHello);
console.log(helloFunction === Person.prototype.SayHello);

helloFunction.call(person1);

// Example usage:
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello(); // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk(); // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

// Check that instanceof works correctly
console.log(student1 instanceof Person); // true
console.log(student1 instanceof Student); // true