class Prato {
  constructor(nome, preco, categoria) {
    this.nome   = nome;
    this.preco  = preco;
    this.categoria = categoria;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`
  }

  aplicarDescontos(percentual){
    this.preco = this.preco * (1 - percentual / 100)
  }
};

const cardapio = [
  new Prato("Feijoada completa", 42.90, "Prato Principal"),
  new Prato("Moqueca de peixe", 58.00, "Prato Principal"),
  new Prato("Coxinha Artesanal", 8.50, "Petisco"),
  new Prato("Brigadeiro Gourmet", 6.00 , "Sobremesa"),
  new Prato("Suco de Maracujá", 12.00 ,"Bebida")
]

cardapio.forEach(p => {
  console.log(`${p.nome} -> ${p.formatarPreco()}`)
})

//DOM
const containerCardapio = document.querySelector("#cardapio")

function criarCardPrato(prato) {
  const card = document.createElement("div")
  card.className = 'card'

  card.innerHTML = `
  <h3>${prato.nome}</h3>
  <span class="categoria">${prato.categoria}</span>
  <div class="preco">${prato.formatarPreco()}</div>
  `

  card.addEventListener('click', () => {
    alert(
      `🍽️ ${prato.nome} \n\n` + //para pular linha
      `Categoria: ${prato.categoria}` +
      `Preço: ${prato.formatarPreco()}`
    )
  })
  return card
}

function renderizarCardapio(){
  containerCardapio.innerHTML = ""

  cardapio.forEach(prato => {
    const card = criarCardPrato(prato)
    containerCardapio.appendChild(card)
  })
}

renderizarCardapio()

class Bebida{
  constructor(nome, preco, volume) {
    this.nome = nome;
    this.preco = preco;
    this.volume = volume
  }
  descrição(){
    return `${this.nome} - ${this.volume} - R$ ${this.preco.toFixed(2)}`
  }

  emLitros(){
    const litros = this.volume / 1000;
    return `${litros.toFixed(2)}L`
  }
}

const CocaCola = new Bebida ("Coca-Cola", 8.00, 600);
const suco = new Bebida ("Suco da Polpa", 10.00, 500);
const agua = new Bebida ("Agua Mineral", 3.00, 400)

console.log("=== Bebidas (descrição) ===")
console.log(`${CocaCola.nome} -> ${CocaCola.emLitros()} - ${CocaCola.preco}`)
console.log(`${suco.nome} -> ${suco.emLitros()} - ${suco.preco}`)
console.log(`${agua.nome} -> ${agua.emLitros()} - ${agua.preco}`)

const listaBebidas = [CocaCola, suco, agua]
const container = document.querySelector("#listaBebidas");

function criarCardBebida(bebida) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
  <h3>${bebida.nome}</h3>
  <`
}