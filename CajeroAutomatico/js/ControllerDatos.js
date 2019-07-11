class ControllerDatos{
    usuarios = [];
    archivo = './data/bd.txt';
    constructor(){
        this.FicheroAArrayObjetos();
    }

    // Método Promesa del la lectura del Fichero
    LeerFichero(){
        console.log("Método LeerFichero");
        let datosBD = () => {
            return new Promise((resolve, reject) => {
                $.ajax({
                    type: "GET",
                    url: `${this.archivo}`,
                    encoding: "UTF-8",
                    data: null,
                    dataType: "text",
                    success: function (response) {
                        resolve(response);
                    },
                    error: function (error) {  
                        reject(error);
                    }
                });
            });
        }
        return datosBD();
    }

    // Método de la transformación del fichero en Array de Objetos
    FicheroAArrayObjetos(){
        console.log("Método FicheroArrayObjetos");
        let filas, fila;
        let usuarioArray = [];
        let datos = this.LeerFichero().then((data)=>{
            filas = data.split('\n');
            //console.log(filas);
            for (let i = 1; i < filas.length; i++) {
                fila = filas[i].split(',')
                
                let usuario = new UsuarioCuenta(
                    fila[0],
                    fila[1],
                    fila[2],
                    fila[3],
                    parseFloat(fila[4]),
                    fila[5]
                );
                if(usuario.dni.length>0){
                    usuarioArray.push(usuario);
                    //this.usuarios.push(usuario);
                }
                
            }
            //console.log(usuarioArray);
            this.CreacionLocalStorage(usuarioArray);
            
        })
        .catch((error)=>{
            console.log(error.responseText);
        });
    }

    CreacionLocalStorage(data){
        localStorage.setItem('bdCajero', JSON.stringify(data));
    }

    ObtenerLocalStorage(){
        return localStorage.getItem('bdCajero');
    }
}