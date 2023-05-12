
//arreglar el keypress

let flechasEnElAire=[];
let bolasEnElAire=[];

document.addEventListener("keydown", (event) => {gameLoop(event.key);});

const jugador1=new Jugador();

//crear bolas

setInterval(()=>{
    let bola=new Bola();
    bolasEnElAire.push(bola);
},1000)

function procesar_entrada_usuario(tecla) {
    // console.log(tecla);
    switch (tecla){
        
        case "ArrowLeft":
            jugador1.retroceder();
            break;
        
        case "ArrowRight":
            jugador1.avanzar();
            break;

            case "ArrowUp":
            jugador1.saltar();
            break;

        case " ":
            jugador1.disparar();
            break;
        
        case "Escape":
            // in_game=false;
            //pausar;
    
        }
        tecla="";
}


function actualizar_estado() {
    // actualizar estado
}

function renderizar() {
    jugador1.dibujar();
    for (let flecha of flechasEnElAire){
        flecha.dibujar();
    
    }
    for (let bola of bolasEnElAire){
        bola.dibujar();

    }
}

let in_game = true;
function gameLoop(tecla) {
    procesar_entrada_usuario(tecla);
    actualizar_estado();
    renderizar();

    if (in_game) {
        requestAnimationFrame(gameLoop);
    }
}

gameLoop();