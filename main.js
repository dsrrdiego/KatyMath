"use strict"

//CONFIGURACION DEL JUEGO
let nivel=1; //nivel inicial de dificultad
const BANDERA_CADA=3000; // cada cuantos pixeles aparecera la bandera de pasar de nivel
const COFRE_EN=1000; //pixeles en que aparecerà el cofre
const COFRE_A_PARTIR_DE= 1000; 
const FLECHAS_POR_COFRE=3;
const VIDAS_INICIAL=1;


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