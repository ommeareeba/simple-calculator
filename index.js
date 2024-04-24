#! /usr/bin/env node
//shabang
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter FIrst Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
//console.log(answer);
//conditional statement
if (answer.operator === "Addition") {
    // console.log("your value is " + answer.FirstNumber + answer.SecondNumber);
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please select a valid operator");
}
