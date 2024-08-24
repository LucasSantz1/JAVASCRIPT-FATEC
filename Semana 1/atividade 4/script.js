function verificarTipoDado() {
    let dado = prompt("Por favor, insira um novo dado:");
    let confirmarVerificacao = confirm("Gostaria de verificar o tipo do dado informado?");
    
    if (confirmarVerificacao) {
        if (!isNaN(parseFloat(dado))) {
            dado = parseFloat(dado);
        } else if (dado.toLowerCase() === "true" || dado.toLowerCase() === "false") {
            dado = (dado.toLowerCase() === "true");
        }
        
        alert("O tipo do dado informado é: " + typeof dado);
    } else {
        alert("Operação cancelada pelo usuário.");
    }
}

verificarTipoDado();

