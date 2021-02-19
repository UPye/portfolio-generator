// Execute generatePage function from page-template.js
const generatePage = require

// Activates the File System through Node.js Module
const fs = require('fs');

// Returns captured data as a string
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [userName, github] = profileDataArgs;




/* // Single-line way
const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
*/



fs.writeFile('./index.html', generatePage(userName, github), err => {
    if (err) throw new Error (err);
    console.log('Portfolio complete! Check out index.html to see the output!')
});


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