window.onload = function(){

    let contDatos = new ControllerDatos();
    console.log(contDatos);

    var btnIngresar = document.getElementById("btnIngresar");
    var inputDni = document.getElementById("inputDni");

    

    btnIngresar.onclick = (e)=>{
        e.preventDefault();
        var persona = buscarXDni(inputDni.value);
        if(persona.length >0){
            alert(`Bienvenido: ${inputDni.value}`);
            window.location =`./cuentas.html?dni=${inputDni.value}`;
        }else{
            alert("No esta en la BD");
        }
        
    }
}