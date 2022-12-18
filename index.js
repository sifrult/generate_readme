// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your README:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description for your README:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to get your application running:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instrcutions and examples for use:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose one of the following licenses for your application:',
        choices: ['opt1', 'opt2']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Include any guidelines explaining how other developers can contribute to your application:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provice examples of how to run any tests for your application:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(readme.txt, data, err => {
        err ? console.log(err) : console.log('README has been created!')
    })
}

// TODO: Create a function to initialize app
function init() {

    inquirer .prompt(questions)
    .then((data) =>{

        generateMarkdown(data);


        fs.writeFile('readme.txt', JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log('Success!'))


    })
}

// Store user input into data


// Function call to initialize app
init();
