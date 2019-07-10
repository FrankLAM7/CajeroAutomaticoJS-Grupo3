window.onload = function(){
    console.log("Hola Mundo");
    //leerArchivo();
    var contCuentas = new ControllerCuenta("./data/bd.txt");
    console.log(contCuentas.usuarios);
        
}

function leerArchivo(){
    $.ajax({
        type: "GET",
        url: "./data/bd.txt",
        data: "data",
        dataType: "text",
        success: function (response) {
            console.log(response);
            var linea = response.split("\n");
            console.log(linea);
            txtAObjetos(response)
        }
    });
}

function txtAObjetos(data) {
    var lineas = data.split("\n");
    var linea;
    var usuarios = []; 

    for (let i = 1; i < lineas.length; i++) {
        linea = lineas[i].split(',');
        var usuario = new UsuarioCuenta();
        usuario.dni = linea[0];
        usuario.nombres = linea[1];
        usuario.apellidos = linea[2];
        usuario.cuenta = linea[3];
        usuario.monto = linea[4];
        usuario.moneda = linea[5];
        usuarios.push(usuario);
    }
    console.log(usuarios);
    
}