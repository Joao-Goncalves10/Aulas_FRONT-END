/* ==========================================================
   AULA 06: EVENTOS DOM - TECHFOOD
   CORREÇÃO: Eventos aplicados para funcionar em todos os dispositivos
   ========================================================== */

// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// 2. INTERATIVIDADE NOS CARDS (Feedback visual)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

// 3. DELEGAÇÃO DE EVENTOS
const main = document.querySelector("main");
main.addEventListener('click', (event) => {
  const clicado = event.target

  // 3.1 Quantidade de ITENS
  if (clicado.classList.contains("btn-menos")) {
    const box = clicado.parentElement //Acessei ao conteúdo pai
    const spanQtd = box.querySelector(".qtd-valor") //Peguei o que eu queria
    const valorAtual = Number(spanQtd.textContent) //
    spanQtd.textContent = Math.max(1, valorAtual - 1)
    atualizarPrecoCard(box)
    return
  }

  if (clicado.classList.contains("btn-mais")) {
    const box = clicado.parentElement //Acessei ao conteúdo pai
    const spanQtd = box.querySelector(".qtd-valor") //Peguei o que eu queria
    spanQtd.textContent = Number(spanQtd.textContent) + 1
    atualizarPrecoCard(box)
    return
  }

  // 3.2 Navegação Ação do btn-pedido
  if (clicado.classList.contains("btn-pedido")) {
    event.preventDefault()

    const card = clicado.parentElement
    const nomePrato = card.querySelector("h3").textContent
    const quantidade = card.querySelector(".qtd-valor").textContent
    const precoExibido = card.querySelector(".preco").textContent

    //efeito visual quando clicado "Pedir agora"

    clicado.textContent = "✅ Adicionado" //Texto ao clicar o botão
    clicado.style.backgroundColor = "#148301" //Muda a cor do botão quando clicado
    clicado.disable = true //Desativa momentaneamente o clique do botão

    setTimeout(() => {
        clicado.textContent = "Pedir Agora"
        clicado.style.backgroundColor = "" //Volta ao que já estava lá
        clicado.disable = false
    }, 1500) //Um segundo e meio de tempo

    if(!card.querySelector(".badge-adicionado")) {
      card.insertAdjacentHTML(
        "beforeend", "<span class = 'badge-adicionado'> ✅ no resumo </span>"
      )
    }

    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)

  }
}) //Acabou o main ouvinte de clique

// 4. As funções de ATUALIZAR PREÇO e INSERIR PRODUTO NO RESUMO
function atualizarPrecoCard(box) { //"box" podia ser qualquer coisa
  const card = box.parentElement;
  const spanPreco = card.querySelector(".preco");
  const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco")); //pega se for real
  const quantidade = Number(box.querySelector(".qtd-valor").textContent);
  const total = precoUnitario * quantidade
  spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",") //substitui o lugar de algo, aqui, muda ponto para vírgulas
  spanPreco.style.color = total > 150 ? "#d31f0b" : "#86401b"
}

function adicionarItemAoResumo(nome, quantidade, preco, cardOrigem) {
  
  const secaoResumo = document.querySelector('#secao-resumo')
  const listaResumo = document.querySelector('#lista-resumo')
  if(!secaoResumo || !listaResumo) return

  //criando a seção resumo
  secaoResumo.style.display = "block"

  //Criando 1 item na lista
  const itemLista = document.createElement('li')
  itemLista.classList.add('item-resumo')

  //Criando o campo de informações - TEXTO
  const textoSpan = document.createElement("span")
  textoSpan.textContent = quantidade + "x " + nome + " - " + preco

  //Criando um botão para remover prato
  const btnRemover = document.createElement('button')
  btnRemover.textContent = "❎"
  btnRemover.classList.add('btn-remover')

  //continuação

  btnRemover.addEventListener('click', () => {
    itemLista.remove()

    const badge = cardOrigem.querySelector('.badge-adicionado')
    if(badge) badge.remove()
    
    if(listaResumo.children.length === 0) {
      secaoResumo.style.display = 'none'
    }
  })

  //é aqui que é inserido realmente na pagina (visual)
  itemLista.appendChild(textoSpan)
  itemLista.appendChild(btnRemover)
  listaResumo.appendChild(itemLista)

  //fim da função de adicionarItemAoResumo

  const btnLimpar = document.querySelector('#btn-limpar')

  if(btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      const listaResumo = document.querySelector('#lista-resumo')
      const secaoResumo = document.querySelector('#secao-resumo')

      //remover os badge que criamos no js
      //o querySelectorAll pega todos os itens de uma class
      document.querySelectorAll('.badge-adicionado').forEach((b) => b.remove()) //para passar por cada posição da class

      //remover os filhos dessa lista
      while(listaResumo.firstElementChild) {
        listaResumo.firstElementChild.remove()
      }

      secaoResumo.style.display = "none"
    })
  }
}