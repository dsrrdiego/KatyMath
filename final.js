

let listaNombres=document.querySelectorAll('#listaNombres li');
let listaPuntos=document.querySelectorAll('#listaPuntos li');


function final(puntos){
    
    
    
    
    
    
    const okBtn=document.querySelector('#finalBtn')
    document.querySelector('#final').classList.remove('invisible');
    
    
    
    const input=document.querySelector('#input')
    okBtn.addEventListener('click',()=>agregar(puntos,okBtn));
    document.querySelector('#otraVezBtn').addEventListener('click',()=>location.reload());
    //descomentar
    // document.querySelector('#infoDiv').classList.add('invisible');
    // document.querySelector('#todo').style="animation: jugadorVivo 1s linear; ";
    
    
    const cookies = document.cookie.split(";"); // Divide las cookies en un array
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // Elimina espacios en blanco al inicio y final de la cookie
        const [nombre, valor] = cookie.split("="); // Divide el nombre y el valor de la cookie
    
        if (nombre === "miCookie") {
            const nombre=JSON.parse(valor)
            for (let n=0;n<10;n++){
                listaNombres[n].innerHTML=nombre[n];
            }
        }

        if (nombre === "miCookiePuntos") {
            const ppuntos=JSON.parse(valor)
            for (let n=0;n<10;n++){
                listaPuntos[n].innerHTML=ppuntos[n];
            }
            break;
        }
    }
    
    
    
}

function agregar(puntos,okBtn){
    const nombre=input.value;
    let listaNombresDiv=document.querySelector('#listaNombres');
    let listaPuntosDiv=document.querySelector('#listaPuntos');
    
    
    for (let n=0;n<10;n++){
        if (puntos>=listaPuntos[n].innerHTML) {
            
            for (let x=9;x>n;x--){
                listaNombres[x].innerHTML=listaNombres[x-1].innerHTML;
                listaPuntos[x].innerHTML =listaPuntos[x-1].innerHTML ;
            }
            listaNombres[n].innerHTML=input.value;
            listaPuntos[n].innerHTML=puntos;
            
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
            
            
            break;
        }
    }
    
    
    
    //cambiar
    // okBtn.classList.add('invisible');
    
}
//borrar
final(35);

