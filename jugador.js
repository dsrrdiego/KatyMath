const VELOCIDAD_X=10;
const VELOCIDAD_RETROCESO=10;
const MEDIOANCHO=12.5;
const vidasDiv=document.querySelector('#vidasDiv');
const puntosDiv=document.querySelector('#puntosDiv');
const flechasDiv=document.querySelector('#flechasDiv');


class Jugador{
    constructor(){
         this.div=document.querySelector('#jugador1');
         this.x=50;
         this.y=365;
         this.div.classList.add('caminar');
         this.vidas=23;
         this.puntos=0;
         this.flechas=5;
         jugadoresEnJuego.push(this);


    }
    avanzar(){
        this.x+=VELOCIDAD_X;
    }
    retroceder(){
        this.x-=VELOCIDAD_RETROCESO;
    }
    saltar(){
        this.div.classList.remove('caminar');
        this.div.classList.add('saltar');
        setTimeout(()=>{
            this.div.classList.remove('saltar');
            this.div.classList.add('caminar');
        },3000)
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
                jugadoresEnJuego.push(this)
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
        for (let bola of bolasEnElAire){
            if (bola.teDi(this.x,this.y)) this.morir();
        }
        for (let charco of charcosEnElSuelo){
            if (charco.pise(this.x,this.y)) this.morir();
            // if (charco.pise(this.x,this.y)) 
            // console.log(charco.prototype.toString.call(charco));
        }



        vidasDiv.innerHTML=this.vidas;
        puntosDiv.innerHTML=this.puntos;
        flechasDiv.innerHTML=this.flechas;

        }

    dibujar (){
            this.div.style="left:"+(this.x-MEDIOANCHO)+"px;";
    }

}
