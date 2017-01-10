'use strict';

const fs = require('fs');
const path = require('path');
const eloquent = require('jsonresume-theme-eloquent');

const resumeJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '/resume.json'), 'utf-8'));
const resumeHTML = eloquent.render(resumeJSON);

fs.writeFile(path.join(__dirname, '/index.html'), resumeHTML, function(err) {
    console.log(err || 'Resume exported to index.html');
});
