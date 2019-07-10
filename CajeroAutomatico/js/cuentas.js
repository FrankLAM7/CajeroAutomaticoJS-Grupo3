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
    
    var cuentas = ["123-4545-487","45454454-8888"];

    for (let i = 0; i < cuentas.length; i++) {
        var btnCuenta = document.createElement("button");
        btnCuenta.className ="btn btn-success btn-lg btn-block";
        btnCuenta.innerHTML =`${i+1}.-  ${cuentas[i]}`;
        listadoCuentas.appendChild(btnCuenta);
        
        btnCuenta.onclick = (e)=>{
            e.preventDefault();
            alert(`Seleccionaste: ${cuentas[i]}`);
            window.location =`./operaciones.html?dni=${dni}&cuenta=${cuentas[i]}`;
        }
    }





    

}