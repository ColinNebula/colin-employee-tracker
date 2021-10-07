const connection = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Chalk = require('chalk');

prompt = inquirer.createPromptModule();

connection.connect((err) => {
    if (err) throw err;
});

// View All employees
const viewAllEmployee = () => {
    let sql = `SELECT employee.id, employee.first_name, employee.last_name,
role.title,
department.name AS department_name,
role.salary 
FROM employee 
LEFT JOIN role 
ON role.id = employee.role_id 
LEFT JOIN department 
ON department.id = role.department_id AND
role.id = employee.role_id
ORDER BY employee.id ASC`;
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.log(
            '---------------------------------------------------------------------'
        )
        console.log(`${Chalk.greenBright('All Employee:\n')}`);
        console.table(res);
        console.log(
            '---------------------------------------------------------------------'
        );
        menu();

    });

};

// View all roles 
const viewAllRoles = () => {
    let sql = `SELECT role.id, role.title, department.name AS department 
    FROM role
    INNER JOIN department ON role.department_id = department.id`;
    connection.query(sql, (err, res) => {
        if (err) throw error;
        console.log(
        '--------------------------------------------------------------------------------------'
        );   
    
    console.log(`${Chalk.blueBright('List of the Roles:\n')}`);
    res.forEach((role) => {
        console.log(role.title);
    });
    console.log(

        '--------------------------------------------------------------------------------------'
    );
    menu();
});

};

// View all the departments
const viewAllDepartments = () => {
    let sql = `SELECT department.id AS id, department.name AS department FROM department`;
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.log('-------------------------------------------------------------------------'
        );

        console.log(`${Chalk.blueBright('View The Departments:\n')}`);
        console.table(res);
        console.log(
            '-------------------------------------------------------------------------------'
        );
        menu();
    });
};


