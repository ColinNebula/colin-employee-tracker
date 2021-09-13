module.exports = [
    {
    type: 'list',
      name: 'table',
      message: 'What would you like to do? (Required)',
      choices: ['View All Employees ', 
                'View All Managers by name', 
                'View All Departments', 
                'Add an Employee',
                'Delete an Employee by name'],
      // Validate the properties to check if a valid value was provided by the user
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please make a choice!');
          return false;
        }
      }     
    },
]