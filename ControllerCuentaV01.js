class ControllerCuentaV01{

    usuarios=[];
    rutaArchivo;

    // usuarioCuentas=[]

    listarTodos()
    {
        // Console.log("Mostrando lista");
        //     foreach (item in usuarios)
        //     {
        //         Console.log(item);
        //     }
    }

    transferenciaDinero = (ctaOrigen, ctaDestino, monto)=>
        {
            usuario = new UsuarioCuenta();
            bandera = false;
            monedacta1=0; 
            monedacta2=0;

            usuario = buscarXCuenta(ctaOrigen);
            if (monto > usuario.monto)
            {
                return "Saldo insuficiente en cuenta origen saldo actual: " + usuario.monto;
            }
            else
            {
                if (usuario != null)
                {
                    monedacta1 = usuario.moneda;
                    usuario = buscarXCuenta(ctaDestino);
                    if (usuario != null)
                    {
                        monedacta2 = usuario.moneda;
                        bandera = true;
                    }
                    else
                    {
                        return "Cuenta destino inexistente.";
                    }
                }
                else
                {
                    return "Cuenta origen inexistente";
                }
                if (bandera == true)
                {
                    if (monedacta1 == monedacta2)
                    {

                        for(let cont=0;cont<usuarios.length;++cont){
                            if(usuarios[cont].Equals(ctaOrigen.Trim())){
                                usuarios[cont].monto = usuarios[cont].monto - monto; 
                            }
                        }

                        for(let cont=0;cont<usuarios.length;++cont){
                            if(usuarios[cont].cuenta.Equals(ctaDestino.Trim())){
                                usuarios[cont].monto = usuarios[cont].monto + monto;
                            }
                        }

                        return "La transacción se realizo con éxito";
                    }
                    else
                    {
                        return "La moneda de las cuentas no coinciden";
                    }

                }
            }
            return "No se realizo la transacción";
        }

        retirarDinero = (monto, cuenta)=>
        {
            //UsuarioCuenta uCuenta = buscarXCuenta(cuenta);
            
            for(let cont=0;cont<usuarios.length;++cont){
                if (usuarios[cont].cuenta.Equals(cuenta.Trim()))
                {
                	if(monto>usuarios[cont].monto){
                		return false;
                	}
                    usuarios[cont].monto = usuarios[cont].monto - monto;
                    return true;
                }
            }
            
            return false;
        }

        depositarDinero = (monto, cuenta)=>
        {
        	if(monto<0){
                return false;
            }
            
            for(let cont=0;cont<usuarios.length;++cont){
                if(usuarios[cont].cuenta.Equals(cuenta.Trim())){
                    usuarios[cont].monto = usuarios[cont].monto + monto;
                    return true;
                }
            }

            return false;
        }

        buscarXCuenta = (cuenta)=>
        {

            for(let cont=0;cont<usuarios.length;++cont){
                if(usuarios[cont].cuenta.Equals(cuenta.Trim())){
                    return usuarios[cont];
                }
            }

            return null;
        }

        buscarXDni=(dni)=>
        {
            lista = [];
            obj;

            for(let cont=0;cont<usuarios.length;++cont){
                if(usuarios[cont].dni == dni.Trim()){
                    console.log(usuarios[cont]);
                    obj = new UsuarioCuenta();
                    obj = item;
                    lista.push(obj);
                }
            }

            return lista;
        }

// ------------------------------------section-----------------


    constructor(rutaArchivo){
       
        this.rutaArchivo = rutaArchivo;

        // this.CargarLista();

    }

    execute = ()=>{
        this.get_data().then((result) => {
            // data = result;
            console.log(result);

            this.txtAObjetos(result);
        }).catch((error) => {
            console.error(error);
        });
    }

    // Cargar la lista de Objetos y asignarle a su propiedad
    CargarLista(){
        this.leerArchivo();
    }

    // data;

    get_data = () => {
        return new Promise((resolve, reject) => {

            $.ajax({
                type: "GET",
                // url: "http://5d1cd479f31e7f00147ebb74.mockapi.io/users",
                url:`${this.rutaArchivo}`,
                data: null,
                success: function (response) {
                    // console.log(response);
                    resolve(response);
                    // this.txtAObjetos(response);
                },
                error: function (error) {
                    reject(error);
                }
            });
        });
    }

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
                txtAObjetos(response);
            }
        });
    }


    // Leer el archivo de texto

    txtAObjetos = (data)=>{
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

        return null;
    }

    // Convertir la lista del TXT a Objetos UsuarioCuenta
        

        // this section is used in the final version
        // EscribirLista()
        // {
        //     StreamWriter sw;
        //     string encabezado = "dni,nombres,apellidos,cuenta,monto,moneda";
        //     string linea = "";

        //     try
        //     {
        //         sw = new StreamWriter(archivo);

        //         sw.WriteLine(encabezado);

        //         foreach (var item in usuarioCuentas)
        //         {
        //             linea = item.dni +"," +item.nombres+","+ item.apellidos+","+ item.cuenta+","+item.monto+","+item.moneda;
        //             sw.WriteLine(linea);
        //         }

        //         sw.Close();
        //     }
        //     catch (Exception ex)
        //     {
        //         Console.WriteLine("Error al escribir archivo BD. {0}" + ex);
        //     }
        // }
        // private void CargarLista()
        // {
        //     StreamReader sr;
        //     string linea = "";
        //     string[] arrayLinea;

        //     UsuarioCuenta obj;

        //     try
        //     {
        //         sr = new StreamReader(archivo);
        //         sr.ReadLine();
        //         while ((linea = sr.ReadLine()) != null)
        //         {
        //             arrayLinea = linea.Split(',');

        //             obj = new UsuarioCuenta
        //             {
        //                 dni = arrayLinea[0],
        //                 nombres = arrayLinea[1],
        //                 apellidos = arrayLinea[2],
        //                 cuenta = arrayLinea[3],
        //                 monto = double.Parse(arrayLinea[4]),
        //                 moneda = char.Parse(arrayLinea[5])
        //             };

        //             usuarioCuentas.Add(obj);

        //         }

        //         sr.Close();
        //     }
        //     catch (Exception ex)
        //     {
        //         Console.WriteLine("Error al leer archivo BD. {0}" + ex);
        //     }
}
 
