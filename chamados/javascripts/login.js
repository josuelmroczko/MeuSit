function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
 if(login == "admin" && senha == "admin"){
    alert ("sussesso")
    location.href = ("home.html");

 }else{
    alert("SENHA OU E-MAIL INCORRETO!")
 }

}