#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let deleteList = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.green("Do you want to add more?"),
            default: "false",
        },
        {
            name: "delete",
            type: "confirm",
            message: chalk.red("Do You Want To Delete Previous List?"),
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    if (addTask.delete) {
        let deleteItem = todos.pop();
        if (deleteItem) {
            deleteList.push(deleteItem);
        }
    }
    console.log((chalk.green.bold("Todos:")), todos);
    console.log((chalk.red.bold("Delete List:")), deleteList);
}
