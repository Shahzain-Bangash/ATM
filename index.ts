#! /usr/bin/env node 

import inquirer from "inquirer";

let balance = 25000;
console.log("Your Current Balance is: " + balance);

let pinAns = await inquirer.prompt([
  {
    name: "pin_code",
    message: "Enter your pin code: ",
    type: "number",
  },
]);
if (pinAns.pin_code === 110) {
  console.log("Correct Pin Code!");
  let askQst = await inquirer.prompt([
    {
      name: "Qst1",
      message: "What you want to do?: ",
      type: "list",
      choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
  ]);
  if (askQst.Qst1 === "Withdraw") {
    let amountNum = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter the amount: ",
        type: "number",
      },
    ]);
    if (amountNum.amount <= balance) {
      console.log(`your Current Balance is: ${balance - amountNum.amount}`);
      console.log("Withdraw Successfully!");
    } else {
      console.log("Insufficient Balance!!");
    }
  } else if (askQst.Qst1 === "Check Balance") {
    console.log("Your Current Balance is: " + balance);
  } else if (askQst.Qst1 === "Fast Cash") {
    let tab = await inquirer.prompt([
      {
        name: "Fast_cash",
        message: "Click on amount: ",
        type: "list",
        choices: ["500", "1000", "2000", "5000"],
      },
    ]);
    if (tab.Fast_cash === "500") {
      console.log(`Your Current Balance is: ${balance - tab.Fast_cash}`);
    } else if (tab.Fast_cash === "1000") {
      console.log(`Your Current Balance is: ${balance - tab.Fast_cash}`);
    }
    else if (tab.Fast_cash === "2000"){
      console.log(`Your Current Balance is: ${balance - tab.Fast_cash}`);
    }
    else if (tab.Fast_cash === "5000"){
      console.log(`Your Current Balance is: ${balance - tab.Fast_cash}`);
    }
  }
}else{
  console.log("Incorrect pin code!!");
}