// Add an employee 
const addEmployee = () => {
    prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Employer first name?',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Employer last name?',
        },
    ]).then((answer) => {
        const crit = [answer.firstName, answer.lastName];
        const roleSql = `SELECT role.id, role.title FROM role`;
        connection.query(roleSql, (err, data) => {
            if (err) throw err;
            const roles = data.map(({ id, title }) => ({ name: title, value: id }));
            prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: 'Employer Role?',
                    choices: roles,
                },
            ]).then((roleChoice) => {
                const role = roleChoice.role;
                crit.push(role);
                const managerSql = `SELECT * FROM employee`;
                connection.query(managerSql, (err, data) => {
                    if (err) throw err;

                    const managers = data.map(({ id, first_name, last_name }) => ({ 
                        name: first_name + " " + last_name,
                        value: id,
                    }));
                    
                    prompt([
                        {
                        type:'list',
                        name: 'manager',
                        message: 'Who is the employee manager?',
                        choices: managers,
                        },
                    ]).then((managerChoice) => {
                        const manager = managerChoice.manager;
                        crit.push(manager);
                        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                            VALUES (?, ?, ?, ?)`;

                        connection.query(sql, crit, (err) => {
                            if (err) throw err;
                            console.log(
                                '-----------------------------------------------------------------------------------'
                            );
                            console.log('Employer was added properly');
                            viewAllEmployee();
                        });
                    });
                }); 
            });
        });
    });
};

// Add a new role
const addRole = () => {
    const sql = 'SELECT * FROM department';
    connection.query(sql, (err, res) => {
        if (err) throw err;

    // Logic for the new role
        let deptNamesArray = [];
        res.forEach((department) => {
            deptNamesArray.push(department.name);
        });
        deptNamesArray.push('Create a Department');
        prompt([
            {
                type: 'list',
                name: 'departmentName',
                message: 'Choose a department for this role',
                choices: deptNamesArray,
            },
        ]).then((answer) => {
            if (answer.name === 'Create Department') {
                this.addDepartment();

            } else {
                addRoleResume(answer);
            }
        });
        const addRoleResume = (departmentData) => {
            prompt([
                {
                    type: 'input',
                    name: 'newRole',
                    message: 'What is the new role?',

                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is the new salary?',

                },
            ]).then((answer) => {
                let createdRole = answer.newRole;
                let departmentId;

                res.forEach((department) => {
                    if (departmentData.departmentName === department.name) {
                        departmentId = department.id;
                    }
                });

                let sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
                let crit = [createdRole, answer.salary, departmentId];
                connection.query(sql, crit, (err) => {
                    if (err) throw err;
                    console.log(
                        "--------------------------------------------------------------------------------------"
                    );
                    console.log('Role was Created!');
                    viewAllRoles();
                });
            });
        };
    });
};

// Add Departments 
const addDepartment = () => {
    prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'Enter a new department name',
        }
    ])
    .then((answer) => {
        let sql = `INSERT INTO department (name) VALUES (?)`;
        connection.query(sql, answer.newDepartment, (err, res) => {
            if (err) throw err;
            console.log(
                "---------------------------------------------------------------------------------"
            );
            console.log(answer.newDepartment + ' Department added');
            viewAllDepartments();
        });
    });
};

// Update the employee role
const updateEmployeeRole = () => {
    
    let employeeArray = []

    connection.query(`SELECT first_name, last_name FROM employee`,
        (err, res) => {
            if (err) throw err;
            prompt([
                {
                    type: 'list',
                    name: 'employee',
                    message: 'Select the employee with new role',
                    choices() {
                        res.forEach(employee => {
                            employeeArray.push(`${employee.name} ${employee.last_name}`);
                        });
                        return employeeArray;
                    }
                },
                {
                    type: 'input',
                    name: 'role',
                    message: `Please enter the new role id.${Chalk.blueBright('\nManager: 1\nEngineer: 2\nIntern: 3\nSales: 4\nlawyer: 5\nSecurity: 6\nSoftware Engineer: 7\n' +
                    Chalk.yellow('Answer Here: '))}`
                }
            ]).then((answers) => {
                const updateEmployeeRole = answers.employee.split(' ');
                const updateEmployeeRoleFirstName = JSON.stringify(updateEmployeeRole[0]);
                const updateEmployeeRoleLastName = JSON.stringify(updateEmployeeRole[1]);

                connection.query(
                    `UPDATE employee
                    SET role_id = ${answers.role}
                    WHERE first_name = ${updateEmployeeRoleFirstName}
                    AND last_name = ${updateEmployeeRoleLastName}`,

                    (err, res) => {
                        if (err) throw err;
                        console.log(
                            "------------------------------------------------------------------------------"

                        );
                        console.log('Employee Role Updated!');
                        viewAllEmployee();

                    })
            });
        });
};

// Inquirer prompt
prompt([
        {
            type: 'list',
            message: `${Chalk.white.bgBlue(
                "Welcome to Employee Tracker! "
            )}`,
            choices: ['Continue', 'Exit'],
            name: 'start',
        },
]).then((res) => {
        switch (res.start) {
            case 'Continue':
                menu();
                break;
            case 'Exit':
                return console.log('Load the application again to begin!');
        }
    });
// Main Menu
function menu() {
    prompt([
        {
            type: 'list',
            name: 'choices',
            message: `${Chalk.white.bgBlue(
                "What task would you like to do? (Required)."
            )}`,
            choices: [
                'View All Employee',
                'View All Roles',
                'View All Departments',
                'Update Employee Role',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Exit',
            ],
        },
    ]).then((answers) => {
        const { choices } = answers;
        if (choices === 'View All Employee') {
            viewAllEmployee();
        }
        if (choices === 'View All Roles') {
            viewAllRoles();
        }
        if (choices === 'View All Departments') {
            viewAllDepartments();
        }
        if (choices === 'Update Employee Role') {
            updateEmployeeRole();
        }
        if (choices === 'Add Employee') {
           addEmployee();
        }
        if (choices === 'Add Role') {
            addRole();
        }
        if (choices === 'Add Department') {
            addDepartment();
        }
        
        if (choices === 'Exit') {
            console.log('GoodBye');
            connection.end();
        }
    });
    
};
