"use strict"

const LIMITE_Y=400; //horizonte
const LIMITE_X=955;
let tecla={};
let flechasEnElAire=[];
let bolasEnElAire=[];
let cosasEnElPiso=[];
let jugadoresEnJuego=[];
let figuraIndicadoraEnElAire=[];
const infoDiv=document.querySelector('#infoDiv')
let in_game = true;

// const audio=new Audio();
let audio;


document.addEventListener("keydown", (event) => {tecla[event.code]=true;

    if (event.key=="x") new Bola();
    if (event.key=="q") audio=new Audio();
    if (event.key=="p") {
        
        if (in_game) {
            in_game=false; 
            infoDiv.innerHTML="Pausado";
            infoDiv.classList.remove('invisible');
            audio.cambiar('pausa2.ogg',true);
            
        }else {
            infoDiv.classList.add('invisible');
            in_game=true;
            audio.cambiar('musique.mp3',true);

            gameLoop();
        }
    }
});
document.addEventListener("keyup", (event) => {tecla[event.code]=false;});


//crear bolas


function procesar_entrada_usuario() {
    jugadoresEnJuego.forEach((jugador)=>jugador.procesarEntrada());

    
}


function actualizar_estado() {
    jugadoresEnJuego.forEach((jugador)=>jugador.actualizar());
    bolasEnElAire.forEach((bola)=>bola.actualizar());
    flechasEnElAire.forEach((flecha)=>flecha.actualizar());
    cosasEnElPiso.forEach((charco)=>charco.actualizar());
    figuraIndicadoraEnElAire.forEach((figura)=>figura.actualizar());

}

function renderizar() {
    jugadoresEnJuego.forEach((jugador)=>jugador.dibujar())
    flechasEnElAire.forEach((flecha)=>flecha.dibujar());
    bolasEnElAire.forEach((bola)=>bola.dibujar());
    cosasEnElPiso.forEach((charco)=>charco.dibujar());
    figuraIndicadoraEnElAire.forEach((figura)=>figura.dibujar());
}

function gameLoop() {
    procesar_entrada_usuario();
    actualizar_estado();
    renderizar();

    if (in_game) {
        requestAnimationFrame(gameLoop);
    }
}

bienvenida();