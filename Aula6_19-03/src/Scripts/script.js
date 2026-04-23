//1 - Identidade: Selecione o #nome-usuario e mude o texto para o seu nome completo.
const nomeUsuario = document.querySelector('#nome-usuario')
nomeUsuario.textContent = 'João Lucas de Campos'


//2 - Avatar: Troque o src da foto de perfil por uma URL de imagem real.
const imagemUsuario = document.querySelector('#foto-perfil')
imagemUsuario.src = "https://i.pinimg.com/736x/6a/70/b7/6a70b738ad0f5c75687a12112fe29922.jpg"


//3 - Personalização: Altere a cor de fundo do #container-perfil através do JavaScript.
const fundoUsuario = document.querySelector('#container-perfil')
fundoUsuario.style.backgroundColor = '#b7ccd5'


//4 - Status Real: Adicione a classe .online ao #badge-status e mude o texto para "Status: Ativo".
const statusUsuario = document.querySelector('#badge-status')
statusUsuario.textContent = 'Online'
statusUsuario.classList.add('online')


//5 - Auditoria: Use querySelectorAll para contar quantas skills o usuário possui e exiba o total no console.
const skillsUsuario = document.querySelectorAll('.skill')
const totalSkills = skillsUsuario.length
console.log("O usuário possui um total de " + totalSkills + " skills.")