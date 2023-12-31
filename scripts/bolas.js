// todo lo relativo a las esferas que rebotan

const GRAVEADADsube=0.95;
const GRAVEADADbaja=1.05;
let bolaNumero=-1;
class Bola{
    constructor(copia, direccion){
        if (copia==null){
            bolaNumero++;
            this.numero=bolaNumero%6;
            this.x=Math.floor(Math.random()*LIMITE_X);
            this.radio=Math.floor(Math.random()*BOLA_MAX)+BOLA_MIN;
            this.direccionX=Math.floor(Math.random()*7)-2;
            this.gravedad=GRAVEADADbaja;
            this.enColisionCon=null;
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
            this.radio=copia.radio*REDUCCION_BOLA;
            this.direccionX=copia.direccionX*direccion;
            this.gravedad=copia.gravedad;
            this.yTope=10;
            this.div=document.createElement('div');
            this.div.classList.add('bola');
            document.body.appendChild(this.div);
            bolasEnElAire.push(this);
        }
    }
}

    actualizar(){
        
        //limites de la pantalla en X
        if (this.x+this.radio>LIMITE_X) {
            this.direccionX*=-1;
            this.x=LIMITE_X-this.radio;
        }
        if (this.x-this.radio<0){
            this.direccionX*=-1;
            this.x=this.radio;
        }

        //gravedad
        if (this.y<this.yTope) this.gravedad=GRAVEADADbaja;
        if (this.y>LIMITE_Y-this.radio) {
            this.gravedad=GRAVEADADsube;
            audio.tocar('revote.ogg');
        }
        this.yTope+=0.5;
        if (this.yTope>200 ) {
            this.radio-=0.25;
            if (this.radio<ENCHARQUE){
                const indice=bolasEnElAire.indexOf(this);
                bolasEnElAire.splice(indice,1);
                document.body.removeChild(this.div);
                new Charco(this.x);
            }
        }
        this.y*=this.gravedad;
        this.x=this.x+this.direccionX;

        //corroborar colision
        this.colision();
    }

    colision(){
        for (let bola of bolasEnElAire){
            if (bola!=this){
                if (this.enColisionCon!=bola.numero){
                    const difX=Math.abs(this.x-bola.x);
                    const difY=Math.abs(this.y-bola.y);
                    const hipo=Math.sqrt(difX**2+difY**2);
                    
                    if (hipo<this.radio+bola.radio) {
                        
                        this.direccionX*=-1;
                        (this.gravedad==GRAVEADADbaja)?GRAVEADADsube:GRAVEADADbaja;
                        this.enColisionCon=bola.numero;
                    }else{
                        this.enColision=false;
                    }
                }
            }
        }

    }
    teDi(x,y){  //si la flech le dio
        const difX=Math.abs(this.x-x);
        const difY=Math.abs(this.y-y);
        const hipo=Math.sqrt(difX**2 + difY**2);
        if (hipo< this.radio){

            return true;
        }
        
    }
    
    meDio(){
        const indice = bolasEnElAire.indexOf(this);
        bolasEnElAire.splice(indice, 1); 
        document.body.removeChild(this.div);

        new Bola(this,1);
        new Bola(this,-1);
        audio.tocar("globo.ogg")
    }

    dibujar(){
        this.div.style.cssText = `background: url('images/esferat${this.numero}.png') center/cover; position: fixed; top: ${this.y-this.radio}px; left:${this.x-this.radio}px; width:${this.radio*2}px; height:${this.radio*2}px;animation: girar 5s ease-in-out infinite;`;
    }
}