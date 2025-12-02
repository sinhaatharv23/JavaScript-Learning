//Map:It uses a callback function like foreach. It returns the value unlike for-each
const myNums = [1,2,3,4,5,6,7,8,9,10];

//If we want to add 10 in all the elements, then we'll use map
// const newNums=myNums.map((num)=>{
//     return num+10;
// })
// console.log(newNums);

//Chaining method in map:- Like we can use two or more maps as well as any methods(filter,reduce etc)
// const newNums = myNums.map().map().filter()

//Eg of chaining method:-
const newNums = myNums
.map((num)=>(num*10))
.map((num)=>(num+10))
.filter((num)=>num>=40)
console.log(newNums);