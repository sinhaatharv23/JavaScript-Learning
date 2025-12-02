/*
🔥 HARD LEVEL (These build REAL JS mastery)
1️⃣1️⃣ Filter + map + reduce chain

Given:

const data = [12, 45, 22, 9, 60, 70];


Do this in ONE chain:

filter numbers > 20

multiply each by 2

find the sum

Expected:

(45, 22, 60, 70) → multiply (90, 44, 120, 140) → sum = 394

1️⃣2️⃣ Remove duplicate objects based on name
const students = [
  { name: "Atharva", age: 20 },
  { name: "Aman", age: 21 },
  { name: "Atharva", age: 22 }
];


Output:

[
  { name: "Atharva", age: 20 },
  { name: "Aman", age: 21 }
]


(Hint: use filter + findIndex)

1️⃣3️⃣ Using reduce → group users by age
const users = [
  { name: "Atharva", age: 20 },
  { name: "Rohit", age: 20 },
  { name: "Aman", age: 21 },
];


Output:

{
  20: ["Atharva", "Rohit"],
  21: ["Aman"]
}

1️⃣4️⃣ Implement your own map function

Write:

function myMap(arr, callback) {
   // your logic
}


Usage:

myMap([1,2,3], x => x * 2)
// Output: [2,4,6]


(Hint: use a loop)
*/

//Q11:
const data = [12,45,22,9,60,70];
const chaining = data
.filter((item)=>item>20)
.map((item)=>item*2)
.reduce((accumulator,item)=>{
    return (accumulator+item)
},0);

console.log(chaining);

//Q12:
const students = [
  { name: "Atharva", age: 20 },
  { name: "Aman", age: 21 },
  { name: "Atharva", age: 22 }
];

const unique = students.filter((student,index)=>{
    return students.findIndex(s=>s.name===student.name)===index;
});

console.log(unique);

//Q13:
const users = [
  { name: "Atharva", age: 20 },
  { name: "Rohit", age: 20 },
  { name: "Aman", age: 21 }
];

const grouped = users.reduce((result, user) => {
  if (!result[user.age]) {
    result[user.age] = [];
  }
  result[user.age].push(user);
  return result;
}, {});

console.log(grouped);

