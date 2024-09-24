(function() {
    // Função para criar um cartão de pergunta
    function criaCartao(categoria, pergunta, resposta) {
        const container = document.getElementById('container');
        const cartao = document.createElement('article');
        cartao.className = 'cartao';

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>${categoria}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta}</p>
                </div>
                <div class="cartao__conteudo__resposta">
                    <p>${resposta}</p>
                </div>
            </div>
        `;

        let respostaEstaVisivel = false;

        // Função para virar o cartão ao ser clicado
        function viraCartao() {
            respostaEstaVisivel = !respostaEstaVisivel;
            cartao.classList.toggle('active', respostaEstaVisivel);
        }

        cartao.addEventListener('click', viraCartao);
        container.appendChild(cartao);
    }

    // Torna a função criaCartao global para uso em perguntas.js
    window.criaCartao = criaCartao;
})();
