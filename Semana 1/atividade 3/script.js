function calcularFatorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

function exibirFatorial() {
    let numero = parseInt(prompt("Digite um número:"));
    alert("O fatorial de " + numero + " é " + calcularFatorial(numero));
}

exibirFatorial();
