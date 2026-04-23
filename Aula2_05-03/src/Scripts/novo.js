const tituloNhoque = document.querySelector('#card-nhoque h3')

const botoesCompra = document.querySelectorAll('.btn-pedido')

const quartoCard = document.querySelector('.card:nth-child(4)')

console.log('1. Mostrando o titulo NHOQUE (pelo ID)', tituloNhoque)

console.log('2. Quantidade de botões de pedido: ', botoesCompra)

console.log('3. O quarto.card de uma class: ', quartoCard)

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas_vindas')

saudacao.textContent = hora < 18 ? "Bem vindo, boa tarde." : "Bem vindo, boa noite."