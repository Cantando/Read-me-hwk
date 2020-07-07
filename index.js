const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("../generateMarkdown");
const axios = require("axios").default;
// * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions

// array of questions for user
const questions = [
    {
        type: "input",
        name: "project",
        message: "what is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "give a brief description of your project?"
    },
    {type:"list",
    name:"contact",
    message:"what is your preference to be contacted ?",
    choices:["by email",
    " by cell",
    "by mail" 

    ]

    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },

    // {
    //     type: "input",
    //     name: "email",
    //     message: "what is your email?"

    // },
    {
        type: "input",
        name: "url",
        message: "what is your url for your project?"

    },
    {
        type: "checkbox",
        name: "technology",
        message: "what technology will you use?",
        choices:[ "HTML",
        "CSS",
        "Javascript",
        "ES6"


        ]

    },


];

// function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);

// }

// function to initialize program
function init() {
    inquirer.prompt(questions).then((results) => {
        axios.get("https://api.github.com/users/"+ results.username)
      
        

        // writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    })
}

// function call to initialize program
init();
