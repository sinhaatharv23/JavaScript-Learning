let value = 3;
let negValue = -value;
console.log(negValue);

//Some operations:-
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(5%2); //Modulus operator gives the remainder

//Some tricky oprations
let str_1 = "Hello";
let str_2 = "World";

console.log(str_1 + str_2); //Concatenation of strings
console.log(str_1 + " " + str_2); //Concatenation of strings with space
console.log(1+"2")//complex situation, we'll properly discuss it abhi:-
console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2");//confusion arises due to datatype conversion in JavaScript which we'll discuss.
//[NOTE:- In JS , agar string first me hai to sabhi ko string consider kiya jaayega, and if string last me hai then pehle operations honge and then string consider kiya jaayega.]
console.log("10"-2);//Here JS consider "10" as number and perform subtraction
console.log("10"*2); //Here JS consider "10" as number and perform multiplication
console.log("10"/2); //Here JS consider "10" as number and perform division
console.log("10"-"2");//Here JS consider both as numbers and perform subtraction
console.log("10"* "2"); //Here JS consider both as numbers and perform multiplication
console.log("10"/"2"); //Here JS consider both as numbers and perform division
console.log("10"+2); //Here JS consider 2 as string and perform concatenation
console.log("10"+ "2"); //Here JS consider both as strings and perform concatenation

//We can use Number() function to convert string to number explicitly

//Some tricky conversions:-
console.log(true);
console.log(+true);//this is a confusion code,its value will be 1
//console.log(true+);//this will give error
console.log(+"");//this will give 0
console.log(+null);//this will give 0
console.log(+undefined);//this will give NaN
//Poor readability code, avoid writing like this:-
let num1,num2,num3;
num1 = num2 = num3 = 2+2;
console.table([num1,num2,num3]);

let gameCounter = 100;
gameCounter++; // Post-increment
console.log(gameCounter);
++gameCounter; // Pre-increment
console.log(gameCounter);