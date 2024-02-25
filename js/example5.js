const firstPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('A primeira promise foi resolvida');
    }, 1000);
});

firstPromise.then((result)=>{console.log(result)});


const secondPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject('A segunda promise foi rejeitada');
    }, 1000);
});

secondPromise.catch((error)=>{console.log(error)});