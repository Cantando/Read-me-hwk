const fs = require("fs");
// const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const axios = require("axios").default;



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
    {
        type: "list",
        name: "contact",
        message: "what is your preference to be contacted ?",
        choices: ["by email",
            " by cell",
            "by mail"

        ]

    },
    {
        type: "input",
        name: "username",
        message: "what is your github username?"
    },

    {
        type: "input",
        name: "email",
        message: "what is your email?"

    },
    {
        type: "input",
        name: "url",
        message: "what is your url for your project?"

    },
    {
        type: "rawlist",
        name: "technology",
        message: "what technology will you use?",
        choices: ["HTML","CSS","Javascript","ES6"]
}
];




// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        axios.get("https://api.github.com/users/" + data.username)
            .then(function (response) {
                data.html_url = response.data.html_url
                data.avatar = response.data.avatar_url
                fs.writeFile("READEME.md", generateMarkdown(data), function (err) {
                    if (err) {
                        return console.log(err);

                    }
                    return console.log(success);

                });

            }).catch(function (err) {
                console.log(err);

            })
        
    })
}

// function call to initialize program
init();
