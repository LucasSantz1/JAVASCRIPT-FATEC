function verificaPalindromo() {
    let texto = document.getElementById('texto').value;
    texto = texto.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/gi, '');
    const textoReverso = texto.split('').reverse().join('');
    if (texto === textoReverso) {
        alert('É um palíndromo!');
    } else {
        alert('Não é um palíndromo.');
    }
}
