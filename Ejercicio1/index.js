const imagen = document.querySelector("img")

imagen.addEventListener("click", () => {
    if(imagen.style.border === ''){
        imagen.style.border = "solid red 2px"
    }else{
        imagen.style.border = ''
    }
})