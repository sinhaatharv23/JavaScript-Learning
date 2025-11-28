const name = "Atharva Sinha";
const repoCount = 50;
console.log(name + repoCount + " Value"); // Concatenation of string and number, but this type of code is not recommended due to readability issues.
//Instead we will use backticks to make it more readable.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Declaration of string:-
const gameName = new String("God of War"); // Using String constructor

//[NOTE:- String is not an array , its an object which is collection of characters.]
console.log(gameName[0]); // Accessing first character
console.log(gameName.length); // Length of the string
console.log(gameName.__proto__); // Shows the prototype of the String object

console.log(gameName.toUpperCase()); // Converts string to uppercase,but original string remains unchanged as strings are immutable in JavaScript. Means any operation on string creates a new string, which we can store in a new variable if needed,and then that new variable will have the modified string.
console.log(gameName.toLowerCase()); // Converts string to lowercase
console.log(gameName.substring(0,4)); // Extracts substring from index 0 to 4 (not including 4)
console.log(gameName.slice(0,4)); // Extracts substring from index 0 to 4 (not including 4), similar to substring but can also accept negative indices
console.log(gameName.slice(-4)); // Extracts last 4 characters of the string from reverse
console.log(gameName.trim()); // Removes whitespace from both ends of the string
const url = "https://www.example.com/path/to/page?name=atharva&sinha=developer";
console.log(url.replace('page', 'home')); // Replaces 'page' with 'home' in the URL
console.log(url.includes('atharva')); // Checks if 'atharva' is present in the URL, returns true or false\
console.log(gameName.split(' ')); // Splits the string into an array of substrings based on the delimiter (space in this case)\
