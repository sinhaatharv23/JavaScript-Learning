const accountId = 123456; //
let accountEmail = "sinhaatharv39@gmail.com";
var accountPassword = "myStrongPassword123";
accountCity = "Jaipur";
//This var, let and const are used to declare variables in JavaScript.
//They are basically stored in the memory of the computer.
//1. const : The value of a variable declared with const cannot be changed later in the code. It is a constant.
//accountId = 2; This will give an error because we cannot change the value of a const variable.:-
console.log(accountId);

accountEmail = "sinhaatharva23@gmail.com"; //This is valid because accountEmail is declared with let.
console.log(accountEmail);

accountPassword = "newStrongPassword456"; //This is valid because accountPassword is declared with var.
console.log(accountPassword);
accountCity = "Delhi"; //This is valid because accountCity is declared without var, let or const.
console.log(accountCity);

// If we dont wanna write again and again the console.log() then we can use another way to print multiple variables at once.
//i.e. console.table();
console.table([accountId, accountEmail, accountPassword, accountCity]);
//2. let : The value of a variable declared with let can be changed later in the code.
//3. var : The value of a variable declared with var can also be changed later in the code.We dont use var much these days because let and const are introduced in ES6 and they provide better scope management.
//Scope is the curly braces {} in which the variable is declared.
//4. Without var, let or const : If we declare a variable without var, let or const, it becomes a global variable and can be accessed from anywhere in the code.