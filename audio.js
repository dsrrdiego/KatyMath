class Audio{
    constructor(){
        this.tag=document.querySelector('#audio');
        this.tag.volume=0.3;
        this.fx=document.querySelector('#audio2');
        this.audioToggle=true;
        this.src='cancion.ogg';

        this.tag.addEventListener("ended", ()=> {console.log('v1');
         this.volver()});



        this.btn=document.querySelector('#audioBtn');
        this.btn.style="background:url('images/mutetrue.png')center/cover"
        this.btn.addEventListener("click",()=>{
            
            if (this.audioToggle){
                this.audioToggle=false;
                this.tag.pause();
                this.btn.style="background:url('images/mute"+this.audioToggle+".png')center/cover"
            }else{
                this.audioToggle=true;
                this.btn.style="background:url('images/mute"+this.audioToggle+".png')center/cover"

                this.tag.play();
            }


        });
        this.play();
    }
    play(loop){
        this.tag.play();
        this.tag.loop=loop;
    }
    
    cambiar(fuente,loop){
        this.tag.src='sonidos/'+fuente;
        this.tag.load();
        if (this.audioToggle) this.play(loop);

    }
    tocar(fuente){
        const rocola=document.createElement('audio');
        rocola.src='sonidos/'+fuente;
        rocola.load();
        if (this.audioToggle) rocola.play();
    }
    volver(){
        this.cambiar(this.src);
        console.log('volcio');
        
    }

}