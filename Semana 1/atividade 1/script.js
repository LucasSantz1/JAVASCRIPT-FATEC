function verificarParidade(numero) {
    if (numero >= 0) {
        if (numero % 2 === 0) {
            alert("Este número é par!");
        } else {
            alert("Este número é ímpar!");
        }
    } else {
        alert("Este número é negativo!");
    }
}

let numero = parseFloat(prompt("Digite um número:"));
verificarParidade(numero);
