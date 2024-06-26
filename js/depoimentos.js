document.addEventListener("DOMContentLoaded", function () {
    // Garantir que o carregamento seja exibido por pelo menos 5 segundos
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
    }, 3000); // 5000 milissegundos = 5 segundos
});
document.addEventListener("DOMContentLoaded", function () {
    let depoimentos = document.querySelectorAll('.secao-depoimentos .depoimento');
    let index = 0;

    function showDepoimento(i, showAll = false) {
        depoimentos.forEach(function (depoimento) {
            depoimento.style.display = showAll ? 'block' : 'none';
        });
        if (!showAll) {
            depoimentos[i].style.display = 'block';
        }
    }

    function nextDepoimento() {
        index++;
        if (index >= depoimentos.length) {
            index = 0;
        }
        showDepoimento(index);
    }

    function checkScreenSize() {
        let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
        if (isMobile) {
            showDepoimento(index);
            let btnNext = document.querySelector('.secao-depoimentos button');
            if (!btnNext) {
                btnNext = document.createElement('button');
                btnNext.innerHTML = ''; // Adiciona o ícone de seta
                btnNext.addEventListener('click', nextDepoimento);
                document.querySelector('.secao-depoimentos').appendChild(btnNext);
            }
        } else {
            showDepoimento(0, true);
            let btnNext = document.querySelector('.secao-depoimentos button');
            if (btnNext) {
                btnNext.remove();
            }
        }
    }

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
});

//imagem saltando
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.secao-bonus img');

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.classList.add('hovered');
        });

        img.addEventListener('mouseleave', () => {
            img.classList.remove('hovered');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const bannerImage = document.querySelector('.banner-image');

    function checkScreenWidth() {
        if (window.innerWidth <= 430) {
            bannerImage.style.animation = 'slide 10s linear infinite';
        } else {
            bannerImage.style.animation = 'none'; // Remove a animação para telas maiores
            bannerImage.style.transform = 'translateX(0)'; // Reinicia a posição
        }
    }

    checkScreenWidth(); // Executa na carga da página

    window.addEventListener('resize', function () {
        checkScreenWidth(); // Executa ao redimensionar a janela
    });


});

