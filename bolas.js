let bolaNumero=-1;
class Bola{
    constructor(){
        bolaNumero++;
        this.numero=bolaNumero;
        this.x=Math.floor(Math.random()*400);
        this.y=1;
        this.radio=Math.floor(Math.random()*50)+5;
        this.direccionX=Math.floor(Math.random()*7)-3;
        this.sentido=1.1;
        this.y=10;
        this.yTope=10;
        this.div=document.createElement('div');
        this.div.classList.add('bola');
        document.body.appendChild(this.div);

        
    }
    actualizar(){

        if (this.x>400) this.direccionX*=-1;
        if (this.x<0) this.direccionX*=-1;


        if (this.yTope<150){
        
            if (this.y<this.yTope && this.sentido==0.95){
                
                this.sentido=1.05;
                this.yTope+=15;
            }
            if (this.y>400-this.radio) this.sentido=0.95;
            this.y=this.y*this.sentido;
            this.x+=this.direccionX;
            this.colision();
        }
    }

    colision(){
        for (let bola of bolasEnElAire){
            if (bola!=this){
                
                const difX=Math.abs(this.x-bola.x);
                const difY=Math.abs(this.y-bola.y);
                const hipo=Math.sqrt(difX*difX+difY*difY);
                
                if (hipo<this.radio+bola.radio) {
                    this.direccionX*=-1;
                    bola.direccionX*=-1;
                    if (this.sentido==0.95) this.sentido=1.05; else this.sentido=0.95
                    if (bola.sentido==0.95) bola.sentido=1.05; else bola.sentido=0.95
                    
                }
            }
        }

    }


    dibujar(){
        
        this.div.style.cssText = `position: fixed; top: ${this.y-this.radio}px; left:${this.x-this.radio}px; width:${this.radio*2}px; height:${this.radio*2}px`;
    }
}