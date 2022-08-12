//  Object-Oriented Programming or OOPs refers to languages that use objects in programming. 
// Object-oriented programming aims to implement real-world entities like inheritance, hiding, polymorphism etc in programming. 
// The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code 
// can access this data except that function. 

// There are certain features or mechanisms which makes a Language Object-Oriented like: 

// Object
// Classes
// Encapsulation
// Inheritance


// Object– An Object is a unique entity that contains properties and methods.
// An Object is an instance of a class.

// Object can be created in two ways in JavaScript: 
// Using object literal
// using object constructor

// Classes– Classes are blueprint of an Object. 
// A class can have many Objects because class is a template while Object are instances of the class

// Traditional way
function Person(name, age) {
   this.name = name;
   this.age = age;
   this.myDetails = function () {
      console.log(`I'm ${this.name} and I'm ${this.age} years old!`);
   };
}

const person1 = new Person('Yash', 21);
person1.myDetails();

// Encapsulation – The process of wrapping properties and functions within a single unit is known as encapsulation. 

// Class-based way or Encapsulation Example
class Person2 {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   getDetails() {
      console.log(`My name is ${this.name} and my age is ${this.age}`);
   }
}

const person2 = new Person2('Yash', 21);
person2.getDetails();

// Sometimes encapsulation refers to the hiding of data or data Abstraction which means representing essential features hiding
// the background detail.
// This can be acheived by defining some properties or methods using variable instead of this keyword. 
// This process allows us to hide that content and make it inaccessible

// Abstraction example
function Person3(fname,lname){
    let firstname = fname;
    let lastname = lname;
 
    let getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last
            name is: ${lastname}`);
    }
 
    this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last
            name is: ${lastname}`);
    }
}
let person3 = new Person3('Mukul','Latiyan');
console.log(person3.firstname);
console.log(person3.getDetails_noaccess);
console.log(person3.getDetails_access());

//the idea of polymorphism is the ability of the same object to take multiple forms.

//Compile Time Polymorphism: It is also known as static polymorphism. 
// This type of polymorphism is achieved by function overloading or operator overloading. 
// It occurs when we define multiple methods with different signatures and the compiler knows which method needs to be executed 
// based on the method signatures.

// Run Time Polymorphism: It is also known as Dynamic Method Dispatch. 
// It is a process in which a function call to the overridden method is resolved at Runtime.