const inputQtd = document.querySelector("#qtd-pizza")
const precoTexto = document.querySelector("#preco-pizza")

if(inputQtd && precoTexto){
    inputQtd.addEventListener("input", () => {
        const precoUnitario = 68.0
        const total = Number(inputQtd.value) * precoUnitario
        precoTexto.textContent = 'R$ ${total.toFixed(2)'
    })

}

const input1 = document.querySelector