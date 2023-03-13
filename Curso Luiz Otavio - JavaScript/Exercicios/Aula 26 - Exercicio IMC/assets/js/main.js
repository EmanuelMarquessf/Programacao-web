function calcular(){
    const form = document.querySelector('.form');
    
    function enviarForm(evento){
        evento.preventDefault(); 
        const pesoInput = form.querySelector('.peso');
        const alturaInput = form.querySelector('.altura');

        const result = document.querySelector('.resultado')
        result.innerHTML = '';
        const p = document.createElement('p');


        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);

        if(isNaN(peso) || peso == 0 ){
            p.classList.add("invalidResponse");
            p.innerHTML = `Peso Invalido`
        }else if(isNaN(altura) || altura == 0){
            p.classList.add("invalidResponse");
            p.innerHTML = `Altura Invalida`
        }else if(resultImc(peso, altura) < 18.5){
            p.classList.add("validResponse");
            p.innerHTML = `Abaixo do peso`
        }else if(resultImc(peso, altura) < 249){
            p.classList.add("validResponse");
            p.innerHTML = `Peso normal`
        }else if(resultImc(peso, altura) < 29.9){
            p.classList.add("validResponse");
            p.innerHTML = `Sobrepeso`
        }else if(resultImc(peso, altura) < 34.9){
            p.classList.add("validResponse");
            p.innerHTML = `Obesidade Grau 1`
        }else if(resultImc(peso, altura) < 39.9){
            p.classList.add("validResponse");
            p.innerHTML = `Obesidade Grau 2`
        }else if(resultImc(peso, altura) > 40){
            p.classList.add("validResponse");
            p.innerHTML = `Obesidade Grau 3`
        }

        result.appendChild(p);

    }
    form.addEventListener('submit', enviarForm);
}

const resultImc = (peso, altura) =>  peso/(altura**2);

calcular();