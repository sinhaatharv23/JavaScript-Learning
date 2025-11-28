//Comparison of different data types in JavaScript
//If we'll compare same data types then it will be straightforward,no problem there.
console.log(2 == 2); //true
console.log("Hello" == "Hello"); //true
console.log(true == true); //true
console.log(false == false); //true
console.log(2>1); //true
console.log(2<1); //false
console.log(2>=2); //true
console.log(2<=1); //false
//But the problem arises when we compare different data types.
console.log("2">1);
//Here JS convert "2" to number 2 and then compare, so the result will be true.
console.log("02">1);
//Here JS convert "02" to number 2 and then compare, so the result will be true.
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//In the above three comparisons with null, the results are false, false, and true respectively.
//The reason is that an equality check (==) between null and 0 returns false, and null is only equal to undefined, and comparisons (>, <, >=, <=)works differently.
//Comparisons convert null to a number, treating it as 0. Thats why (3) null>=0 is true, but (1) null>0 is false.
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
//In all the above three comparisons with undefined, the results are false, false, and false respectively.
//The reason is that undefined is only equal to null and not equal to any other value, including 0. Additionally, any comparison involving undefined (>, <, >=, <=) results in false.


//Strict check (===) vs Loose check (==)
console.log(2=="2"); //true because JS convert "2" to number 2 and then compare
console.log(2==="2"); //false because here no conversion is done and different datatypes are compared.
//So, it is always recommended to use strict check (===) to avoid confusion and unexpected results due to datatype conversion in JavaScript.
//Difference between strict check and loose check :- Strict check (===) checks for both value and datatype equality without any conversion.
//Loose check (==) checks for value equality after performing type conversion if necessary.
