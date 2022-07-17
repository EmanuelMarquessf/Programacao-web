function calcularPreco(){
    var quantidade = document.getElementById("quantidade").value;
    quantidade = parseInt(quantidade);
    var precoTotal = quantidade * 10;
    document.getElementById("preco").value = precoTotal
}

function adicionarItem(){
    var texto = document.getElementById('item').value;
    var lista = document.getElementById('minhaLista');
    var novoItem = document.createElement('li');
    var novoTexto = document.createTextNode(texto);

    lista.appendChild(novoItem);
    novoItem.appendChild(novoTexto);
}

function limpar(){
    document.getElementById('item').value = "";
}

function removerItem(){
    var lista = document.getElementById('minhaLista');
    var item = document.getElementsByTagName('li');
    var itens = document.getElementsByTagName('li').length;

    if(itens == 0){
        alert("Não ha itens")
    }else{
        lista.removeChild(item[itens-1]);
    }
}

function qtdeItens(){
    var lista = document.getElementById("minhaLista");
    var item = document.getElementsByTagName("li");
    var itens = document.getElementsByTagName("li").length;
    alert(itens);
}

function alterarFormatacao(){

    var texto = document.getElementById('texto');

    texto.style.color = "red";
    texto.backgroundColor = "yellow";
}