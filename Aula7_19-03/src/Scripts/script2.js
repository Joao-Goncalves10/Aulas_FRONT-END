//1 - Interação (Clique): Ao clicar no botão "Curtir", incremente o número no contador de curtidas.
const btn = document.querySelector('#btn-curtir')
const contadorUsuario = document.querySelector('#contador')

let totalCurtidas = 0

btn.addEventListener('click', function() {
    totalCurtidas++
    contadorUsuario.textContent = totalCurtidas
})

//2 - Monitoramento (Input): Sempre que o usuário digitar no campo de texto, o parágrafo de "Preview" deve mostrar o texto em tempo real.
const escritaUsuario = document.querySelector('#campo-texto')
const previaUsuario = document.querySelector('#preview-texto')

escritaUsuario.addEventListener('input', function() {
    if(escritaUsuario === "") {
        previaUsuario.textContent = 'Digitando: ...'
    } else {
        previaUsuario.textContent = `Digitando: ${escritaUsuario.value}`
    }
})

//3 - Sensores (Mouse): Ao entrar com o mouse na caixa de cor, mude-a para azul. Ao sair, ela deve voltar à cor original.
const corCaixa = document.querySelector('#caixa-cor')
corCaixa.addEventListener('mouseover', function() {
    corCaixa.style.backgroundColor = '#6b8abd'
})

corCaixa.addEventListener('mouseout', function() {
    corCaixa.style.backgroundColor = '#95a5a6'
})

//4 - Desafio Extra (Reset): Crie um botão (ou use uma tecla) que limpe o input e zera o contador ao mesmo tempo.
const botaoReset = document.querySelector('#btn-reset')
botaoReset.addEventListener('click', function() {
    escritaUsuario.textContent = ''
    totalCurtidas = 0
    contadorUsuario.textContent = '0'
})