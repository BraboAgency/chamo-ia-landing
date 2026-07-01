// Función para abrir Chamo IA en ChatGPT
// NOTA: Reemplaza 'CHATGPT_GPT_ID' con el ID real del GPT que crees en OpenAI
function abrirChamo() {
    // Trackear el clic en Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click_chamo_ia', {
            'event_category': 'engagement',
            'event_label': 'abrir_chat'
        });
    }

    // Abrir el GPT de ChatGPT
    // Reemplaza con la URL correcta del GPT
    const chamoURL = 'https://chatgpt.com/g/g-CHATGPT_GPT_ID';
    window.open(chamoURL, '_blank');
}

// Funciones para modales
function mostrarTerminos() {
    document.getElementById('modal-terminos').style.display = 'block';
    // Trackear en Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'view_terminos', {
            'event_category': 'legal',
            'event_label': 'terminos_y_condiciones'
        });
    }
}

function mostrarPrivacidad() {
    document.getElementById('modal-privacidad').style.display = 'block';
    // Trackear en Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'view_privacidad', {
            'event_category': 'legal',
            'event_label': 'politica_privacidad'
        });
    }
}

function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modales = document.querySelectorAll('.modal');
    modales.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Trackear scroll depth
let scrollTracked = false;
window.addEventListener('scroll', function() {
    if (!scrollTracked) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 50) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'value': Math.round(scrollPercent)
                });
            }
            scrollTracked = true;
        }
    }
});

// Trackear tiempo en página
let timeOnPage = 0;
setInterval(function() {
    timeOnPage += 10;
}, 10000);

window.addEventListener('beforeunload', function() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_time', {
            'event_category': 'engagement',
            'value': Math.round(timeOnPage / 1000)
        });
    }
});
