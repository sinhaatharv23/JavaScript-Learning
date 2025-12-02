/*
🟡 MEDIUM LEVEL (Core Interview Level)
6️⃣ Use reduce to find the total
const money = [100, 200, 50, 400];


Output: 750

7️⃣ Use filter to return users older than 20
const users = [
  { name: "Atharva", age: 20 },
  { name: "Rohit", age: 25 },
  { name: "Aman", age: 18 }
];

8️⃣ Use map to extract all names

Same users array.

Output:

["Atharva", "Rohit", "Aman"]

9️⃣ Use reduce to count total characters in all names

Using:

["Atharva", "Rohit", "Aman"]

🔟 Why does this behave differently? Explain “this”:
const user = {
  name: "Atharva",
  printName: function() {
    console.log(this.name);
  }
};

const newUser = user.printName;
newUser();
*/

//Q6:
const money = [100,200,50,400];
const total = money.reduce((accumulator,item)=>{
    return (accumulator+item);
},0);
console.log(total);

//Q7:
const users = [
  { name: "Atharva", age: 20 },
  { name: "Rohit", age: 25 },
  { name: "Aman", age: 18 }
];
const olderUser = users.filter((user)=>{
    return(user.age>20);
});
console.log(olderUser);

//Q8:
//Same array users:
const names = users.map((name)=>{
    return (name.name);
});
console.log(names);

//Q9:
const name = ["Atharva","Rohit","Aman"];
const totalChars = name.reduce((total,name)=>{
    return (total+name.length);
},0);
console.log(totalChars);

//Q10:
