//One of the common situation is the shopping cart in e-commerce websites where we have multiple items with different properties like name, price, quantity, etc.
//And users can add multiple items to the cart, so we need to store these items in a structured way.
//So we dont know how many items the user will add to the cart, so we can use an array to store these items.
//This is a very common situation


//If we want to pass multiple items we use rest / spread operator.
function calculateCartPrice(...num1){ //rest operator here, basically it collects all the arguments passed to the function and stores them in an array named num1.
    return num1;
}
console.log(calculateCartPrice(200,400,500));

//We can handle objects inside functions too.
const user = {
    name: "Atharva",
    price: 1000
};
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject(user);// Passing object as an argument to the function.
//Now its not necessary that we have to first create an object and then we can pass it to the function, we can also create the object directly inside the function call.
handleObject({
    name: "Tarun",
    price: 2000
});
//We can pass arrays too inside functions.
const myNewArray = [200,400,100,600];
function handleArray(anyarray){
    return anyarray[1];//Accessing the second element of the array.
}
console.log(handleArray(myNewArray));//Passing array as an argument to the function.
//Similarly we can also create the array directly inside the function call.
console.log(handleArray([500,700,300,900]));
