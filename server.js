
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
                    addRole();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "View departments":
                    viewDepartment();
                    break;
                case "View roles":
                    viewRole();
                    break;
                case "View employees":
                    viewEmployees();
                    break;
                case "Update employee role":
                    upDateEmployeeRole();
                    break;
                default:
                    quit()

            }


        });

}

function addDepartment() {
    // inquiere to get the inputs (name)
    inquirer.prompt({
        type: "input",
        message: "What is the name of the department?",
        name: "department"
    })
     .then(function(res){
        const department = res.department;

        const query = `INSERT INTO department (name) VALUES("${department}")`
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res)
            menu()

     })

    });
}

function addRole(){
    inquirer.prompt([
        {
            type: "input",
            message: "what is the job title?",
            name:"title"
        },

        {
            type: "input",
            message: "what is the employee salary?",
            name:"salary"
        },
    

        {
            type: "input",
            message: "what is the department ID?",
            name:"departmentID"

        }
    ])
    .then(function(res){
        const title = res.title;
        const salary = res.salary;
        const departmentID = res.departmentID;

        const query =  `INSERT iNTO role (title, salary, department_id) VALUE ("${title}", "${salary}", "${departmentID}")`
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res)
            menu()

        })
    });

}


function addEmployee() {

    inquirer.prompt([
        {
            type: "input",
            message: "what the employee's first name?",
            name:"firstName"
        },

        {
            type: "input",
            message: "what is the employee's last name?",
            name:"lastName"
        },
    

        {
            type: "input",
            message: "what is the employee's role ID?",
            name:"departmentID"
        },

        {
            type: "input",
            message: "what is the employee's manager ID?",
            name:"managerID"
        }

    ])
    .then(function(res){
        const firstName = res.firstName;
        const lastName = res.lastName;
        const departmentID = res.departmentID;
        const managerID = res.managerID;
        
        const query =  `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("${firstName}", "${lastName}", "${departmentID}", "${managerID}")`
        connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res)
            menu()
        })
    });

}

function viewDepartment() {
    // select from the db
    const query = "SELECT * FROM department"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        menu()

    })
    // show the result to the user (console.table)

}

function viewRole() {
    // select from the db
    const query = "SELECT * FROM role"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        menu()

    })
    // show the result to the user (console.table)

}

function viewEmployees() {
    // select from the db
    const query = "SELECT * FROM employee"
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