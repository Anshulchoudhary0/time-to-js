//const accountId = 144553
//let accountEmail = "hitesh@google.com"
// var accountPassword = "12345"
// accountCity = "Jaipur"
// let accountState;

// accountId = 2 // not allowed for const


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

// console.log(3 
    +
    //  3) // code readability should be high for better understanding of code by other developers

// console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint for larger numbers 
// string => "" for text
// boolean => true/false for logical operations
// null => standalone value for unknown value or empty value
// undefined => for uninitialized value or value not assigned
// symbol => unique

/* primitive data types => number, string, boolean, null, undefined, symbol
non-primitive data types => object (array, function, etc)
*/
// object

// console.log(typeof undefined); // undefined for uninitialized value or value not assigned
console.log(typeof (null)); // object because of legacy reasons, but it is a primitive data type
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean  
