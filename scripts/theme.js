document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica o tema salvo no local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.textContent = savedTheme === 'dark-theme' ? '☀️' : '🌙';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDarkTheme = body.classList.contains('dark-theme');
        themeToggle.textContent = isDarkTheme ? '☀️' : '🌙';
        // Salva o estado do tema no local storage
        localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : '');
    });
});