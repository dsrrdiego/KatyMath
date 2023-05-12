class Bola{
    constructor(){
        this.x=Math.floor(Math.random()*400);
        // this.radio=30;
        this.radio=Math.floor(Math.random()*30)+3;
        this.direccion=Math.floor(Math.random()*7)-4;
        console.log();
        
        this.y=0;
        this.div=document.createElement('div');
        this.div.classList.add('bola');
        document.body.appendChild(this.div);
    }
    dibujar(){
        this.y+=10;
        this.x+=this.direccion;
        this.div.style.cssText = `position: fixed; top: ${this.y}px; left:${this.x}px; width:${this.radio}%; height:${this.radio}%`;
    }
}