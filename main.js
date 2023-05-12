let jugador1 =document.querySelector('#jugador1');

let in_game = true;

function procesar_entrada_usuario() {
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            console.log("El usuario presionó la tecla Enter");
        }
    });
}

function actualizar_estado() {
    // actualizar estado
}

function renderizar() {
    // dibujar juego
}

function gameLoop() {
    console.log('Bucle en ejecucion.');
    procesar_entrada_usuario();
    actualizar_estado();
    renderizar();

    if (in_game) {
        requestAnimationFrame(gameLoop);
    }
}

gameLoop();