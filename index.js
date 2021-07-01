

const employee = [];

function addEmployee() {
    inquirer.prompt([{
        input:'text',
        message: "What is the employee's name?",
        name: 'employee',
    }, {
        type: 'list',
        message: "What is the team member's title?",
        choices: ['Manager', 'Engineer', 'Intern']
    }])
}