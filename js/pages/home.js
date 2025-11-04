function homePage() {
    return `
        <section class="banner" aria-label="Banner principal">
            <img src="imagens/foto-banner.jpg" alt="Cães e gatos resgatados pela ONG Amigo Fiel" class="banner-img">
        </section>

        <section class="conquistas">
            <h1 class="title">Tudo começou em 2010 e nossos trabalhos não param!</h1>
            
            <div class="container">
                <div class="cartao">
                    <p class="numbers" data-target="3000">0</p>
                    <p>ANIMAIS RESGATADOS</p>
                </div>
                
                <div class="cartao">
                    <p class="numbers" data-target="500">0</p>
                    <p>ENCONTRARAM UM LAR</p>
                </div>
                
                <div class="cartao">
                    <p class="numbers" data-target="2000">0</p>
                    <p>CASTRAÇÕES REALIZADAS</p>
                </div>
            </div>
        </section>

        <section class="atividades">
            <h2 class="title">Confira nossas atividades e projetos</h2>
            
            <div class="container">
                <a href="#/quemsomos" data-link class="text-center">
                    <article class="cartao">
                        <img src="imagens/projeto.jpg" alt="Cachorro atrás das grades do canil" class="foto">
                        <h3 class="title">Nos conheça melhor</h3> 
                        <p>Importantes ações são tomadas a todo momento para dar mais conforto e uma vida digna para nossos queridos Pets.</p>
                    </article>
                </a>

                <a href="#/cadastro" data-link class="text-center">
                    <article class="cartao">
                        <img src="imagens/voluntario.jpg" alt="Mulher acariciando um cachorro" class="foto">
                        <h3 class="title">Seja um voluntário</h3>
                        <p>A demanda é grande, toda ajuda é bem vinda. Venha trabalhar conosco nessa empreitada muito gratificante!</p>
                    </article>
                </a>

                <a href="#/projetos" data-link class="text-center">
                    <article class="cartao">
                        <img src="imagens/doacao.jpg" alt="Produtos de limpeza dentro de um balde" class="foto">
                        <h3 class="title">Projetos e doações</h3> 
                        <p>Confira nossas atividades e como você pode ajudar a melhorar a vida de nossos amiguinhos.</p>
                    </article>
                </a>
            </div>
        </section>
    `;
}