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
            }
        ]);
    };
        promptUser().then(answers => console.log(answers));


const promptProject = () => {
    console.log(
        ==================
        Add a 
    )
}


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