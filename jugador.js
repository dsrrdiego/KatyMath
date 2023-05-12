class Jugador{
    constructor(){
         this.div=document.querySelector('#jugador1');
         this.x=50;
         this.div.classList.add('caminar');
    }
    saltar(){
        console.log('salto');
        this.div.classList.remove('caminar');
        this.div.classList.add('saltar');
        setTimeout(()=>{
            console.log('volvio');
            this.div.classList.remove('saltar');
            this.div.classList.add('caminar');
        },1000)
    }

    dibujar (){
            this.div.style="left:"+this.x+"px;";
    }

}
