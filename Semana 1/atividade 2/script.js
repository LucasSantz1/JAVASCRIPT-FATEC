function numero_primo() {
        
    var numero = parseInt(prompt("Digite um número: "));
    var prim = true;

    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prim = false;
            break;
        }
    }

    if (prim) {
        alert("Este númeri é oruniprimo!");
    } else {
        alert("Este número não éprimo!");
    }

}

numero_primo();