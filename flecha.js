
class Flecha{
    constructor(jugador){
        this.x=jugador.x;
        this.y=jugador.div.offsetTop-60;
        console.log('disp');
        
        this.div =document.createElement('div');
        this.div.classList.add('flecha');
        
        // console.log(this.div.offsetTop-60);
        
        document.body.appendChild(this.div);       
        // this.dibujar();
        flechasEnElAire.push(this);
    }
    dibujar(){
        this.y-=0.1;
        this.div.style.cssText = `position: fixed; top: ${this.y}px; left:${this.x}px;`;
    }
}