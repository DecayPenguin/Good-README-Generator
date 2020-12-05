const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        default: 'Untitled Project',
      },
      {
        type: 'input',
        name: 'type',
        message: 'Describe your project.',
        default: 'Something new',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What is your project installation?',
        default: '.json',
      },
      {
        type: 'input',
        name: 'use',
        message: 'What is your projects usage purpose?',
        default: 'Something new',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Describe your project License.',
        choices: ["CC", "GNU", "MIT"]
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do we test it?',
        default: 'Use it',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Add',
        default: 'questions',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Add your github username to claim your work.',
        default: 'Me',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        default: '@gmail.com',
      }
  
  
    ])
    .then(answers => {
      console.info('Answers:', answers);
      var formatAnswers = generateMarkdown(answers)
      fs.writeFile('README.md', formatAnswers, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      
    });
}

// function call to initialize program
init();
