const form = document.querySelector('.name-container');
const tableBody = document.querySelector('tbody');
const nameInput = document.getElementById('nome-atividade');
const telefoneInput = document.getElementById('telefone');
const nameError = document.getElementById('name_error');
const telError = document.getElementById('tel_error');
const successMessage = document.getElementById('success_message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Função para validar campos de entrada
    function validateInput(input, errorElement, errorMessage) {
        if (input.value.trim() === '') {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }

    // Função para validar o campo de telefone com uma expressão regular
    function validateTelefone(input, errorElement) {
        const telefonePattern = /^[0-9]{10}$/;
        if (!telefonePattern.test(input.value)) {
            errorElement.textContent = 'Telefone inválido. Use apenas números (10 dígitos).';
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }

    // Validar campos de entrada
    const isNameValid = validateInput(nameInput, nameError, 'Nome é obrigatório.');
    const isTelValid = validateInput(telefoneInput, telError, 'Telefone é obrigatório.') && validateTelefone(telefoneInput, telError);

    // Se algum campo não for válido, interrompa a execução
    if (!isNameValid || !isTelValid) {
        return;
    }

    // Criar uma nova linha na tabela
    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const telCell = document.createElement('td');

    nameCell.textContent = nameInput.value;
    telCell.textContent = telefoneInput.value;

    newRow.appendChild(nameCell);
    newRow.appendChild(telCell);

    tableBody.appendChild(newRow);

    // Limpar os valores dos campos de entrada
    nameInput.value = '';
    telefoneInput.value = '';

    // Exibir mensagem de sucesso na página
    successMessage.textContent = 'Contato adicionado com sucesso!';
});

// Limpar a mensagem de sucesso após alguns segundos
setTimeout(() => {
    successMessage.textContent = '';
}, 3000); // Limpar a mensagem após 3 segundos 