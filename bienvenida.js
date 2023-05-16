function bienvenida(){
    console.log('hola');
    document.querySelector('#Katt').addEventListener('click',()=>{inicializar(0)});
    document.querySelector('#Matt').addEventListener('click',()=>inicializar(1));
    document.querySelector('#MattYKattDiv').addEventListener('click',()=>inicializar(0,1));
    document.querySelector('#KattYMattDiv').addEventListener('click',()=>inicializar(1,0));
    
}
function inicializar(primero, segundo){
    document.querySelector('#bienvenida').classList.add('invisible')        ;
    audio=new Audio();
    new Jugador(primero);
    gameLoop();


    
}