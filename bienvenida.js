function bienvenida(){
    console.log('hola');
    document.querySelector('#Katt').addEventListener('click',()=>{
        document.querySelector('#bienvenida').classList.add('invisible')        ;
        // in_game=true;
        audio=new Audio();

    // const j2=document.querySelector('#jugador2');
    document.body.removeChild(jugador2);

        gameLoop();

    });
    
}