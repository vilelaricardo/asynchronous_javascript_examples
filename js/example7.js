function etapa1(){

    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('Etapa 1');
        }, 2000);
    })
}

async function etapa2() {
  await etapa1().then((result=>{console.log(result)}));
   console.log('Etapa 2');
}
etapa2();