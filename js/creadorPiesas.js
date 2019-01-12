var CrearPiesas = function(){};
CrearPiesas.prototype.validarProto = ()=>{
    console.log('prototype validado');
};
CrearPiesas.factory = function(nombrePiesa,colorPiesa){
    var constr = nombrePiesa;
    var nuevaPiesa;

    if (typeof CrearPiesas[constr] !== 'function') {
        throw {
            name : 'Error',
            mensaje : 'El constructor no existe'
        }
    }
    if (typeof CrearPiesas[constr].prototype.validarProto !== 'funciton') {
        CrearPiesas[constr].prototype = new CrearPiesas();
    }
    
    nuevaPiesa = new CrearPiesas[constr](colorPiesa);
    return nuevaPiesa;
};
/***********************************************************************************************
 * idPiesa = 'representa el numero que se le asignara dentredel array tablero'
 * source = 'representa la fuente de la imagen correspondiente a la piesa'
 * mensajeProvisorio = 'Es lo que se mostrara en reemplaaso de la imagen si esta no estubiera'
 * colorPiesa = 'declara si la piesa es negra o blanca'
 * posicionPiesa = 'la ubica en el tablero'
 ***********************************************************************************************/
 //EN EL COLOR DE LA PIESA.
 // TRUE == BLANCO
 // FALSE == NEGRO.
CrearPiesas.peon = function(colorPiesa,){
    this.idPiesa = 1;
    this.source = 'Fuente de la imagen de la piesa';
    this.mensajeProvisorio = 'PEON';
    this.colorPiesa = colorPiesa;
}
CrearPiesas.torre = function(colorPiesa){
    this.idPiesa = 2;
    this.source = 'Fuente de la imagen de la piesa';
    this.mensajeProvisorio = 'TORRE';
    this.colorPiesa = colorPiesa;
    
}
CrearPiesas.alfil = function(colorPiesa){
    this.idPiesa = 4;
    this.source = 'Fuente de la imagen de la piesa';
    this.mensajeProvisorio = 'ALFIL';
    this.colorPiesa = colorPiesa;
    
}
CrearPiesas.caballo = function(colorPiesa){
    this.idPiesa = 3;
    this.source = 'Fuente de la imagen de la piesa';
    this.mensajeProvisorio = 'CABALLO';
    this.colorPiesa = colorPiesa;
    
}
CrearPiesas.rey = function(colorPiesa){
    this.idPiesa = 5;
    this.source = 'Fuente de la imagen de la piesa';
    this.mensajeProvisorio = 'REY';
    this.colorPiesa = colorPiesa;
    
}
CrearPiesas.reina = function(colorPiesa){
    this.idPiesa = 6;
    this.source = 'Fuente de la imagen de la piesa';
    this.mensajeProvisorio = 'REINA';
    this.colorPiesa = colorPiesa;
    
}
CrearPiesas.vacio = function(){
    this.idPiesa = 0;
    this.source = 'Fuente de la imagen de la piesa';
    this.mensajeProvisorio = '';
}