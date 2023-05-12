const velocidadX=10;
const velocidadRetroceso=10;

class Jugador{
    constructor(){
         this.div=document.querySelector('#jugador1');
         this.x=50;
         this.div.classList.add('caminar');


    }
    avanzar(){
        this.x+=velocidadX;
    }
    retroceder(){
        this.x-=velocidadRetroceso;
    }
    saltar(){
        this.div.classList.remove('caminar');
        this.div.classList.add('saltar');
        setTimeout(()=>{
            this.div.classList.remove('saltar');
            this.div.classList.add('caminar');
        },1000)
    }

    disparar(){
        let flecha=new Flecha(this);
        
    }

    dibujar (){
            this.div.style="left:"+this.x+"px;";
    }

}
