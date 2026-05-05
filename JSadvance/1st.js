//const accountId = 144553
//let accountEmail = "hitesh@google.com"
// key word (var) accountPassword = "12345"
// accountCity = "Jaipur"
// let accountState; undefined for uninitialized value or value not assigned

// accountId = 2 // not allowed for const or not change for const variable


// accountEmail = "hc@hc.com"
// accountPassword = "21212121"
// accountCity = "Bengaluru"

// console.log(accountId);
 
/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 


// "use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

// console.log(3 + 3) // code readability should be high for better understanding of code by other developers

// console.log("Hitesh")


//let name = "hitesh"
//let age = 18
//let isLoggedIn = false
//let state;

// number => 2 to power 53
// bigint for larger numbers 
// string => "" for text
// boolean => true/false for logical operations
// null => standalone value for unknown value or empty value
// undefined => for uninitialized value or value not assigned
// symbol => unique for creating unique identifiers for objects

/* primitive data types => number, string, boolean, null, undefined, symbol
non-primitive data types => object (array, function, etc)
*/
// object

// console.log(typeof undefined); // undefined for uninitialized value or value not assigned
// console.log(typeof (null)); // object because of legacy reasons, but it is a primitive data type
// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof isLoggedIn); // boolean  
 



// data type conversion

// let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));
// it give string for both cases, because score is a string data type

// let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);
//  now it give number for both cases, because we have converted score to number data type, but it give NaN because "hitesh" is not a number


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

//  and if we put null at the place of score then it will give 0 because null is considered as 0 in number data type

// let isLoggedIn = "hitesh"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(typeof booleanIsLoggedIn);
//  console.log(booleanIsLoggedIn);

// if i paste 1 and 0 in the place of hitesh
// 1 => true; 0 => false
// "" => false
// "hitesh" => true
 
// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

let score = "33";
let valueInNumber = Number(score);

console.log(valueInNumber);
console.log(typeof valueInNumber);