function presentacion(){
    const div=document.querySelector('#presentacion');

    //si la pagina se llama recursivamente no se muestra la pantalla de presentacion
    let parametro = localStorage.getItem("recarga");
    if (parametro=="true"){
        localStorage.setItem("recarga", "false");
        pasarABienvenida();
    }    
    div.addEventListener('click',pasarABienvenida);

    function pasarABienvenida(){
        div.style="display:none;";
        document.querySelector('#bolaPresentacion').style="display:none;";
        bienvenida();
    }
}


function bienvenida(){
        audio=new Audio();
        document.querySelector('#bienvenida').classList.remove('invisible');
        document.querySelector('#Katt').addEventListener('click',()=>{inicializar1(0)});
        document.querySelector('#Matt').addEventListener('click',()=>inicializar1(1));
        document.querySelector('#MattYKattDiv').addEventListener('click',()=>inicializar2(0,1));
        document.querySelector('#KattYMattDiv').addEventListener('click',()=>inicializar2(1,0));
        document.querySelector('#verControles').addEventListener('click',verControles);

        let todos=document.querySelectorAll('.botoneable');
    
        todos.forEach((btn)=>btn.addEventListener('mouseover',()=>{
        audio.tocar('revote.ogg');}));
        
    }

function inicializar(){
    document.querySelector('#bienvenida').classList.add('invisible')        ;
    audio.tocar('moneda.ogg')
    audio.cambiar('musique.mp3',true);
    
    document.querySelector('#audioBtn').classList.remove('invisible');
    document.querySelector('#hud0').classList.remove('invisible');
    document.addEventListener("keydown", (event) => {teclado(event)});
    document.addEventListener("keyup", (event) => {tecla[event.code]=false;});
    
    new Estrella();
    escena(nivel);
}

function inicializar1(personaje){
    new Jugador(personaje);
    inicializar();
}

function inicializar2(personaje1, personaje2){
    new Jugador(personaje1);
    new Jugador(personaje2);
    inicializar();
}

let reloj;
function escena(dificultad){
    clearTimeout(reloj)
    reloj=setInterval(()=>{
        if (in_game){
            const azar=Math.floor(Math.random()*COFRE_ENTRE);    
            (azar>0)? new Bola():new Cofre((Math.random()*COFRE_MAXIMO)+COFRE_MINIMO);
        }   
    },Math.floor((Math.random()*APARICION-dificultad*INDICE_DIFICULTAD)+APARICION_UMBRAL-dificultad*INDICE_DIFICULTAD));
    in_game=true;
    new Llegada(BANDERA_CADA);
    gameLoop();
}


function verControles(){
    const controles= document.querySelector('#controles');
    controles.classList.remove('invisible');
    setTimeout(() => {
        controles.style="animation: aparecer 3s; "
        setTimeout(() => {
            controles.classList.add('invisible');        
            controles.style="animation: none;"
        }, 3000);
    }, 5000);
}


function teclado(event){
    tecla[event.code]=true;

    if (event.key=="p") {
        
        if (in_game) {
            in_game=false; 
            document.querySelector('#todo').style="animation: jugadorMuerto 3s linear forwards; ";
            infoDiv.innerHTML="Pausa";
            infoDiv.classList.remove('invisible');
            audio.cambiar('pausa2.ogg',true);
            
        }else {
            if (jugadoresEnJuego[0].vidas>0){
                document.querySelector('#todo').style="animation: jugadorVivo 1s linear; ";
                infoDiv.classList.add('invisible');
                in_game=true;
                audio.cambiar('musique.mp3',true);
                gameLoop();
            }
        }
    }
};
