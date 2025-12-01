//Nested scope :-
function one(){
    const username = "Atharva";
    function two(){
        const website = "Youtube";
        console.log(username);
    }
    //console.log(website);//error

    two();
}

one();

if (true) {
    const username = "Atharva";
    if (username==="Atharva") {
        const website = " Youtube";
        console.log(username+website);
    }
    // console.log(website);error
}

//console.log(username);error




// ++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++//
//Good concept:-

//below is a funtion:-

addOne(5); //Its working fine even before the function is defined. This is called Hoisting in JavaScript.
function addOne(value) {
    return value + 1;
}
addOne(5); //6

//below is a function expression:-
//addTwo(5); error: Cannot access 'addTwo' before initialization when we define function expression
const addTwo = function(num){
    return num + 2;
}
addTwo(5); //7

//What is hoisting?
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// This means that you can use functions and variables before they are declared in the code.
//But this only works for function declarations, not for function expressions or arrow functions.
