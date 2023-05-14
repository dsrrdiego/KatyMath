function bienvenida(){
    console.log('hola');
    document.querySelector('#play').addEventListener('click',()=>{
        document.querySelector('#bienvenida').classList.add('invisible')        ;
        // in_game=true;
        gameLoop();

    });
    
}