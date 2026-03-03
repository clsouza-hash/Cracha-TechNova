const botao = document.getElementById('btn-finalizar');
const inputNome = document.getElementById('input-nome');
const inputCargo = document.getElementById('input-email');
const inputDept = document.getElementById('input-estado');
const feedback = document.getElementById('mensagem-feedback');
const titulo = document.getElementById('titulo');
const container = document.getElementById('container');


const cardNome = document.getElementById('card-nome');
const cardCargo = document.getElementById('card-cargo');
const cardDept = document.getElementById('card-dept');


botao.addEventListener('click', function() {
    
    const nomeUsuario = inputNome.value.trim();
    const cargoUsuario = inputCargo.value.trim();
    const deptTexto = inputDept.options[inputDept.selectedIndex].text;

    
    if (nomeUsuario === "") {
        alert("Por favor, digite seu nome!");
        inputNome.focus();
        return;
    }

    
    cardNome.textContent = nomeUsuario || '—';
    cardCargo.textContent = cargoUsuario || '—';
    cardDept.textContent = deptTexto || '—';


    const innerCard = document.querySelector('.inner-card');
    if (innerCard) {
        innerCard.classList.remove('design', 'development', 'default');
        const lower = deptTexto.toLowerCase();
        if (lower.includes('design')) {
            innerCard.classList.add('design');
        } else if (lower.includes('desenvolv') || lower.includes('desenvolvimento') || inputDept.value === 'Dese') {
            innerCard.classList.add('development');
        } else {
            innerCard.classList.add('default');
        }
    }

   
    feedback.textContent = "Seja bem-vindo(a), " + nomeUsuario + "!";
    titulo.textContent = "Cadastro Concluído!";
    titulo.style.color = "#9428a7";
    container.style.backgroundColor = "#d4edda";
});