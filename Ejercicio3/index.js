const boton = document.querySelector("button")
const mensaje = document.querySelector(".mensaje")

boton.addEventListener("click", () => {
    const input1 = document.querySelector("#select1").value
    const input2 = document.querySelector("#select2").value
    const input3 = document.querySelector("#select3").value

    if(input1 == 9 && input2 == 1 && input3 == 1){
        mensaje.innerHTML = "password 1 es correcto"
    }else if(input1 == 7 && input2 == 1 && input3 == 4){
        mensaje.innerHTML = "password 2 es correcto"
    }else{
        mensaje.innerHTML = "password incorrecto"
    }
})


