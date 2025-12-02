//Reduce: What is reduce??
/*
reduce() is one of the MOST important array methods in JavaScript.
It takes an array and reduces it to a single value → a number, string, object, array… anything. 

What is reduce()?

reduce() runs a function on every element of the array and keeps collecting a result in a variable called accumulator.

Basic syntax:

array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);

🔥 Now let’s break this down clearly:
✅ 1. Accumulator (acc)

This stores the result so far.

It keeps updating after each iteration.

Think of it like a “carry forward” value.

✅ 2. Current Value (cur)

The element of the array currently being processed.

✅ 3. Initial Value

The starting value for the accumulator.

If you don’t give one, the first element of the array becomes the initial value
*/

//Working:
const myNums = [1,2,3];
const sumWithInitial = myNums.reduce(function(accumulator,currentValue){
    console.log(`acc: ${accumulator} and current value: ${currentValue}`);
    return (accumulator+currentValue)
},0);//after ',' we write initialValue
console.log(sumWithInitial);
//Used mostly in shopping cart


const initialValue = 1;
const myTotal = myNums.reduce((accumulator,currentValue)=>{
    return (accumulator+currentValue)
},initialValue);
console.log(myTotal);

//eg:-
const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"python course",
        price: 999
    },
    {
        itemName:"Mobile dev course",
        price: 5999
    },
    {
        itemName:"Data science course",
        price: 12999
    }
]

//Add all the prices of inside the shoppingCart
const AddTotal = shoppingCart.reduce((accumulator,currentValue)=>{
    return (accumulator+currentValue.price);
},0);
console.log(AddTotal);