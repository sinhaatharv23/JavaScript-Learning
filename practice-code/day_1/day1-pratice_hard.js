/*
🔥 HARD LEVEL (Brain opening)
(These will make your concepts SOLID.)

🔟 Write a function isEmpty(value) that returns true if:

value is empty string

value is null

value is undefined

value is 0

value is false

value is NaN

Otherwise false.

Use type conversion + comparison rules.

1️⃣1️⃣ What will be the output? Explain why.

console.log(Number("   123   "));
console.log(Number("   "));
console.log(Number(""));
console.log(Number("Atharva"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));


1️⃣2️⃣ Write a function convertToNumber(input):

If input can be converted to number → return the number

Else → return "Not a number"

Use:

Number()

isNaN()

Example:

convertToNumber("100") → 100
convertToNumber("abc") → "Not a number"
convertToNumber("42abc") → "Not a number"
convertToNumber(true) → 1

*/
//Q10.
function isEmpty(value){
    return value === "" || value === null || value === undefined || value ===0 || value === false || value === NaN;
}
console.log(isEmpty(12));
console.log(Number("  123   "));
console.log(Number(" "));
console.log(Number(""));
console.log(Number("Atharva"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

//Q11.
function convertToNumber(input){
    if(Number(input)!=NaN){
        return Number(input);
    }else{
        return "Not a number";
    }
}
console.log(convertToNumber(true));
