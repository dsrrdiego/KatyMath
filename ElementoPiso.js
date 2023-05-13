class ElementoPiso{
    constructor(x){
                
        this.div=document.createElement('div');
        document.body.appendChild(this.div);
        this.x=x;
        this.y=LIMITE_Y-45;
        charcosEnElSuelo.push(this);
        console.log(charcosEnElSuelo);
        

    }
    actualizar(){
        if (this.radio>60){
            this.radio-=0.1;
            this.y=LIMITE_Y+30-(this.radio);
        }else{
            // if (charcosEnElSuelo.indexOf(this)>-1){            
                setTimeout(() => {
                    const indice=charcosEnElSuelo.indexOf(this);
                    
                    charcosEnElSuelo.splice(indice,1);
                    setTimeout(() => {
                        console.log(charcosEnElSuelo);
                        // if (this.div) document.body.removeChild(this.div);
                    }, 4000);
                    
                }, 1500);
            // }
        }


    }
    pise(x,y){
        if (x>this.x-this.radio && x<this.x+this.radio &&
            tecla.ArrowUp==false) return true;


    }
    dibujar(){
        this.div.style.cssText = `top: ${this.y}px; left:${this.x-this.radio}px; width:${this.radio*2}px; height:200px`;

    }

}
