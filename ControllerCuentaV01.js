    class ControllerCuentaV01{
    usuarioCuentas=[];
    archivo;

    constructor(archivo)
    {
            usuarioCuentas = [];
            this.archivo = archivo;

            CargarLista();
    }

    listarTodos()
    {
        Console.log("Mostrando lista");
            foreach (item in usuarioCuentas)
            {
                Console.log(item);
            }
    }

transferenciaDinero(ctaOrigen, ctaDestino, monto)
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
                        foreach (item in usuarioCuentas)
                        {
                            if (item.cuenta.Equals(ctaOrigen.Trim()))
                            {
                                item.monto = item.monto - monto;
                            }
                        }
                        foreach (item in usuarioCuentas)
                        {
                            if (item.cuenta.Equals(ctaDestino.Trim()))
                            {
                                item.monto = item.monto + monto;
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
        retirarDinero(monto, cuenta)
        {
            //UsuarioCuenta uCuenta = buscarXCuenta(cuenta);
      
            foreach (item in usuarioCuentas)
            {
                if (item.cuenta.Equals(cuenta.Trim()))
                {
                	if(monto>item.monto){
                		return false;
                	}
                    item.monto = item.monto - monto;
                    return true;
                }
            }
            
            return false;
        }
        depositarDinero(monto, cuenta)
        {
        	if(monto<0){
                return false;
            }
        	
            foreach (item in usuarioCuentas)
            {
                if (item.cuenta.Equals(cuenta.Trim()))
                {
                    item.monto = item.monto + monto;
                    return true;
                }
            }
            return false;
        }

        buscarXCuenta(cuenta)
        {
            foreach (item in usuarioCuentas)
            {
                if (item.cuenta.Equals(cuenta.Trim()))
                {
                    return item;
                    
                }
            }
            return null;
        }

        buscarXDni(dni)
        {
            lista = [];
            obj;

            foreach (item in usuarioCuentas)
            {
                if (item.dni == dni.Trim())
                {
                    Console.WriteLine(item);
                    obj = new UsuarioCuenta();
                    obj = item;
                    lista.push(obj);
                }
            }
            return lista;
        }

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
 
