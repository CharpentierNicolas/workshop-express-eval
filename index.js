let chalk = require('chalk');

const app = require('./src/app');
var fs = require('fs')
var file = "numbers.txt"
// port
const port = 3000;

// start server here
app.get('/bingo', function(req, res) {
    var nb = [];
    fs.readFile(file, function (err, data) {
    nb.push(data.toString().split('\n').join(","));
    console.log(nb);
    res.send(nb);
    });

    //res.end('Bingo' + nb + bn)
})
app.listen( process.argv[2] || port)
console.log(chalk.green('Hello web server'));
