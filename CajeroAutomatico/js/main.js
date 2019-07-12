window.onload = function(){

    let contDatos = new ControllerDatos();
    console.log(contDatos);

    var btnIngresar = document.getElementById("btnIngresar");
    var inputDni = document.getElementById("inputDni");
 var aviso = document.getElementById("avisoDni");
    

    btnIngresar.onclick = (e)=>{
        e.preventDefault();
        
        var persona = buscarXDni(inputDni.value);
        if(inputDni.value !="" && persona.length >0){
            aviso.innerHTML ="Bienvenido";
            aviso.className="form-text text-success";
            alert(`Bienvenido: ${inputDni.value}`);
            window.location =`./cuentas.html?dni=${inputDni.value}`;
        }else{
            //alert("No esta en la BD");
            aviso.innerHTML ="No se encuentra en la BD";
            aviso.className="form-text text-danger";
        }
        
    }
}