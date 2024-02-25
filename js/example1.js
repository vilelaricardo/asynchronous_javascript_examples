const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('Você clicou em mim!');

  let pElem = document.createElement('p');
  pElem.textContent = 'Este é um novo parágrafo adicionado';
  document.body.appendChild(pElem);
});