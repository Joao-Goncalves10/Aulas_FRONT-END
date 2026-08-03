document.addEventListener("DOMContentLoaded", function () {
    inicializarHoverCards();
    inicializarVitrine();
    renderizarCardapio();
});

function renderizarCardapio() {
    const grid = document.querySelector("#grid-cardapio");

    if (!grid) return; // Segurança caso o elemento não exista

    grid.innerHTML = "<p class = 'loading'> Carregando cardápio... </p>";

    try {
        const produtos = await buscarProduto();
        grid.innerHTML = ""

        produtos.forEach(function (produto) {
            const card = document.createElement("article")
            card.classList.add("card");
            card.setAttribute("data-id", produto.id);

            card.innerHTML = 
            "<h3> ${produto.nome} </h3>" +
            "<p class = 'desc'> ${produto.descricao} </p>" +
            "<div class = 'quantidade-box'>" +

        })
    } catch (erro) {

    }
}

function inicializarHoverCards() {
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
}

function inicializarVitrine() {
    const main = document.querySelector("main");
    if (!main) return; // Segurança caso não haja <main>

    main.addEventListener('click', (event) => {
        const clicado = event.target;

        // 3.1 Lógica para aumentar/diminuir quantidade
         if (clicado.classList.contains("btn-menos")) {
            const box = clicado.parentElement; //Acessei ao conteúdo pai
            const spanQtd = box.querySelector(".qtd-valor"); //Peguei o que eu queria
            const valorAtual = Number(spanQtd.textContent); //
            spanQtd.textContent = Math.max(1, valorAtual - 1);
            atualizarPrecoCard(box);
            return;

        }

        if (clicado.classList.contains("btn-mais")) {
            const box = clicado.parentElement; //Acessei ao conteúdo pai
            const spanQtd = box.querySelector(".qtd-valor"); //Peguei o que eu queria
            spanQtd.textContent = Number(spanQtd.textContent) + 1;
            atualizarPrecoCard(box);
            return;
        }

        // 3.2 Ação de clicar no botão Pedir
        if (clicado.classList.contains("btn-pedido")) {
            event.preventDefault();

            const card = clicado.parentElement;
            const nomePrato = card.querySelector("h3").textContent;
            const quantidade = Number(card.querySelector(".qtd-valor").textContent);
            const spanPrecoElem = card.querySelector(".preco");
            const precoUnitario = spanPrecoElem ? parseFloat(spanPrecoElem.getAttribute("data-preco")) || 0 : 0;
                
            // Resetar o contador do card após o pedido
            const box = card.querySelector('.quantidade-box');
            if (box) {
                box.querySelector(".qtd-valor").textContent = "1";
                atualizarPrecoCard(box);
            }

            // Envia os dados para a função de salvamento
            salvarPedido({ 
                nome: nomePrato, 
                preco: precoUnitario, 
                qtd: quantidade 
            });

            // Se você tiver uma função que atualiza o ícone do carrinho, ela entra aqui
            if (typeof atualizarContadorPedidos === "function") {
                atualizarContadorPedidos();
            }
        }
    });
}

function atualizarPrecoCard(box) {
    const card = box.parentElement;
    const spanPreco = card.querySelector(".preco");
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
    const quantidade = Number(box.querySelector(".qtd-valor").textContent);
    
    const total = precoUnitario * quantidade;
    
    spanPreco.textContent = "R$ " + total.toFixed(2).replace(".", ",");
    // Lógica visual: Se passar de 150 reais, o preço fica vermelho
    spanPreco.style.color = total > 150 ? "#d31f0b" : "#86401b";
}

function salvarPedido(pedido) {
    const card = document.querySelector(`.card[data-id="${pedido.id}"]`);
    const nome = card.querySelector("h3").textContent;
    const preco = parseFloat(card.querySelector(".preco").getAttribute("data-preco"));
    const subtotal = preco * pedido.qtd;
    // Busca a lista atual ou cria uma vazia
    const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");
    pedido.subtotal = pedido.preco * pedido.qtd;
    lista.push(pedido);
    // Salva a lista atualizada de volta no navegador (Storage)

    localStorage.setItem("techfood_pedidos", JSON.stringify(lista));
    // Feedback visual: Muda cor e texto do botão
            const clicado = card.querySelector(".btn-pedido");
            clicado.textContent = "✅ Adicionado";
            clicado.style.backgroundColor = "#148301";
            clicado.disabled = true; // CORREÇÃO: O termo correto é disabled, não disable

            setTimeout(() => {
                clicado.textContent = "Pedir Agora";
                clicado.style.backgroundColor = "";
                clicado.disabled = false;
            }, 1500);

            // Gerenciamento da Badge (Etiqueta de sucesso)
            const badgeExistente = card.querySelector(".badge-adicionado");
            if (badgeExistente) badgeExistente.remove();
            
            card.insertAdjacentHTML("beforeend", "<span class='badge-adicionado'> ✅ no resumo </span>");

            setTimeout(() => {
                const badge = card.querySelector(".badge-adicionado");
                if (badge) badge.remove();
            }, 2000);
}