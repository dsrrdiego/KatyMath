const COFRE_MEDIO_ANCHO=20;
class Cofre extends ElementoPiso{
    constructor(x){
        super(x);
        this.div.classList.add('cofre');
        this.radio=COFRE_MEDIO_ANCHO;

    }
 
}