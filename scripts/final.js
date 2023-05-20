let listaNombres=document.querySelectorAll('#listaNombres li');
let listaPuntos=document.querySelectorAll('#listaPuntos li');


function final(puntos){
    document.querySelector('#final').classList.remove('invisible');
    
    const input=document.querySelector('#input')
    document.querySelector('#otraVezBtn').addEventListener('click',()=>{
        localStorage.setItem("recarga", "true");
        location.reload();});
    document.querySelector('#infoDiv').classList.add('invisible');
    document.querySelector('#todo').style="animation: jugadorVivo 1s linear; ";
    
    //se cargan los cookies    
    const cookies = document.cookie.split(";"); 
    
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); 
        const [nombreCook, valor] = cookie.split("="); 
        
        if (nombreCook === "miCookie") {
            const nombreJugador=JSON.parse(valor)
            for (let n=0;n<10;n++){
                listaNombres[n].innerHTML=nombreJugador[n];
            }
            
        }
        
        if (nombreCook === "miCookiePuntos") {
            const ppuntos=JSON.parse(valor)
            for (let n=0;n<10;n++){
                listaPuntos[n].innerHTML=ppuntos[n];
            }
            break;
        }
    }



    ///

    //Acomodar en la lista de acuerdo al puntaje
    let listaNombresDiv=document.querySelector('#listaNombres');
    let listaPuntosDiv=document.querySelector('#listaPuntos');
    for (let n=0;n<10;n++){
        if (puntos>=listaPuntos[n].innerHTML) {
            
            // const okBtn=document.querySelector('#finalBtn')
            input.classList.remove('invisible');
            input.focus();
            // okBtn.classList.remove('invisible');
            
            

            for (let x=9;x>n;x--){
                listaNombres[x].innerHTML=listaNombres[x-1].innerHTML;
                listaPuntos[x].innerHTML =listaPuntos[x-1].innerHTML ;
            }
            listaNombres[n].innerHTML="__________";
            listaNombres[n].style="font-size: xx-large;";

            listaPuntos[n].innerHTML=puntos;
            listaPuntos[n].style="font-size: xx-large;";
            
            input.addEventListener('input',function (){
                listaNombres[n].innerHTML=this.value;
            });
            

            input.addEventListener('change',()=>agregar(puntos,input,listaNombres[n],listaPuntos[n]));
            
            break;
        }
    }
    
}

//agregar a la lista y guardar los cookies
function agregar(puntos,okBtn,item,itemPuntos){
    item.innerHTML=input.value;
    item.style="font-size: medium";
    itemPuntos.style="font-size: medium";

    const fechaVencimiento = new Date('2024-12-31').toUTCString();
    let nuevaLista=[];
    for (let z=0;z<10;z++){
        nuevaLista.push(listaNombres[z].innerHTML)
    }
    nuevaLista = JSON.stringify(nuevaLista);
    document.cookie = "miCookie="+nuevaLista+"; expires=" + fechaVencimiento + "; path=/";

    nuevaLista=[];
    for (let z=0;z<10;z++){
        nuevaLista.push(listaPuntos[z].innerHTML)
    }
    nuevaLista = JSON.stringify(nuevaLista);
    document.cookie = "miCookiePuntos="+nuevaLista+"; expires=" + fechaVencimiento + "; path=/";
    
    okBtn.classList.add('invisible');
    input.classList.add('invisible');
    
}

