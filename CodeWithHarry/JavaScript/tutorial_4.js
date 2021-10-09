//* Date 09-10-2021

//* In this tutorial you will learn about data types

//* Below given are Primitive Data Types--

// String
let name = "harry";
console.log("Data is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34.4;
console.log("Data is " + marks);
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data is " + isDriver);
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data is " + nullVar);
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data is " + undef);
console.log("Data type is " + (typeof undef));

//* Below given are Reference Data Types--

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data is " +  myarr);
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log(stMarks);
console.log( typeof stMarks);

function findName() {
    
}
console.log( typeof findName);

let date = new Date();
console.log( date);
console.log( typeof date);

