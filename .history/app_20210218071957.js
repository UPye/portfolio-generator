/* // Single-line way
const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
*/

// Multi-line way
const generatePage = (userName, githubName) => {
    return `
    Name: ${userName}
    Github: ${githubName}
    `;

};



/*
// Returns captured data as a string
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


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