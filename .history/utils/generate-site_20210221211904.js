const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // If there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // Return out of the function here to make 
            }
        })
    });
};