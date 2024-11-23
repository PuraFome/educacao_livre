function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
}

page('/', () => loadPage('home'));
page('/tutor_register', () => loadPage('tutor_register'));
page('/available_classes', () => loadPage('available_classes'));

page();