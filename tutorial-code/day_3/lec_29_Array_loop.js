//for of loop:-
//These all are array specific loops:-
const arr=[1,2,3,4,5];
for (const i of arr) {
    console.log(i);
}
//we can apply this for of loop in strings,objects,arrays,etc.

const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(greet);
}

//Written by me :-
//Maps(v.v.v.v.v Imp): Its just like an array,but it'll always have a unique values and remembers the order in which an element comes first
const map = new Map();
map.set('IN',"India");//Its like a key value pair;for more visit :- map js MDN
map.set('USA',"United States Of America");
map.set('Fr',"France");
console.log(map);

//Can we apply for-of loop in our map??
//=>Yes
for (const key of map) {
    console.log(key);//it'll come as an array like:- ['IN',"India"] ['USA',"United States Of America"] and so on 
}
 //But if we wanna print like an object and only keys of map then :-
 for (const [key,value] of map) {
    console.log(key, ':-', value);
 }

//But we'll be having the object then can we apply for of ??
//=>Yes
const myObject = {
    'game1':"NFS",
    'game2':"Spiderman"
}
// for (const [key ,value] of myObject) {
//     console.log(key,":-",value);//this is not the type that we iterate an object,there is another way to implement the forof loop in object
// }

//To iterate the objects we have forin loop:-
// const Object = {
//     js:"Javascript",
//     cpp:"C++",
//     rb:"Ruby",
//     swift:"swift by apple"
// }

// for (const key in Object) {
//    console.log(key);//will print only keys of an object
// }

// //To print value:-
// for (const key in Object) {
//     console.log(Object[key]);
// }

// //To print both key-value pair:-
// for (const key in Object) {
//     console.log(`${key} shortcut is for ${Object[key]}`);
// }

//Will forin loop works for array??
// const programming = ["Js","rb","py","java","cpp"];
// for (const key in programming) {
//     console.log(key);//it'll print only keys, i.e. 0 1 2 3 4 and so on
// }

//for value:-
// for (const key in programming) {
//    console.log(programming[key]);
// }

//can we apply forin loop in map too ??:-
// for (const key in map) {
//     console.log(key);//its not iteratable like this in forin , there is another way to implement map in forin loop
// }

//Most used loop we'll be using if we wanna iterate arrays:-
//For-each loop

const coding =["js","rb","py","java","cpp"];

// coding.forEach(element => {
//     console.log(element);
// });

function printMe(element){
    console.log(element);
}

coding.forEach(printMe); //We'll give only function's reference


//for-each also has access to other parameters too of an array , like index , or the whole array to be printed n number of times:-
coding.forEach((element,index,arr) => {
    console.log(element,index,arr);
});


//Array of objects iteration:-

const myCoding= [
    {
        languageName:"Javascript",
        languageFileName:"Js"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"C++",
        languageFileName:"Cpp"
    }
]

//we'll Iterate using for each loop:-
myCoding.forEach(element => {
    console.log(element.languageName);//languageName printed
});

