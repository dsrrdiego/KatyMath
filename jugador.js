const VELOCIDAD_X=10;
const VELOCIDAD_RETROCESO=10;
const MEDIOANCHO=12.5;
const ALTO =35;

const vidasDiv=[];const puntosDiv=[]; const flechasDiv=[];




let numeroDeJugador=0;
class Jugador{
    constructor(n){
        
        this.miNumero=n;
        numeroDeJugador++;
        if (numeroDeJugador==2){
            this.elOtro=jugadoresEnJuego[0];
            jugadoresEnJuego[0].elOtro=this;
            document.querySelector('#hud1').classList.remove('invisible');
            this.soyDerecha=false;
            this.vidasDiv=document.querySelector('#vidasDiv1');
            this.puntosDiv=document.querySelector('#puntosDiv1');
            this.flechasDiv=document.querySelector('#flechasDiv1');
        }else{
            this.soyDerecha=true;
            this.vidasDiv=document.querySelector('#vidasDiv0');
            this.puntosDiv=document.querySelector('#puntosDiv0');
            this.flechasDiv=document.querySelector('#flechasDiv0');
            
            
        }
        this.div=document.createElement('div');
        this.div.classList.add('jugador');
        this.div.classList.add('caminar'+this.miNumero);
        this.x=250-numeroDeJugador*100;
        this.y=100;
        this.vidas=2;
        this.puntos=0;
        this.flechas=4;
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
            audio.tocar('saltar.mp3')
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
        audio.cambiar('morir.ogg');
        this.div.classList.remove('caminar'+this.miNumero);
        this.div.classList.add('morir'+this.miNumero);
        const indice=jugadoresEnJuego.indexOf(this);
        jugadoresEnJuego.splice(indice,1);
        document.querySelector('#todo').style="animation: jugadorMuerto 3s linear; ";
        setTimeout(() => {
            this.x=-100;
            this.dibujar();
        }, 1000);


        if (this.vidas<=1){
            setTimeout(() => {
                if (jugadoresEnJuego.length==0) {in_game=false;
                    document.querySelector('#todo').style="animation: jugadorMuerto 4s linear forwards; ";
                    audio.cambiar('pausa2.ogg',true);
                    infoDiv.innerHTML="Perdiste";
                    infoDiv.classList.remove('invisible');
                    this.div.style="display:none;";
                    setTimeout(() => {
                       final(this.puntos);
                    }, 7000);
                }
            }, 1000);
        }else{
            setTimeout(()=>{
                document.querySelector('#todo').style="animation: jugadorVivo 1s linear; ";
                this.div.classList.remove('morir'+this.miNumero);
                this.div.classList.add('caminar'+this.miNumero);
                jugadoresEnJuego.push(this);
                this.x=250;
                this.y=100;
                
            },3000)
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



        this.vidasDiv  .innerHTML=this.vidas;
        this.puntosDiv .innerHTML=this.puntos;
        this.flechasDiv.innerHTML=this.flechas;

        }

    dibujar (){
            this.div.style.cssText="left:"+(this.x-MEDIOANCHO)+"px; top:"+(this.y-ALTO/2)+"px;";
    }

    procesarEntrada(){
    if (this.soyDerecha){
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
