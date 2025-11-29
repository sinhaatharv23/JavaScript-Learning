//We can define the objects using two ways:-
//1.Using Object literal Syntax
//2.Using the constructor function i.e. new Object()

//And also there is a concept of singleton object where only one object of a particular type is created.
/*[NOTE:- 1.In JavaScript, almost everything is an object.
          2.In JS, whenever we use Object literal syntax , then singleton object is not created.
          3.In JS, whenever we use constructor, then singleton object is created.]*/

const mySym = Symbol("key1");//Creating a symbol., we'll use this later.
//1.Using Object literal Syntax:- Used to declare objects directly using curly braces {}. When defining the object using this syntax, we can(if we want to) define key-value pairs inside the curly braces.
let JsUSer = {}// Empty Object Declaration
JsUSer={
    name: "Atharva",//by default keys are treated as strings, here key is name and value is "Atharva"
    age: 21,
    isStudent: true,
    skills: ["JavaScript", "HTML", "CSS"],
    email: "sinhaatharv39@gmail.com",
    lastLoginDays: ["Monday","Saturday"],
    // mySym: "myKey1",We cant use mySym here directly as key, it will be treated as string.
    [mySym]:"value1",//Using symbol as a key in the object.
    "full Name": "Atharva Sinha"//key with space in between must be in quotes and can be accessed only using bracket notation.
}


//How to access the properties of an object?
console.log(JsUSer);//To print the whole object
console.log(JsUSer.name);//To access a particular property of the object using dot notation
//But there is another way to access the properties of an object using bracket notation.
console.log(JsUSer["email"]);//To access a particular property of the object using bracket notation
//Bracket notation is useful when the property name is stored in a variable or when the property name contains special characters or spaces.


//Now if we want to use this symbol as a key in our object, we can do it like this:
console.log(JsUSer[mySym]);//undefined, as mySym is treated as string here.
// console.log(typeof JsUSer.mySym);here its string, but we wanted it to be symbol

//To use symbol as a key, we have to define it like this:
// JsUSer[mySym] = "value1"; inside the object while declaring.


//Some basic operations on objects:
//1. To change the value of a property
JsUSer.email="sinhaatharva23@gmail.com";
console.log(JsUSer.email);
//2. To lock the value of an object's property so that it cannot be changed, we can use Object.freeze() method.This freeze method can only freeze the whole objects, not individual properties.
//Object.freeze(JsUSer);//Now the whole JsUSer object is frozen and cannot be changed.
//JsUSer.age=25;//This will not change the age property as the object is frozen.
//console.log(JsUSer.age);//Still the old age will be printed.
// Object.freeze(JsUSer.email);This will not work as freeze works only on objects, not on primitive data types.
JsUSer.email="tarcoaastha@gmai.com";//This will not change the email property as it is frozen.
console.log(JsUSer.email);//Still the old email will be printed.
// Object.freeze(JsUSer);
// JsUSer.age=25;
// console.log(JsUSer.age);

//3. JS treats function as a first-class citizen means we can store functions in variables, pass them as arguments to other functions, and return them from other functions.
JsUSer.greetings = function(){ 
    console.log("Hello Js User");
}
JsUSer.greetings();//Error, as the object is frozen and we cannot add new properties to it.
console.log(JsUSer.greetings);//Its giving us [Function (anonymous)] as we are accessing the function property of the object.

//If I want to refer the name property of the object "JsUSer" inside the greetings function, how can I do that?
JsUSer.greetings_2 = function(){ 
    console.log(`Hello Js User ${this.name}`);//Here "this" refers to the current object "JsUSer"
}
JsUSer.greetings_2();