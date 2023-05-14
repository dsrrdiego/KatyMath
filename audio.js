class Audio{
    constructor(){
        this.tag=document.querySelector('#audio');
        this.fx=document.querySelector('#audio2');
        this.audioToggle=true;
        this.src='sonidos/musique.mp3';
        document.querySelector('#audioBtn').addEventListener("click",()=>{

            if (this.audioToggle){
                this.audioToggle=false;
                this.tag.pause();
            }else{
                this.audioToggle=true;
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
        this.fx.src='sonidos/'+fuente+'.mp3'
        this.fx.load();
        if (this.audioToggle) this.fx.play();

    }

}