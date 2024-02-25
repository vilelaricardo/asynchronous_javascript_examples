const fs = require('fs');
function firstFunction() {
    const texto = fs.readFileSync('../texto.txt');
       
            console.log(String(texto));
}
function secondFunction() {
    console.log('Executando segunda função.');
}
firstFunction();
secondFunction();
