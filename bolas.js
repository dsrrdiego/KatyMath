class Bola{
    constructor(){
        this.x=Math.floor(Math.random()*400);
        this.y=1;
        this.radio=Math.floor(Math.random()*200)+50;
        this.direccion=Math.floor(Math.random()*7)-4;
        this.sentido=1.1;
        this.y=10;
        this.yTope=10;
        this.div=document.createElement('div');
        this.div.classList.add('bola');
        document.body.appendChild(this.div);

        
    }
    actualizar(){
        if (this.yTope<150){
        
            if (this.y<this.yTope && this.sentido==0.9){
                
                this.sentido=1.1;
                this.yTope+=15;
            }
            if (this.y>400-this.radio) this.sentido=0.9;
            this.y=this.y*this.sentido;
        this.x+=this.direccion;

    }

    }


    dibujar(){
        
        this.div.style.cssText = `position: fixed; top: ${this.y}px; left:${this.x}px; width:${this.radio}px; height:${this.radio}px`;
    }
}