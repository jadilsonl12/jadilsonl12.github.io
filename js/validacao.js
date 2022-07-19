function validarEmail(email) {
    var email = document.getElementById("email").value;
    var erroEmail = document.getElementById("erroEmail");
    if (email.indexOf("@") == -1) {
        erroEmail.innerHTML = '<p> Email Inválido, "@" não encontrado</p>';
        return false;
    }
    else {
        var textoAntes = "";
        var textoDepois = "";
        var texto = email.split("@");
        textoAntes = texto[0];
        textoDepois = texto[1];
        if (textoAntes.length < 3) {
            erroEmail.innerHTML = '<p> Email Inválido, o nome deve ter mais de 3 caracteres</p>';
            return false;
        } else if (textoDepois.indexOf(".") == -1) {
            erroEmail.innerHTML = '<p> Email Inválido, não foi detectado o "."</p>';
            return false;
        } else {
            erroEmail.innerHTML = '';
            return true;
        }
    }
}

function validarNomeUsuario(nomeUsuario) {
    var nomeUsuario = document.getElementById("nomeUsuario").value;
    var erroNomeUsuario = document.getElementById("erroNomeUsuario");
    if (nomeUsuario.length < 3) {
        erroNomeUsuario.innerHTML = '<p> Nome de Usuário Inválido, o nome deve ter mais de 3 caracteres</p>';
        return false;
    } else {
        erroNomeUsuario.innerHTML = '';
        return true;
    }
}

function validarSenha(senha) {
    var senha = document.getElementById("senha").value;
    var erroSenha = document.getElementById("erroSenha");
    if (senha.length < 8) {
        erroSenha.innerHTML = '<p> Senha Inválida, a senha deve ter mais de 8 caracteres</p>';
        return false;
    } else {
        erroSenha.innerHTML = '';
        return true;
    }
}

function validarCadastro() {

    var email = document.querySelector('#email');
    var nomeUsuario = document.querySelector('#nomeUsuario');
    var senha = document.querySelector('#senha');
    var emailValido = validarEmail(email.value)
    var nomeUsuarioValido = validarNomeUsuario(nomeUsuario.value)
    var senhaValida = validarSenha(senha.value)

    var erro = !emailValido || !nomeUsuarioValido || !senhaValida;

    if (!erro) {
        var form = document.querySelector('.form');
        form.style.display = 'none';
        var sucesso = document.querySelector('.cadastro-sucesso');
        sucesso.style.display = 'block';
    }

    return false;
}
