$(document).ready(function() {

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            mensagem: {
                required: false
            }
        }, 
        messages: {
            nomeCompleto: 'Esse campo é obrigatório',
            email: 'Esse campo é obrigatório',
            telefone: 'Esse campo é obrigatório',
            cpf: 'Esse campo é obrigatório',
            endereco: 'Esse campo é obrigatório',
            cep: 'Esse campo é obrigatório'
        },
        submitHandler: function(form) {
            alert(`Formulário enviado com suceesso!`)
            form.reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})  