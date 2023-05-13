
let tecla={
    ArrowLeft:false,
    ArrowRight:false,
    ArrowUp:false,
    Space:false
};
let flechasEnElAire=[];
let bolasEnElAire=[];
let charcosEnElSuelo=[];
let jugadoresEnJuego=[];
const infoDiv=document.querySelector('#infoDiv')

document.addEventListener("keydown", (event) => {tecla[event.code]=true;

if (event.key=="x") new Bola();

if (event.key=="p") {
    
    if (in_game) {
        in_game=false; 
        infoDiv.innerHTML="Pausado";
        infoDiv.classList.remove('invisible');
        
    }else {
        infoDiv.classList.add('invisible');
        in_game=true;
        gameLoop();
    }
}
});
document.addEventListener("keyup", (event) => {tecla[event.code]=false;});


const jugador1=new Jugador();


//crear bolas
// setInterval(()=>new Bola(),10000);
new Bola();
new Cofre(bolasEnElAire[0])


function procesar_entrada_usuario() {
    // console.log(tecla);
    if (tecla.ArrowLeft) jugador1.retroceder();
    if (tecla.ArrowRight) jugador1.avanzar();
    if (tecla.ArrowUp){
         jugador1.saltar();
        //  tecla.ArrowUp=false;
    }
    if (tecla.Space){
        jugador1.disparar();
        tecla.Space=false;       
    } 
}


function actualizar_estado() {
    jugadoresEnJuego.forEach((jugador)=>jugador.actualizar());
    bolasEnElAire.forEach((bola)=>bola.actualizar());
    flechasEnElAire.forEach((flecha)=>flecha.actualizar());
    charcosEnElSuelo.forEach((charco)=>charco.actualizar());
}

function renderizar() {
    jugadoresEnJuego.forEach((jugador)=>jugador.dibujar())
    flechasEnElAire.forEach((flecha)=>flecha.dibujar());
    bolasEnElAire.forEach((bola)=>bola.dibujar());
    charcosEnElSuelo.forEach((charco)=>charco.dibujar());
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