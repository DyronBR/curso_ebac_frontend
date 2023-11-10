$(document).ready(function() {
    $('#formulario-tarefas').submit(function(event) {
        event.preventDefault();

        const NomeTarefa = $('#nome-tarefa').val();
        const listaItem = $('<li></li>').text(NomeTarefa);

        $('#lista-tarefas').append(listaItem);

        $('#nome-tarefa').val('');
    });

    $('#lista-tarefas').on('click', 'li', function(e) {
        $(this).toggleClass('risco');
    });
});
