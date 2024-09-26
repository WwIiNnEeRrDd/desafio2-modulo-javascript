const boton = document.querySelector("button")
const mensaje = document.querySelector(".mensaje-verificacion")

boton.addEventListener("click", () => {
    const input1 = Number(document.querySelector("#input1").value)
    const input2 = Number(document.querySelector("#input2").value)
    const input3 = Number(document.querySelector("#input3").value)

    if(input1+input2+input3 <= 10){
        let stickersLlevados = input1+input2+input3
        mensaje.innerHTML = "Llevas " + stickersLlevados + " stickers"
    }else{
        mensaje.innerHTML = "Llevas demasiados stickers"
    }
})



