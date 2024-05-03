#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyanBright.yellowBright.bold("********** WELCOME TO EASYPAISA APP**********"));
// initialized easy paisa app by declaring varialbes
let Userpin = 12345;
let UserBalance = 100000;
let condition = true;
//  created async function foe easypaisa app
async function EasypaisaApp() {
    while (condition) {
        //applied condition in loop for repitition of app                                    
        const Pin = await inquirer.prompt({
            name: "pincode",
            type: "number",
            message: chalk.red.italic("Enter your 5 digit pincode"),
        });
        // applying if else  condition on pin code
        if (Pin.pincode === Userpin) {
            console.log(chalk.bgGreenBright.bold("successfully login! let's process"));
            //creating list
            let options = await inquirer.prompt({
                name: "option",
                type: "list",
                message: chalk.green("Select one of the following options:"),
                choices: [
                    "check Balance",
                    "transfer Money",
                    "receive Amount",
                    "bill Payments",
                    "easyLoad",
                    "mobile Package Bundles",
                    "savings",
                    "exit"
                ]
            });
            //applying condiditions on list of options
            // check user's balance
            if (options.option === "check Balance") {
                console.log(chalk.bgGreen.blue(`Your available balance is ${UserBalance}`));
            }
            ;
            // parent option (transfer Money )
            if (options.option === "transfer Money") {
                let transaction = await inquirer.prompt([
                    {
                        name: "transfer",
                        type: "list",
                        message: "Select option to transfer money:",
                        choices: [
                            "easypaisa",
                            "bank Transfer"
                        ]
                    }
                ]);
                // Child ( transaction via easypaisa)
                if (transaction.transfer === "easypaisa") {
                    let money = await inquirer.prompt([
                        {
                            name: "cellNo",
                            type: "input",
                            message: "enter receiver's cell phone no :"
                        },
                        {
                            name: "question",
                            type: "number",
                            message: "enter your amount to transfer via easypaisa"
                        },
                    ]);
                    UserBalance -= money.question;
                    console.log(chalk.italic.cyanBright("Amount is Successfully transfered"));
                    console.log(chalk.italic.bgGray.blueBright(`Your remaining balance is ${UserBalance}`));
                }
                // siblings (transfer money via bank)
                if (transaction.transfer === "bank Transfer") {
                    let money1 = await inquirer.prompt([
                        {
                            name: "transfer1",
                            type: "list",
                            message: chalk.italic.redBright("Select bank name to transfer amount:"),
                            choices: [
                                "HBL",
                                "MEEZAN BANK",
                                "UBL",
                                "BANK ISLAMI"
                            ]
                        },
                        {
                            name: "q1",
                            type: "input",
                            message: "Enter receiver's account no:"
                        },
                        {
                            name: "q2",
                            type: "number",
                            message: "Enter your amount to transfer:"
                        },
                        {
                            name: "q3",
                            type: "confirm",
                            message: "Are you sure ?",
                            default: "true"
                        },
                    ]);
                    UserBalance -= money1.q2;
                    console.log(chalk.italic.cyanBright(`Your amount has been transfered successfully `));
                    console.log(chalk.bgCyan.bold.redBright(`Your remaining balance is ${UserBalance}`));
                }
            }
            // accessing the list of options to receive amount 
            if (options.option === "receive Amount") {
                let receive = await inquirer.prompt({
                    name: "amount",
                    type: "number",
                    message: "How much money do you wanna receive in your account:"
                });
                UserBalance += receive.amount;
                console.log(chalk.italic.yellowBright(`amount has been successfully credited in your account.`));
                console.log(chalk.italic.blueBright.cyanBright(`your new account balance is ${UserBalance}`));
            }
            // accessing options for bill payments
            if (options.option === "bill Payments") {
                let amount2 = await inquirer.prompt([
                    {
                        name: "bill1",
                        type: "list",
                        message: "Select one of the following options :",
                        choices: [
                            "Electricity",
                            "SSGC",
                            "Telephone"
                        ]
                    },
                    {
                        name: "bill2",
                        type: "number",
                        message: "Enter your consumer number:",
                    },
                    {
                        name: "bill3",
                        type: "number",
                        message: "Enter your bill amount:",
                    },
                    {
                        name: "bill4",
                        type: "confirm",
                        message: "Are you sure ?",
                        default: "true"
                    },
                ]);
                UserBalance -= amount2.bill3;
                console.log(chalk.italic.redBright("Bill paid"));
                console.log(chalk.bold.bgBlack.greenBright(`Your ramining account balance is ${UserBalance}`));
            }
            ;
            // accessing options for mobile easy load
            if (options.option === "easyLoad") {
                let easyLoad = await inquirer.prompt([
                    {
                        name: "sim",
                        type: "list",
                        message: chalk.italic.redBright("select one of the following:"),
                        choices: [
                            "jazz/warid",
                            "ufone",
                            "zong",
                            "telenor"
                        ]
                    },
                    {
                        name: "easy1",
                        type: "number",
                        message: "Enter your mobile number:",
                    },
                    {
                        name: "easy2",
                        type: "list",
                        message: "Select one of the following option:",
                        choices: [
                            "50",
                            "80",
                            "100",
                            "150",
                            "200"
                        ]
                    },
                ]);
                console.log(chalk.italic.redBright("easyload has been done"));
                UserBalance -= easyLoad.easy2;
                console.log(chalk.bold.bgGreen.blueBright(`Your remaninig account balance is ${UserBalance}`));
            }
            //accessing options for mobile package bundles
            if (options.option === "mobile Package Bundles") {
                let packages = await inquirer.prompt([
                    {
                        name: "simName",
                        type: "list",
                        message: chalk.italic.cyanBright("Select one of tha following options:"),
                        choices: [
                            "jazz/warid",
                            "ufone",
                            "zong",
                            "telenor"
                        ]
                    },
                    {
                        name: "bundles",
                        type: "list",
                        message: "Select option to get internet + call + sms bundle :",
                        choices: [
                            "300 weekly",
                            "500 15days",
                            "850 monthly",
                            "1500 monthly",
                            "2000 60days"
                        ]
                    },
                ]);
                //applying if else conditions to get access of mobile package bundles
                //bundle 1
                if (packages.bundles === "300 weekly") {
                    let package1 = await inquirer.prompt([
                        {
                            name: "bundle1",
                            type: "list",
                            message: "Select one of the following:",
                            choices: [
                                "200sms + 50minutes (onnet mins) + 1GB youtube +fb +whatsapp",
                                "300sms + 100minutes(same network) + 1.5GB insta +fb +whatsapp",
                                "3GB internet"
                            ]
                        },
                        {
                            name: "question1",
                            type: "number",
                            message: "Enter your mobile no :"
                        },
                        {
                            name: "question2",
                            type: "number",
                            message: "Please pay 300pkr for selected bundle:"
                        },
                    ]);
                    if (package1.question2 === 300) {
                        UserBalance -= package1.question2;
                        console.log(chalk.italic.redBright("Your mobile package bundle has been successfully activated!"));
                        console.log(chalk.bold.bgGreen.blueBright(`Your remaining balance is ${UserBalance}`));
                    }
                    else {
                        console.log(chalk.italic.redBright("Please enter valid amount"));
                    }
                }
                ;
                //   bundle 2
                if (packages.bundles === "500 15days") {
                    let package2 = await inquirer.prompt([
                        {
                            name: "bundle2",
                            type: "list",
                            message: "Select one of the following:",
                            choices: [
                                "500sms + 50minutes(onnet mins) + 900minutes(same network) + 2GB",
                                "800sms +50(onnet mins) + 150minutes(same network) + 2.5GB youtube+insta +fb +whatsapp",
                                "5GB internet"
                            ]
                        },
                        {
                            name: "question1",
                            type: "number",
                            message: "Enter your mobile no :"
                        },
                        {
                            name: "question2",
                            type: "number",
                            message: "Please pay 500pkr for selected bundle:"
                        },
                    ]);
                    if (package2.question2 === 500) {
                        UserBalance -= package2.question2;
                        console.log(chalk.cyan.bold("Your mobile package bundle has been successfully activated!"));
                        console.log(chalk.bgCyan.greenBright.italic(`Your remaining balance is ${UserBalance}`));
                    }
                    else {
                        console.log(chalk.italic.redBright("Please enter valid amount"));
                    }
                }
                ;
                //bundle 3
                if (packages.bundles === "850 monthly") {
                    let package3 = await inquirer.prompt([
                        {
                            name: "bundle3",
                            type: "list",
                            message: "Select one of the following:",
                            choices: [
                                "1500sms + 350minutes(onnet mins) + 1100minutes(same network) + 3GB",
                                "2000sms +350(onnet mins) + 150minutes(same network) + 3.5GB youtube+insta +fb +whatsapp",
                                "5GB internet"
                            ]
                        },
                        {
                            name: "question1",
                            type: "number",
                            message: "Enter your mobile no :"
                        },
                        {
                            name: "question2",
                            type: "number",
                            message: "Please pay 850pkr for selected bundle:"
                        },
                    ]);
                    if (package3.question2 === 850) {
                        UserBalance -= package3.question2;
                        console.log(chalk.bold.greenBright("Your mobile package bundle has been successfully activated!"));
                        console.log(chalk.bgBlue.gray.italic(`Your remaining balance is ${UserBalance}`));
                    }
                    else {
                        console.log(chalk.italic.redBright("Please enter valid amount"));
                    }
                }
                ;
                // bundle 4
                if (packages.bundles === "1500 monthly") {
                    let package4 = await inquirer.prompt([
                        {
                            name: "bundle4",
                            type: "list",
                            message: "Select one of the following:",
                            choices: [
                                "2000sms + 400minutes(onnet mins) + 1000minutes(same network) + 5GB",
                                "3000sms +450(onnet mins) + 1500minutes(same network) + 5.5GB youtube+insta +fb +whatsapp",
                                "10GB internet"
                            ]
                        },
                        {
                            name: "question1",
                            type: "number",
                            message: "Enter your mobile no :"
                        },
                        {
                            name: "question2",
                            type: "number",
                            message: "Please pay 1500pkr for selected bundle:"
                        },
                    ]);
                    if (package4.question2 === 1500) {
                        UserBalance -= package4.question2;
                        console.log(chalk.yellowBright.bold("Your mobile package bundle has been successfully activated!"));
                        console.log(chalk.bgCyan.redBright.bold(`Your remaining balance is ${UserBalance}`));
                    }
                    else {
                        console.log(chalk.italic.redBright("Please enter valid amount"));
                    }
                }
                ;
                //bundle 5
                if (packages.bundles === "2000 60days") {
                    let package5 = await inquirer.prompt([
                        {
                            name: "bundle5",
                            type: "list",
                            message: "Select one of the following:",
                            choices: [
                                "2000sms + 350minutes(onnet mins) + 1500minutes(same network) + 8GB",
                                "6000sms +500(onnet mins) + 2000minutes(same network) + 10GB youtube+insta +fb +whatsapp",
                                "120GB internet"
                            ]
                        },
                        {
                            name: "question1",
                            type: "number",
                            message: "Enter your mobile no :"
                        },
                        {
                            name: "question2",
                            type: "number",
                            message: "Please pay 2000pkr for selected bundle:"
                        },
                    ]);
                    if (package5.question2 === 2000) {
                        UserBalance -= package5.question2;
                        console.log(chalk.yellowBright.bold("Your mobile package bundle has been successfully activated!"));
                        console.log(chalk.bgGrey.redBright.bold(`Your remaining balance is ${UserBalance}`));
                    }
                    else {
                        console.log(chalk.italic.redBright("Please enter valid amount"));
                    }
                }
            }
            ;
            //accessing options for savings
            if (options.option === "savings") {
                // amount will be extracted from Userbalance
                let saving = await inquirer.prompt([
                    {
                        name: "savemoney",
                        type: "number",
                        message: "Enter your saving amount here:"
                    }
                ]);
                UserBalance - saving.savemoney;
                let savedAmount = saving.savemoney;
                console.log(chalk.bgCyan.yellowBright.bold(`Your saved Amount is ${savedAmount}`));
            }
            ;
            if (options.option === "exit") {
                console.log(chalk.bgGray.redBright.italic("Thanks for using Easypaisa Bye Bye!"));
                return;
            }
        }
        else {
            console.log(chalk.yellowBright.bgBlue.bold("Oops! Please Enter valid pincode."));
        }
    }
    ;
}
;
EasypaisaApp();
