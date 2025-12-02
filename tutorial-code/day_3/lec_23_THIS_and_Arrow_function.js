//what is THIS keyword in JS?
//THIS keyword refers to the object that is executing the current function
//In global context, THIS refers to the global object (window in browsers)
console.log(this); //In global context, this refers to the global object (window in browsers)
//In a regular function, THIS refers to the object that called the function
function regularFunction() {
    console.log(this); // In a regular function, this refers to the global object (window in browsers)
}
regularFunction();
//In a method, THIS refers to the object that owns the method
const obj = {
    name: 'Atharva',
    greet: function() {
        console.log(this.name); // In a method, this refers to the object that owns the method
    }
};
obj.greet();

const user = {
    name: 'Alice',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.name} , welcome to website `)
    }
}
user.welcomeMessage(); //Alice , welcome to website

user.name = "Bob";
user.welcomeMessage(); //Bob , welcome to website

//This basically shows the current context of the code being executed inside a function or method.
//[Note: when we execute 'this' outside any function or method, it refers to the global object (window in browsers),i.e. we'll get a {} only. But when we execute 'this' inside a function or method, it refers to the object that owns the function or method.
//We cant use 'this' inside the functions directly as it will give undefined in strict mode.]
function chai(){
    let username = "Atharva";
    console.log(this.username); //undefined in strict mode
} 
chai();

//How to declare functions in more way , especially through Arrow functions?
//Arrow function doesn't have its own 'this', it inherits 'this' from the surrounding lexical context.
//What is lexical context?
//Lexical context means the context in which the function is defined, not where it is called.
//example of lexical context with arrow function:
const person = {
    name: 'John',
    greet: function() {
        const arrowFunction = () => {
            console.log(this.name); // 'this' refers to the surrounding lexical context, which is the 'greet' method's 'this'
        };
        arrowFunction();
    }
};


//Basic Arrow function example:
const add = (a,b)=>{
    return a+b;
}
console.log(add(2,3)); //5

//Implicit return in arrow function:
//In implicit return, we can omit the curly braces and the 'return' keyword.
const multiply = (a,b)=> (a*b);
console.log(multiply(2,3)); //6

//[NOTE:1. Curly braces are mandatory when we have more than one statement in the function body.
        //2.Curly braces are mandatory in basic arrow function, but in implicit return arrow function, there we have to add ().]

//If we want to have an object function:-
const createUser = (name,age)=>{(
    {
    name:"Atharva",
    age:21
    }
)};  



const myArray = [1,2,3,4,5];
// myArray.forEach(()=>
    