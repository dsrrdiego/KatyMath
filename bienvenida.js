function bienvenida(){
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

    setInterval(()=>{
        const azar=Math.floor(Math.random()*6);    
        (azar>2)? new Bola():new Cofre((Math.random()*3000)+500);
    },Math.floor((Math.random()*5000)+3000));
    new Llegada(5000);
    
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