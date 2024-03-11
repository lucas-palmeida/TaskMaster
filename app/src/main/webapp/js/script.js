function validarForm() {
    var titulo = document.getElementsByName('titulo')[0].value;
    var descricao = document.getElementsByName('descricao')[0].value;
    var dia = document.getElementsByName('dia')[0].value;
    var hora = document.getElementsByName('hora')[0].value;

    // Verifica se o título tem entre 5 e 100 caracteres
    if (titulo.length < 5 || titulo.length > 100) {
        alert("O título deve ter entre 5 e 100 caracteres.");
        return false;
    }

    // Verifica se a descrição tem entre 5 e 400 caracteres
    if (descricao.length < 5 || descricao.length > 400) {
        alert("A descrição deve ter entre 5 e 400 caracteres.");
        return false;
    }

    // Verifica se a data é superior à data atual
    if (new Date(dia) < new Date()) {
        alert("A data deve ser superior à data atual.");
        return false;
    }

    // Verifica se a hora é superior à hora atual
    if (new Date().toLocaleTimeString() > hora) {
        alert("A hora deve ser superior à hora atual.");
        return false;
    }

    return true;
}