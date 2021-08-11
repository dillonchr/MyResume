const chalk = require('chalk');
const moment = require('moment');
const resume = require('../resume.json');

const br = () => console.log('\n' + Array(70).fill('').join('-') + '\n');

const header = (text) => {
  br();
  console.log(chalk.green.bold(text));
};

const job = (j) => {
  console.log(chalk.cyan.bold('\n' + j.company));
  const endStr = j.endDate ? ` - ${moment(j.endDate).format('MMM YYYY')}` : '';
  console.log(chalk.red.bold(j.position) + chalk.reset(` - ${moment(j.startDate).format('MMM YYYY')}${endStr}`));
  console.log(chalk.underline(j.summary + '\n'));
  j.highlights.forEach(jobHighlight);
};

const jobHighlight = (highlight) => {
  console.log(chalk.cyan.bold('* ') + chalk.reset(highlightSkills(highlight)));
};

const skills = 'React Native;React;Javascript;Sass;Jinja;Jasmine;Leaflet;Google Maps;Bing Maps;Android;AngularJS;Karma;Protractor;iOS/Android;Cordova;Adobe Air'.split(';');

const highlightSkills = (line) => {
  return line.split(' ')
    .map((word) => {
      if (skills.includes(word)) {
        return chalk.cyan.bold(word);
      }
      return word;
    })
    .join(' ');
};

console.log(chalk.cyan.bold(resume.basics.name));
console.log(chalk.blue.bold.underline(resume.basics.email));
console.log(chalk.magenta.bold(resume.basics.phone));
console.log(`\n\n${resume.basics.summary}`);
header('Technical Skills');

resume.skills
  .forEach(({ name, level, keywords }) => {
    console.log(chalk.cyan.bold('*') + chalk.reset(` ${name} - ${keywords[0]}`));
  });

header('Experience');
resume.work
  .forEach(job);
