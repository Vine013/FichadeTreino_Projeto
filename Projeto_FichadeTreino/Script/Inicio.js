document.addEventListener("DOMContentLoaded", function() {

    // Função para obter parâmetros da URL
    function getURLParameter(nome) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(nome);
    }

    // Obtém o valor de "nick" da URL ou do localStorage
    let nick = getURLParameter('nick') || localStorage.getItem('nick');

    // Se o "nick" não estiver definido, string vazia
    nick = nick || '';

    // Exibe o "nick" na página
    const nickElement = document.getElementById('nick');
    nickElement.textContent = `Seja Bem-vindo, ${nick}!`;

    // Armazena o valor do "nick" no localStorage, se ele estiver definido na URL
    if (getURLParameter('nick')) {
        localStorage.setItem('nick', nick);
    }
});
