// Dependencies
const inquirer = require('inquirer');
const cTable = require('console.table');
const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const mysql = require('mysql2');
const db = require('./db/connection');
const questions = require("./questions");
const moment = require('moment');
const { connect } = require('./db/connection');
const connection = require('./db/connection');
prompt = inquirer.createPromptModule();
const dateTime = moment();
console.log(dateTime.format('MMMM Do YYYY, h:mm:ss a'));

//Routes
router.use(require('./employeeRoutes'));
router.use(require('./departmentRoutes'));
router.use(require('./managerRoutes'));

connection.connect(err => {
  if (err) throw err
});

prompt([
  {
    type: 'List',
    name: 'table',
    message: `${chalk.white.bgBlue(
      "Welcome to CompanyN Employee Tracker. click on advance to advance."
    )}`,
    choices: ['Advance', 'Exit'],
    name: 'start',
  },
]).then((res) => {
  switch (res.start) {
    case 'Advance':
      table();
      break;
    case 'Exit':
      return console.log('Load the application again to begin!');
  }
});

function table() {
  prompt([
    {
      type: 'list',
      name: 'choices',
      message: `${chalk.white.bgBlue(
        "Which task would you like to start with? (Required)."
      )}`,
      choices: [
        'View All Employees',
        'Delete an Employee by name',
        'Add an Employee',
        'View All Roles',
        'Add a role',
        'Update an employee role',
        'Exit',
      ],
    },
  ]).then((answers) => {
    const { choices } = answers;
    if (choices === 'View All Employees') {
      viewAllEmployees();
    }
    if (choices === 'Delete an Employee by name') {
      deleteAnEmployeeByName();
    }
    if (choices === 'Add an Employee') {
      addAnEmployee();
    }
    if (choices === 'View All Roles') {
      viewAllRoles();
    }
    if (choices === 'Update an employee role') {
      updateAnEmployeeRole();
    }
    if (choices === 'Exit') {
      console.log('GoodBye');
      connection.end();
    }
  });
};

// View All Employees
const viewAllEmployees = () => {
  let sql = `SELECT employee.id, employee.first_name, employee.last_name,
  role,title,
  department.department_name AS 'department,
  role.salary, 
  FROM employee, role, department
  WHERE department.id = role.department_id
  AND role.id = employee.role_id
  ORDER By employee.id ASC`;
  connection.query(sql, (err, res) => {
    if (err) throw err;
    console.log(`${Chalk.greenBright('All Employees:\n')}`);
    console.log(res);
    table();

  });

};
const viewAllEmployeesByName = () => {
  let sql = `SELECT employees.id, employees.first_name, employees.last_name,`;
  connection.query(sql, (err, res) => {
    if (err) throw err;
    console.log(`${Chalk.greenBright('View Employees by name:\n')}`);
    res.forEach((role) => {
      console.log(role.title);
    });
    console.log(
      '================================================================'
    );
    table();
  });
};
// Add Employee
addAnEmployee = () => {
  prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the employee first name?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the employee last name?',
    },
  ]).then((answer) => {
    const crit = [answer.first_name, answer.last_name];
    const roleSql = `SELECT role.d, role.title FROM role`;
    connection.query(roleSql, (err, data) => {
      if (err) throw err;
      const roles = data.map(({ id, title }) => ({ name: title, value: id }));
      prompt([
        {
          type: 'list',
          name: 'role',
          message: 'Choose a role for the employee',
          choices: roles,
        },
      ]).then((roleChoice) => {
        const role = roleChoice.role;
        crit.push(role);
        const managerSql = `SELECT * FROM employee`;
        connection.query(managerSql, (err, data) => {
          if (err) throw err;
          const managers = data.map(({ id, first_name, last_name }) => ({
            name: first_name + "" + last_name, value: id,
          }));
          prompt([
            {
              type: 'list',
              name: 'manager',
              message: 'Choose an employee manager',
              choices: managers,
            },
          ]).then((managerChoice) => {
            const manager = managerChoice.manager;
            crit.push(manager);
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
            VALUES (?,?,?,?)`;
            connection.query(sql, crit, (err) => {
              if (err) throw err;
              console.log(
                '=================================================================='
              );
              console.log('Employee was added');
              viewAllEmployees();
            })
          })
        })
      })
    })
  })
}

const viewAllDepartments = () => {
  let sql = `SELECT department.id AS id, department.department_name AS department FROM department`;
  connect.query(sql, (err, res) => {
    if (err) throw err;
    console.log('===================================================================='
    );

    console.log(`${Chalk.greenBright('View The Departments:\n')}`);
    console.log(res);

    console.log('==================================================================='
    );
  });
};

const addRole = () => {
  const sql = 'SELECT * FROM department';
  connection.query(sql, (err, res) => {
    if (err) throw err;
    let deptNamesArray = [];
    res.forEach((department) => {
      deptNamesArray.push(department.name)
    });
    deptNamesArray.push('Create a Department');
    prompt([
      {
        type: 'list',
        name: 'name',
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
          if (departmentData.name === department.name) {
            departmentId = department.id;
          }
        });

        let sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
        let crit = [createsRole, answer.salary, departmentId];
        connection.query(sql, crit, (err) => {
          if (err) throw err;
          console.log(
            "====================================================================================="
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
  ]).then((answer) => {
    let sql = `INSERT INTO department (name) VALUES (?)`;
    connection.query(sql, answer.newDepartment, (err, res) => {
      if (err) throw err;
      console.log(
        "======================================================="
      );
      console.log(answer.newDepartment + ' Department added');
      viewAllDepartment();
    });
  });
};


