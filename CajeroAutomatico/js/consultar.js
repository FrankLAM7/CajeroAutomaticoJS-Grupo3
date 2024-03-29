window.onload = function(){
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var dni = getParameterByName("dni");
    var cuenta = getParameterByName("cuenta");

    document.getElementById("cuenta").innerHTML = `Cta. ${cuenta}`;
    var objCuenta = buscarXCuenta(cuenta); 
    if(objCuenta != null){
        document.getElementById("saldoCuenta").innerHTML = `Saldo de Cuenta: ${objCuenta.monto}`;
    }else{
        document.getElementById("saldoCuenta").innerHTML = `NO SE ENCONTRO LA CUENTA`;
    }
    

    var btnOtraOperacion = document.getElementById("btnOtraOperacion");
    var btnSalir = document.getElementById("btnSalir");

    btnOtraOperacion.onclick =function(e){
        e.preventDefault();
        window.location =`./operaciones.html?dni=${dni}&cuenta=${cuenta}`;

    }
    btnSalir.onclick =function(e){
        e.preventDefault();
        window.location =`./gracias.html`;
    }
}