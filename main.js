
let tecla={
    ArrowLeft:false,
    ArrowRight:false,
    ArrowUp:false,
    Space:false,

    KeyA:false,
    KeyD:false,
    KeyW:false,
    ControlLeft:false
};
let flechasEnElAire=[];
let bolasEnElAire=[];
let cosasEnElPiso=[];
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
const jugador2=new Jugador();

//crear bolas
setInterval(()=>{
    const azar=Math.floor(Math.random()*5);    
    (azar>1)? new Bola():new Cofre((Math.random()*3000)+500);
},Math.floor((Math.random()*5000)+1000));
new Llegada(3000);


function procesar_entrada_usuario() {
    jugadoresEnJuego.forEach((jugador)=>jugador.procesarEntrada());

    
}


function actualizar_estado() {
    jugadoresEnJuego.forEach((jugador)=>jugador.actualizar());
    bolasEnElAire.forEach((bola)=>bola.actualizar());
    flechasEnElAire.forEach((flecha)=>flecha.actualizar());
    cosasEnElPiso.forEach((charco)=>charco.actualizar());
}

function renderizar() {
    jugadoresEnJuego.forEach((jugador)=>jugador.dibujar())
    flechasEnElAire.forEach((flecha)=>flecha.dibujar());
    bolasEnElAire.forEach((bola)=>bola.dibujar());
    cosasEnElPiso.forEach((charco)=>charco.dibujar());
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