//Ao adiconar o ? , a variavel se torna opcional, nesse caso essa propriedade pode ou nao ser inserida, que ira funcionar normalmente
function sendSpaceship(spaceship) {
}
sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca' });
sendSpaceship({ pilot: 'Luke' });
let input; // variavel sem um tipo definido
let any; //o typescript para de funcionar quando relacionado a essa variavel, assim nao ocorrendo erros de tipagem (desabilita o typescript, funciona como javascript (nao é muito recomendado))