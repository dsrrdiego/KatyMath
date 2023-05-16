const LLEGADA_ANCHO=75;
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
 pise(x,y){
    if (x>this.x) return this.mePiso();
 }
 mePiso(){
    if (!this.pisado){
        this.pisado=true;
        infoDiv.innerHTML=`Congratuleiyons!! Nivel ${nivel} Completo!`;
        infoDiv.classList.remove('invisible')
        in_game=false;
        audio.cambiar("victoria.mp3");
        setTimeout(() => {
            infoDiv.classList.add('invisible')

            nivel++;
            escena(nivel);
           

            // final()
// // Obtén los parámetros de consulta de la URL
// const urlParams = new URLSearchParams(window.location.search);

// // Establece el nuevo valor del argumento
// urlParams.set('argumento', nivel++);

// // Construye la nueva URL con el argumento actualizado
// const nuevaURL = window.location.origin + window.location.pathname + '?' + urlParams.toString();

// // Reemplaza la URL actual sin agregar una nueva entrada al historial
// window.history.replaceState({}, document.title, nuevaURL);
// window.location.reload();



        }, 3000);
    }
}
}