// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your README:',
        validate: function (input) {
            if (input === '') {
                console.log('Title is required');
                return false
            } else {return true};
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description for your README:',
        validate: function (input) {
            if (input === '') {
                console.log('Description is required');
                return false
            } else {return true};
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to get your application running:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose one of the following licenses for your application:',
        choices: ['', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        default: ''
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Include any guidelines explaining how other developers can contribute to your application:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide examples of how to run any tests for your application:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: function (input) {
            if (input === '') {
                console.log('Username is required');
                return false
            } else {return true};
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
        validate: function (input) {
            if (input === '') {
                console.log('Email is required');
                return false
            } else {return true};
        }
    }
];

// TODO: Create a function to initialize app
async function init() {

    inquirer .prompt(questions)
    .then((data) =>{
        fs.writeFile('exampleREADME.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!'))
    })
}

// Function call to initialize app
init();
