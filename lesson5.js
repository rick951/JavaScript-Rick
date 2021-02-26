/*
1. function
2. array

*/

// function with argument 
let name = "Mr.Ting";
let one = 1;
// in the parameter you get the data
function IDK(person, age){
    document.write("Hello there "+person + "his age is " + age);
}


// you call the function and put in the data
// IDK()
//=======================================
let number1 = 3;
let number2 = 2;
function multiplyTwoNumber( a , b){
    document.write(`${a}*${b} = ${a*b}`);
}

multiplyTwoNumber(number1,number2);

// =======Array============
// Declare array
var student = ["hey","yo","bro"];
// array start from 0
document.write("<br>"+student[0]);

let good = ['good', 'bad', 'ok'];
good.push('heyheyehye'); // this add the thing to the last of the array
good.unshift('IDK'); //add to front of array