// var peonBlanco = CrearPiesas.factory('peon','blanco',21);
//IMPORTANTE METER ESTAS CUATRO VARIABLES A LA VARIABLE APP.
let piesasDeCambioPorPeon = {
    caballo: document.getElementById('caballo'),
    torre: document.getElementById('torre'),
    alfil: document.getElementById('alfil'),
    reina: document.getElementById('reina'),
}
let filaDePiesaCambio = undefined;
let columnaDePiesaCambio = undefined;
let seleccionarPiesa = document.getElementById('seleccionarPiesa');


let tablero = [
     ['','','','','','','',''],
     ['','','','','','','',''],
     ['','','','','','','',''],
     ['','','','','','','',''],
     ['','','','','','','',''],
     ['','','','','','','',''],
     ['','','','','','','',''],
     ['','','','','','','','']
];
let piesasComidasBlancas = [
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['','']
];
let piesasComidasCelestes = [
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['','']
];
let app = {
    ROWS : tablero.length,
    COLS : tablero[0].length,
    cell : undefined,
    cellPiesaComida : undefined,
    piesaMover : undefined,
    colorPiesaMover : undefined,
    filaSeleccionada : undefined,
    columnaSeleccionada : undefined,
    validacionesTorres : {
        adelante : true,
        atras : true,
        izquierda : true,
        derecha : true
    },
    validacionesAlfiles : {
        adelanteIzquierda: true,
        adelanteDerecha: true,
        atrasIzquierda: true,
        atrasDerecha: true
    },
    validacionesReina : {
        adelante : true,
        atras : true,
        izquierda : true,
        derecha : true,
        adelanteIzquierda: true,
        adelanteDerecha: true,
        atrasIzquierda: true,
        atrasDerecha: true
    },
    determinaTurno : true,
    colorPiesaComida : undefined,
    nombrePiesaComida : undefined,
    img : undefined,
    stage : document.querySelectorAll('#stage > div'),
    seleccionarActivo : true
};
let juego = (function (){
    function render(){
        
            for (let i = 0; i < app.ROWS * app.COLS; i++) {
                if(app.stage[i].hasChildNodes()){
                    app.stage[i].removeChild(app.stage[i].firstChild); 
                }
            }
        for (let i = 0; i < app.ROWS; i++) {
            for (let x = 0; x < app.COLS; x++) {
                app.cell = document.getElementById(`${i}${x}`);
                if((tablero[i][x].idPiesa != 0) && (app.filaSeleccionada != undefined && app.columnaSeleccionada != undefined)){
                    if (tablero[app.filaSeleccionada][app.columnaSeleccionada].colorPiesa == tablero[i][x].colorPiesa) {
                        //QUEDO CASI TERMINADA CON ESTE CODIGO AUN CREO QUE FALTA UN PEQUEÑO DETALLE.
                        app.cell.addEventListener('mouseover',overGreen,false);
                        app.cell.addEventListener('mouseout',outGreen,false); 
                    }
                    
                }
                

                if(app.cell.className == 'cell brown'){
                    app.cell.style.background = 'brown';
                }else{
                    app.cell.style.background = 'black';
                }
                // EN CASO DE QUE TENGA QUE VOLVRER A COUPARLO.
                //pinta mis piesas de diferentes colores.
                if (tablero[i][x].colorPiesa) {
                    // app.cell.style.background = 'brown';
                    app.cell.style.color = 'skyblue';
                }else if(tablero[i][x].colorPiesa === false){
                    // app.cell.style.background = 'black';
                    app.cell.style.color = 'white';
                } 
                switch (tablero[i][x].idPiesa) {
                    case 1:
                        //ESTE ES EL CODIGO CORRECTO O ALMENOS LA IDEA 
                        // if(tablero[i][x].colorPiesa){
                        //     app.img = document.createElement('img');
                        //     app.img.src = '../img/peon.png';
                        //     app.cell.appendChild(app.img);
                        // }else{
                        //     app.img = document.createElement('img');
                        //     app.img.src = '../img/peon.jpg';
                        //     app.cell.appendChild(app.img);
                        // }
                        app.cell.innerHTML = tablero[i][x].mensajeProvisorio; break;
                    case 2:
                        //ESTE ES EL CODIGO CORRECTO O ALMENOS LA IDEA 
                        // app.img = document.createElement('img');
                        // app.img.src = tablero[i][x].source;
                        // app.cell.appendChild(img);
                        app.cell.innerHTML = tablero[i][x].mensajeProvisorio; break;
                    case 3:
                        //ESTE ES EL CODIGO CORRECTO O ALMENOS LA IDEA 
                        // app.img = document.createElement('img');
                        // app.img.src = tablero[i][x].source;
                        // app.cell.appendChild(img);  
                        app.cell.innerHTML = tablero[i][x].mensajeProvisorio; break;
                    case 4:
                        //ESTE ES EL CODIGO CORRECTO O ALMENOS LA IDEA 
                        // app.img = document.createElement('img');
                        // app.img.src = tablero[i][x].source;
                        // app.cell.appendChild(img);  
                        app.cell.innerHTML = tablero[i][x].mensajeProvisorio; break;
                    case 5:
                        //ESTE ES EL CODIGO CORRECTO O ALMENOS LA IDEA 
                        // app.img = document.createElement('img');
                        // app.img.src = tablero[i][x].source;
                        // app.cell.appendChild(img); 
                        app.cell.innerHTML = tablero[i][x].mensajeProvisorio; break;
                    case 6:
                        //ESTE ES EL CODIGO CORRECTO O ALMENOS LA IDEA 
                        // app.img = document.createElement('img');
                        // app.img.src = tablero[i][x].source;
                        // app.cell.appendChild(img);  
                        app.cell.innerHTML = tablero[i][x].mensajeProvisorio; break;
                    case 0:
                        //ESTE ES EL CODIGO CORRECTO O ALMENOS LA IDEA 
                        // app.img = document.createElement('img');
                        // app.img.src = tablero[i][x].source;
                        // app.cell.appendChild(img);
                        app.cell.innerHTML = tablero[i][x].mensajeProvisorio; break;
                }

                if (tablero[i][x].idPiesa != 0) {
                    if (app.determinaTurno && (tablero[i][x].colorPiesa == true)) {
                        //turno de los blancos
                        app.cell.addEventListener('click', seleccionar, false);
                    }else if (!app.determinaTurno && (tablero[i][x].colorPiesa == false)) {
                        //turno de los negros.
                        app.cell.addEventListener('click', seleccionar, false);
                    }
                                        
                }
                //gestiona el cambio cuando un peon llega al otro extremo del tablero
                if ((i == 7) && (tablero[i][x].idPiesa == 1) && (tablero[i][x].colorPiesa == true)) {
                    seleccionarPiesa.style.display = 'flex';
                    filaDePiesaCambio = i;
                    columnaDePiesaCambio = x;
                }
                if ((i == 0) && (tablero[i][x].idPiesa == 1) && (tablero[i][x].colorPiesa == false)) {
                    seleccionarPiesa.style.display = 'flex';
                    filaDePiesaCambio = i;
                    columnaDePiesaCambio = x;
                }
            }
        }
        piesasComidasLabel: for (let i = 0; i < 8; i++) {
            for (let x = 0; x < 2; x++) {
                if (app.colorPiesaComida == undefined) {
                    break piesasComidasLabel;
                }
                if (app.colorPiesaComida === false) {
                    if (piesasComidasCelestes[i][x] == '') {
                        piesasComidasCelestes[i][x] = app.nombrePiesaComida;
                        app.cellPiesaComida = document.querySelector(`.piesasComidasBlancas > .columna > #c${i}${x}`);
                        if (app.cellPiesaComida != undefined) {
                            app.cellPiesaComida.innerHTML = app.nombrePiesaComida;
                        }
                        app.colorPiesaComida =undefined;
                        break piesasComidasLabel;
                    }
                }else if(app.colorPiesaComida === true) {
                    if (piesasComidasBlancas[i][x] == '') {
                        piesasComidasBlancas[i][x] = app.nombrePiesaComida;
                        app.cellPiesaComida = document.querySelector(`.piesasComidasCelestes > .columna > #c${i}${x}`);
                        if (app.cellPiesaComida != undefined) {
                            app.cellPiesaComida.innerHTML = app.nombrePiesaComida;
                        }
                        app.colorPiesaComida = undefined;
                        break piesasComidasLabel;
                    }
                } 
            }
        }
    }
    function overGreen(e){
        var fila = e.target.id.slice(0,1);
        var columna = e.target.id.slice(1);
        app.cell = document.getElementById(`${fila}${columna}`);
        app.cell.style.border = 'solid 4px limegreen';
    }
    function outGreen(e){
        var fila = e.target.id.slice(0,1);
        var columna = e.target.id.slice(1);
        app.cell = document.getElementById(`${fila}${columna}`);
        app.cell.style.border = 'solid 1px black';
    }
    function seleccionar(e){
        console.log('has seleccionado esta casilla'+ e.target.id);
        var fila = parseInt(e.target.id.slice(0,1));
        var columna = parseInt(e.target.id.slice(1));
        app.filaSeleccionada = fila;
        app.columnaSeleccionada = columna;
        console.log(fila);
        console.log(columna);
        console.log(tablero[fila][columna].idPiesa);
        //determinan el tope del movimiento de las torres.
        app.validacionesTorres.adelante = true;
        app.validacionesTorres.atras = true;
        app.validacionesTorres.derecha = true;
        app.validacionesTorres.izquierda = true;
        //determinan el tope del movimiento de los alfiles.
        app.validacionesAlfiles.adelanteIzquierda = true;
        app.validacionesAlfiles.adelanteDerecha = true;
        app.validacionesAlfiles.atrasIzquierda = true;
        app.validacionesAlfiles.atrasDerecha = true;
        //es posible que aqui vaya un codigo como el que sigue. y talves tenga aun mas propiedades que etas ya que tambien avanza en diagonal.
        app.validacionesReina.adelante = true;
        app.validacionesReina.atras = true;
        app.validacionesReina.derecha = true;
        app.validacionesReina.izquierda = true;

        app.validacionesReina.adelanteIzquierda = true;
        app.validacionesReina.adelanteDerecha = true;
        app.validacionesReina.atrasIzquierda = true;
        app.validacionesReina.atrasDerecha = true;


        //CADA VES QUE SE LLAME A SELECCIONAR RECETEARA TODOS LOS ESCUCHAS DE MOVER Y LOS BORDES PINTADOS 
        //ESTO PARA QUE POR EJEMPLO SI PRECIONE UN CABALLO PERO QUIERO MOVER OTRA PIESA PUEDA PRECIONAR ESA OTRA PIESA Y 
        // ME MUESTRE EN PANTALLA SOLO LOS MOVIMIENTOS QUE PUEDE REALIZAR LA ULTIMA PIEZA QUE PRECIONE Y NO COMBINE AMBOS MOVIMIENTOS.
        for (let i = 0; i < app.ROWS; i++) {
            for (let x = 0; x < app.COLS; x++) {
                app.cell = document.getElementById(`${i}${x}`);
                app.cell.removeEventListener('click', mover, false);
                app.cell.style.border = 'solid 1px black';
            }
        }

        switch (tablero[fila][columna].idPiesa) {
            // 1 es peon
            case 1:
                app.colorPiesaMover = tablero[fila][columna].colorPiesa;
                console.log(app.colorPiesaMover);
                app.piesaMover = 'peon';
                if (app.colorPiesaMover /*si la piesa es blanca*/) {
                    //con esto puedo detectar si hay una piesa que se pueda comer el peon.
                    if ((app.columnaSeleccionada + 1) <= app.COLS - 1) {
                        if ((tablero[app.filaSeleccionada + 1][app.columnaSeleccionada + 1].idPiesa != 0) && (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada + 1].colorPiesa != app.colorPiesaMover)) {

                            app.cell = document.getElementById(`${app.filaSeleccionada + 1}${app.columnaSeleccionada + 1}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }
                    if ((app.columnaSeleccionada - 1) >= 0) {
                        if ((tablero[app.filaSeleccionada + 1][app.columnaSeleccionada - 1].idPiesa != 0) && (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada - 1].colorPiesa != app.colorPiesaMover)) {
                            app.cell = document.getElementById(`${app.filaSeleccionada + 1}${app.columnaSeleccionada - 1}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }
                    //con esto puedo detectar si este el primer movimiento del peon.
                    if (app.filaSeleccionada == 1 /*si esta es la primera*/) {
                        if (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada].idPiesa == 0) {
                            app.cell = document.getElementById(`${app.filaSeleccionada + 1}${app.columnaSeleccionada}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                        
                        }
                        if ((tablero[app.filaSeleccionada + 1][app.columnaSeleccionada].idPiesa == 0) && (tablero[app.filaSeleccionada + 2][app.columnaSeleccionada].idPiesa == 0)) {
                            app.cell = document.getElementById(`${app.filaSeleccionada + 2}${app.columnaSeleccionada}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                        }
                    }else{
                        //si no es el primer movimiento del peon solo puede mover una casilla al frente.
                        if (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada].idPiesa == 0) {
                            app.cell = document.getElementById(`${app.filaSeleccionada + 1}${app.columnaSeleccionada}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                        
                        }
                    }
                } else {
                    //si es negra hace esto.
                    //detecta si hay alguna piesa que se pueda comer y la marca.
                    if ((app.columnaSeleccionada + 1) <= app.COLS - 1) {
                        if ((tablero[app.filaSeleccionada - 1][app.columnaSeleccionada + 1].idPiesa != 0) && (tablero[app.filaSeleccionada - 1][app.columnaSeleccionada + 1].colorPiesa != app.colorPiesaMover)) {
                            app.cell = document.getElementById(`${app.filaSeleccionada - 1}${app.columnaSeleccionada + 1}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }
                    if ((app.columnaSeleccionada - 1) >= 0) {
                        if ((tablero[app.filaSeleccionada - 1][app.columnaSeleccionada - 1].idPiesa != 0) &&(tablero[app.filaSeleccionada - 1][app.columnaSeleccionada - 1].colorPiesa != app.colorPiesaMover)) {
                            app.cell = document.getElementById(`${app.filaSeleccionada - 1}${app.columnaSeleccionada - 1}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }
                    //con esto puedo detectar si este el primer movimiento del peon.
                    if (app.filaSeleccionada == 6 /*si esta es la primera movida*/) {
                        if (tablero[app.filaSeleccionada - 1][app.columnaSeleccionada].idPiesa == 0) {
                            app.cell = document.getElementById(`${app.filaSeleccionada - 1}${app.columnaSeleccionada}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                        
                        }
                        if ((tablero[app.filaSeleccionada - 1][app.columnaSeleccionada].idPiesa == 0) && (tablero[app.filaSeleccionada - 2][app.columnaSeleccionada].idPiesa == 0)) {
                            app.cell = document.getElementById(`${app.filaSeleccionada - 2}${app.columnaSeleccionada}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                        }
                    }else{
                        //si no es el primer movimiento del peon solo puede mover una casilla al frente.
                        if (tablero[app.filaSeleccionada - 1][app.columnaSeleccionada].idPiesa == 0) {
                            app.cell = document.getElementById(`${app.filaSeleccionada - 1}${app.columnaSeleccionada}`);
                            app.cell.style.border = 'solid 5px red';
                            app.cell.addEventListener('click',mover,false);
                        }
                    }
                }
            break;
            //2 es torre
            case 2:
                app.colorPiesaMover = tablero[fila][columna].colorPiesa;
                console.log(app.colorPiesaMover);
                app.piesaMover = 'torre';
                
                for (let i = 1; i < app.ROWS; i++) {
                    
                    if (((app.filaSeleccionada + i) <= app.ROWS - 1) && ((tablero[app.filaSeleccionada + i][app.columnaSeleccionada].idPiesa == 0) || (tablero[app.filaSeleccionada + i][app.columnaSeleccionada].colorPiesa != app.colorPiesaMover)) && app.validacionesTorres.adelante) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                        app.cell = document.getElementById(`${app.filaSeleccionada + i}${app.columnaSeleccionada}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + i][app.columnaSeleccionada].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesTorres.adelante = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    } else{app.validacionesTorres.adelante = false;}

                    if (((app.filaSeleccionada - i) >= 0) && ((tablero[app.filaSeleccionada - i][app.columnaSeleccionada].idPiesa == 0) || (tablero[app.filaSeleccionada - i][app.columnaSeleccionada].colorPiesa != app.colorPiesaMover)) && app.validacionesTorres.atras) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                        app.cell = document.getElementById(`${app.filaSeleccionada - i}${app.columnaSeleccionada}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada - i][app.columnaSeleccionada].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesTorres.atras = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }else{app.validacionesTorres.atras = false;}
        
                    if (((app.columnaSeleccionada + i) <= app.COLS - 1) && ((tablero[app.filaSeleccionada][app.columnaSeleccionada + i].idPiesa == 0) || (tablero[app.filaSeleccionada][app.columnaSeleccionada + i].colorPiesa != app.colorPiesaMover)) && app.validacionesTorres.derecha) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                        app.cell = document.getElementById(`${app.filaSeleccionada}${app.columnaSeleccionada + i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada][app.columnaSeleccionada + i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesTorres.derecha = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }else{app.validacionesTorres.derecha = false};

                    if (((app.columnaSeleccionada - i) >= 0) && ((tablero[app.filaSeleccionada][app.columnaSeleccionada - i].idPiesa == 0) || (tablero[app.filaSeleccionada][app.columnaSeleccionada - i].colorPiesa != app.colorPiesaMover)) && app.validacionesTorres.izquierda) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                        app.cell = document.getElementById(`${app.filaSeleccionada}${app.columnaSeleccionada - i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada][app.columnaSeleccionada - i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesTorres.izquierda = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }  
                    }else{app.validacionesTorres.izquierda = false;} 
                }
                
            break;
            //3 es caballo
            case 3:
                app.colorPiesaMover = tablero[fila][columna].colorPiesa;
                console.log(app.colorPiesaMover);
                app.piesaMover = 'caballo';
                //AQUI SI VAN LAS POSIBILIDADES DE LOS CABALLOS.
                if (((app.filaSeleccionada + 2) <= app.ROWS - 1) && ((app.columnaSeleccionada + 1) <= app.COLS - 1) && 
                    ((tablero[app.filaSeleccionada + 2][app.columnaSeleccionada + 1].idPiesa == 0) || 
                    (app.colorPiesaMover != tablero[app.filaSeleccionada + 2][app.columnaSeleccionada + 1].colorPiesa))) {
                        console.log('muevelo a la derecha')
                        app.cell = document.getElementById(`${app.filaSeleccionada + 2}${app.columnaSeleccionada + 1}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + 2][app.columnaSeleccionada + 1].idPiesa != 0) {
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                }

                if (((app.filaSeleccionada + 2) <= app.ROWS - 1) && ((app.columnaSeleccionada - 1) >= 0) && 
                    ((tablero[app.filaSeleccionada + 2][app.columnaSeleccionada - 1].idPiesa == 0) || 
                    (/*esto es asi porque quiero comerme la piesa*/app.colorPiesaMover != tablero[app.filaSeleccionada + 2][app.columnaSeleccionada - 1].colorPiesa))) {
                        console.log('muevelo a la izquierda')
                        app.cell = document.getElementById(`${app.filaSeleccionada + 2}${app.columnaSeleccionada - 1}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + 2][app.columnaSeleccionada - 1].idPiesa != 0) {
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                }

                if (((app.filaSeleccionada - 2) >= 0) && ((app.columnaSeleccionada + 1) <= app.COLS - 1) && 
                    ((tablero[app.filaSeleccionada - 2][app.columnaSeleccionada + 1].idPiesa == 0) || 
                    (app.colorPiesaMover != tablero[app.filaSeleccionada - 2][app.columnaSeleccionada + 1].colorPiesa))) {
                        console.log('muevelo a la derecha')
                        app.cell = document.getElementById(`${app.filaSeleccionada - 2}${app.columnaSeleccionada + 1}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada - 2][app.columnaSeleccionada + 1].idPiesa != 0) {
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                }

                if (((app.filaSeleccionada - 2) >= 0) && ((app.columnaSeleccionada - 1) >= 0) && 
                    ((tablero[app.filaSeleccionada - 2][app.columnaSeleccionada - 1].idPiesa == 0) || 
                    (/*esto es asi porque quiero comerme la piesa*/app.colorPiesaMover != tablero[app.filaSeleccionada - 2][app.columnaSeleccionada - 1].colorPiesa))) {
                        console.log('muevelo a la izquierda')
                        app.cell = document.getElementById(`${app.filaSeleccionada - 2}${app.columnaSeleccionada - 1}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada - 2][app.columnaSeleccionada - 1].idPiesa != 0) {
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                }

                if (((app.filaSeleccionada - 1) >= 0) && ((app.columnaSeleccionada - 2) >= 0) && 
                    ((tablero[app.filaSeleccionada - 1][app.columnaSeleccionada - 2].idPiesa == 0) || 
                    (/*esto es asi porque quiero comerme la piesa*/app.colorPiesaMover != tablero[app.filaSeleccionada - 1][app.columnaSeleccionada - 2].colorPiesa))) {
                        console.log('muevelo a la izquierda')
                        app.cell = document.getElementById(`${app.filaSeleccionada - 1}${app.columnaSeleccionada - 2}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada -1][app.columnaSeleccionada - 2].idPiesa != 0) {
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                }

                if (((app.filaSeleccionada - 1) >= 0) && ((app.columnaSeleccionada + 2) <= app.COLS - 1) && 
                    ((tablero[app.filaSeleccionada - 1][app.columnaSeleccionada + 2].idPiesa == 0) || 
                    (/*esto es asi porque quiero comerme la piesa*/app.colorPiesaMover != tablero[app.filaSeleccionada - 1][app.columnaSeleccionada + 2].colorPiesa))) {
                        console.log('muevelo a la izquierda')
                        app.cell = document.getElementById(`${app.filaSeleccionada - 1}${app.columnaSeleccionada + 2}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada -1][app.columnaSeleccionada + 2].idPiesa != 0) {
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                }

                if (((app.filaSeleccionada + 1) <= app.ROWS - 1) && ((app.columnaSeleccionada - 2) >= 0) && 
                    ((tablero[app.filaSeleccionada + 1][app.columnaSeleccionada - 2].idPiesa == 0) || 
                    (/*esto es asi porque quiero comerme la piesa*/app.colorPiesaMover != tablero[app.filaSeleccionada + 1][app.columnaSeleccionada - 2].colorPiesa))) {
                        console.log('muevelo a la izquierda')
                        app.cell = document.getElementById(`${app.filaSeleccionada + 1}${app.columnaSeleccionada - 2}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada - 2].idPiesa != 0) {
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                }

                if (((app.filaSeleccionada + 1) <= app.ROWS - 1) && ((app.columnaSeleccionada + 2) <= app.COLS - 1) && 
                    ((tablero[app.filaSeleccionada + 1][app.columnaSeleccionada + 2].idPiesa == 0) || 
                    (/*esto es asi porque quiero comerme la piesa*/app.colorPiesaMover != tablero[app.filaSeleccionada + 1][app.columnaSeleccionada + 2].colorPiesa))) {
                        console.log('muevelo a la izquierda')
                        app.cell = document.getElementById(`${app.filaSeleccionada + 1}${app.columnaSeleccionada + 2}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada + 2].idPiesa != 0) {
                            app.cell.removeEventListener('click',seleccionar,false);
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                }
                // if (((app.filaSeleccionada + 2) <= app.ROWS - 1) && ((app.columnaSeleccionada + 1) <= app.COLS - 1) && 
                //     ((app.filaSeleccionada - 2) >= 0) && ((app.columnaSeleccionada - 1) >= 0) && ((app.filaSeleccionada - 1) >= 0)
                //     ((app.columnaSeleccionada - 2) >= 0) && ((app.filaSeleccionada + 1) <= (app.ROWS - 1))
                //     ((app.columnaSeleccionada + 2) <= (app.COLS - 1))) {
                    
                // }
                
            break;
            //4 es alfil
            case 4:
                app.colorPiesaMover = tablero[fila][columna].colorPiesa;
                console.log(app.colorPiesaMover);
                app.piesaMover = 'alfil';
                //creo que es igual que las torres solo que sumando i a ambos lugares tanto columnas como filas.
                for (let i = 1; i < app.ROWS; i++) {
                    
                    if (((app.filaSeleccionada + i) <= app.ROWS - 1) && ((app.columnaSeleccionada + i) <= app.COLS -1)  && ((tablero[app.filaSeleccionada + i][app.columnaSeleccionada + i].idPiesa == 0) || (tablero[app.filaSeleccionada + i][app.columnaSeleccionada + i].colorPiesa != app.colorPiesaMover)) && app.validacionesAlfiles.adelanteDerecha) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                        app.cell = document.getElementById(`${app.filaSeleccionada + i}${app.columnaSeleccionada + i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + i][app.columnaSeleccionada + i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesAlfiles.adelanteDerecha = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    } else{app.validacionesAlfiles.adelanteDerecha = false;}

                    if (((app.filaSeleccionada - i) >= 0) && ((app.columnaSeleccionada + i) <= app.COLS -1) && 
                    ((tablero[app.filaSeleccionada - i][app.columnaSeleccionada + i].idPiesa == 0) || 
                    (tablero[app.filaSeleccionada - i][app.columnaSeleccionada + i].colorPiesa != app.colorPiesaMover)) && app.validacionesAlfiles.atrasDerecha) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                        app.cell = document.getElementById(`${app.filaSeleccionada - i}${app.columnaSeleccionada + i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada - i][app.columnaSeleccionada + i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesAlfiles.atrasDerecha = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }else{app.validacionesAlfiles.atrasDerecha = false;}
        
                    if (((app.filaSeleccionada + i) <= app.ROWS - 1) && ((app.columnaSeleccionada - i) >= 0) && ((tablero[app.filaSeleccionada + i][app.columnaSeleccionada - i].idPiesa == 0) || (tablero[app.filaSeleccionada + i][app.columnaSeleccionada - i].colorPiesa != app.colorPiesaMover)) && app.validacionesAlfiles.adelanteIzquierda) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                        app.cell = document.getElementById(`${app.filaSeleccionada + i}${app.columnaSeleccionada - i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + i][app.columnaSeleccionada - i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesAlfiles.adelanteIzquierda = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }else{app.validacionesAlfiles.adelanteIzquierda = false};

                    if (((app.filaSeleccionada - i) >= 0) && ((app.columnaSeleccionada - i) >= 0) && ((tablero[app.filaSeleccionada - i][app.columnaSeleccionada - i].idPiesa == 0) || (tablero[app.filaSeleccionada - i][app.columnaSeleccionada - i].colorPiesa != app.colorPiesaMover)) && app.validacionesAlfiles.atrasIzquierda) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                        app.cell = document.getElementById(`${app.filaSeleccionada - i}${app.columnaSeleccionada - i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada - i][app.columnaSeleccionada - i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesAlfiles.atrasIzquierda = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }  
                    }else{app.validacionesAlfiles.atrasIzquierda = false;} 
                }
            break;
            //5 es rey
            case 5: 
                app.colorPiesaMover = tablero[fila][columna].colorPiesa;
                console.log(app.colorPiesaMover);
                app.piesaMover = 'rey';

                if (((app.filaSeleccionada + 1) <= app.ROWS - 1) && ((tablero[app.filaSeleccionada + 1][app.columnaSeleccionada].idPiesa == 0) || (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.adelante) {
                    //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                    app.cell = document.getElementById(`${app.filaSeleccionada + 1}${app.columnaSeleccionada}`);
                    app.cell.style.border = 'solid 5px red';
                    app.cell.addEventListener('click',mover,false);
                    if (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada].idPiesa != 0) {
                        app.cell.removeEventListener('click', seleccionar,false);
                        app.validacionesReina.adelante = false;
                        app.cell.removeEventListener('mouseover',overGreen,false);
                        app.cell.removeEventListener('mouseout',outGreen,false);
                    }
                } else{app.validacionesReina.adelante = false;}

                if (((app.filaSeleccionada - 1) >= 0) && ((tablero[app.filaSeleccionada - 1][app.columnaSeleccionada].idPiesa == 0) || (tablero[app.filaSeleccionada - 1][app.columnaSeleccionada].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.atras) {
                    //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                    app.cell = document.getElementById(`${app.filaSeleccionada - 1}${app.columnaSeleccionada}`);
                    app.cell.style.border = 'solid 5px red';
                    app.cell.addEventListener('click',mover,false);
                    if (tablero[app.filaSeleccionada - 1][app.columnaSeleccionada].idPiesa != 0) {
                        app.cell.removeEventListener('click', seleccionar,false);
                        app.validacionesReina.atras = false;
                        app.cell.removeEventListener('mouseover',overGreen,false);
                        app.cell.removeEventListener('mouseout',outGreen,false);
                    }
                }else{app.validacionesReina.atras = false;}
    
                if (((app.columnaSeleccionada + 1) <= app.COLS - 1) && ((tablero[app.filaSeleccionada][app.columnaSeleccionada + 1].idPiesa == 0) || (tablero[app.filaSeleccionada][app.columnaSeleccionada + 1].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.derecha) {
                    //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                    app.cell = document.getElementById(`${app.filaSeleccionada}${app.columnaSeleccionada + 1}`);
                    app.cell.style.border = 'solid 5px red';
                    app.cell.addEventListener('click',mover,false);
                    if (tablero[app.filaSeleccionada][app.columnaSeleccionada + 1].idPiesa != 0) {
                        app.cell.removeEventListener('click', seleccionar,false);
                        app.validacionesReina.derecha = false;
                        app.cell.removeEventListener('mouseover',overGreen,false);
                        app.cell.removeEventListener('mouseout',outGreen,false);
                    }
                }else{app.validacionesReina.derecha = false};

                if (((app.columnaSeleccionada - 1) >= 0) && ((tablero[app.filaSeleccionada][app.columnaSeleccionada - 1].idPiesa == 0) || (tablero[app.filaSeleccionada][app.columnaSeleccionada - 1].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.izquierda) {
                    //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                    app.cell = document.getElementById(`${app.filaSeleccionada}${app.columnaSeleccionada - 1}`);
                    app.cell.style.border = 'solid 5px red';
                    app.cell.addEventListener('click',mover,false);
                    if (tablero[app.filaSeleccionada][app.columnaSeleccionada - 1].idPiesa != 0) {
                        app.cell.removeEventListener('click', seleccionar,false);
                        app.validacionesReina.izquierda = false;
                        app.cell.removeEventListener('mouseover',overGreen,false);
                        app.cell.removeEventListener('mouseout',outGreen,false);
                    }  
                }else{app.validacionesReina.izquierda = false;} 



                if (((app.filaSeleccionada + 1) <= app.ROWS - 1) && ((app.columnaSeleccionada + 1) <= app.COLS -1)  && ((tablero[app.filaSeleccionada + 1][app.columnaSeleccionada + 1].idPiesa == 0) || 
                (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada + 1].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.adelanteDerecha) {
                //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                    app.cell = document.getElementById(`${app.filaSeleccionada + 1}${app.columnaSeleccionada + 1}`);
                    app.cell.style.border = 'solid 5px red';
                    app.cell.addEventListener('click',mover,false);
                    if (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada + 1].idPiesa != 0) {
                        app.cell.removeEventListener('click', seleccionar,false);
                        app.validacionesReina.adelanteDerecha = false;
                        app.cell.removeEventListener('mouseover',overGreen,false);
                        app.cell.removeEventListener('mouseout',outGreen,false);
                    }
                } else{app.validacionesReina.adelanteDerecha = false;}

                if (((app.filaSeleccionada - 1) >= 0) && ((app.columnaSeleccionada + 1) <= app.COLS -1) && 
                ((tablero[app.filaSeleccionada - 1][app.columnaSeleccionada + 1].idPiesa == 0) || 
                (tablero[app.filaSeleccionada - 1][app.columnaSeleccionada + 1].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.atrasDerecha) {
                    //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                    app.cell = document.getElementById(`${app.filaSeleccionada - 1}${app.columnaSeleccionada + 1}`);
                    app.cell.style.border = 'solid 5px red';
                    app.cell.addEventListener('click',mover,false);
                    if (tablero[app.filaSeleccionada - 1][app.columnaSeleccionada + 1].idPiesa != 0) {
                        app.cell.removeEventListener('click', seleccionar,false);
                        app.validacionesReina.atrasDerecha = false;
                        app.cell.removeEventListener('mouseover',overGreen,false);
                        app.cell.removeEventListener('mouseout',outGreen,false);
                    }
                }else{app.validacionesReina.atrasDerecha = false;}
    
                if (((app.filaSeleccionada + 1) <= app.ROWS - 1) && ((app.columnaSeleccionada - 1) >= 0) && ((tablero[app.filaSeleccionada + 1][app.columnaSeleccionada - 1].idPiesa == 0) || (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada - 1].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.adelanteIzquierda) {
                    //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                    app.cell = document.getElementById(`${app.filaSeleccionada + 1}${app.columnaSeleccionada - 1}`);
                    app.cell.style.border = 'solid 5px red';
                    app.cell.addEventListener('click',mover,false);
                    if (tablero[app.filaSeleccionada + 1][app.columnaSeleccionada - 1].idPiesa != 0) {
                        app.cell.removeEventListener('click', seleccionar,false);
                        app.validacionesReina.adelanteIzquierda = false;
                        app.cell.removeEventListener('mouseover',overGreen,false);
                        app.cell.removeEventListener('mouseout',outGreen,false);
                    }
                }else{app.validacionesReina.adelanteIzquierda = false};

                if (((app.filaSeleccionada - 1) >= 0) && ((app.columnaSeleccionada - 1) >= 0) && ((tablero[app.filaSeleccionada - 1][app.columnaSeleccionada - 1].idPiesa == 0) || (tablero[app.filaSeleccionada - 1][app.columnaSeleccionada - 1].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.atrasIzquierda) {
                    //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                    app.cell = document.getElementById(`${app.filaSeleccionada - 1}${app.columnaSeleccionada - 1}`);
                    app.cell.style.border = 'solid 5px red';
                    app.cell.addEventListener('click',mover,false);
                    if (tablero[app.filaSeleccionada - 1][app.columnaSeleccionada - 1].idPiesa != 0) {
                        app.cell.removeEventListener('click', seleccionar,false);
                        app.validacionesReina.atrasIzquierda = false;
                        app.cell.removeEventListener('mouseover',overGreen,false);
                        app.cell.removeEventListener('mouseout',outGreen,false);
                    }  
                }else{app.validacionesReina.atrasIzquierda = false;}
            break;
            //6 es reina.
            case 6:
                app.colorPiesaMover = tablero[fila][columna].colorPiesa;
                console.log(app.colorPiesaMover);
                app.piesaMover = 'reina';

                for (let i = 1; i < app.ROWS; i++) {
                    
                    if (((app.filaSeleccionada + i) <= app.ROWS - 1) && ((tablero[app.filaSeleccionada + i][app.columnaSeleccionada].idPiesa == 0) || (tablero[app.filaSeleccionada + i][app.columnaSeleccionada].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.adelante) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                        app.cell = document.getElementById(`${app.filaSeleccionada + i}${app.columnaSeleccionada}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + i][app.columnaSeleccionada].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesReina.adelante = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    } else{app.validacionesReina.adelante = false;}

                    if (((app.filaSeleccionada - i) >= 0) && ((tablero[app.filaSeleccionada - i][app.columnaSeleccionada].idPiesa == 0) || (tablero[app.filaSeleccionada - i][app.columnaSeleccionada].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.atras) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                        app.cell = document.getElementById(`${app.filaSeleccionada - i}${app.columnaSeleccionada}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada - i][app.columnaSeleccionada].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesReina.atras = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }else{app.validacionesReina.atras = false;}
        
                    if (((app.columnaSeleccionada + i) <= app.COLS - 1) && ((tablero[app.filaSeleccionada][app.columnaSeleccionada + i].idPiesa == 0) || (tablero[app.filaSeleccionada][app.columnaSeleccionada + i].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.derecha) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                        app.cell = document.getElementById(`${app.filaSeleccionada}${app.columnaSeleccionada + i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada][app.columnaSeleccionada + i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesReina.derecha = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }else{app.validacionesReina.derecha = false};

                    if (((app.columnaSeleccionada - i) >= 0) && ((tablero[app.filaSeleccionada][app.columnaSeleccionada - i].idPiesa == 0) || (tablero[app.filaSeleccionada][app.columnaSeleccionada - i].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.izquierda) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                        app.cell = document.getElementById(`${app.filaSeleccionada}${app.columnaSeleccionada - i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada][app.columnaSeleccionada - i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesReina.izquierda = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }  
                    }else{app.validacionesReina.izquierda = false;} 



                    if (((app.filaSeleccionada + i) <= app.ROWS - 1) && ((app.columnaSeleccionada + i) <= app.COLS -1)  && ((tablero[app.filaSeleccionada + i][app.columnaSeleccionada + i].idPiesa == 0) || 
                    (tablero[app.filaSeleccionada + i][app.columnaSeleccionada + i].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.adelanteDerecha) {
                    //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                        app.cell = document.getElementById(`${app.filaSeleccionada + i}${app.columnaSeleccionada + i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + i][app.columnaSeleccionada + i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesReina.adelanteDerecha = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    } else{app.validacionesReina.adelanteDerecha = false;}

                    if (((app.filaSeleccionada - i) >= 0) && ((app.columnaSeleccionada + i) <= app.COLS -1) && 
                    ((tablero[app.filaSeleccionada - i][app.columnaSeleccionada + i].idPiesa == 0) || 
                    (tablero[app.filaSeleccionada - i][app.columnaSeleccionada + i].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.atrasDerecha) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                        app.cell = document.getElementById(`${app.filaSeleccionada - i}${app.columnaSeleccionada + i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada - i][app.columnaSeleccionada + i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesReina.atrasDerecha = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }else{app.validacionesReina.atrasDerecha = false;}
        
                    if (((app.filaSeleccionada + i) <= app.ROWS - 1) && ((app.columnaSeleccionada - i) >= 0) && ((tablero[app.filaSeleccionada + i][app.columnaSeleccionada - i].idPiesa == 0) || (tablero[app.filaSeleccionada + i][app.columnaSeleccionada - i].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.adelanteIzquierda) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe. 
                        app.cell = document.getElementById(`${app.filaSeleccionada + i}${app.columnaSeleccionada - i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada + i][app.columnaSeleccionada - i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesReina.adelanteIzquierda = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }
                    }else{app.validacionesReina.adelanteIzquierda = false};

                    if (((app.filaSeleccionada - i) >= 0) && ((app.columnaSeleccionada - i) >= 0) && ((tablero[app.filaSeleccionada - i][app.columnaSeleccionada - i].idPiesa == 0) || (tablero[app.filaSeleccionada - i][app.columnaSeleccionada - i].colorPiesa != app.colorPiesaMover)) && app.validacionesReina.atrasIzquierda) {
                        //condicionamos el avence recto, es decir, no puede avanzar si la siguiente casilla no existe.
                        app.cell = document.getElementById(`${app.filaSeleccionada - i}${app.columnaSeleccionada - i}`);
                        app.cell.style.border = 'solid 5px red';
                        app.cell.addEventListener('click',mover,false);
                        if (tablero[app.filaSeleccionada - i][app.columnaSeleccionada - i].idPiesa != 0) {
                            app.cell.removeEventListener('click', seleccionar,false);
                            app.validacionesReina.atrasIzquierda = false;
                            app.cell.removeEventListener('mouseover',overGreen,false);
                            app.cell.removeEventListener('mouseout',outGreen,false);
                        }  
                    }else{app.validacionesReina.atrasIzquierda = false;}
                }
            break;
        }                                                                                                          
              
    }
    function mover(e){
        var fila = e.target.id.slice(0,1);
        var columna = e.target.id.slice(1);
        app.seleccionarActivo = true;
        // app.filaPiesaComida = fila;
        // app.columnaPiesaComida = columna;
        if (tablero[fila][columna].idPiesa != 0) {
            app.colorPiesaComida = tablero[fila][columna].colorPiesa;
        }else{
            app.colorPiesaComida = undefined;
        }
        app.nombrePiesaComida = tablero[fila][columna].mensajeProvisorio;

        
        console.log(fila);
        console.log(columna);
        switch (app.piesaMover) {
            case 'caballo':  
                //TODOS LOS MOVIMIENTOS DE LOS CABALLOS BLANCOSS FUERON REALIZADOS CON EXITO.  
                if (app.colorPiesaMover) {
                    console.log('caballo blanco')
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('caballo',true);
                }else{
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('caballo',false);
                }
            break;
            case 'peon':
                if (app.colorPiesaMover) {
                    console.log('caballo blanco')
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('peon',true);
                }else{
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('peon',false);
                }
            break;
            case 'torre': 
                //PRIMERO DETERMINAMOS SI LA TORRE QUE HAY QUE CREAR ES NEGRA O ES BLANCA
                if (app.colorPiesaMover) {
                    console.log('caballo blanco')
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('torre',true);
                }else {
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('torre',false);
                }
            break;
            case 'alfil':
                if (app.colorPiesaMover) {
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('alfil',true);
                }else{
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('alfil',false);
                }
            break;
            case 'reina':
                if (app.colorPiesaMover) {
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('reina',true);
                }else{
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('reina',false);
                }
            break;
            case 'rey':
                if (app.colorPiesaMover) {
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('rey',true);
                }else{
                    tablero[app.filaSeleccionada][app.columnaSeleccionada] = CrearPiesas.factory('vacio'); 
                    tablero[fila][columna] = CrearPiesas.factory('rey',false);
                }
            break;
        }
        //quitar la escucha de las pisas anteriores
        quitarEscucha();
        app.determinaTurno = !app.determinaTurno;
    }
    function quitarEscucha(){
        for (let i = 0; i < app.ROWS; i++) {
            for (let x = 0; x < app.COLS; x++) {
                app.cell = document.getElementById(`${i}${x}`);
                if (app.cell != undefined) {
                    app.cell.style.border = 'solid 1px black';
                    app.cell.style.background = 'none';
                    app.cell.removeEventListener('click',mover,false);
                    app.cell.removeEventListener('click',seleccionar,false);
                }
            }
        }
    }
    function crearMapa(){
        for (let i = 0; i < app.ROWS; i++) {
            for (let x = 0; x < app.COLS; x++) {
                if (i == 0) {
                    switch (x) {
                        case 0: tablero[i][x] = CrearPiesas.factory('torre',true); break;
                        case 7: tablero[i][x] = CrearPiesas.factory('torre',true); break;
                        case 1: tablero[i][x] = CrearPiesas.factory('caballo',true); break;
                        case 6: tablero[i][x] = CrearPiesas.factory('caballo',true); break;
                        case 2: tablero[i][x] = CrearPiesas.factory('alfil',true); break;
                        case 5: tablero[i][x] = CrearPiesas.factory('alfil',true); break;
                        case 3: tablero[i][x] = CrearPiesas.factory('rey',true); break;
                        case 4: tablero[i][x] = CrearPiesas.factory('reina',true); break;
                    }
                }
                if (i == 7) {
                    switch (x) {
                        case 0: tablero[i][x] = CrearPiesas.factory('torre',false); break;
                        case 7: tablero[i][x] = CrearPiesas.factory('torre',false); break;
                        case 1: tablero[i][x] = CrearPiesas.factory('caballo',false); break;
                        case 6: tablero[i][x] = CrearPiesas.factory('caballo',false); break;
                        case 2: tablero[i][x] = CrearPiesas.factory('alfil',false); break;
                        case 5: tablero[i][x] = CrearPiesas.factory('alfil',false); break;
                        case 3: tablero[i][x] = CrearPiesas.factory('reina',false); break;
                        case 4: tablero[i][x] = CrearPiesas.factory('rey',false); break;
                    }
                }
                if (i == 1) {
                    tablero[i][x] = CrearPiesas.factory('peon',true);
                }
                if (i == 6) {
                    tablero[i][x] = CrearPiesas.factory('peon',false);
                }
                if ((i != 0) && (i != 1) && (i != 7) && (i != 6)) {
                    tablero[i][x] = CrearPiesas.factory('vacio');
                }
            }
        }
    }
    function recolectarId(e){
        console.log(e.target.id);
        seleccionarPiesa.style.display = 'none';
        let piesaQueCrearemos = e.target.id;
        if (tablero[filaDePiesaCambio][columnaDePiesaCambio].colorPiesa) {
            tablero[filaDePiesaCambio][columnaDePiesaCambio] = CrearPiesas.factory(piesaQueCrearemos, true);
        }else{
            tablero[filaDePiesaCambio][columnaDePiesaCambio] = CrearPiesas.factory(piesaQueCrearemos, false);
        }
    }
    return {
        getMap(){
            crearMapa();
        },
        getRecolectarId(e){
            recolectarId(e);
        },
        tiempo(){

            render()
            frame(juego.tiempo)
        }
    }
})();
//FUNCIONALIDAD QUE APARECE CUANDO UN PEON LLEGA AL 
//OTRO EXTREMO ESTAS SON LOS DIV QUE QUEDAN A LA ESCUCHA
//DE LA SELECCION DE LA PIEZA A CAMBIAR.
piesasDeCambioPorPeon.caballo.addEventListener('click', juego.getRecolectarId, false);
piesasDeCambioPorPeon.torre.addEventListener('click', juego.getRecolectarId, false);
piesasDeCambioPorPeon.alfil.addEventListener('click', juego.getRecolectarId, false);
piesasDeCambioPorPeon.reina.addEventListener('click', juego.getRecolectarId, false);
juego.getMap();
juego.tiempo();