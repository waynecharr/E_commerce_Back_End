## E-Commerce Back End

# Description

This is an E-Commerce database of different products. This particular git uses Sequelize to maintain a database. 

# Table of Contents

- [Installation](#installation)
- [Updates](#updates)
- [Contributing](#contributing)
- [Instructions](#instructions)
- [Video](#video)

# Installation 

 This program can be via github at the following link: https://github.com/waynecharr/E_commerce_Back_End

 In order to run the program correctly, the user will need to install node.js: https://nodejs.org/en/download

 It is also recommended that you download mysql. 

# Updates

- "initial commit"
- "set up server connection to sequelize and started definding the database models"
- "set up route structure for categories, set up insomnia for later demonstration"
- "updated the category-routes to include the delete and update route functions"
- "updated the tags-routes.js and product-routes.js. Need to do preliminary testing on these two to make sure they're functioning correctly. Also includes updated Sequelize models for several files (forgot to save earlier)" 
- "fixed a small bit of code which was preventing run npm start, started updating ReadMe. Added notes to code." 
- "updated the index.js file. Did not initially have model index.js file. Did not have the route dependencies established which was causing an error when running Insomnia"
- "fixed a small error where the tags-route was attempting to update category"
- "fixed error where update tag was not working" 
- "added demonstration video to ReadMe" 
- "added some notes in code" 
- "edited some notes in the code to make the intention of functions in the routes more clear" 


# Contributing

- Worked with tutor Katie Redford. She helped me get started with the project. 
- Mostly used this past week's (module 13) in-class mini-project as an example of how to run the data and set up the routes
- for help with sequilize validation: https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/


# Instructions

To start the E-Commerce Back-End, it's first suggested that one log in and establish the schema tables and seed the sql.

- Open git, enter "my mysql -u root -p"
- Enter the corresponding password
- Enter "source db/schema.sql" to establish the table
- Enter Exit

- Enter "NPM i" - install the packages
- Enter "npm run seeds" - to seed the data in seeds folder
- Enter "npm run start" - program will work and can be tested via Insomnia

# Video 

https://drive.google.com/file/d/1F8zApU_NXq3C1LkiSEfn4_hcWSTLBlpa/view
