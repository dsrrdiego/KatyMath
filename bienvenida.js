function bienvenida(){
    document.querySelector('#bienvenida').classList.remove('invisible')        ;

    document.querySelector('#Katt').addEventListener('click',()=>{inicializar1(0)});
    document.querySelector('#Matt').addEventListener('click',()=>inicializar1(1));
    document.querySelector('#MattYKattDiv').addEventListener('click',()=>inicializar2(0,1));
    document.querySelector('#KattYMattDiv').addEventListener('click',()=>inicializar2(1,0));
    
}
function inicializar(){
    document.querySelector('#bienvenida').classList.add('invisible')        ;
    audio=new Audio();
    document.querySelector('#audioBtn').classList.remove('invisible');
    document.querySelector('#hud0').classList.remove('invisible');


    document.addEventListener("keydown", (event) => {tecla[event.code]=true;

        if (event.key=="x") new Bola();
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
    


    setInterval(()=>{
        if (in_game){
            const azar=Math.floor(Math.random()*6);    
            (azar>2)? new Bola():new Cofre((Math.random()*3000)+500);
        }   
    },Math.floor((Math.random()*5000)+3000));
    
    new Llegada(1000);
    
    new Cofre(500);
    new Estrella();
    

    gameLoop();
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