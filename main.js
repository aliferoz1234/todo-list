#! /usr/bin/env node
// Method 2
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
while (condition === true) {
    // --------------------------------------------Options------------------------------------------
    let option = await inquirer.prompt([{
            type: "list",
            name: "userOption",
            message: "Select an Option",
            choices: ["Add", "Remove"]
        }]);
    // --------------------------------------------Add------------------------------------------
    if (option.userOption === "Add") {
        let ans = await inquirer.prompt([{
                type: "input",
                name: "userAns",
                message: "Write something to add in the task list."
            }]);
        if (ans.userAns !== "") {
            todoList.push(ans.userAns);
            console.log(todoList);
        }
        else {
            console.log(chalk.magenta.bold("Please write something to add in the todo list."));
        }
    }
    // --------------------------------------------Remove------------------------------------------
    else if (option.userOption === "Remove") {
        let removeChoice = await inquirer.prompt([{
                type: "list",
                name: "removeItem",
                message: "select item to remove",
                choices: todoList
            }]);
        let indextoRemove = todoList.indexOf(removeChoice.removeItem);
        if (indextoRemove >= 0) {
            todoList.splice(indextoRemove, 1);
            console.log("You removed: ", removeChoice.removeItem);
            console.log(todoList);
        }
    }
    // --------------------------------------------Confirmation------------------------------------------
    let userAns = await inquirer.prompt([{
            type: "confirm",
            name: "selection",
            message: "Do you want to continue?",
            default: true
        }]);
    if (userAns.selection === false) {
        condition = false;
    }
}
console.log(chalk.green.bold(`Thank you for using to do list`));
// Method 1
// import inquirer from "inquirer"
// let todos=[];
// let condition=true;
// while(condition){
// let todoQuestions=await inquirer.prompt(
//     [{
//         name:"firstQuestion",
//         type:"input",
//         message:"What you want to add in your Todos?"
//     },
//     {
//         name:"secondQuestion",
//         type:"confirm",
//         message:"Do you want to add more?",
//         default:"true"
//     },
// ]
// );
// todos.push(todoQuestions.firstQuestion);
// condition=todoQuestions.secondQuestion
// console.log(todos);
// }
