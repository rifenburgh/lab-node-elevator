const Elevator = require('./elevator.js');
const Person = require('./person.js');


var person1 = new Person("Person1", 2, 10);
var person2 = new Person("Person2", 3, 9);
var person3 = new Person("Person3", 3, 8);
person1.getOn();
person2.getOn();
person3.getOn();

var box = new Elevator();
box.call();
box.start();
