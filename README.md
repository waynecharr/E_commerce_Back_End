## E-Commerce Back End

# Description

This is an employee database that uses inquirer and SQL to track employees role, salary, manager, and department. 

# Table of Contents

- [Installation](#installation)
- [Updates](#updates)
- [Contributing](#contributing)
- [Instructions](#instructions)
- [Video](#video)

# Installation 

 This program can be via github at the following link: https://github.com/waynecharr/Employee_Track.

 In order to run the program correctly, the user will need to install node.js: https://nodejs.org/en/download

 It is also recommended that you download mysql. 

# Updates

- "initial commit"
- "set up server connection to sequelize and started definding the database models"
- "set up route structure for categories, set up insomnia for later demonstration"
- "updated the category-routes to include the delete and update route functions"
- "updated the tags-routes.js and product-routes.js. Need to do preliminary testing on these two to make sure they're functioning correctly. Also includes updated Sequelize models for several files (forgot to save earlier)" 
- "fixed a small bit of code which was preventing run npm start, started updating ReadMe. Added notes to code." 


# Contributing

- Worked with tutor Julio. I had a decent start this week, but he showed me a lot of interesting functionality for how to write SQL queries. 
- Helpful MySQL queries - https://www.npmjs.com/package/mysql2


# Instructions

To start the employee tracker, it's first suggested that one log in and establish the schema tables and seed the sql.

- Open git, enter "my mysql -u root -p"
- Enter the corresponding password
- Enter "source db/schema.sql" to establish the table
- Enter "source db/seeds.sql" to seed initial data
- Enter Exit

Run NPM Start

Follow the instructions as listed. You can either view all employees, departments, and roles. Add employees, department, and roles, or update an existing employees role. 

# Video 

https://drive.google.com/file/d/1VTMyMTD-PNYujKaPX5W38v3laj4zrDIw/view

# Updates

- "initial commit"
- "set up server connection to sequelize and started definding the database models"
- "set up route structure for categories, set up insomnia for later demonstration"
- "updated the category-routes to include the delete and update route functions"
- "updated the tags-routes.js and product-routes.js. Need to do preliminary testing on these two to make sure they're functioning correctly. Also includes updated Sequelize models for several files (forgot to save earlier)" 
