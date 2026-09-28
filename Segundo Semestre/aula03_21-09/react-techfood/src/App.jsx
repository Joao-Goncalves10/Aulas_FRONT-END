import Header from "./components/Header"
import CardPrato from "./components/CardPrato"
import Footer from "./components/Rodape"

const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 41.90,
    categoria: "prato principal",
    descricao: "Feijoada completa com arroz, farofa e couve."
  },

  {
    id: 2,
    nome: "Moqueca",
    preco: 49.90,
    categoria: "prato principal",
    descricao: "Moqueca de peixe com dendê e leite de coco."
  },

  {
    id: 3,
    nome: "Pudim",
    preco: 15.00,
    categoria: "sobremesa",
    descricao: "Pudim de leite condensado com calda de caramelo."
  },

  {
    id: 4,
    nome: "Brownie",
    preco: 7.50,
    categoria: "sobremesa",
    descricao: "Brownie de chocolate com nozes."
  },

  {
    id: 5,
    nome: "Suco de Laranja",
    preco: 9.90,
    categoria: "bebida",
    descricao: "Suco natural de laranja espremida na hora."
  }
]

function App() {
  return (
    <main className="app">
      <Header tagline="O melhor sabor com o toque da tecnologia e da educação!" />

      <h2>Nosso Menu</h2>
      <p ClassName="total-itens">Cardápio com {cardapio.length} itens</p>
      
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
          />
        ))}
      </section>
      <Footer />
    </main>
  )
}

export default App