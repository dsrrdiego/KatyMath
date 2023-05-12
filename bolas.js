let bolaNumero=-1;
class Bola{
    constructor(copia, direccion){
        if (copia==null){
            bolaNumero++;
            this.numero=bolaNumero%4;
            this.x=Math.floor(Math.random()*400);
            this.radio=Math.floor(Math.random()*150)+20;
            this.direccionX=Math.floor(Math.random()*7)-3;
            this.sentido=1.1;
            this.y=10;
            this.yTope=10;
            this.div=document.createElement('div');
            this.div.cssText="background: url('images/esfera0.jpeg') center/cover;";
            document.body.appendChild(this.div);
            bolasEnElAire.push(this);
    }else{
        console.log('entro');
        
        if (copia.radio>20){
            this.numero=copia.numero;
            this.x=copia.x;
            this.y=copia.y;
            this.radio=copia.radio/2;
            this.direccionX=copia.direccionX*direccion;
            this.sentido=copia.sentido;
            this.yTope=copia.yTope;
            this.div=document.createElement('div');
            this.div.classList.add('bola');
            document.body.appendChild(this.div);
            bolasEnElAire.push(this);
        }
    }
}

    actualizar(){

        if (this.x+this.radio>970) this.direccionX*=-1;
        if (this.x-this.radio<0) this.direccionX*=-1;


        if (this.yTope<150){
            console.log(this.yTope);
            
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
                const hipo=Math.sqrt(difX**2+difY**2);
                
                if (hipo<this.radio+bola.radio) {
                    // console.log('colision');
                    
                    this.direccionX*=-1;
                    bola.direccionX*=-1;
                    if (this.sentido==0.95) this.sentido=1.05; else this.sentido=0.95
                    if (bola.sentido==0.95) bola.sentido=1.05; else bola.sentido=0.95
                    
                }
            }
        }

    }
    teDi(x,y){
        const difX=Math.abs(this.x-x);
        const difY=Math.abs(this.y-y);
        const hipo=Math.sqrt(difX**2 + difY**2);
        if (hipo< this.radio){

            console.log('dada'+this.numero);
            const indice = bolasEnElAire.indexOf(this);
            bolasEnElAire.splice(indice, 1); 
            document.body.removeChild(this.div);

            new Bola(this,1);
            new Bola(this,-1);
            return true;
        }

    }


    dibujar(){
        
        this.div.style.cssText = `background: url('images/esferat${this.numero}.png') center/cover; position: fixed; top: ${this.y-this.radio}px; left:${this.x-this.radio}px; width:${this.radio*2}px; height:${this.radio*2}px`;
    }
}