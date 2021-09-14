module.exports = [
    {
    type: 'List',
      name: 'table',
      message: 'What would you like to do? (Required)',
      choices: ['View All Employees ',
                'View All Employees by name?',
                'Add an Employee',
                'View All managers', 
                'View All Managers by name?', 
                'View All Departments', 
                'Add a manager',
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
    // {
    //   type: 'input',
    //   message: "What is the employee's first and last name?"
    //   // Validate the properties to check if a valid value was provided by the user
    //   validate: nameInput => {
    //     if (nameInput) {
    //       return true;
    //     } else {
    //       console.log('Please provide employee full name!');
    //       return false;
    //     }
    //   };  

    // }
]