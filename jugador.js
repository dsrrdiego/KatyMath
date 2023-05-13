const VELOCIDAD_X=10;
const VELOCIDAD_RETROCESO=10;
const MEDIOANCHO=12.5;
const ALTO =35;

const vidasDiv=document.querySelector('#vidasDiv');
const puntosDiv=document.querySelector('#puntosDiv');
const flechasDiv=document.querySelector('#flechasDiv');


class Jugador{
    constructor(){
         this.div=document.querySelector('#jugador1');
         this.x=50;
         this.y=380;
         this.div.classList.add('caminar');
         this.vidas=23;
         this.puntos=0;
         this.flechas=5;
         this.saltando=false;
         jugadoresEnJuego.push(this);


    }
    avanzar(){
        this.x+=VELOCIDAD_X;
        
    }
    retroceder(){
        this.x-=VELOCIDAD_RETROCESO;
    }
    saltar(){
        if (this.saltando==0){
            this.div.classList.remove('caminar');
            this.div.classList.add('saltar');
            setTimeout(()=>{
                this.div.classList.remove('saltar');
                this.div.classList.add('caminar');
            },3000)
            this.saltando=0.1;
        }
    }
    morir(){
        this.div.classList.remove('caminar');
        this.div.classList.add('morir');
        const indice=jugadoresEnJuego.indexOf(this);
        jugadoresEnJuego.splice(indice,1);
        
        if (this.vidas==1){
            setTimeout(() => {
                infoDiv.innerHTML="Perdiste";
                infoDiv.classList.remove('invisible');
                this.div.style="display:none;";
            }, 1000);
        }else{
            setTimeout(()=>{
                this.div.classList.remove('morir');
                this.div.classList.add('caminar');
                jugadoresEnJuego.push(this);
                this.x=50;
                // this.y=100;
                
            },1000)
        }
        this.vidas--;
                    

    }

    disparar(){
        if (this.flechas>0){
            let flecha=new Flecha(this);
            this.flechas--;
        }
    }
    estaSaltando(){
        if (this.saltando!=0){
            this.saltando+=0.1;
            const seno=Math.sin(this.saltando)*10;
            this.y-=seno;
            if (this.saltando>6) this.saltando=0;
            
        }
    }
    actualizar(){
        this.estaSaltando();
        for (let bola of bolasEnElAire){
            if (bola.teDi(this.x,this.y)) this.morir();
        }
        for (let cosa of cosasEnElPiso){
            const sorpresa=cosa.pise(this.x,this.y);
            if (sorpresa!=null) console.log(sorpresa);
            switch (sorpresa){
                
                case "charco":
                    this.morir();
                    break;
                case "flechas":
                    this.flechas+=5;
                    break;
                case "vida":
                    this.vida++;
                    break;
                case "bola":
                    new Bola();
                    break;

            }
        }



        vidasDiv.innerHTML=this.vidas;
        puntosDiv.innerHTML=this.puntos;
        flechasDiv.innerHTML=this.flechas;

        }

    dibujar (){
            // this.div.style="left:"+(this.x-MEDIOANCHO)+"px;";
            this.div.style.cssText="left:"+(this.x-MEDIOANCHO)+"px; top:"+(this.y-ALTO/2)+"px;";
    }

}
