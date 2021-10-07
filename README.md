# colin-employee-tracker


## Description
Employee Tracker is an application built using backend tools like MYSQL database, npm libraries such as inquirer, sequelize, and dotenv. This application also features front end tools, languages and libraries such as Javascript, CSS, and HTML to bring the application to life. 


# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Project URl
https://drive.google.com/file/d/1uFQlzSGs4cJKClo6FzoJ7LOvLEyiueNd/view?usp=sharing

## Github Repository link
https://github.com/ColinNebula/colin-employee-tracker/tree/main

## Project Mock-Up
![12-sql-homework-demo-01](https://user-images.githubusercontent.com/57843842/136423125-55b77983-ab3b-466c-85cb-98fb3f47b858.gif)

## Project Screenshot
![Project_screenshot](https://user-images.githubusercontent.com/57843842/136423644-8e17aa82-1825-49fe-8ca5-b6bfbb327d05.jpg)

## Installation
* Download or clone the repository
* Run npm install to install npm libraries
* Type "npm start" to start the server
* Type "node index.js" to run the application

## Credits
Colin Nebula

## License
MIT

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 