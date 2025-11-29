const marvelHeroes = ["Thor", "Iron Man", "Hulk", "Black Widow", "Captain America"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

// marvelHeroes.push(dcHeroes);
// console.log("After pushing DC heroes into Marvel heroes:", marvelHeroes);
// Here, the entire dcHeroes array is added as a single element at the end of marvelHeroes.
// console.log("Accessing the nested DC heroes array:", marvelHeroes[5]);
// console.log("Accessing an element from the nested DC heroes array:", marvelHeroes[5][1]);
//Not a very efficient way to merge two arrays.

const allHeroesConcat = marvelHeroes.concat(dcHeroes);
console.log("After concatenating Marvel and DC heroes:", allHeroesConcat);
//concat() method merges two or more arrays and returns a new array without modifying the original arrays.
//But this method also has its limitations when it comes to merging multiple arrays or adding elements in between.

//Therefore , there is a better way to merge arrays using the Spread Operator.
const allHeroesSpread = [...marvelHeroes, ...dcHeroes];
console.log("After merging Marvel and DC heroes using Spread Operator:", allHeroesSpread);
//The spread operator (...) allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
//This method is more flexible and can be used to merge multiple arrays or add elements in between.

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];//rare case situation
console.log("Original another_Array:", another_Array);
//To solve this situation we use flat() method
const real_Another_Array = another_Array.flat(Infinity);//Infinity is used to flatten the array to any depth
console.log("Flattened another_Array using flat(Infinity):", real_Another_Array);
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//If no depth is specified, the default is 1.
//Using Infinity as the depth flattens the array completely, regardless of how deeply nested the sub-arrays are.


//Note: The flat() method is not supported in Internet Explorer.


console.log(Array.isArray("Atharva")); //false
console.log(Array.from("Atharva")); //['A', 't', 'h', 'a', 'r', 'v', 'a']
//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from({name:"Atharva"})); //[] as the object is not iterable, we have to make the array in this using keys or values method
console.log(Array.from({0:"A",1:"t",2:"h",3:"a",4:"r",5:"v",6:"a", length:7})); //['A', 't', 'h', 'a', 'r', 'v', 'a']
//In the above example, we have created an array-like object with numeric keys and a length property, which allows Array.from() to convert it into an array.


//If we have multiple variables and we want to store them in an array, we can use Array.of() method.
//Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
let score_1 = 100;
let score_2 = 200;
let score_3 = 300;

const scoresArray = Array.of(score_1, score_2, score_3);
console.log("Scores Array using Array.of():", scoresArray);
//This method is useful when we want to create an array from a set of values without having to explicitly define the array using square brackets.
