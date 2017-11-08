/*const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
http.get('http://wtt.in/~kharkov', (response) => {
    if (response.statusCode !== 200) {res.end('<strong style="color:red">Error!</strong>strong>');}
else {response.setEncoding('utf-8');
    let result = '';
    response.on('data', data => result += data);
    response.on('end', () => res.end(result));
}
})
}).listen(3000, () => console.log("Server is Listening on 3000"));*/

const https = require('http');
var fs = require('file-system');

https.get('http://wttr.in/~kharkov', (res) => {
    if (res.statusCode !== 200) throw new Error(res.statusCode);
    res.setEncoding('utf-8');
    let result = '';
    res.on('data', data => result += data);
    res.on('end', () => fs.writeFile('weather.html', result));
});
