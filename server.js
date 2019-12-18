
// installed everything needed 12/18/2019 @ 9:55 CST am
const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require("console.table")

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "company_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    menu()
    //  connection.end();//
});

/*

*/
function menu() {
    inquirer.prompt({
        type: "list",
        choices: ["Add department", "Add role", "Add employee", "View departments", "View roles", "View employees", "Update employee role", "Quit"],
        message: "What would you like to do?",
        name: "option"
    })
        .then(function (result) {
            console.log("You entered: " + result.option)

            switch (result.option) {
                case "Add department":
                    addDepartment();
                    break;
                case "Add role":
                    viewDepartment();
                    break;
                case "Add employee":
                    viewDepartment();
                    break;
                case "View departments":
                    viewDepartment();
                    break;
                case "View roles":
                    viewDepartment();
                    break;
                case "View employees":
                    viewDepartment();
                    break;
                case "Update employee role":
                    viewDepartment();
                    break;
                default:
                    quit()

            }


        });

}

function addDepartment() {
 // inquiere to get the inputs (name)
 // execute the sql (INSERT)

}

function viewDepartment() {
    // select from the db
    var query = "SELECT * FROM department"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        menu()

    })
    // show the result to the user (console.table)

}







function quit() {

    connection.end()
    process.exit()

}