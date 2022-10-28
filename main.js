let imagen = document.querySelectorAll('.img')


for(let i=0 ; i<9 ; i++){
    imagen[i].addEventListener('click', ()=>{
        if(imagen[i].classList.contains('focus') == false){
            imagen[i].classList.add('focus')
        }else{
            imagen[i].classList.remove('focus')
        }
    })
}

//funcion anonima