1."use strict"; //This is used to enable strict mode in JavaScript. It helps to catch common coding mistakes and "unsafe" actions such as defining global variables accidentally. It means in short that by using "use strict"; we treat all JS code as newer version of JS.

2.alert("Hello World!"); //This will show an alert box with the message "Hello World!" when the code is run in a browser environment.There is a different syntax to show output in Node.js environment which we will learn later in the course.
3.In JS code readability must be high



Datatypes in JavaScript
1.Primitive Datatypes : These are the basic datatypes in JavaScript.
a. Number : This datatype is used to represent both integer and floating point numbers. Number range is from -(2^53 -1) to (2^53 -1).
let age = 25; //Integer
let price = 19.99; //Floating point number

b. String : This datatype is used to represent text. It is enclosed in single quotes, double quotes or backticks.
let name = "Atharva"; //Double quotes
let city = 'Jaipur'; //Single quotes
let message = `Hello, ${name}! Welcome to ${city}.`; //Backticks with template literals
Template literals allow us to embed expressions inside string literals using ${}.

c. Boolean : This datatype is used to represent logical values. It can be either true or false.
let isStudent = true;
let isEmployed = false;
We can use boolean values in conditional statements to control the flow of the program.

d. Undefined : This datatype is used to represent a variable that has not been assigned a value yet.
let score; //score is undefined

e. Null : This datatype is used to represent the intentional absence of any object value.Its also a standalone value that represents "no value".
let address = null; //address is null

f. Symbol : This datatype is used to represent a unique identifier. Symbols are often used as keys in objects to avoid name collisions.
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2); //false because each symbol is unique. 

2.Non-Primitive Datatypes : These are more complex datatypes in JavaScript.
a. Object : This datatype is used to represent a collection of key-value pairs. Objects can contain properties and methods.
Another interesting thing in JS is:- 
TYPEOF:-
console.log(typeof ""); //string
console.log(typeof null); //object (this is a known quirk in JavaScript).
console.log(typeof undefined); //undefined