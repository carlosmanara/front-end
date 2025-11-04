const routes = {
    '/': homePage,
    '/cadastro': cadastroPage,
    '/projetos': projetosPage,
    '/quemsomos': quemSomosPage
};

function loadPage(path) {
    const pageFunction = routes[path] || routes['/'];
    const pageHTML = pageFunction();
    const app = document.getElementById('app');
    app.innerHTML = pageHTML;
    window.scrollTo(0, 0);
    reinitializeFeatures(path);
}

function reinitializeFeatures(path) {
    if (path === '/') {
        setTimeout(() => {
            setupCounterObserver();
        }, 100);
    }
    
    if (path === '/cadastro') {
        setTimeout(() => {
            applyMasks();
        }, 100);
    }
}

function applyMasks() {
    const cpfInput = document.getElementById('cpf');
    if (cpfInput && typeof IMask !== 'undefined') {
        IMask(cpfInput, {
            mask: '000.000.000-00'
        });
    }
    
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput && typeof IMask !== 'undefined') {
        IMask(telefoneInput, {
            mask: [
                { mask: '(00) 0000-0000' },
                { mask: '(00) 00000-0000' }
            ]
        });
    }
    
    const cepInput = document.getElementById('cep');
    if (cepInput && typeof IMask !== 'undefined') {
        IMask(cepInput, {
            mask: '00000-000'
        });
    }
}

function handleLinkClick(event) {
    if (event.target.matches('[data-link]') || event.target.closest('[data-link]')) {
        event.preventDefault();
        
        const link = event.target.closest('[data-link]');
        const hash = link.getAttribute('href');
        
        const path = hash.replace('#', '');
        
        window.location.hash = hash;
        
        loadPage(path);
    }
}

function handleHashChange() {
    const hash = window.location.hash || '#/';
    const path = hash.replace('#', '');
    loadPage(path);
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', handleLinkClick);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
});