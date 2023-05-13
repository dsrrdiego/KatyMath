const CHARCO_MEDIO_ANCHO=50;
const CHARCO_ALTO=40;
class Charco extends ElementoPiso{
    constructor(x){
        super(x);
        this.div.classList.add('charco');
        this.radioX=CHARCO_MEDIO_ANCHO;
        this.radioY=CHARCO_ALTO/2
        this.y=LIMITE_Y-this.radioY;
        this.soy="charco"

    }
    mePiso(){
        return "charco";
    }
}
