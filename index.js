const fs = require('fs');
const markdownpdf = require('markdown-pdf');
const cssPath = `file://${__dirname.replace(/\\/g, '/')}/pdf-style.css`;

fs.createReadStream('./resume.md')
    .pipe(markdownpdf({ cssPath }))
    .pipe(fs.createWriteStream('./Dillon Christensen - Resume.pdf'));
