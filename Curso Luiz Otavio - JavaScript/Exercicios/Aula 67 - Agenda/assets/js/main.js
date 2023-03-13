const inputAdd = document.querySelector('.inputAdd');
const buttonAdd = document.querySelector('.buttonAdd');
const listaTarefas = document.querySelector('.listaTarefas');

function criaLi(){
    const li = document.createElement('li');
    li.setAttribute('class', 'elementList')
    return li;
}

function createDiv(li, typeClass){
    const divTask = document.createElement('div');

    if(typeClass === 'text') divTask.setAttribute('class', 'divTextTask');
    else if(typeClass === 'check') divTask.setAttribute('class', 'divCheckTask');
    else divTask.setAttribute('class', 'divButtonTask');

    return divTask;
}

function createButton(li, classType){
    const button = document.createElement('button');

    if(classType === 'edit'){
        button.innerHTML = 'Editar';
        button.setAttribute('class', 'editButton')
    }
    else{
        button.innerHTML = 'Apagar';
        button.setAttribute('class', 'removeButton')
    }
    
    li.appendChild(button);
}

function createCheckBox(li){
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('class', 'checkBox');
    li.appendChild(check);
}

function addTarefa(texto){
    const li = criaLi();

    const divCheck = createDiv(li, 'check');
    li.appendChild(divCheck);

    const divTextTask = createDiv(li, 'text');
    li.appendChild(divTextTask);

    const divButtons = createDiv(li, 'button');
    li.appendChild(divButtons);

    

    divTextTask.innerText = texto;
    listaTarefas.appendChild(li);

    createCheckBox(divCheck);
    createButton(divButtons, 'edit');
    createButton(divButtons, 'remove');
    
    salvarTarefas();
}

function clearInput(){
    inputAdd.value = '';
    inputAdd.focus();
}

buttonAdd.addEventListener('click', function(event){
    if(!inputAdd.value) return;
    addTarefa(inputAdd.value);
    clearInput();
});

inputAdd.addEventListener('keypress', function(event){
    if(!inputAdd.value)return;
    if(event.keyCode === 13){
        addTarefa(inputAdd.value);
        clearInput();
    }
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('removeButton')){
        (el.parentElement).parentElement.remove();
        salvarTarefas()
    }
    if(el.classList.contains('editButton')){
        const liText = (el.parentElement).parentElement.getElementsByClassName("divTextTask")[0];
        inputAdd.value = liText.innerText;
        (el.parentElement).parentElement.remove();
        salvarTarefas();
        inputAdd.focus();
    }
})

function salvarTarefas(){

    const quantLi = listaTarefas.querySelectorAll('li');

    const listaDeTarefas = [];

    for(let tarefa of quantLi){
        let tarefaText = tarefa.innerText;
        tarefaText = tarefaText.replace(/Apagar|Editar/g, '').trim();
        listaDeTarefas.push(,tarefaText);

    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function load(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        addTarefa(tarefa)
    }
}

load();