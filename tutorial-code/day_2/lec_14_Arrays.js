const myArr = [10, 20, 30, 40, 50];//Array Declaration and is always written in square brackets. And the elements are separated by commas.
//In array we can store multiple values of same data type or different data types.
//JavaScript arrays are resizable and can hold elements of any data type.
//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
//Array Indexing starts from 0.
console.log(myArr);//To print the whole array
console.log(myArr[0]);//To access the first element of the array and so on.
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//Shallow copy means that if the array contains objects, only the references to those objects are copied, not the actual objects themselves.
//Deep copy means that all objects are recursively copied, so that the new array is completely independent of the original array.
console.log(myArr.length);//To get the length of the array
myArr[2] = 35;//To modify an element of the array
console.log(myArr);
myArr.push(60);//To add an element at the end of the array
console.log(myArr);
myArr.pop();//To remove an element from the end of the array
console.log(myArr);
myArr.unshift(5);//To add an element at the beginning of the array,but here the problem is it shifts all the other elements to the right which takes more time.
console.log(myArr);
myArr.shift();//To remove an element from the beginning of the array
console.log(myArr);
console.log(Array.isArray(myArr));//To check if a variable is an array or not
console.log(myArr.indexOf(30));//To get the index of an element in the array

//Another way to declare an array
const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2);
//However, this method is less commonly used and not recommended for creating arrays in JavaScript.
console.log(myArr.includes(9));//To check if an element is present in the array or not
console.log(myArr.toString());//To convert the array to a string
const newArr = myArr.join();//To join all the elements of the array into a string with a specified separator (default is comma)
console.log(newArr);
console.log(typeof myArr);
console.log(typeof newArr);

//Slice and Splice Methods
console.log("A ",myArr);

const myN1 = myArr.slice(1,3);//Slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log("Slice ",myN1);
console.log("After Slice ",myArr);

const myN2 = myArr.splice(1,3); //Splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.
console.log("Splice ",myN2);
console.log("After Splice ",myArr);
//In the above example, 1 is the starting index and 3 is the number of elements to be removed from that index.

