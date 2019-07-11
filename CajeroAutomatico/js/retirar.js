window.onload = function(){
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var dni = getParameterByName("dni");
    var cuenta = getParameterByName("cuenta");

// 
    var montoRetirar = document.getElementById("montoRetirar");
    var btnRetirar = document.getElementById("btnRetirar");
    document.getElementById("nroCuenta").innerHTML = cuenta;

    var btnOtraOperacion = document.getElementById("btnOtraOperacion");
    var btnSalir = document.getElementById("btnSalir");

    btnRetirar.onclick = (e) =>{
        e.preventDefault();
        var mensaje = retirar(montoRetirar.value, cuenta);
        alert(mensaje);

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