// Index.html generation code
module.exports = templateData => {
    console.log(templateData);

    // This will create three variables based on data in templateData
    const { projects, about, ...header }

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${templateData.name}</h1>
        <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
    </body>
    </html>
    `;
};

