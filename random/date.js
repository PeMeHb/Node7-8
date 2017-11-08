
const fs = require('fs');

const file = () => {
    const date = new Date();
    const getDate = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    fs.writeFile('file.txt', getDate, () => {
        fs.readFile('file.txt', 'utf-8', (error, data) => {
            if (error) return console.log(error);
            console.log(data);
            console.log(process.argv[process.argv.length - 1].slice(-7));
        })
    })
}

module.exports = file;

