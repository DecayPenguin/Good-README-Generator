const inquirer = require('inquirer');
const fs = require('fs');


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
        name: 'projTitle',
        message: 'What is your project title?',
        default: 'Untitled Project',
      },
      {
        type: 'input',
        name: 'projType',
        message: 'Describe your project.',
        default: 'Something new',
      },
      {
        type: 'input',
        name: 'projTOC',
        message: 'Supply a Table of Contents.',
        default: 'Table of Contents',
      },
      {
        type: 'input',
        name: 'projInstall',
        message: 'What is your project installation?',
        default: '.json',
      },
      {
        type: 'input',
        name: 'projUse',
        message: 'What is your projects usage purpose?',
        default: 'Something new',
      },
      {
        type: 'list',
        name: 'projLicense',
        message: 'Describe your project License.',
        choices: ["CC", "GNU", "MIT"]
      },
      {
        type: 'input',
        name: 'projTests',
        message: 'How do we test it?',
        default: 'Use it',
      },
      {
        type: 'input',
        name: 'projQuestions',
        message: 'Add',
        default: 'questions',
      }
  
  
    ])
    .then(answers => {
      console.info('Answers:', answers);
      var formatAnswers = `${answers.projTitle}`, ``
      fs.writeFile('README.md', formatAnswers, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      
    });
}

// function call to initialize program
init();
