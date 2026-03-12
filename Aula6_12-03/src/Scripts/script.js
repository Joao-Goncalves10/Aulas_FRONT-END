const botoesCompra = document.querySelectorAll('.bt_pedido')

const terceiroCard = document.querySelector('.card:nth-child(3)')

const imagem_Lasanha = document.querySelector('#foto_destaque')

const card_lasanha = document.querySelector('.card:nth-child(1)')

imagem_Lasanha.alt = "Produto Esgotado"
imagem_Lasanha.src = "./src/Images/MASSAS_Lasanha_Sushi_obsoleto.png"

const tituloPizza = document.querySelector("#Titulo_pizza");
tituloPizza.style.color = "#685a5a"

card_lasanha.classList.add('fora_estoque')

const botao_Lasanha = card_lasanha.querySelector('.bt_pedido');
botao_Lasanha.style.backgroundColor = "#b4b4b4"
botao_Lasanha.style.color = "#313131"
botao_Lasanha.style.boxShadow = "none"
botao_Lasanha.style.transform = "scale(1.01)"
botao_Lasanha.style.cursor = "not-allowed"

const preco_Lasanha = card_lasanha.querySelector('.preco');
preco_Lasanha.style.color = "#787878"