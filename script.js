const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const displayTotal = document.getElementById('display-total');
const btnZap = document.getElementById('btn-zap');

function calcular() {
    let total = 0;
    let selecionados = [];

    checkboxes.forEach(item => {
        if (item.checked) {
            total += parseFloat(item.value);
            selecionados.push(item.getAttribute('data-name'));
        }
    });

    displayTotal.innerText = `R$ ${total}`;

    // Configuração da mensagem do WhatsApp
    const fone = "5548991750255";
    const saudacao = "Olá Jessy! Vi seu site e quero agendar:";
    const lista = selecionados.length > 0 ? "\n✅ " + selecionados.join("\n✅ ") : " (Escolha um serviço)";
    const textoFinal = `${saudacao}\n${lista}\n\n*Total: R$ ${total}*\nComo está sua agenda?`;

    // Atualiza o link do botão
    const linkFinal = `https://api.whatsapp.com/send?phone=${fone}&text=${encodeURIComponent(textoFinal)}`;
    btnZap.href = linkFinal;
}

// Escuta cada clique nos quadradinhos
checkboxes.forEach(item => {
    item.addEventListener('change', calcular);
});
