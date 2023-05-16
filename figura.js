const F_RADIO=30;
class FiguraIndicadora{
    constructor(tipo, x,y){
        this.figura=tipo;
        this.x=x-F_RADIO;
        this.y=y-F_RADIO;
        this.ancho=F_RADIO*2;
        this.alto=this.ancho;
        this.div=document.createElement('div');
        figuraIndicadoraEnElAire.push(this);
        document.body.appendChild(this.div);
    }
    actualizar(){
        this.y-=5;
        if (this.y<-10){
            const indice=figuraIndicadoraEnElAire.indexOf(this);
            figuraIndicadoraEnElAire.splice(indice,1);
            document.body.removeChild(this.div);
            
        }
    }
    dibujar(){
        
        this.div.style=`position:fixed; background: url('images/${this.figura}.png') center/cover; width:${this.ancho}px; height:${this.alto}px; top:${this.y}px;left:${this.x}px;z-index:10`

    }


}

