const inquirer = require('inquirer');

console.log(inquirer);
/*
// Activates the File System through Node.js Module
const fs = require('fs');

// Execute generatePage function from page-template.js
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage(userName, github);

/* // Single-line way
const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
*/

/*

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output!')
});

*/

const promptUser = () => {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter you Github Username'
            },
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:'
            },
        ]);
    };


const promptProject = portfolioData => {
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    };
    console.log(`
        =================
        Add a New Project
        =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        },
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            }
            else {
                return portfolioData;
            }
    ]
    ]);

};

    promptUser()
        .then(answers => console.log(answers))
        .then(promptProject)
        .then(projectAnswers => console.log(projectAnswers));

/*
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++){
        console.log(profileDataArr[i]);
    }

    console.log('================');

    // Is the same as this...
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    });

    console.log('================')

    // The same as previous, but cleaner...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs); */