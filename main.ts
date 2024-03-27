#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance ="20000"
let mypin ="4321"

let pinanswer = await inquirer.prompt([
{

message:"Enter your pin",
name:"pin",
type:"number"
}
]);
if (pinanswer.pin==mypin)
{
    console.log("Welcome to ATM")
    let option = await inquirer.prompt([
        {
            message:"Select your option",
            name:"option",
            type:"list",
            choices:["Balance Inquiry","Withdraw","Deposit","Exit"]
        }
    ]);
    if (option.option=="Balance Inquiry")
    {
        console.log(`Your balance is ${mybalance}`)
    }
    else if (option.option=="Withdraw")
    {
        let withdrawanswer = await inquirer.prompt([
            {
                message:"Enter the amount",
                name:"amount",
                type:"number"
            }
        ]);
        if (withdrawanswer.amount<=mybalance)
        {
            mybalance = (+mybalance - +withdrawanswer.amount).toString()
            console.log(`Your balance is ${mybalance}`)
        }
        else
        {
            console.log("Insufficient balance")
        }
    }
        else if (option.option=="Deposit"){
            let depositanswer = await inquirer.prompt([
                {
                    message:"Enter the amount",
                    name:"amount",
                    type:"number"
                }
            ]);
            mybalance = (+mybalance + +depositanswer.amount).toString()
            console.log(`Your balance is ${mybalance}`)
        }
        
        if (option.option=="Exit")
        {
            console.log("Thank you for using ATM")
        }
    };