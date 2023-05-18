"use strict"


//CONFIGURACION DEL JUEGO
let nivel=1; //nivel inicial de dificultad
const BANDERA_CADA=3000; // cada cuantos pixeles aparecera la bandera de pasar de nivel
const COFRE_EN=1000; //pixeles en que aparecerà el cofre
const COFRE_A_PARTIR_DE= 1000; 
const VIDAS_INICIAL=3;
const FLECHAS_INICIAL=5;
const FLECHAS_POR_COFRE=5;
const APARICION =5000; //aparecen objetos al azar cada ms
let LIMITE_X = window.innerWidth;
const LIMITE_Y=520; //horizonte en pixeles



let tecla={};
let flechasEnElAire=[];
let bolasEnElAire=[];
let cosasEnElPiso=[];
let jugadoresEnJuego=[];
let figuraIndicadoraEnElAire=[];
const infoDiv=document.querySelector('#infoDiv')
let in_game = true;
let audio;



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

presentacion();

