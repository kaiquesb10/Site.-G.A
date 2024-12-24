// Script para o menu desaparecer ao rolar e aparecer ao passar o mouse

let lastScrollTop = 0; // Guarda a última posição do scroll
const menu = document.getElementById('menu');

// Detecta quando o usuário rola a página
let isScrolled = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50 && !isScrolled) {
        header.classList.add('scrolled');
        isScrolled = true;
    } else if (window.scrollY <= 50 && isScrolled) {
        header.classList.remove('scrolled');
        isScrolled = false;
    }
});

// Adiciona o efeito de mostrar o menu ao passar o mouse
menu.addEventListener('mouseenter', () => {
    menu.classList.remove('hidden');
});
menu.addEventListener('mouseleave', () => {
    // Não fazer nada ao sair do menu (o scroll controla o visível)
});

// Animação de aparecimento gradual da Seção 7
document.addEventListener("DOMContentLoaded", () => {
    const section7 = document.querySelector('.section-7'); // Seleciona a Seção 7

    // Cria um observer para monitorar a visibilidade
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section7.classList.add('visible'); // Adiciona a classe visible
            }
        });
    }, { threshold: 0.1 }); // Ativa quando 10% da seção está visível

    observer.observe(section7); // Observa a Seção 7
});

// Script para o menu hambúrguer
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle'); // Ícone do menu hambúrguer
    const menuItems = document.getElementById('menu-items'); // Itens do menu

    menuToggle.addEventListener('click', () => {
        menuItems.classList.toggle('show'); // Alterna a exibição dos itens do menu
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const section7 = document.querySelector('.section-7'); // Seleciona a Seção 7
    section7.classList.add('visible'); // Força a visibilidade da seção diretamente sem usar o IntersectionObserver
});

// Interatividade dos Cards Flutuantes
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach(card => {
        const btn = card.querySelector('.expand-btn');
        const content = card.querySelector('.expandable-content');
        
        btn.addEventListener('click', () => {
            card.classList.toggle('expanded');
            if (card.classList.contains('expanded')) {
                btn.textContent = 'Ver menos';
            } else {
                btn.textContent = 'Saiba mais';
            }
        });

        // Efeito de paralaxe no hover
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.querySelector('.card-content').style.transform = 
                `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        // Reset da posição
        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-content').style.transform = 
                'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
});

