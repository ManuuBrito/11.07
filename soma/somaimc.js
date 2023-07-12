const resultado = document.getElementById("btn-resultado");

btn.addEventListener("click", function imc (){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let result = Number (document.getElementById("total"));

    result.textContent = String(peso / (altura * altura));
})