const coding = ["js","ruby","java","python","cpp"];

// coding.forEach((item)=>{
//     console.log(item);
// })
//But what if I want to store this for-each loop in some variables:
const values = coding.forEach((item)=>{
    console.log(item);
});
console.log(values);//prints all the values due to iteration using for each loop,but in return we got nothing i.e. undefined.
//Therefore we got to know that for-each dont return any values

//Filter operation:-
//=>Basically filter bhi apne andar callback function he leta hai,it returns values unlike foreach
const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((num)=>{
    return num>5;
})
console.log(newNums);//[6,7,8,9,10]

//Some more example of filter:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //Filter out those books whose genre is History:-
const userBooks = books.filter((book)=>{
   return (book.genre==="History");
})
//select those books which has been published after 2000s
const newBooks= books.filter((book)=>{
    return (book.publish>2000);
})
console.log(newBooks);
console.log(userBooks);

