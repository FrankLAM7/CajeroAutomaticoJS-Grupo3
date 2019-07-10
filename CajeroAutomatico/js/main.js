window.onload = function(){
    var btnIngresar = document.getElementById("btnIngresar");
    var inputDni = document.getElementById("inputDni");


    btnIngresar.onclick = (e)=>{
        e.preventDefault();
        alert(`Bienvenido: ${inputDni.value}`);
        window.location ="./cuentas.html";
    }
}