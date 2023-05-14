const VELOCIDAD_X=10;
const VELOCIDAD_RETROCESO=10;
const MEDIOANCHO=12.5;
const ALTO =35;

const vidasDiv=[];const puntosDiv=[]; const flechasDiv=[];

vidasDiv[0]=document.querySelector('#vidasDiv0');
puntosDiv[0]=document.querySelector('#puntosDiv0');
flechasDiv[0]=document.querySelector('#flechasDiv0');

vidasDiv[1]=document.querySelector('#vidasDiv1');
puntosDiv[1]=document.querySelector('#puntosDiv1');
flechasDiv[1]=document.querySelector('#flechasDiv1');


let numeroDeJugador=0;
class Jugador{
    constructor(){
        
        this.miNumero=numeroDeJugador;
        numeroDeJugador++;
        if (numeroDeJugador==2){
            this.elOtro=jugadoresEnJuego[0];
            jugadoresEnJuego[0].elOtro=this;
            document.querySelector('#hud1').classList.remove('invisible');
        }
        this.div=document.createElement('div');
        this.div.classList.add('jugador');
        this.div.classList.add('caminar'+this.miNumero);
        this.x=250-this.miNumero*100;
        this.y=380;
        this.vidas=3;
        this.puntos=0;
        this.flechas=2;
        this.saltando=false;
        jugadoresEnJuego.push(this);
        document.body.appendChild(this.div);


    }

    puedoMover(a){
        if (a>0 && a<LIMITE_X)  {
            if (numeroDeJugador==2){
                const difX=Math.abs(a-this.elOtro.x);
                const difY=Math.abs(this.y-this.elOtro.y)
                

                if (difX<MEDIOANCHO && difY<MEDIOANCHO) return false; else return true;
            }return true;
        }else{
            return false;
        }


    }
    avanzar(){
        if (this.puedoMover(this.x+VELOCIDAD_X)) this.x+=VELOCIDAD_X;
        
    }
    retroceder(){
        if (this.puedoMover(this.x-VELOCIDAD_RETROCESO)) this.x-=VELOCIDAD_RETROCESO;
    }
    saltar(){
        if (this.saltando==0){
            this.div.classList.remove('caminar'+this.miNumero);
            this.div.classList.add('saltar'+this.miNumero);
            setTimeout(()=>{
                this.div.classList.remove('saltar'+this.miNumero);
                this.div.classList.add('caminar'+this.miNumero);
            },3000)
            this.saltando=0.1;
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
    morir(){
        this.div.classList.remove('caminar'+this.miNumero);
        this.div.classList.add('morir'+this.miNumero);
        const indice=jugadoresEnJuego.indexOf(this);
        jugadoresEnJuego.splice(indice,1);
        
        if (this.vidas<=1){
            setTimeout(() => {
                infoDiv.innerHTML="Perdiste";
                infoDiv.classList.remove('invisible');
                this.div.style="display:none;";
            }, 1000);
        }else{
            setTimeout(()=>{
                this.div.classList.remove('morir'+this.miNumero);
                this.div.classList.add('caminar'+this.miNumero);
                jugadoresEnJuego.push(this);
                this.x=250;
                this.y=100;
                
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
    
    actualizar(){
        this.estaSaltando();
        if (this.saltando==0&& this.y<LIMITE_Y-15){ this.y+=5;

        }
        for (let bola of bolasEnElAire){
            if (bola.teDi(this.x,this.y)) this.morir();
        }
        for (let cosa of cosasEnElPiso){
            const sorpresa=cosa.pise(this.x,this.y);
            switch (sorpresa){
                
                case "charco":
                    this.morir();
                    break;
                case "arcoYflecha":
                    this.flechas+=5;
                    break;
                case "vida":
                    this.vida++;
                    break;
                case "esferat0":
                    new Bola();
                    new Bola();
                    break;

            }
        }



        vidasDiv  [this.miNumero].innerHTML=this.vidas;
        puntosDiv [this.miNumero].innerHTML=this.puntos;
        flechasDiv[this.miNumero].innerHTML=this.flechas;

        }

    dibujar (){
            // this.div.style="left:"+(this.x-MEDIOANCHO)+"px;";
            this.div.style.cssText="left:"+(this.x-MEDIOANCHO)+"px; top:"+(this.y-ALTO/2)+"px;";
    }
    procesarEntrada(){
    if (this.miNumero==0){
    if (tecla.ArrowLeft) this.retroceder();
    if (tecla.ArrowRight) this.avanzar();
    if (tecla.ArrowUp){
         this.saltar();
         tecla.ArrowUp=false;
    }
    if (tecla.Space){
        this.disparar();
        tecla.Space=false;       
    } 
}else{
    if (tecla.KeyA) this.retroceder();
    if (tecla.KeyD) this.avanzar();
    if (tecla.KeyW){
         this.saltar();
         tecla.KeyW=false;
    }
    if (tecla.ControlLeft){
        this.disparar();
        tecla.ControlLeft=false;       
    }
}
}

}
