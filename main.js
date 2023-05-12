// let tecla;
document.addEventListener("keydown", (event) => {gameLoop(event.key);});

const jugador1=new Jugador();


function procesar_entrada_usuario(tecla) {
    // console.log(tecla);
    switch (tecla){
        
        case "ArrowLeft":
            jugador1.x--;
            
            break;
            
            case "ArrowRight":
                jugador1.x+=3;
                break;
            case "ArrowUp":
                jugador1.saltar();
            break;

            case " ":
                jugador1.disparar();
                break;
            
                case "Escape":
                    // in_game=false;
                    //pausar;
        
        }
        tecla="";
}


function actualizar_estado() {
    // actualizar estado
}

function renderizar() {
    jugador1.dibujar();
}

let in_game = true;
function gameLoop(tecla) {
    procesar_entrada_usuario(tecla);
    actualizar_estado();
    renderizar();

    if (in_game) {
        requestAnimationFrame(gameLoop);
    }
}

gameLoop();