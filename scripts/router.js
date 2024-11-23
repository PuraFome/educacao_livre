function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
            document.getElementById('content').innerHTML = '<p>Erro ao carregar a página. Tente novamente mais tarde.</p>';
        });
}

page.base('/educacao_livre'); // Define a base para o roteamento no GitHub Pages
page('/', () => loadPage('home'));
page('/tutor_register', () => loadPage('tutor_register'));
page('/available_classes', () => loadPage('available_classes'));

page({
    hashbang: true // Usa hash-based routing
});