class ElementoPiso{
    constructor(x){
                
        this.div=document.createElement('div');
        document.body.appendChild(this.div);
        this.x=x;
        cosasEnElPiso.push(this);
        this.animation="";
        

    }
    estaParaEliminar(){
        if (this.x<-10 || this.y<-10){
            const indice=cosasEnElPiso.indexOf(this);
            cosasEnElPiso.splice(indice,1);
            document.body.removeChild(this.div);
            
        }

    }
    actualizar(){
        
            this.x-=0.4-nivel*VELOCIDAD_DIFICULTAD;
            this.estaParaEliminar();

    }
    
    pise(x,y){
            if (x>this.x-this.radioX && x<this.x+this.radioX &&
                y>this.y-this.radioY && y<this.y+this.radioY){
                    return this.mePiso();
             }

    }
    dibujar(){
        
        this.div.style= `${this.animation}top: ${this.y-this.radioY}px; left:${this.x-this.radioX}px; width:${this.radioX*2}px; height:${this.radioY*2}px`;

    }

}

