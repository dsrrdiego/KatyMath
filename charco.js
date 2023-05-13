const CHARCO_MEDIO_ANCHO=90;
const CHARCO_ALTO=200
class Charco extends ElementoPiso{
    constructor(x){
        super(x);
        this.div.classList.add('charco');
        this.radio=CHARCO_MEDIO_ANCHO;

    }
}
