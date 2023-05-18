
/*
Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them.
IF any argument is not a whole number, skip it. 
Do support negative numbers though.
*/
// 1) How do I take command line arguments? How can I take an unlimited amount?
const commandLineArguments = process.argv;

// 2) How do I go through each command line argument?
let sum =0; 

for(var i=2; i<commandLineArguments.length; i++){

  console.log(i, commandLineArguments[i]);
  
let number = Number(commandLineArguments[i]);

if (number % 1 ===0) {
    sum = sum + number;
  }
}

console.log("SUM RESULT:", sum);

// 3) how do i print each command line argument?
// 4) How do i add all of them?

// 5) how do i know if a number is not whole?
// 6) How do i skip number that is not whole?
