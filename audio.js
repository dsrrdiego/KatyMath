class Audio{
    constructor(){
        this.tag=document.querySelector('#audio');
        this.tag.volume=0.3;
        this.fx=document.querySelector('#audio2');
        this.audioToggle=true;
        this.src='sonidos/musique.mp3';
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
    play(){
        this.tag.play();
    }
    
    cambiar(fuente){
        this.tag.src='sonidos/'+fuente+'.mp3';
        this.tag.load();
        if (this.audioToggle) this.play();

    }
    tocar(fuente){
        this.fx.src='sonidos/'+fuente;
        this.fx.load();
        if (this.audioToggle) this.fx.play();

    }

}