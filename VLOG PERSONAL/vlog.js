
    // Obtén todos los elementos con la clase 'social-link'
    var socialLinks = document.querySelectorAll('.social-link');

    // Agrega un event listener a cada enlace
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del enlace (evita la redirección)
            event.preventDefault();

            // Simula una transición antes de redirigir
            link.style.transform = 'scale(1.2)';
            setTimeout(function() {
                // Redirige a la URL del enlace después de la transición
                window.location.href = link.href;
            }, 300); // 300 milisegundos, ajusta según sea necesario
        });
    });

