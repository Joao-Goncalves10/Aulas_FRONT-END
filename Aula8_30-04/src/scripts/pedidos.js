document.addEventListener("DOMContentLoaded", function() {
    renderizarPedidos()
    configurarLimparPedidos() // IMPORTANTE: Chamar a função de configuração ao carregar
})

function renderizarPedidos(){
    
    const lista = document.querySelector("#lista-pedidos")
    const spanTotal = document.querySelector("#valor-total")
    const spanResumo = document.querySelector("#valor-total-resumo")
    const spanContador = document.querySelector("#contador-itens")
    
    if(!lista) return

    // requisição
    const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")

    if(pedidos.length === 0){
        lista.innerHTML = "<li class='pedido-vazio'> Nenhum pedido ainda. Acesse o" + "<a href='index.html'> Cardápio </a> Para adicionar! 😊 </li>"

        // esvaziando os spans
        if(spanTotal) spanTotal.textContent = "R$ 0,00"
        if(spanResumo) spanResumo.textContent = "R$ 0,00"
        if(spanContador) spanContador.textContent = "0 itens"
    }

    lista.innerHTML = ""
    let total = 0

    pedidos.forEach(function(pedido, indice){
        
        const li = document.createElement("li")
        li.classList.add("item-pedido")

        
    // Informações - TEXTO
    const textoSpan = document.createElement("span")
    textoSpan.innerHTML = "<strong>" + pedido.nome + "</strong>" + "-" + pedido.qtd + "x" + " R$ " + pedido.preco.toFixed(2).replace(".", ",") + "= <span class='subtotal-item'> R$" + pedido.subtotal.toFixed(2).replace(".", ",")


    // Criando botão para remover prato da lista de resumo !!
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "❌"
    btnRemover.classList.add("btn-remover")

    // Ação de remover o botão, o anterior é a criação dele
    btnRemover.addEventListener("click", () =>{
        const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || " [] ")
        lista.splice(indice, 1)

        localStorage.setItem("techfood_pedidos")

        renderizarPedidos()

    }) // fim do RemoverItem

    itemLi.appendChild(textoSpan) // textoSpan é o prato e suas informações
    itemLi.appendChild(btnRemover)
    listaResumo.appendChild(itemLi)
    total += pedido.subtotal

})// fim pedido.forEach

    const totalFmt = "R$" + total.toFixed(2).replace(".", ",")
    if(spanTotal) spanTotal.textContent = totalFmt
    if(spanResumo) spanResumo.textContent = totalFmt

    // está contando quantos itens tem no carrinho
    const totalItens = pedidos.reduce(function(acc, p){
        return acc + p.qtd
    }, 0)

    if(spanContador){
        spanContador.textContent = totalItens + (totalItens === 1 ? "item" : "itens")
    }

} // fim da função AdiconarItemAoResumo


// CORREÇÃO: Adicionada a palavra 'function' que faltava na declaração
function configurarLimparPedidos() {
    // CORREÇÃO: Adicionado o '.' ou '#' dependendo se é classe ou ID (ajustado para seletor comum)
    const btnLimpar = document.querySelector('.btn-limpar-pedidos') 

    if (!btnLimpar) return

    btnLimpar.addEventListener('click', function() {
        // LIMPEZA TOTAL: Remove a chave do banco local e atualiza a tela
        localStorage.removeItem('techfood_pedidos')
        renderizarPedidos()
    })
}