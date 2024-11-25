document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        body.classList.toggle('dark-theme', theme === 'dark-theme');
        themeToggle.textContent = theme === 'dark-theme' ? '☀️' : '🌙';
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-theme') ? '' : 'dark-theme';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});