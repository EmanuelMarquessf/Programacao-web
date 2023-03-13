function criaHoraDosSegundos(segundos){
    const data = new Date(segundos);
    return data.toLocaleDateString('pt-br',{
        hour12: false
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;

iniciar.addEventListener('click', function(event){
    iniciarTimer();
})

function iniciarTimer(){
    let data = new Date(relogio.innerHTML)
    console.log(data)
}