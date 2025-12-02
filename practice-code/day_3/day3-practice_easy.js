/*
🟢 EASY LEVEL (Warm-up)
1️⃣ Double the numbers using map
const nums = [1, 2, 3, 4, 5];


Output: [2,4,6,8,10]

2️⃣ Get only even numbers using filter
const arr = [12, 3, 45, 6, 8, 9];

3️⃣ Find the first number greater than 50
const nums = [10, 22, 55, 30, 80];

4️⃣ Convert this function into an arrow function
function greet(name){
  return "Hello " + name;
}

5️⃣ Check scope output

What will this print?

let x = 10;

function test() {
  let x = 20;
  console.log(x);
}

test();
console.log(x);
*/

//Q1
const nums = [1,2,3,4,5];
const newNums = nums.map((num)=>{
    return (num*2);
})
console.log(newNums);

//Q2
const arr = [12,3,45,6,8,9];
const newArr = arr.filter((item)=>{
    return (item%2===0);
})
console.log(newArr);

//Q3
const numberedArray = [10,22,55,30,80];
const firstGreater = numberedArray.find(num=>num>50);
console.log(firstGreater);
//Here, .find() returns the first element that satisfies the condition num > 50

//Q4
// function greet(name){
//   return "Hello " + name;
// }

const greet = (name)=>{
    return "Hello " + name;
}
console.log(greet("Atharva"));

//Q5:
let x = 10;

function test() {
  let x = 20;
  console.log(x);
}

test();
console.log(x);

