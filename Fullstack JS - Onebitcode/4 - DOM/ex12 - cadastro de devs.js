const tecList = document.querySelector(`#tecList`);
const addTecButton = document.querySelector(`#addTecButton`);
const form = document.querySelector(`#registerDev`);


const developers = [];
let inputRows = 0;

addTecButton.addEventListener('click', function(ev){
  const elementList = document.createElement ('li');
  const rowIndex = inputRows;
  inputRows++;
  elementList.id = `inputRow-${rowIndex}`;
  tecList.appendChild(elementList);

  const label = createLabel(`Tecnologia: `, `tecName-${rowIndex}`);
  const input = createInput(`input-${rowIndex}`, null, `input-${rowIndex}`, `Nome da tecnologia`);
  
  const expLabel = createLabel(`Experiencia:`);

  elementList.append(label, input, expLabel);

  const exp1 = createInput(`expInput-${rowIndex}.1`,`0-2 anos`, ``, `expInput-${rowIndex}`, `radio`);
  const exp2 = createInput(`expInput-${rowIndex}.1`,`3-5`, ``, `expInput-${rowIndex}`, `radio`);
  const exp3 = createInput(`expInput-${rowIndex}.1`,`5+`, ``, `expInput-${rowIndex}`, `radio`);

  expLabel.append(exp1, exp2, exp3);
});

function buttonRegisterClick(ev){
  ev.preventDefault();
  const name = document.querySelector('#name').value;
  const tecName = document.querySelector('#inputTecName').value;
  const year = document.querySelectorAll('input[name = "years"]').value;

  console.log(name, tecName, year)
}

function createLabel(text, htmlFor){
  const label = document.createElement(`label`);
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label
}

function createInput(id, value, name, placeholder, type = `text`){
  const input = document.createElement(`input`);
  input.id = id;
  input.value = value;
  input.name = name;
  input.placeholder = placeholder;
  input.type = type;

  return input;
}
