
class Flecha{
    constructor(jugador){
        this.x=jugador.x;
        this.y=jugador.div.offsetTop-60;
        
        this.div =document.createElement('div');
        this.div.classList.add('flecha');
        
        document.body.appendChild(this.div);       
        flechasEnElAire.push(this);
    }
    actualizar(){
        this.y-=10;
        for (let bola of bolasEnElAire){
            bola.teDi(this.x,this.y)
        }

    }


    dibujar(){
        this.div.style.cssText = `position: fixed; top: ${this.y}px; left:${this.x}px;`;
    }
}