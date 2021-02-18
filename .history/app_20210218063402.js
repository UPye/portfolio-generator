const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
    for (let i = 0; i < profileDataArr.length)
    console.log(profileDataArr[i]);
}

printProfileData(profileDataArgs);