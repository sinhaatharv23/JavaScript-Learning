//There are two types of memory in JavaScript: Stack Memory and Heap Memory.
//1. Stack Memory: It is used to store primitive data types like number, string, boolean, null, undefined, symbol.
//These data types are stored in stack memory because they have a fixed size and are easy to access.
//We get a copy of the variable we have declared whenever stack memory is used.
let num1 = 10; // Stored in stack memory
let str1 = "Hello"; // Stored in stack memory
let bool1 = true; // Stored in stack memory
//2. Heap Memory: It is used to store non-primitive data types like objects, arrays, and functions.
//These data types are stored in heap memory because they can have a variable size and are more complex to access.
//We get a reference to the variable , means jo bhi change krenge wo directly original value me bhi reflect krega whenever heap memory is used.
let obj1 = {name: "Atharva", age: 20}; // Stored in heap memory
let arr1 = [1, 2, 3, 4, 5]; // Stored in heap memory
let func1 = function() { console.log("Hello World!"); }; // Stored in heap memory
//For better understanding, see the Screenshot which I have taken for stack and heap memory.
