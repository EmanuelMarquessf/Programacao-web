function show(){
  const form = document.getElementById('form');
  const inputs = form.getElementsByClassName('inputText');
  console.log(form);
  console.log(inputs)
}

function addInput(){
  const listaElementos = document.querySelector('.listaElementos');
  const elementoLista = document.createElement('li');
  elementoLista.id = Date.now();

  const nomeCliente = document.getElementById('input1').value;
  const idadeCliente = document.getElementById('input2').value;

  elementoLista.innerText = (`Nome: ${nomeCliente}  Idade: ${idadeCliente}`);

  const inputExcluir = document.createElement('input');
  inputExcluir.type = 'button';
  inputExcluir.value = 'Excluir';
  inputExcluir.onclick = function() {
    excluirInput(elementoLista.id);
  }

  elementoLista.appendChild(inputExcluir);
  listaElementos.appendChild(elementoLista);
}

function excluirInput(id){
  const input = document.getElementById(id);
  input.remove();
}