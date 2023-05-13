const COFRE_ANCHO=60;
const COFRE_ALTO=75;
class Cofre extends ElementoPiso{
    constructor(x){
        super(x);
        this.div.classList.add('cofre');
        this.radioX=COFRE_ANCHO/2;
        this.radioY=COFRE_ALTO/2
        this.y=LIMITE_Y-this.radioY+20;
        this.soy="cofre";
        this.elevacion=0;
        this.pisado=false;

    }
 actualizar(){
    this.y-=this.elevacion
    super.actualizar();
 }
 mePiso(){
    if (!this.pisado){
        this.pisado=true;
        const sorpresa=["flechas","flechas","flechas","flechas","flechas","flechas","flechas","flechas","vida","bola"]
        this.elevacion=2;   
        this.animation="animation :abrirCofre 0.5s steps(3) forwards;";
        let cosa=Math.floor(Math.random()*sorpresa.length);

        infoDiv.innerHTML=sorpresa[cosa];
        infoDiv.classList.remove('invisible');
        setTimeout(() => {
            infoDiv.classList.add('invisible');
            
        }, 3000);

        return sorpresa[cosa];
    }
}
}