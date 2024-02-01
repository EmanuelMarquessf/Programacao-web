const spaceshipArray = [];
function saveSpaceship(name, pilot, crewLimit, crew = [], inMission = false) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    };
    spaceshipArray.push(spaceship);
    alert(`A nave ${spaceship.name}`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceshipArray.find((ship) => {
        return ship.name === name;
    });
    return spaceship;
}
function addCrew(member, spaceship) {
    if (spaceship.crew.length < spaceship.crewLimit) {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado a tripulaçao da nave ${spaceship.name}`);
    }
    else
        alert(`${member} não foi adicionado a tripulaçao da nave ${spaceship.name}`);
}
function sendMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} já está em missão`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviado em missão!! Tripulaçao insuficiente`);
    }
    else {
        alert(`${spaceship.name} foi enviado em missão`);
        spaceship.inMission = true;
    }
}
function firstMenuOption() {
    const name = prompt('Nome da name:');
    const pilot = prompt('Nome da nave:');
    const crewLimit = Number(prompt('Capacidade:'));
    const confirmation = confirm(`Cadastrar? \nNave: ${name}\nPiloto: ${pilot}\n Capacidade: ${crewLimit}`);
    if (confirmation) {
        saveSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const member = prompt('Qual é o nome do tripulante?');
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`);
        if (confirmation) {
            addCrew(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt(`Nome da nave:`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Deseja mandar a nave ${spaceshipName} em missão?`);
        if (confirmation) {
            sendMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    let list = 'Naves registradas: \n';
    spaceshipArray.forEach((spaceship) => {
        list += `
      Nave: ${spaceship.name}\n
      Piloto: ${spaceship.pilot}\n
      Em missão? ${spaceship ? 'SIM' : 'NAO'}\n
      Capacidade: ${spaceship.crewLimit}\n
      Tripulantes: ${spaceship.crew.length}
    `;
        spaceship.crew.forEach(member => {
            list += `       -   ${member}\n`;
        });
    });
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
