let chalk = require('chalk');

const app = require('./src/app');

// port
const port = 3000;

// start server here
app.get('/bingo', function(req, res) {
    res.end('Bingo')
})
app.listen( process.argv[2] || port)
console.log(chalk.green('Hello web server'));
