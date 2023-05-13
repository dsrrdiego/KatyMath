let bolaNumero=-1;
class Bola{
    constructor(copia, direccion){
        if (copia==null){
            bolaNumero++;
            this.numero=bolaNumero%4;
            this.x=Math.floor(Math.random()*400);
            this.radio=Math.floor(Math.random()*80)+20;
            this.direccionX=Math.floor(Math.random()*3)*Math.floor(Math.random()*4);
            this.caida=10;
            this.y=10;
            this.yTope=10;
            this.div=document.createElement('div');
            this.div.cssText="background: url('images/esfera0.jpeg') center/cover;";
            document.body.appendChild(this.div);
            bolasEnElAire.push(this);
    }else{
        
        if (copia.radio>20){
            this.numero=copia.numero;
            this.x=copia.x;
            this.y=copia.y;
            this.radio=copia.radio/2;
            this.direccionX=copia.direccionX*direccion;
            this.caida=copia.caida;
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

        if (this.yTope+2*(this.radio)<400){
            this.colision();
            
            if (this.y+this.radio>400)  this.caida=-10//-Math.abs(this.caida);
            
            if (this.y-this.radio<this.yTope) this.caida=10//Math.abs(this.caida);
                
            this.y=this.y+this.caida;
            this.yTope+=0.3;

            this.x+=this.direccionX;

        }else{
            this.radio-=10;
            if (this.radio<3){
            const indice=bolasEnElAire.indexOf(this);
            bolasEnElAire.splice(indice,1);
            document.body.removeChild(this.div);
            }
        }
        // }

        // if (this.yTope<150){
        //     console.log(this.yTope);
            
        //     if (this.y<this.yTope && this.sentido==0.95){
                
        //         this.sentido=1.05;
        //         this.yTope+=15;
        //     }
        //     if (this.y>400-this.radio) this.sentido=0.95;
        //     this.y=this.y*this.sentido;
        //     this.x+=this.direccionX;
        //     this.colision();
        // }
    }

    colision(){
        for (let bola of bolasEnElAire){
            if (bola!=this){
                
                const difX=Math.abs(this.x-bola.x);
                const difY=Math.abs(this.y-bola.y);
                const hipo=Math.sqrt(difX**2+difY**2);
                
                if (hipo<this.radio+bola.radio) {
                    
                    // this.x+=this.radio*this.direccionX;
                    // this.y+=this.radio*this.caida/10;

                    this.direccionX*=-1;
                    this.caida*=-1;
                    
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