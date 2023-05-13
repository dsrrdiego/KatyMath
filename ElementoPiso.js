class ElementoPiso{
    constructor(x){
                
        this.div=document.createElement('div');
        document.body.appendChild(this.div);
        this.x=x;
        cosasEnElPiso.push(this);
        this.animation="";
        

    }
    actualizar(){
        
            this.x-=0.4;

            if (this.x<-10 || this.y<-10){
                console.log('borro'+this);
                const indice=cosasEnElPiso.indexOf(this);
                cosasEnElPiso.splice(indice,1);
                document.body.removeChild(this.div);
                
            }

    }
    
    pise(x,y){
            if (x>this.x-this.radioX && x<this.x+this.radioX &&
                y>this.y-this.radioY && y<this.y+this.radioY){
                    return this.mePiso();
             }

    }
    dibujar(){
        
        this.div.style= `${this.animation}top: ${this.y-this.radioY}px; left:${this.x-this.radioX}px; width:${this.radioX*2}px; height:${this.radioY*2}px`;
        // this.div.style= `animation: abrirCofre 1s linear infinite;top: ${this.y-this.radioY}px; left:${this.x-this.radioX}px; width:${this.radioX*2}px; height:${this.radioY*2}px`;

    }

}
