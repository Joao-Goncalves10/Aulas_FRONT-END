// Exercício 1: Personalizador de Acesso ----------------------------------------------------

const primeiroNome = prompt("Digite seu nome:").trim();
const sobrenome = prompt("Digite seu sobrenome:").trim();

let nomeCompleto = (primeiroNome + " " + sobrenome).trim();

alert(nomeCompleto.toLowerCase());

alert("Seu nome possui " + nomeCompleto.length + " caracteres.");

// Exercício 2: Calculadora de Divisão de Conta ---------------------------------------------

const valorConta = prompt("Informe o valor total da conta:");
const numPessoas = prompt("Quantas pessoas dividirão a conta?");

const valorPorPessoa = valorConta / numPessoas;

alert("Cada pessoa deverá pagar R$ " + valorPorPessoa.toFixed(2));

// Exercício 3: Validador de Promoção -------------------------------------------------------

const valorCompra = (prompt("Qual o valor da sua compra?"));
const temCupom = prompt("Você tem um cupom de desconto? (sim/não)");

if (valorCompra > 150 || temCupom.toLowerCase() === "sim") {
    alert("Frete Grátis Liberado");
} else {
    alert("Frete Pago");
}

// Exercício 4: Sorteador de Brindes -------------------------------------------------------

const numeroUsuario = prompt("Escolha um número de 1 a 10:");
const numeroSorteado = Math.floor(Math.random() * 10) + 1;

if (numeroUsuario === numeroSorteado) {
    alert("Parabéns, você ganhou um brinde!");
} else {
    alert("Que pena, o número sorteado foi " + numeroSorteado);
}

// Exercício 5: Gestão de Frota ------------------------------------------------------------

class Veiculo {
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }

    idadeVeiculo(anoAtual) {
        return anoAtual - this.ano;
    }
}

const meuVeiculo = new Veiculo("Corolla", "Toyota", 2020);

const anoAtual = prompt("Qual é o ano atual?");

const idade = meuVeiculo.idadeVeiculo(anoAtual);
alert("Modelo: " + meuVeiculo.modelo + " | Idade do carro: " + idade + " anos");
