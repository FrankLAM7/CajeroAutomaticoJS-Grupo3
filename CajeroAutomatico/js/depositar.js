window.onload = function(){
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var dni = getParameterByName("dni");
    var cuenta = getParameterByName("cuenta");

    var montoDeposito = document.getElementById("montoDeposito");
    var btnDepositar = document.getElementById("btnDepositar");
    document.getElementById("nroCuenta").innerHTML = cuenta;

    var btnOtraOperacion = document.getElementById("btnOtraOperacion");
    var btnSalir = document.getElementById("btnSalir");

    btnDepositar.onclick = (e) =>{
        e.preventDefault();
        var mensaje = depositar(montoDeposito.value, cuenta);
        alert(mensaje);
        montoDeposito.value ="";

    }
    btnOtraOperacion.onclick =function(e){
        e.preventDefault();
        window.location =`./operaciones.html?dni=${dni}&cuenta=${cuenta}`;
    }
    btnSalir.onclick =function(e){
        e.preventDefault();
        window.location =`./gracias.html`;
    }
}
