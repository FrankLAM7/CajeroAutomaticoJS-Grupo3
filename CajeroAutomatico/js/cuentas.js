window.onload =()=>{
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
    var listadoCuentas = document.getElementById("listadoCuentas");
    var dni = getParameterByName("dni");//obtiene el dni de la url

    /*
        EN EL ARREGLO DE CUENTAS DEBERIAN LLEGAR LAS CUETAS LEIDAS DESDE UN ARCHIVO
    */

    
    var cuentas = buscarXDni(dni);

    for (let i = 0; i < cuentas.length; i++) {
        var btnCuenta = document.createElement("button");
        btnCuenta.className ="btn btn-success btn-lg btn-block";
        btnCuenta.innerHTML =`${i+1}.-  ${cuentas[i].cuenta}`;
        listadoCuentas.appendChild(btnCuenta);
        
        btnCuenta.onclick = (e)=>{
            e.preventDefault();
            alert(`Seleccionaste: ${cuentas[i].cuenta}`);
            window.location =`./operaciones.html?dni=${dni}&cuenta=${cuentas[i].cuenta}`;
        }
    }





    

}