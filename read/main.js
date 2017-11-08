const read = require('./file');

read("file.txt")
    .then((data) => console.log(data))
    .catch((error) => console.log("Error", error));
