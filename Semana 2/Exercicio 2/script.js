function atualizaRelogio() {
    const data = new Date();
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
    document.getElementById('relogio').innerText = `${horas}:${minutos}:${segundos}`;
    setTimeout(atualizaRelogio, 1000);
}

atualizaRelogio();
