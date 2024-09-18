function alternarCampos() {
    var camposDiv = document.getElementById('campos_especificos');
    camposDiv.innerHTML = "";

    var tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;

    var camposPorTipoUsuario = {
        'Aluno': [
            { label: 'Curso:', id: 'curso', placeholder: 'Digite seu curso' },
            { label: 'Matrícula (10 dígitos):', id: 'matricula', placeholder: 'Digite sua matrícula' }
        ],
        'Professor': [
            { label: 'Área:', id: 'area', placeholder: 'Digite sua área de atuação' },
            { label: 'Lattes:', id: 'lattes', placeholder: 'Digite seu link Lattes' },
            { label: 'Matrícula (5 dígitos):', id: 'matricula', placeholder: 'Digite sua matrícula' }
        ]
    };

    var campos = camposPorTipoUsuario[tipoUsuario];

    for (var i = 0; i < campos.length; i++) {
        var campo = campos[i];

        var label = document.createElement('label');
        label.setAttribute('for', campo.id);
        label.textContent = campo.label;

        var input = document.createElement('input');
        input.type = 'text';
        input.id = campo.id;
        input.name = campo.id;
        input.placeholder = campo.placeholder;
        input.setAttribute('onblur', "validarCampo('" + campo.id + "')");

        camposDiv.appendChild(label);
        camposDiv.appendChild(input);
    }
}

function validarCampo(id) {
    var campo = document.getElementById(id);
    var valor = campo.value.trim();
    var erroDiv = document.getElementById(id + "_erro");

    if (!erroDiv) {
        erroDiv = document.createElement('div');
        erroDiv.id = id + "_erro";
        campo.parentNode.insertBefore(erroDiv, campo.nextSibling);
    }

    if (valor === "") {
        erroDiv.textContent = "Este campo é obrigatório.";
        erroDiv.style.color = "red";
        return false;
    } else {
        erroDiv.textContent = "";
        return true;
    }
}

function formatarTelefone(campo) {
    var valor = campo.value.replace(/\D/g, "");

    if (valor.length > 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    }

    campo.value = valor;
}

function validarFormulario() {
    var camposObrigatorios = ['nome', 'email', 'data_nascimento'];
    var formularioValido = true;

    for (var i = 0; i < camposObrigatorios.length; i++) {
        var id = camposObrigatorios[i];
        if (!validarCampo(id)) {
            formularioValido = false;
        }
    }

    var tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;

    var camposPorTipoUsuario = {
        'Aluno': ['curso', 'matricula'],
        'Professor': ['area', 'lattes', 'matricula']
    };

    var camposExtras = camposPorTipoUsuario[tipoUsuario];

    for (var i = 0; i < camposExtras.length; i++) {
        var id = camposExtras[i];
        if (!validarCampo(id)) {
            formularioValido = false;
        }
    }

    return formularioValido;
}

window.onload = function() {
    alternarCampos();
};
