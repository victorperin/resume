'use strict';

const fs = require('fs');
const path = require('path');
const eloquent = require('jsonresume-theme-eloquent');

const inputFile = path.join(__dirname, '/resume.json');
const outputFile = path.join(__dirname, '/index.html');

const resumeJSON = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
const resumeHTML = eloquent.render(resumeJSON);

fs.writeFile(outputFile, resumeHTML, (err) => {
    console.log(err || 'Resume exported to index.html');
});
