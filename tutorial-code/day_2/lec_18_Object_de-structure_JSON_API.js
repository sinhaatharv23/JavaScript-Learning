//In this we'll learn about Object De-structuring and JSON API.
const course = {
    courseName: "JavaScript",
    courseDuration: "3 Months",
    courseProvider: "Udemy",
    coursePrice: 1999
}

//To use these properties of the above object "course", we can access them using dot notation or bracket notation.
console.log(course.courseName);

//But if we have to access multiple properties of the object, then it becomes tedious to write the object name again and again.
//To solve this problem, we can use Object De-structuring.
//Object De-structuring Syntax
// const {Name of the property} = course(Name of the object);

//Example of Object De-structuring:
const {courseName} = course;
console.log(courseName);//Now we can access courseName directly without using course.courseName

// We can also rename the variable while de-structuring.
const {courseDuration: duration} = course;
console.log(duration);//Now we can access courseDuration using duration variable

//In react and all there are some methods which return multiple values in the form of object, so we can use object de-structuring to access those values easily.
//As in react too to access the company(as in the example below) we have to use props.company and all inside the '()' which is tedious. So instead we can use object de-structuring to access the company directly.
// const navbar = ({company}) =>{

// }
// navbar(company = "Udemy");This is just an example to show how object de-structuring is used in react.

//JSON API 
//Jab Bhi Hame apna kaam kisi or ke sarr pr daal dena hota hai usi ko hm APIs kehte hai. APIs ka full form hota hai Application Programming Interface.
//API ek aisa interface hai jo do applications ko ek dusre se baat karne aur data exchange karne ki suvidha pradan karta hai.
//JSON ka full form hota hai JavaScript Object Notation. Ye ek lightweight data-interchange format hai jo humans ke liye padhna aur likhna asaan hota hai, aur machines ke liye parse karna aur generate karna bhi asaan hota hai.
//JSON API ek aisa API hai jo data ko JSON format mein exchange karta hai.
//Example of JSON:
/*
{
    "name": "Atharva",
    "age": 21,
    "isStudent": true,
    "skills": ["JavaScript", "HTML", "CSS"],
    "price": "free"
}
Here keys and values both are in double quotes, means keys and values both are treated as strings.
*/

//Since we know objects now so JSON looks similar to objects but there are some differences between JSON and JavaScript objects:
//1. In JSON, keys must be in double quotes, whereas in JavaScript objects, keys can be in double quotes, single quotes, or without quotes (if they are valid identifiers).
//2. In JSON, string values must be in double quotes, whereas in JavaScript objects, string values can be in double quotes, single quotes, or without quotes (if they are valid identifiers).
//3. JSON does not support functions, undefined, or comments, whereas JavaScript objects can have functions as values, undefined values, and comments.

//However, to extract JSON data similar method is used like object de-structuring.
//[NOTE:- Its not necessary that JSON data will always come in the form of objects, it can also come in the form of arrays of objects.]
// [
//     {},
//     {},
//     {}
// ] //This is an example of JSON data in the form of an array of objects.

//The most famous API is :- Random User Me API which provides random user data in JSON format for testing and prototyping purposes.
//Tools to understand complex JSON data:- 1. JSON Formatter tool