
//arreglar el keypress


let piso = document.getElementById("jugador1");
let pisoDatos = piso.getBoundingClientRect();
let pisoTop = pisoDatos.top;
let pisoBottom=pisoDatos.bottom;

console.log(pisoTop); // Muestra el valor de 'left' en píxeles en la consola
console.log(pisoBottom); // Muestra el valor de 'left' en píxeles en la consola


let tecla;
let flechasEnElAire=[];
let bolasEnElAire=[];
document.addEventListener("keydown", (event) => {tecla=event.key;});

const jugador1=new Jugador();


//crear bolas
setInterval(()=>new Bola(),10000);
new Bola();


function procesar_entrada_usuario() {
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
    for (let bola of bolasEnElAire){
        bola.actualizar();

    }
    for (let flecha of flechasEnElAire){
        flecha.actualizar();
    
    }
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
function gameLoop() {
    procesar_entrada_usuario();
    actualizar_estado();
    renderizar();

    if (in_game) {
        requestAnimationFrame(gameLoop);
    }
}

gameLoop();