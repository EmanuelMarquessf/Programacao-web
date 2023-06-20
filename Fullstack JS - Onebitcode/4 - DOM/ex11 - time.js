function inserirTime(){
  const nomeJogador = document.querySelector('#nomeJogador');
  const posicaoJogador = document.querySelector('#posicaoJogador');
  const numeroJogador = document.querySelector('#numeroJogador');

  const listaElementos = document.querySelector('.listaElementos');

  const confirmar = confirm('Confirmar escalação?');

  if(confirmar){
    const elementoLista = document.createElement('li');
    elementoLista.id = numeroJogador.value;
    elementoLista.innerText = `Nome: ${nomeJogador.value}     Posição: ${posicaoJogador.value}     Numero: ${numeroJogador.value}`;
  
    listaElementos.appendChild(elementoLista);
  
    limparCampos();
  }

}

function limparCampos(){
  const nomeJogador = document.querySelector('#nomeJogador');
  const posicaoJogador = document.querySelector('#posicaoJogador');
  const numeroJogador = document.querySelector('#numeroJogador');

  nomeJogador.value = '';
  posicaoJogador.value = '';
  numeroJogador.value = '';
}

function removerJogador(){
  const numeroJogador = prompt('Numero do jogador a remover: ');
  const elementoLista = document.getElementById(`${numeroJogador}`);

  const confirma = confirm(`Deseja realmente remover o jogador: ${elementoLista.innerText}`)
  if(confirma){
    elementoLista.remove();
  }
}