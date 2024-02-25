const botao = document.querySelector('button');
botao.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date
  }

  console.log(myDate);

  let pElem = document.createElement('p');
  pElem.textContent = 'Este é um novo parágrafo adicionado.';
  document.body.appendChild(pElem);
});