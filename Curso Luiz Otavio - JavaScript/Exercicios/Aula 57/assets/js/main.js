const paragrafos = document.querySelector('.container');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody  = estilosBody.backgroundColor;

for (let p of ps){
    p.style.color = '#ffffff'
    p.style.backgroundColor = backgroundColorBody;
}