const value = new Promise((resolve, reject) => {
    if (Math.random() > 0.5){
     resolve('yes')}else{
    reject('no')}
  })
  
  value
  .then(function acao1 (res) { console.log(`${res} da ação 1`); return res; })
  .then(function acao2 (res) { console.log(`${res} da ação 2`); return res; })
  .then(function acao3 (res) { console.log(`${res} da ação 3`); return res; })
  .catch(function erro (rej) { console.error(rej) })
