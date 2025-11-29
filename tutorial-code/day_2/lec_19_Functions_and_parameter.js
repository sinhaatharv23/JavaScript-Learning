//Very Very Important
//Functions and Parameters
//Along with functions we have to also study about memory management, unlike C/C++ where the memory management is a bit complex , here memory management is comparatively easier.

//Function is a block of code designed to perform a particular task.
//Functions are reusable pieces of code that can be called multiple times with different inputs.
//Functions can take inputs, called parameters, and can return outputs, called return values.
//Functions help to organize code, make it more readable, and reduce redundancy.
//Functions are first-class citizens in JavaScript, meaning they can be treated like any other value, passed as arguments, and returned from other functions.
//Functions are defined using the function keyword, followed by a name, parentheses for parameters, and curly braces for the function body.
//Function Declaration Syntax:-
/*
function functionName(parameter1, parameter2, ...) {
    // Function body
    // Code to be executed
    return value; // Optional return statement
}
*/
//Example of Function Declaration:
function sayMyName(){
    console.log("My name is Atharva");
}
//Calling the function
sayMyName;// This is a reference to the function, but it won't execute it.
sayMyName(); // execution it is and the Output is: My name is Atharva


//Add two numbers:-
function addTwoNumbers(a,b){ // here a,b are parameters
    return a+b;
}

let a = 10;
let b = 20;
console.log(addTwoNumbers(a,b));//here a , b are arguments 
const result = addTwoNumbers(a,b);
console.log(result);


function loginUserMessage(username){
    if(username===undefined){ // (!username) is also equivalent to what we wrote , majorly used in react
        console.log("Please Enter a username");
        return;
    }
    return `${username} Just logged in`
}
console.log(loginUserMessage("Atharva"));//[NOTE:- when we will not pass anything as an argument in this function , then the output will be:- undefined just loogin in]

