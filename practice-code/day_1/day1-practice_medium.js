/*
🟡 MEDIUM LEVEL (Important)
6️⃣ Write a function formatName(str) that:

trims extra spaces

converts to lowercase

capitalizes first letter

Example:
" aTHaRvA" → "Atharva"

7️⃣ Convert these to numbers and explain each:

"123abc"
null
undefined
"0"
" "
"false"


8️⃣ Given:

const age = "20";
const minAge = 18;


Make an if statement that correctly compares them
(remember to convert age to number!).

9️⃣ What will this print?

console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);


Add comments explaining EACH line.
 */
//Q6.
function formatName(str){
    let trimmedStr = str.trim();
    let lowerStr = trimmedStr.toLowerCase();
    let formattedStr = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
    return formattedStr;
}
console.log(formatName(" aTHaRvA")); // "Atharva"

//Q7.
console.log(Number("123abc")); // NaN : "123abc" contains non-numeric characters, so conversion fails.
console.log(Number(null)); // 0 : null is converted to 0 in numeric context.
console.log(Number(undefined)); // NaN : undefined cannot be converted to a number.
console.log(Number("0")); // 0 : "0" is a valid numeric string and converts to 0.
console.log(Number(" ")); // 0 : A string with only whitespace is trimmed to an empty string, which converts to 0.
console.log(Number("false")); // NaN : "false" is not a valid numeric string, so conversion fails.

//Q8.
const age = "20";
const minAge = 18;
if (Number(age)>=minAge){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}

//Q9.
console.log(0 == false); // true : 0 is considered falsy, so they are equal with type coercion.
console.log(0 === false); // false : different types (number vs boolean), no type coercion.
console.log("" == false); // true : empty string is considered falsy, so they are equal with type coercion.
console.log("" === false); // false : different types (string vs boolean), no type coercion.
//In summary, == checks for value equality with type coercion, while === checks for both value and type equality without coercion.
