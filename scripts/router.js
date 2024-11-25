const loadPage = (page) => {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            if (page === 'available_classes') {
                setTimeout(loadAvailableClasses, 0);
            } else if (page === 'tutor_register') {
                initializeForm();
            }
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
            document.getElementById('content').innerHTML = '<p>Erro ao carregar a página. Tente novamente mais tarde.</p>';
        });
};

const router = () => {
    const hash = window.location.hash || '#!/';
    const route = hash.replace('#!/', '');

    const routes = {
        '': 'home',
        'tutor_register': 'tutor_register',
        'available_classes': 'available_classes'
    };

    loadPage(routes[route] || 'home');
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);