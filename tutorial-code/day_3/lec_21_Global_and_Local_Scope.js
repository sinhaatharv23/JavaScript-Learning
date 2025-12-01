//Scope's story starts with let,var and const.
let a = 10; //global scope, means it can be accessed from anywhere in the file.
const b = 20; //global scope, means it can be accessed from anywhere in the file.
var c = 30; //global scope, means it can be accessed from anywhere in the file.

/*So the thing is, when our work was going on smoothly so,why the hell we have to use let and const?? 

=> var doesn't work like a block scope*/
//{} this is the scope. 
if (true) {
    let x = 100; //block scope, meaning it can be accessed only inside this block.
    const y = 200; //block scope, meaning it can be accessed only inside this block.
    var z = 300; //function scope,we'll study about this later.
}
console.log(a);
console.log(b);
console.log(c);
//console.log(x); //error
//console.log(y); //error
console.log(z); //works fine, because var is function scope, not block scope.
//this is the reason we use let and const to avoid such issues.
//[NOTE:If we define variables in Global scope, they can be accessed from anywhere in the file,means they are available everywhere.But if we define the variables inside block scope and function scope,then that variable must not go outside the block as it can create some problems as we have seen in function scope.So we'll not talk about var]
let w=300;
if(true){
    let w=400; //updating the value of w defined in global scope.
    console.log("Inner",w); //400
}

//[NOTE: The scope which we can see in the console part of the web page is different from the scope of the code we write in the js file. So always rely on the code written in the js file only.]

console.log("Outer",w); //300