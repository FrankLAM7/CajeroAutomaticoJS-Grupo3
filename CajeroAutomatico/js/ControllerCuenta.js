class ControllerCuenta{
    usuarios;
    rutaArchivo;

    constructor(rutaArchivo){
       
        this.rutaArchivo = rutaArchivo;

        this.CargarLista();
    }

    // Cargar la lista de Objetos y asignarle a su propiedad
    CargarLista(){
        this.leerArchivo();
    }
    
    // Leer el archivo de texto
    leerArchivo(){
        $.ajax({
            type: "GET",
            url: `${this.rutaArchivo}`,
            //url: "./data/bd.txt",
            data: "data",
            dataType: "text",
            success: function (response) {
                //console.log(response);
                //var linea = response.split("\n");
                //console.log(linea);
                txtAObjetos(response)
            }
        });
    }

    // Convertir la lista del TXT a Objetos UsuarioCuenta
    txtAObjetos(data) {
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
        // Asignando la lista a la propiedad de usuarios;
        this.usuarios = usuarios;
    }

}