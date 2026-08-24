class Prato {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  aplicarDescontos(percentual) {
    this.preco = this.preco * (1 - percentual / 100);
  }
}

const cardapio = [
  new Prato("Feijoada completa", 42.90, "Prato Principal"),
  new Prato("Moqueca de peixe", 58.00, "Prato Principal"),
  new Prato("Coxinha Artesanal", 8.50, "Petisco"),
  new Prato("Brigadeiro Gourmet", 6.00, "Sobremesa"),
  new Prato("Suco de Maracujá", 12.00, "Bebida")
];

const containerCardapio = document.querySelector("#cardapio");

function criarCardPrato(prato) {
  const card = document.createElement("div");
  card.className = "card-prato p-4 bg-white rounded-xl shadow-sm h-full";

  card.innerHTML = `
    <h3>${prato.nome}</h3>
    <span class="categoria">${prato.categoria}</span>
    <div class="preco">${prato.formatarPreco()}</div>
  `;

  card.addEventListener("click", () => {
    alert(
      `🍽️ ${prato.nome}\n\n` +
      `Categoria: ${prato.categoria}\n` +
      `Preço: ${prato.formatarPreco()}`
    );
  });
  return card;
}

function renderizarCardapio() {
  if (!containerCardapio) return;
  containerCardapio.innerHTML = "";
  cardapio.forEach(prato => {
    const card = criarCardPrato(prato);
    containerCardapio.appendChild(card);
  });
}

renderizarCardapio();


class Bebida {
  constructor(nome, preco, volume) {
    this.nome = nome;
    this.preco = preco;
    this.volume = volume;
  }

  descricao() {
    return `${this.nome} - ${this.volume}ml - R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  emLitros() {
    const litros = this.volume / 1000;
    return `${litros.toFixed(2)}L`;
  }
}

const cocaCola = new Bebida("Coca-Cola", 8.00, 600);
const suco = new Bebida("Suco de Polpa", 10.00, 500);
const agua = new Bebida("Água Mineral", 3.00, 400);

const listaBebidas = [cocaCola, suco, agua];

console.log("=== Teste Atividade 1 (descrição) ===");
listaBebidas.forEach(b => console.log(b.descricao()));

console.log("=== Teste Atividade 2 (emLitros) ===");
listaBebidas.forEach(b => console.log(`${b.nome} -> ${b.emLitros()}`));


const containerBebidas = document.querySelector("#lista-bebidas");

function criarCardBebida(bebida) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `<p>${bebida.descricao()}</p>`;

  card.addEventListener("click", () => {
    alert(`🥤 ${bebida.nome}\nVolume: ${bebida.emLitros()}`);
  });

  return card;
}

function renderizarBebidas(lista) {
  if (!containerBebidas) return;
  containerBebidas.innerHTML = ""; // Limpa o container antes de desenhar

  lista.forEach(bebida => {
    const card = criarCardBebida(bebida);
    containerBebidas.appendChild(card);
  });
}

renderizarBebidas(listaBebidas);


const inputFiltro = document.querySelector("#filtro");

if (inputFiltro) {
  inputFiltro.addEventListener("input", (e) => {
    const termoBusca = e.target.value.toLowerCase();

    const bebidasFiltradas = listaBebidas.filter(bebida =>
      bebida.nome.toLowerCase().includes(termoBusca)
    );

    renderizarBebidas(bebidasFiltradas);
  });
}