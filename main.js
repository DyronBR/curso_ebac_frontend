$(document).ready(function() {
    $('#formulario-tarefas').submit(function(event) {
        event.preventDefault();

        const NomeTarefa = $('#nome-tarefa').val();
        const listaItem = $('<li></li>').html(NomeTarefa);

        listaItem.appendTo('#lista-tarefas');

        $('#nome-tarefa').val('');
    });

    $('#lista-tarefas').on('click', 'li', function(e) {
        $(this).toggleClass('risco');
    });
});
