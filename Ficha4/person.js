function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.greet = function() {
    console.log("Hello " + this.firstName + " " + this.lastName + this.age );
}

Person.prototype.age = 0;

var john = new Person("John", "Doe ");
john.age=22;
john.greet();

var jane = new Person("Jane", "Doe ");
jane.age=21;
jane.greet();

console.log(jane.__proto__  == jane.__proto__);