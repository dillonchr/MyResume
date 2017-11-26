const fs = require('fs');
const { Markdown } = require('markdown-to-html');
const md = new Markdown();

const HTML_PATH = 'build/Dillon Christensen - Resume.html';

md.render('./resume.md', {stylesheet: 'pdf-style.css'}, () => {
    md.pipe(fs.createWriteStream(HTML_PATH));
});
