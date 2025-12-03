//Promise creation
const promiseOne = new Promise((resolve,reject)=>{
    //Do an Async task 

    //OR

    //DB calls,cyrptography related,network related calls

    setTimeout(()=>{
        console.log('Async Task is complete');
        resolve();//resolve connected with .then()directly by only calling it.
    },1000);//1000ms=1s , we'll write in ms only .
});//resolve:- promise yaa to pura hoga
//reject:- promise yaa reject ho jaayega
//Its just like getting a job or getting rejected

//Now we have to consume the promise:-
//Promise consumption:-
promiseOne.then(()=>{
    console.log("Promise consumed");//under this function we can return the value/work done under the promise section
})//.then ka direct connection hai resolve ke saath,.then ke andar hame ek callback milta hai jiske saath hm jo chaahe wo kr skte hai.


//[NOTE:- .then ke andar walaa task kabhi bhi pehle execute nai hoga.]
//In earlier days we were using bluebird and Q for asynchronous JS


new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("Async 2 resolved");
});//Since we have not stored promise under any variable so we can directly call .then here only

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //we can pass data also from the resolve. Usually the data which is being passed inside the resolve is object. We can pass arrays etc also if we want.
    resolve({username:"Atharva",email:"sinhaatharva23@gmail.com"});    
    }, 1000);
});

//How to take the data which is on the resolve ??
//=>So we'll be passing a parameter inside this .then's function too as then and resolve both are directly connected know , that why
promiseThree.then((user)=>{
    console.log(user);
});


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false;//if we'll turn it into true then error handling can be seen
        if(!error){
            resolve({username:"Atharva",password:123});
        }else{
            reject('ERROR:Something went wrong')//it displays the error
        }
    }, 1000);
})

//Now how to consume this promise:
//=>Here comes the concept of callback:
//[NOTE: If an error occured , then we can use .catch as its directly connected to reject()];

//Callback Hell and how to avoid it:
promiseFour
.then((user)=>{
    //If I want to print the username only 
    console.log(user);
    return user.username;//How to print/have it??
    //By using chaining of .then
})
.then((username)=>{ //Jo uppr waale value me return hokr aayegi wahi meri parameter hogi
    console.log(username);
})
.catch((error)=>{ //we are also handling the errors now
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})//This will be printed even if the code shows error.It'll always be executed;



const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false;//if we'll turn it into true then error handling can be seen
        if(!error){
            resolve({username:"JS",password:123});
        }else{
            reject('ERROR:JS went wrong')//it displays the error
        }
    }, 1000);
});
//we can also consume the promise by using async await syntax:
//Here issue is : We dont handle catch here gracefully

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive();

//We can use anyone i.e. .then and .catch or async await with try catch block


async function getAllUsers() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');//fetch basically holds the url inside it.
  const data =  await response.json();//converts response into json file
  console.log(data);
   } catch (error) {
        console.log(error);
   }
};
getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error",error);
})

//How the upper written code before this typicode walaa chiz is being printed after the typicode wala chiz??
//=>