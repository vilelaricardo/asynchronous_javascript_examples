const fs = require('fs');
function firstFunction() {
    const texto = fs.readFile('../texto.txt', function (err, data) {
        if (err) {
            return console.log(err)
        } else {
            console.log(String(data));
        }
    })
}
function secondFunction() {
    console.log('Executando segunda função.');
}
firstFunction();
secondFunction();
