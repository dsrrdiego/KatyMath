
const okBtn=document.querySelector('#finalBtn')
function final(puntos){
    document.querySelector('#final').classList.remove('invisible');
    const input=document.querySelector('#input')
    okBtn.addEventListener('click',()=>agregar(puntos));
    document.querySelector('#otraVezBtn').addEventListener('click',()=>location.reload());
    document.querySelector('#infoDiv').classList.add('invisible');
    document.querySelector('#todo').style="animation: jugadorVivo 1s linear; ";

}

function agregar(puntos){

    const nombre=input.value;
    let lista=document.querySelector('#lista');
    let item=document.createElement('li');
    item.innerHTML=puntos + nombre;
    lista.appendChild(item);
    okBtn.classList.add('invisible');

}