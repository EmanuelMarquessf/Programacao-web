function convertWeekDay(dateDayWeek){
    switch(dateDayWeek){
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return 'Sexta-Feira';
        case 6:
            return 'Sabado'
    }
}

function convertMonth(dateMonth){
    switch(dateMonth){
        case 1:
            return 'janeiro';
        case 2:
            return 'fevereiro';
        case 3:
            return 'março';
        case 4:
            return 'abril';
        case 5:
            return 'maio';
        case 6:
            return 'junho';
        case 7:
            return 'julho';
        case 8:
            return 'agosto';
        case 9:
            return 'setembro';
        case 10:
            return 'outubro';
        case 11:
            return 'novembro';
        case 12:
            return 'dezembro'
    }
}

function getDate(){
    const h1 = document.querySelector('.metodo1')

    const date = new Date();
    const dateDayWeek = convertWeekDay(date.getDay()); 
    const dateDay = date.getDate();
    const dateMonth = convertMonth(date.getMonth()+1);
    const dateYear = date.getFullYear();
    const dateHour = date.getHours();
    const dateMinutes = date.getMinutes();
    const dateSeconds = date.getSeconds();

    h1.innerHTML = `${dateDayWeek}, ${dateDay} de ${dateMonth} de ${dateYear} ${dateHour}:${dateMinutes}`
}

function getDateSimple(){
    const h1 = document.querySelector('.metodo2')
    const date = new Date();

    h1.innerHTML = date.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});
}

getDate();
getDateSimple();