function bienvenida(){

    // const urlParams = new URLSearchParams(window.location.search);
    // const arg = urlParams.get('argumento');
    // console.log("ar:"+arg);
    // if (arg==null){


        
        document.querySelector('#Katt').addEventListener('click',()=>{inicializar1(0)});
        document.querySelector('#Matt').addEventListener('click',()=>inicializar1(1));
        document.querySelector('#MattYKattDiv').addEventListener('click',()=>inicializar2(0,1));
        document.querySelector('#KattYMattDiv').addEventListener('click',()=>inicializar2(1,0));
        document.querySelector('#verControles').addEventListener('click',verControles);
    // }else{
    //     document.querySelector('#bienvenida').classList.add('invisible')        ;
    //     console.log('enpp');
        
    //     dificultad=arg;
    //     inicializar1(0);
    //     // in_game=true;
    //     // gameLoop()
    // }

}
function inicializar(){

    // Obtén los parámetros de consulta de la URL

    // Verifica si el argumento está presente en los parámetros de consulta
    // if (urlParams.has('argumento')) {
  // Obtiene el valor del argumento
    

// }



    document.querySelector('#bienvenida').classList.add('invisible')        ;
    audio=new Audio();
    document.querySelector('#audioBtn').classList.remove('invisible');
    document.querySelector('#hud0').classList.remove('invisible');


    document.addEventListener("keydown", (event) => {tecla[event.code]=true;

        if (event.key=="x") new Bola();
        if (event.key=="c") new Cofre(500);
        if (event.key=="q") audio=new Audio();
        if (event.key=="p") {
            
            if (in_game) {
                in_game=false; 
                document.querySelector('#todo').style="animation: jugadorMuerto 3s linear forwards; ";
                infoDiv.innerHTML="Pausa";
                infoDiv.classList.remove('invisible');
                audio.cambiar('pausa2.ogg',true);
                
            }else {
                document.querySelector('#todo').style="animation: jugadorVivo 1s linear; ";
                
    
    
                infoDiv.classList.add('invisible');
                in_game=true;
                audio.cambiar('musique.mp3',true);
    
                gameLoop();
            }
        }
    });
    document.addEventListener("keyup", (event) => {tecla[event.code]=false;});
    


    
    
    new Cofre(500);
    new Estrella();
    
    escena(nivel);
    // gameLoop();
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
        const azar=Math.floor(Math.random()*6);    
        (azar>2)? new Bola():new Cofre((Math.random()*3000)+500);
    }   
},Math.floor((Math.random()*5000-dificultad*200)+3000-dificultad*200));

in_game=true;
new Llegada(3000);
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