//CONFIGURACION DEL JUEGO
let nivel=1; //nivel inicial de dificultad
const BANDERA_CADA=3000; // cada cuantos pixeles aparecera la bandera de pasar de nivel

const APARICION =9000; //Mamimo tiempo en aparecer objetos al azar cada ms
const APARICION_UMBRAL=4000; // minimo de tiempo .. ms

const BOLA_MAX=80; // Tamaño del radio de la bola
const BOLA_MIN=40; // Tamaño del mínimo
const REDUCCION_BOLA=0.55; //porcentaje en que se van reduciendo tiro a tiro
const ENCHARQUE=20; //radio en el que se convierte en charco

const COFRE_MAXIMO=2000; //pixeles en que aparecerà el cofre
const COFRE_MINIMO= 1000;  //pixeles horizontales
const COFRE_ENTRE=3;  // cada 2 bolas se sortea un cofre


const VIDAS_INICIAL=1;
const PUNTOS_INICIAL=10000;
const FLECHAS_INICIAL=15;
const FLECHAS_POR_COFRE=5;

const INDICE_DIFICULTAD=200; // baja el tiempo de apariciones en x ms por nivel
const VELOCIDAD_DIFICULTAD=0.05; // incremento de como transurre el escroll x nivel a nivel;


//pantalla
let LIMITE_X = window.innerWidth;  //el ancho disponible al momento de cargar el juego, no se readapta (todavia)
const LIMITE_Y=520; //horizonte en pixeles    #En esta linea se desarrolla el juego

//jugador
const ALTURA_SALTO=8;
const VELOCIDAD_X=10;  //pixeles a la derecha 
const VELOCIDAD_RETROCESO=10; //pixeles a la izquierda
