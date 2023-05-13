const CHARCO_MEDIO_ANCHO=90;
const CHARCO_ALTO=200
class Charco{
    constructor(bola){
        console.log('charqueando');
                
        this.div=document.createElement('div');
        this.div.classList.add('charco');
        document.body.appendChild(this.div);
        this.x=bola.x;
        this.y=LIMITE_Y-45;
        this.radio=CHARCO_MEDIO_ANCHO;
        charcosEnElSuelo.push(this);

    }
    actualizar(){
        if (this.radio>60){
            this.radio-=0.1;
            this.y=LIMITE_Y+30-(this.radio);
        }else{
            setTimeout(() => {
                const indice=charcosEnElSuelo.indexOf(this);
                charcosEnElSuelo.splice(indice,1);
                setTimeout(() => {
                    document.body.removeChild(this.div);
                    // this.div.classList('invisible');
                }, 3000);
                
            }, 1500);
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
