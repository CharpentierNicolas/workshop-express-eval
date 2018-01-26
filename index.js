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
    console.log(req.params.mynumbers)
    res.send('The bingo game is already started and known numbers are '+ nb);
    });
})
.get('/bingo/:mynumbers', function(req, res) {
    var nb = [];
    fs.readFile(file, function (err, data) {
        nb.push(data.toString().split('\n').join(","));
        console.log(req.params.mynumbers)
        numbers = req.params.mynumbers;
        if(numbers === nb) {
            res.send('Bingo')
        } else res.send('The bingo game is already started, sorry your numbers doesn\'t match with known numbers ' + nb  + '; so you can not say Bingo')
    })
})

app.listen( process.argv[2] || port)
console.log(chalk.green('Hello web server'));
