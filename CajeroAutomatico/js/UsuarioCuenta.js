class UsuarioCuenta{
    
    _dni = "";
    _nombres = "";
    _apellidos = "";
    _cuenta = "";
    _monto = 0;
    _moneda = "";

    ToString()
    {
        return `UsuarioCuenta: ${this._dni} - ${this._nombres} - ${this._apellidos} - ${this._cuenta} - ${this._monto} - ${this._moneda}`;
    }

    constructor()
    {
            
    }

    set dni(_dni){
        this._dni = _dni;
    }

    get dni(){
        return this._dni;
    }
    
    set nombres(_nombres){
        this._nombres = _nombres;
    }

    get nombres(){
        return this._nombres;
    }
    set apellidos(_apellidos){
        this._apellidos = _apellidos;
    }

    get apellidos(){
        return this._apellidos;
    }
    set cuenta(_cuenta){
        this._cuenta = _cuenta;
    }

    get cuenta(){
        return this._cuenta;
    }
    set monto(_monto){
        this._monto = _monto;
    }

    get monto(){
        return this._monto
    }
    set moneda(_moneda){
        this._moneda = _moneda;
    }

    get moneda(){
        return this._moneda;
    }
}