

let tecla={
    ArrowLeft:false,
    ArrowRight:false,
    ArrowUp:false,
    Space:false
};
let flechasEnElAire=[];
let bolasEnElAire=[];
document.addEventListener("keydown", (event) => {tecla[event.code]=true;

if (event.key=="x") new Bola();
});
document.addEventListener("keyup", (event) => {tecla[event.code]=false;});


const jugador1=new Jugador();


//crear bolas
// setInterval(()=>new Bola(),10000);
new Bola();


function procesar_entrada_usuario() {
    // console.log(tecla);
    if (tecla.ArrowLeft) jugador1.retroceder();
    if (tecla.ArrowRight) jugador1.avanzar();
    if (tecla.ArrowUp) jugador1.saltar();
    if (tecla.Space) jugador1.disparar();
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