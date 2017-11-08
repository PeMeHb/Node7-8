
const fs = require('fs');

const file = () => {
    const date = new Date();
    const getDate = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    fs.writeFile('file.txt', getDate, () => {
        fs.readFile('file.txt', 'utf-8', (error, data) => {
            if (error) return console.log(error);
            return(data);
            return(process.argv[process.argv.length - 1].slice(-7));
        })
    })
}
module.exports = file;

const number = (min, max) => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return (random);
}
module.exports = number;
