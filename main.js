const form = document.getElementById('form-campos')
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

function validaFormulario(CampoAf, CampoBf){
    const campoAMenosCampoB = CampoAf - CampoBf;
    return campoAMenosCampoB < 0;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const mensagemSucesso = `Parabéns! O campo A, com valor <b>${campoA.value}</b> é menor que o campo B, com valor <b>${campoB.value}</b>`

    formEValido = validaFormulario(campoA.value, campoB.value)
    if (formEValido) {
        const conatinerMensagemSucesso = document.querySelector('.success-message')
        conatinerMensagemSucesso.innerHTML = mensagemSucesso;
        conatinerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'none';
        campoB.style.border = '';

    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';

        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.style.display = 'none';

    }
})
