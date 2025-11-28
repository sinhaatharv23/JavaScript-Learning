/*✅ EASY LEVEL (Warm-up)
1️⃣ Convert "123" to a number and add 10.
2️⃣ Convert true to a number.
3️⃣ Convert " " (empty space) to a boolean and explain why.
4️⃣ Take a string "Atharva" and print:
->length
->uppercase
->last character 
5️⃣ Check:
console.log("5" == 5);
console.log("5" === 5);
*/
const strNum = "123";
const ConvertNum = Number(strNum)+10;
console.log(ConvertNum);

const boolValue = true;
const ConvertBoolToNum = Number(boolValue);
console.log(ConvertBoolToNum);

const emptySpace = " ";
const ConvertEmptySpaceToBool = Boolean(emptySpace);
console.log(ConvertEmptySpaceToBool);
//Explanation: In JavaScript, any non-empty string (including a string with just a space) is considered truthy when converted to a boolean. Therefore, converting " " to a boolean results in true.

const nameStr = "Atharva";
console.log(nameStr.length);
console.log(nameStr.toUpperCase());
console.log(nameStr.charAt(nameStr.length-1));
console.log("5" == 5); //true
console.log("5" === 5); //false
