/*
🔥 HARD LEVEL (But manageable without map/filter)
1️⃣1️⃣ Convert this array into an object:
const students = ["Aman", "Rohit", "Tanay"];


Output:

{
  1: "Aman",
  2: "Rohit",
  3: "Tanay"
}


Use a loop.

1️⃣2️⃣ Write a function deepCopy(obj)

Clone this nested object WITHOUT using JSON methods:

const user = {
  name: "Atharva",
  address: {
    city: "Pune",
    state: "MH"
  }
};


Output:
A new object with same values but different references.

(Hint: Use nested loops or recursion)

1️⃣3️⃣ Remove duplicates from array WITHOUT using Set or map/filter:

Input:

[1,2,2,3,4,4,5]


Output:

[1,2,3,4,5]


(Hint: Use a loop + new array + includes)
*/

//Q11:
const students = ["Aman","Rohit","Tanay"];

const obj = Object.assign({},students);
console.log(obj);

//Q12:


//Q13:
const arr = [1,2,2,3,4,4,5];
function removeDuplicates(arr){
    let result = new Array();
    for(let i=0;i<arr.length;i++){
        let exists = false;
        for(let j = 0;j<result.length;j++){
            if(result[j]===arr[i]){
                exists = true;
                break;
            }
        }
        if(!exists){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates(arr));