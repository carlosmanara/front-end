document.addEventListener('DOMContentLoaded', function() {

    // MÁSCARA DE CPF
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        IMask(cpfInput, {
            mask: '000.000.000-00'
        });
    }

    // MÁSCARA DE TELEFONE (FIXO E CELULAR)
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        IMask(telefoneInput, {
            mask: [
                {
                    mask: '(00) 0000-0000'
                },
                {
                    mask: '(00) 00000-0000'
                }
            ]
        });
    }

    // MÁSCARA DE CEP
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        IMask(cepInput, {
            mask: '00000-000'
        });
    }

    console.log('Máscaras aplicadas com sucesso!');

});