'use strict';

var fs = require('fs');
var path = require('path');
var eloquent = require('jsonresume-theme-eloquent');

var resumeJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '/resume.json'), 'utf-8'));
var resumeHTML = eloquent.render(resumeJSON);

fs.writeFile(path.join(__dirname, '/index.html'), resumeHTML, function(err) {
    console.log(err || 'Resume exported to index.html');
});
