function validaEmail() {
    let email = document.querySelector("#email")
    let erro = document.querySelector(".erro")

    if(!email.checkValidity()) {
        erro.innerHTML = "Email Inválido";
        document.querySelector(".formcontato__botao").disabled = true;
        document.querySelector("#email").style.borderColor = "red"
    }
}

function redefiniMSG() {
    let erro = document.querySelector(".erro")
    if(erro.innerHTML == "Email Inválido"){
        erro.innerHTML = "";
        document.querySelector(".formcontato__botao").disabled = false;
        document.querySelector("#email").style.borderColor = "black"
    }
}