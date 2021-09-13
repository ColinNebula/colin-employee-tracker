const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const express = require('express');
// const schema = require('../schema')
const questions = require("./questions");
const moment = require('moment');
const dateTime = moment();
console.log(dateTime.format('MMMM Do YYYY, h:mm:ss a'));

const connection = mysql.createConnection({
    host: 'localhost',
      //Port
      port: 3001,
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'ultramax',
      database: 'colin-employee-trackerDB'
})

connection.connect(function (err) {
    if (err) throw err;
    startTracker();
});
const generatePage = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
  };

const promptUser = () => { 
    return inquirer.prompt( 
      questions

)};