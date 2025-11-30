/*
🟢 EASY LEVEL (Warm-up)

1️⃣ Take an array of numbers:

const nums = [2, 4, 6, 8, 10];


print each value

print squares

print even numbers

2️⃣ Given:

const names = ["atharva", "rohit", "aman", "akshat"];


Use map to capitalize every name.

3️⃣ Write a function greet(name) that returns:

Hello, <name>


4️⃣ Write a function add(a, b) that returns the sum.

some More problems:-

2️⃣ Add a new key "city" to this object using spread:
const user = { name: "Atharva", age: 20 };

3️⃣ Destructure this object:
const person = { name: "Aman", age: 22, city: "Delhi" };


Extract:

name

age

4️⃣ Write a function sum(a, b) that returns the sum.
5️⃣ Write a function that takes an object and prints:
"My name is <name> and I am <age> years old"


Input:

const user = { name: "Rohit", age: 22 };
*/
// 1️⃣ Take an array of numbers:
const nums = [2,4,6,8,10];
//printing each value:-
for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);This prints each value in a new line
    process.stdout.write(nums[i]+" ");//This prints each value in one line
}
console.log();
//printing squares:-
nums.forEach(element => {
    // console.log(element*element);
    process.stdout.write(element*element+" ");
});
console.log();
//printing even numbers:-
nums.forEach(element=>{
    if(element%2==0){
        // console.log(element);
        process.stdout.write(element+" ");
    }
});

//2️⃣const names = ["atharva", "rohit", "aman", "akshat"];
//Use map to capitalize every name.
//Not studied yet , still solving using chatgpt:-
const names = ["atharva","rohit","aman","akshat"];
const capitalized = names.map(name=>{
    return name[0].toUpperCase() +name.slice(1);
});
console.log(capitalized);

// Q3
function greet(name){
    return `Hello,${name}`;
}
let a = "Atharva";
console.log(greet(a));

//Q4
function add(a,b){
    return a+b;
}
console.log(add(10,20));


//Q2:
const user = {
    name:"Atharva",
    age:20
};

const updatedUser = {
    ...user,
    city:"Giridih"
};
console.log(updatedUser);

//Q3
const person = {
    name:"Aman",
    age:22,
    city:"Delhi"
};

const{name,age}=person;
console.log(name,age);

//Q5:
function handleObject(anyobject){
    return `My name is ${anyobject.name} and I am ${anyobject.age} years old`;
}
console.log(handleObject(user));

