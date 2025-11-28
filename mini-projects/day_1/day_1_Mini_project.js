/*
🎯 “String Formatter App”

Take a string input (hardcode it).

Output:

trimmed string

lowercase version

uppercase version

first letter capital

last 3 characters

reversed string

Example:

Input: " hELlo WorLD "

Output:

"hello world"
"HELLO WORLD"
"Hello world"
"rld"
"dlroW olleH"


This will use:

trim

slice

substring

toUpperCase

toLowerCase

string indexing

Amazing warmup before arrays.
*/
function StringFormatter(str){
    let trimmed = str.trim();
    console.log("Trimmed: ",trimmed);
    console.log("LowerCase: ",trimmed.toLowerCase());
    console.log("Uppercase: ",trimmed.toUpperCase());

    let firstLetterCapital = trimmed.charAt(0).toUpperCase()+trimmed.slice(1).toLowerCase();
    console.log("First letter Capital: ",firstLetterCapital);
    console.log("Last 3 chars: ",trimmed.slice(-3));
    let reversed = trimmed.split("").reverse().join("");
    console.log("Reversed String: ",reversed);

}
StringFormatter(" hELlo WorLD ");