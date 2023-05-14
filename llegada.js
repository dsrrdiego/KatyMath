const LLEGADA_ANCHO=60;
const LLEGADA_ALTO=75;
class Llegada extends ElementoPiso{
    constructor(x){
        super(x);
        this.div.classList.add('llegada');
        this.radioX=LLEGADA_ANCHO/2;
        this.radioY=LLEGADA_ALTO/2
        this.y=LIMITE_Y-this.radioY+20;
        this.soy="llegada";
        this.pisado=false;

    }
 actualizar(){
    super.actualizar();
    
 }
 mePiso(){
    if (!this.pisado){
        this.pisado=true;
        infoDiv.innerHTML="ganaste"
        infoDiv.classList.remove('invisible')
        in_game=false;
        audio.cambiar("victoria");
    }
}
}