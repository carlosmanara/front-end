// função que anima o contador
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    let current = 0;
    const increment = target / 100;

    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current).toLocaleString('pt-BR');

        if (current >= target) {
            element.textContent = '+' + target.toLocaleString('pt-BR');
            clearInterval(timer);
        }
    }, 10);
}

// Observador de scroll
function setupCounterObserver() {
    const counters = document.querySelectorAll('.numbers');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.7
    });
        counters.forEach(counter => {
            observer.observe(counter);
        });
}

document.addEventListener('DOMContentLoaded', setupCounterObserver);