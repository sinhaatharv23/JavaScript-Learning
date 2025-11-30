//How to declare the object using Constructor?
const tinderUser = new Object();//Empty Object Declaration using Constructor,its a singleton object.
console.log(tinderUser);

//Or:-
const tinderUser_2 = {};//Empty Object Declaration using Object Literal Syntax,its a non singleton object.
console.log(tinderUser_2);

tinderUser.id = "tinder001";
tinderUser.name = "Atharva";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// We can also add objects inside objects.

const regularUser = {
    name: "Atharva",
    email: "sinhaatharv39@gmail.com",
    fullName : {
        firstName: "Atharva",
        lastName: "Sinha"
    }
};
console.log(regularUser.fullName);
console.log(regularUser.fullName.firstName);


//There is a concept of optional chaining too:-
console.log(regularUser?.fullName?.firstName);//If fullName or firstName is not present, it will return undefined instead of throwing an error.
//Optional chaining is a safe way to access nested object properties, even if an intermediate property doesn't exist.
//It helps to avoid runtime errors when trying to access properties of undefined or null objects.


//We can also merge the objects using Object.assign() method.
const Obj1 = {
    key1: "value1",
    key2: "value2"
};
const Obj2 = {
    key3: "value3",
    key4: "value4"
};

const mergeObj =  Object.assign({},Obj1,Obj2);//here {} is the target object where we want to copy the properties of Obj1 and Obj2.
console.log(mergeObj);
//The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
//It returns the target object.
//In the above example, Obj2 properties are copied to Obj1 and the merged object is stored in mergeObj.
//If there are properties with the same name in both objects, the value from the source object (Obj2) will overwrite the value in the target object (Obj1).
//We'll not use this much, instead we'll use Spread Operator to merge objects which is more efficient and cleaner.

const mergedObjUsingSpread = {...Obj1, ...Obj2};
console.log(mergedObjUsingSpread);


//When the value comes from a database, it'll come as an array of objects.
const users =[
    {
        userId: 1,
        userName: "Atharva"
    },
    {
        userId: 2,
        userName: "Tarun"
    },
    {
        userId: 3,
        userName: "Anjali"
    }
];
//If I wanna access the first user's name:
console.log(users[0].userName);

//If I wanna access keys of a particular object:- 
console.log(Object.keys(tinderUser));
//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
//Means we can iterate over the keys of the object using for..of loop.
for(let key of Object.keys(tinderUser)){
    console.log("Key is:", key);
    console.log("Value is:", tinderUser[key]);
}
 