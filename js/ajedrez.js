let frame = window.requestAnimationFrame ||
            window.mosRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mosRequestAnimationFrame;

let tablero = [
    [2,3,4,5,6,4,3,2],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [2,3,4,5,6,4,3,2]
];

let miApp = {
    //variables globales de mi aplicacion.
    COLUMNAS : tablero[0].length,
    FILAS : tablero.length,
    stage : document.getElementById('stage'),
    cell : undefined,
    SIZE : 60,
    fila : undefined,
    columna : undefined,
    filaycolumna : undefined,
    peon : false
};

let ajedrez = {};

//metodos del objeto ajedrez.

//TORRE
ajedrez.torre = function(){
    console.log('mueve la torre');
};
//CABALLO
ajedrez.caballo = function(){
    console.log('mueve el caballo');
};
//ALFIL
ajedrez.alfil = function(){
    console.log('mueve el alfil');
};
//REINA
ajedrez.reina = function(){
    console.log('mueve a la reina');
};
//REY
ajedrez.rey = function(){
    console.log('mueve al rey');
};
//PEON.
ajedrez.peon = function(e){
        console.log('mueve el peon');
        miApp.filaycolumna = e.target.className;
        miApp.fila = parseInt(miApp.filaycolumna.substring(5,6));
        miApp.columna = parseInt(miApp.filaycolumna.substring(6,7));
        console.log(miApp.filaycolumna);
        console.log(miApp.fila);
        console.log(miApp.columna);
        //casillas a las cuales pueden desplasarse
        var casillaPosible1 = miApp.fila+miApp.columna+'';
        miApp.peon = true;

};
//TIEMPO SE REPITE 60 VECES POR SEGUNDO.
ajedrez.tiempo = function(){
    if (miApp.peon) {
        console.log('entramos');
        if (tablero[miApp.fila][miApp.columna - 1] === 0) {
            miApp.cell = document.getElementsByClassName(`${miApp.fila}${miApp.columna}`);
            miApp.cell[0].innerHTML = '';
                tablero[miApp.fila - 1][miApp.columna - 1] = 0 ;
                tablero[miApp.fila][miApp.columna - 1] = 1;
        }
        miApp.peon = false;
    }
    ajedrez.render();
    frame(ajedrez.tiempo);
};
ajedrez.render = function(){
    for (let fil = 0; fil < miApp.FILAS; fil++) {
        for (let col = 0; col < miApp.COLUMNAS; col++) {
            let filCelda = fil + 1;
            let colCelda = col + 1;
            miApp.cell = document.getElementsByClassName(`${filCelda}${colCelda}`);
            switch (tablero[fil][col]) {
                case 1:
                    miApp.cell[0].innerHTML = 'PEON';
                    miApp.cell[0].addEventListener('click', ajedrez.peon, false);
                    break;
                case 2:
                    miApp.cell[0].innerHTML = 'TORRE';
                    miApp.cell[0].addEventListener('click', ajedrez.torre, false);
                    break;
                case 3:
                    miApp.cell[0].innerHTML = 'CABALLO';
                    miApp.cell[0].addEventListener('click', ajedrez.caballo, false);
                    break;
                case 4:
                    miApp.cell[0].innerHTML = 'ALFIL';
                    miApp.cell[0].addEventListener('click', ajedrez.alfil, false);
                    break;
                case 5:
                    miApp.cell[0].innerHTML = 'REINA';
                    miApp.cell[0].addEventListener('click', ajedrez.reina, false);
                    break;
                case 6:
                    miApp.cell[0].innerHTML = 'REY';
                    miApp.cell[0].addEventListener('click', ajedrez.rey, false);
                    break;
            }
            
            // miApp.cell.style.top = fil * miApp.SIZE + 'px';
            // miApp.cell.style.left = col * miApp.SIZE + 'px';
        }
    }
};
ajedrez.tiempo();
