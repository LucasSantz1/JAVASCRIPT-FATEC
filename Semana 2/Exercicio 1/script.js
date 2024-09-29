function formataData() {
    const data = new Date();
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const mesesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = mesesAno[data.getMonth()];
    const ano = data.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

document.getElementById('data').innerText = formataData();
