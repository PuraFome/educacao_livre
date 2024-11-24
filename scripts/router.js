function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            if (page === 'available_classes') {
                setTimeout(loadAvailableClasses, 0);
            }else if (page === 'tutor_register') {
                console.log('Carregando o script form.js');
                initializeForm();
            }
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
            document.getElementById('content').innerHTML = '<p>Erro ao carregar a página. Tente novamente mais tarde.</p>';
        });
}

function router() {
    const hash = window.location.hash || '#!/';
    const route = hash.replace('#!/', '');

    switch (route) {
        case '':
            loadPage('home');
            break;
        case 'tutor_register':
            loadPage('tutor_register');
            break;
        case 'available_classes':
            loadPage('available_classes');
            break;
        default:
            loadPage('home');
            break;
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);