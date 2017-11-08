const file = require('file-system');

const date = new Date().toDateString();
file.writeFile('dateDir/date.txt', date);
