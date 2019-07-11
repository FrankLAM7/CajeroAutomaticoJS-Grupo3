let bdCajero = localStorage.getItem('bdCajero');
bdCajero = JSON.parse(bdCajero);

function depositar(monto, cuenta) {
    console.log("Función depositar");
    if (monto < 0) {
        return "Error! monto negativo";
    }
    
    //console.log("Antes del depósito: ",localStorage.getItem('bdCajero'));

    for (let i = 0; i < bdCajero.length; i++) {
        const element = bdCajero[i];
        if (element.cuenta === cuenta) {
            //console.log(element);
            bdCajero[i].monto = bdCajero[i].monto + monto;
            //console.log(element);
            //localStorage.setItem('bdCajero',JSON.stringify(bdCajero));
            //return element;
        }
    }
    localStorage.setItem('bdCajero',JSON.stringify(bdCajero));
    /* console.log(bdCajero);*/
    //console.log("Después del depósito: ",localStorage.getItem('bdCajero'));
    

    return "Depósito Exitoso";
}

function buscarXDni(dni){
    console.log("Función buscarXDni");
    if (dni.length < 1) {
        return "Ingrese un dni";
    }
    let cuentas = [];
    for (let i = 0; i < bdCajero.length; i++) {
        const item = bdCajero[i];
        if (item.dni === dni) {
            cuentas.push(item);
        }
    }
    return cuentas;
}

function retirar(monto, cuenta){
    console.log("Función retirar");
    if (monto < 0) {
        return "Error! monto negativo";
    }
    
    for (let i = 0; i < bdCajero.length; i++) {
        const element = bdCajero[i];
        if (element.cuenta === cuenta) {
            if (monto > element.cuenta) {
                return "Error! monto supera el saldo";
            }
            //console.log(element);
            bdCajero[i].monto = bdCajero[i].monto - monto;
            //console.log(element);
            //localStorage.setItem('bdCajero',JSON.stringify(bdCajero));
            //return element;
        }
    }
    localStorage.setItem('bdCajero',JSON.stringify(bdCajero));
    return "Retiro exitoso";
    //console.log(bdCajero);
    //console.log(localStorage.getItem('bdCajero'));
}

function transferir(monto, cuentaOrigen, cuentaDestino) {
    console.log("Función transferir");
    
    // Cuenta origen
    let ctaO = buscarXCuenta(cuentaOrigen);
    if (ctaO === null) {
        return "Error! La cuenta origen no existe";
    }
    for (let i = 0; i < bdCajero.length; i++) {
        const item = bdCajero[i];
        //Verificar si existe la cuenta origen
        if (item.cuenta === cuentaOrigen) {
            bdCajero[i].monto -= monto;
            //return "Retiro Exitoso";
        }
    }
    // Cuenta destino
    let ctaD = buscarXCuenta(cuentaDestino);
    if (ctaD === null) {
        return "Error! la cuenta destino no existe";
    }
    for (let i = 0; i < bdCajero.length; i++) {
        const it = bdCajero[i];
        // Verificar cuenta destino
        if (it.cuenta === cuentaDestino) {
            bdCajero[i].monto += monto;
            //return "Depósito Exitoso";
        }
    }
    console.log("Antes de transferencia: ", bdCajero);
    localStorage.setItem('bdCajero',JSON.stringify(bdCajero));
    console.log("Después de transferencia",bdCajero);
    
    return "Transferencia exitosa";
}

function buscarXCuenta(cuenta) {
    console.log("Función buscaxCuenta");
    let bdCaja = localStorage.getItem('bdCajero');
    bdCaja = JSON.parse(bdCaja);
    
    for (let i = 0; i < bdCaja.length; i++) {
        if (bdCaja[i].cuenta === cuenta) {
            //ctaEncontrada = item;
            //return item;
            //return console.log(item);
            return bdCaja[i];
            
        }
        
    }
    return null;
}