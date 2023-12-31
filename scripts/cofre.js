const sorpresa=["estrella","arcoYflecha","arcoYflecha","arcoYflecha","arcoYflecha","arcoYflecha","vida","esferat0"]
const COFRE_ANCHO=84;
const COFRE_ALTO=60;
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
        this.cosa=Math.floor(Math.random()*sorpresa.length);

    }

estaParaEliminar(){
    super.estaParaEliminar();
}
 actualizar(){
    this.y-=this.elevacion
    super.actualizar();
 }
 mePiso(){
    if (!this.pisado){
        this.pisado=true;
        this.elevacion=0.5;   
        this.animation="animation :abrirCofre 0.5s steps(3) forwards;";
        audio.tocar('cofre.ogg')
        setTimeout(() => {
            new FiguraIndicadora(sorpresa[this.cosa],this.x,this.y);
            this.elevacion=3;
            audio.tocar('moneda.ogg');
        }, 700);

      
        return sorpresa[this.cosa];
    }
}
}


class Estrella extends Cofre{
    constructor(){
        super(470);
        this.y=100;
        this.cosa=0;
    }
    actualizar(){
    this.y-=this.elevacion

        super.estaParaEliminar();
    }

}
