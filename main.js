const form = document.getElementById('form-transf');
const valorTransf = document.getElementById('valor-transf');
const valorConta = document.getElementById('valor-conta');
let formEValido = false;

form.addEventListener('submit', function(e){
    e.preventDefault();

    parseFloat(valorTransf.value);
    parseFloat(valorConta.value);
    let resto = valorConta.value - valorTransf.value;
    const mensagemSucesso = "Montante de: " + valorTransf.value + " transferido com sucesso. Valor restante em conta de: " + resto + ".";

    formEValido = resto >= 0;
    console.log(formEValido);
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        valorTransf.value = '';
        valorConta.value = '';
        valorTransf.style.border = '';
    } else {
        valorTransf.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
})
