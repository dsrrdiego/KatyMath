let tecla;
document.addEventListener("keydown", (event) => {tecla=event.key;});

const jugador1={
    div:document.querySelector('#jugador1'),
    x:50,
    inicializar: function(){
        this.div.classList.add('caminar');
    },
    saltar:function(){
        console.log('salto');
        
        this.div.classList.remove('caminar');
        this.div.classList.add('saltar');
        setTimeout(()=>{
            console.log('volvio');
            
            this.div.classList.remove('saltar');
            this.div.classList.add('caminar');
        },1000)


    },
    dibujar:function (){
        this.div.style="left:"+this.x+"px;";
    }
}

jugador1.inicializar();


function procesar_entrada_usuario() {
    switch (tecla){
        case "ArrowLeft":
            jugador1.x--;
            
            break;
            
            case "ArrowRight":
                jugador1.x+=3;
                break;
                case "ArrowUp":
                    jugador1.saltar();
                    // jugador1.imagen='saltar';
                // this.div.style=`background: url('images/${this.imagen}.png')`;
                break;
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
function gameLoop() {
    procesar_entrada_usuario();
    actualizar_estado();
    renderizar();

    if (in_game) {
        requestAnimationFrame(gameLoop);
    }
}

gameLoop();