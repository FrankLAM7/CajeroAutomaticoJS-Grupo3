window.onload = function(){
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var dni = getParameterByName("dni");
    var cuenta = getParameterByName("cuenta");

    var monto = document.getElementById("monto");
    var cuentaDestino = document.getElementById("cuentaDestino");

    var btnOtraOperacion = document.getElementById("btnOtraOperacion");
    var btnSalir = document.getElementById("btnSalir");

    var btnDepositar= document.getElementById("btnDepositar");

    btnDepositar.onclick = (e)=>{
        e.preventDefault();
        var mensaje = transferir(monto, cuenta, cuentaDestino.value);
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
