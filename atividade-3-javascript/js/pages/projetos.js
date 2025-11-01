function projetosPage() {
    return `
        <section class="secao-projetos">
            <h1 class="title">Nossos Projetos</h1>

            <div class="container-projetos">
                <img src="imagens/nossos-projetos.jpg" alt="Voluntárias sentadas junto de cães que estão sob os cuidados da Amigo Fiel" class="foto-maior">
                
                <div class="texto-foto">
                    <p><strong>A ONG Amigo Fiel desenvolve diversas iniciativas para transformar a vida dos animais abandonados:</strong></p>
                    
                    <article class="projeto-item">
                        <h3>Projeto Lar Temporário</h3>
                        <p>Voluntários abrem suas casas para acolher pets resgatados enquanto aguardam adoção, proporcionando amor e socialização.</p>
                    </article>

                    <article class="projeto-item">
                        <h3>Campanha Castração Solidária</h3>
                        <p>Realizamos mutirões de castração gratuita para controlar a população de animais de rua e prevenir o abandono.</p>
                    </article>

                    <article class="projeto-item">
                        <h3>Programa Adote um Vovô</h3>
                        <p>Dedicado a encontrar lares amorosos para animais idosos, que muitas vezes são esquecidos nos abrigos.</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="secao-ajuda">
            <h2 class="title">Como Você Pode Ajudar</h2>

            <div class="container-projetos">
                <img src="imagens/como-ajudar.jpg" alt="Pessoas doando itens e ajudando animais da ONG Amigo Fiel" class="foto-maior">
                
                <div class="texto-foto">
                    <article class="ajuda-item">
                        <h3>Faça uma Doação</h3>
                        <p>Contribua com ração, medicamentos ou recursos financeiros. Cada centavo se transforma em cuidado e esperança para nossos resgates.</p>
                    </article>

                    <article class="ajuda-item">
                        <h3>Seja Voluntário</h3>
                        <p>Participe dos nossos projetos! Precisamos de pessoas para passeios, socialização, eventos de adoção, transporte e muito mais.</p>
                    </article>

                    <p class="chamada-final">Juntos, salvamos vidas e construímos um futuro melhor para os animais. Sua participação faz toda a diferença!</p>
                </div>
            </div>
        </section>

        <div class="text-center" style="margin: 40px 0;">
            <a href="#/" data-link class="btn-home">Voltar para Home</a>
        </div>
    `;
}