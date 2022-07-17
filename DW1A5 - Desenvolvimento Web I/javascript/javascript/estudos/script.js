function login(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;


    if(login != "" && password != ""){
        alert("certo");
    }
    else{
        alert("errado");
    }
}

function soma(){
    var valor1 = parseInt(document.getElementById('valor1').value);
    var valor2 = parseInt(document.getElementById('valor2').value);
    var result = parseInt(valor1) + parseInt(valor2);

    document.getElementById("result").value = result;

}