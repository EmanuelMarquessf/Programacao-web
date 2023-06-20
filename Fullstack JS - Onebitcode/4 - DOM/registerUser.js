function registerUser(element){
  const user = element.children.user.value;
  const password = element.children.password.value;
  const confirmPassword = element.children.confirmPassword.value;
  
  if(password === confirmPassword){
    alert(`${user} foi cadastrado!!`);
  }
  else{
    alert('As senhas não coincidem!!');
  }
}