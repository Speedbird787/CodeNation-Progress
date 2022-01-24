//let mathFunctions = require("./mathsFunctions")

//console.log (mathsFunctions)

// can access any of the 4 properties in this mathFuctions object now

//console.log (mathsFunctions.add(3,5))
// 8

//if we only need some parts of the module we can Write 

// let {add, multiply} = require ("./mathsFunctions")

// console.log (add(3,8))

//we are now importing the subtraction module from mathFunctions

//let mathFunctions = require("./mathsFunctions")

// console.log (mathsFunctions)

//console.log (mathsFucntions.subtract(6,12))

// const os = require ('os');
// const fs = require ('fs');

// let userDetails = os.userInfo().username
// fs.appendFile('oh hi.txt', `hello ${userDetails}`, (err) => {
//     if (err) {
//         console.log ('oops');
//     }
// })

//const_ = require('lodash');

// lodash utility library loaded to package.json with dependancy version

let inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });