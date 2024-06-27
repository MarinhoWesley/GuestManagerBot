document.addEventListener('DOMContentLoaded', function () {
    // Menu de Navegação Responsivo
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function () {
        mainNav.querySelector('ul').classList.toggle('showing');
    });

    // Validação do Formulário de Contato
    const form = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validação básica
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (!name || !email || !message) {
            formMessages.textContent = 'Todos os campos são obrigatórios!';
            formMessages.style.color = 'red';
            return;
        }

        formMessages.textContent = 'Mensagem enviada com sucesso!';
        formMessages.style.color = 'green';

        // Limpar o formulário
        form.reset();
    });

    // Animações ao Rolagem
    const scrollElements = document.querySelectorAll('.scroll-element');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Interação dos Planos de Preços
    const pricingCards = document.querySelectorAll('.pricing-card');
    const planDetails = document.getElementById('plan-details');
    const planDetailsText = document.getElementById('plan-details-text');

    function updatePrice(plan, type) {
        const priceElement = document.querySelector(`#plan-${plan} .price strong`);
        const detailsElement = document.querySelector(`#plan-${plan} .price + p`);

        switch (plan) {
            case 'basic':
                if (type === 'monthly') {
                    priceElement.textContent = '€99';
                    detailsElement.textContent = 'por mês';
                } else {
                    priceElement.textContent = '€990';
                    detailsElement.textContent = 'por ano (10% de desconto)';
                }
                break;
            case 'intermediate':
                if (type === 'monthly') {
                    priceElement.textContent = '€139';
                    detailsElement.textContent = 'por mês';
                } else {
                    priceElement.textContent = '€1500';
                    detailsElement.textContent = 'por ano (10% de desconto)';
                }
                break;
            case 'advanced':
                if (type === 'monthly') {
                    priceElement.textContent = '€169';
                    detailsElement.textContent = 'por mês';
                } else {
                    priceElement.textContent = '€1800';
                    detailsElement.textContent = 'por ano (10% de desconto)';
                }
                break;
            default:
                break;
        }
    }

    pricingCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            pricingCards.forEach(card => card.classList.remove('selected'));
            card.classList.add('selected');

            const plan = card.id.split('-')[1];
            switch (plan) {
                case 'basic':
                    planDetailsText.textContent = 'Plano Básico: Funcionalidades básicas, poucas personalizações e um idioma.';
                    break;
                case 'intermediate':
                    planDetailsText.textContent = 'Plano Intermediário: Mais funcionalidades, personalização e três idiomas.';
                    break;
                case 'advanced':
                    planDetailsText.textContent = 'Plano Avançado: Automação interna para funcionários, todas as funcionalidades avançadas e multilinguagem.';
                    break;
                default:
                    planDetailsText.textContent = '';
            }
        });
    });

    // Definir plano intermediário como selecionado por padrão
    document.getElementById('plan-intermediate').classList.add('selected');
});
