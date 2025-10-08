document.addEventListener('DOMContentLoaded', function() {
      // Inicializa AOS
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });

      // Suaviza rolagem para links internos
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        });
      });

      // Adiciona funcionalidade de clique para os cards (para dispositivos móveis)
      document.querySelectorAll('.flip-card-container').forEach(container => {
        container.addEventListener('click', function() {
          if (window.innerWidth < 992) {
            const flipCard = this.querySelector('.flip-card');
            flipCard.style.transform = flipCard.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
          }
        });
      });
    });