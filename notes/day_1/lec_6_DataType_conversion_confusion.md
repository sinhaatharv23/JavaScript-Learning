Most IMP Topic: Datatype Conversion Confusion in JavaScript

let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

But if we have a string say "33abc" then what will happen?
->let score2 = "33abc";
->let valueInNumber2 = Number(score2);
->console.log(valueInNumber2); // NaN : Not a Number
console.log(typeof valueInNumber2); // number : This is confusing but NaN is of type number
// So, we have to be careful while converting string to number in JavaScript.
// Similarly, we can convert number to string using String() function
let num = 44;
let strNum = String(num);
console.log(typeof strNum); // string
// We can also use toString() method to convert number to string
let strNum2 = num.toString();
console.log(typeof strNum2); // string

// We can also convert boolean to number and vice versa
let isLoggedIn = true;
let boolToNum = Number(isLoggedIn);
console.log(boolToNum); // 1
let numToBool = Boolean(1);
console.log(numToBool); // true
let numToBool2 = Boolean(0);
console.log(numToBool2); // false
// Similarly, empty string converts to false and non-empty string converts to true
let strToBool = Boolean("");
console.log(strToBool); // false
let strToBool2 = Boolean("Atharva");
console.log(strToBool2); // true

// If we write score = null; and then try to convert it to number
let score3 = null;
let nullToNum = Number(score3);
console.log(nullToNum); // 0
// But if we write score = undefined; and then try to convert it to number
let score4 = undefined;
let undefToNum = Number(score4);
console.log(undefToNum); // NaN
// So, we have to be careful while converting null and undefined to number in JavaScript.


Summary:-
-> 1=>true; 0=> false;
-> ""=>false;"anything inside these quotes" => true