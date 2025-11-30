/*
 
🟡 MEDIUM LEVEL
6️⃣ Write a function getEvenNumbers(arr)
Return a new array of only even numbers using a loop.

7️⃣ Write a function findMax(arr)
Return the maximum value from an array (use a loop).

8️⃣ Using functions + objects:
Given:

js
Copy code
const car = {
  brand: "BMW",
  price: 4000000,
  color: "black"
};
Write a function:

scss
Copy code
printCar(car)
Output:

nginx
Copy code
BMW - black - 4000000
9️⃣ Write a function that takes an object:
js
Copy code
{ name: "Atharva", skills: ["JS", "React"] }
and prints:

nginx
Copy code
Atharva knows JS and React
🔟 Write a function merge(obj1, obj2)
Return a new merged object using spread operator.


 */

//Q6:
function getEvenNumbers(arr){
     let nums = new Array();
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2===0){
            nums.push(arr[i]);
        }
    }
    return nums;
}
const arr = [1,2,3,4,5,6];
console.log(getEvenNumbers(arr));

//Q7:
function findMax(arr){
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach(element => {
       if(max<element){
        max = element;
       } 
    });
    return max;
}
console.log(findMax(arr));

//Q8:
const car = {
    brand:"BMW",
    price:4000000,
    color:"black"
};
function printCar(car){
    console.log(car.brand+"-"+car.color+"-"+car.price);
}
printCar(car);

//Q9:
function handleObj(anyobject){
    console.log(`${anyobject.name} knows ${anyobject.skills}`);
}
handleObj({
    name:"Atharva",
    skills:[
        "JS","React"
    ]
});

//Q10:
function merge(obj1,obj2){
   return{
    ...obj1,...obj2
   };
};

const obj1 = {
    a:1,b:2
};
const obj2 ={
    b:5,c:3
};
console.log(merge(obj1,obj2));
