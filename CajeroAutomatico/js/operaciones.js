window.onload = () =>{
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var dni = getParameterByName("dni");
    var cuenta = getParameterByName("cuenta");
    var btnConsultarSaldo = document.getElementById("btnConsultarSaldo");
    var btnDepositar = document.getElementById("btnDepositar");
    var btnRetirar = document.getElementById("btnRetirar");
    var btnDepEntreCuentas = document.getElementById("btnDepEntreCuentas");

    var btnRegresar = document.getElementById("btnRegresar");

    document.getElementById("nroCuenta").innerHTML = `Cta: ${cuenta}`;

    btnConsultarSaldo.onclick = (e) =>{
        e.preventDefault();
        window.location =`./consultar.html?dni=${dni}&cuenta=${cuenta}`;
    }
    btnDepositar.onclick = (e) =>{
        e.preventDefault();
        window.location =`./depositar.html?dni=${dni}&cuenta=${cuenta}`;
    }
    btnRetirar.onclick = (e) =>{
        e.preventDefault();
        window.location =`./retirar.html?dni=${dni}&cuenta=${cuenta}`;
    }
    btnDepEntreCuentas.onclick = (e) =>{
        e.preventDefault();
        window.location =`./depositarEntreCuentas.html?dni=${dni}&cuenta=${cuenta}`;
    }
    btnRegresar.onclick = (e)=>{
        e.preventDefault();
        window.location =`./cuentas.html?dni=${dni}`;
    }

}