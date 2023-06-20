function register (ev){
  const sectionElement = ev.currentTarget.parentNode;
  const user = sectionElement.children.user.value;
  const password = sectionElement.children.password.value;
  const confirmPassword = sectionElement.children.confirmPassword.value;

  if(password === confirmPassword){
    alert(`${user} foi cadastrado!!`);
  }
  else{
    alert('As senhas não coincidem!!');
  }
}

const button = document.getElementById('registerButton');
button.addEventListener('click', register);

function remove(){
  button.removeEventListener('click', register)
  alert('Evento removido');
}