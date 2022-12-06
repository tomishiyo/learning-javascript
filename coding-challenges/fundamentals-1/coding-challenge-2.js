/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 95;
const johnHeight = 1.88;

const markIBM = markWeight / markHeight ** 2;
const johnIBM = johnWeight / johnHeight ** 2;

const markHigherBMI = markIBM > johnIBM;

if (markHigherBMI) {
   console.log(`Mark's BMI (${markIBM}) is higher than John's (${johnIBM})! 👺`)
} else {
   console.log(`John's BMI (${johnIBM}) is higher than Mark's (${markIBM})! 👺`)
}